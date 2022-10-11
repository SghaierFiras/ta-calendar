import React, { useEffect, useState, useContext, Fragment } from "react";

import CalendarHeader from "./CalendarHeader";
import HourBlock from "./HourBlock";
import SessionModal from "../features/SessionModal";
import GlobalContext from "../../context/GlobalContext";
import styles from "./style.module.css";

//date-fns import
import { addDays, addHours, intlFormat, formatISO, getDate } from "date-fns";

function MainCalendar() {
	let { currentTime, today, weekday, days } = useContext(GlobalContext);
	let newDate = today;
	weekday = days[today.getDay() - 1];
	let [year, month, day, initDate, hour] = [
		today.getFullYear(),
		today.toLocaleString("default", { month: "long" }),
		today.getDay(),
		today.getDate(),
		today.getHours(),
	];
	let [date, setDate] = useState(initDate);

	const [events, setEvents] = useState([]);
	const [showModal, setShowModal] = useState(false);
	// useEffect(() => {
	// 	fetch("https://calendar-ta-default-rtdb.firebaseio.com/events.json")
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setEvents(data);
	// 		});
	// }, []);

	const closeModal = () => {
		return setShowModal(true);
	};

	const toggleEventModalHandler = (e, hrIdx, dayIdx) => {
		e.preventDefault();
		setShowModal(!showModal);
	};
	const showNextWeek = () => {
		return setDate(date + 7);
	};
	const showPrevWeek = () => {
		return setDate(date - 7);
	};
	const setTimeBlock = () => {
		const timeBlock = [];

		for (let index = 8; index <= 22; index++) {
			timeBlock.push({
				id: index - 8,

				name: `${index < 10 ? `0${index}:00` : `${index}:00`}`,

				events: [],
			});
		}

		return timeBlock;
	};

	return (
		<Fragment>
			{showModal && (
				<div>
					<div
						onClick={toggleEventModalHandler}
						className={styles.backdrop}
					></div>
					<div>
						<SessionModal />
					</div>
				</div>
			)}

			<CalendarHeader showNextWeek={showNextWeek} showPrevWeek={showPrevWeek} />

			<div className={styles.mainCalendar}>
				<div onClick={closeModal} className={styles.timeline}>
					<div className={styles.hourHeader}>TIME</div>
					{setTimeBlock().map((hour) => (
						<div className={styles.hour}>{hour.name}</div>
					))}
				</div>
				<div className={styles.calendarBody}>
					{days.map((day, dayIdx) => {
						newDate = addDays(newDate, 1);
						let todayStringified = formatISO(newDate, {
							format: "extended",
							representation: "date",
						});
						let dayHeader = intlFormat(newDate, {
							month: "long",
							day: "numeric",
						});
						return (
							<div
								className={styles.dayBlock}
								onClick={toggleEventModalHandler}
								key={dayIdx}
								day
							>
								<div className={styles.dayName}>{day + "\n" + dayHeader}</div>
								{setTimeBlock().map((hour, hrIdx) => {
									return (
										<HourBlock
											onClick={toggleEventModalHandler}
											key={hrIdx}
											className={styles.hourBlock}
											modalIsShown
											time={
												todayStringified +
												"T" +
												`${
													hrIdx + 8 < 10
														? `0${hrIdx + 8}:00`
														: `${hrIdx + 8}:00`
												}`
											}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
			</div>
		</Fragment>
	);
}

export default MainCalendar;
