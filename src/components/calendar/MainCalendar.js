import React, { useEffect, useState, useContext, Fragment } from "react";

import CalendarHeader from "./CalendarHeader";
import HourBlock from "./HourBlock";
import SessionModal from "../features/SessionModal";
import GlobalContext from "../../context/GlobalContext";
import TimeIndexHelper from "./TimeIndexHelper";
import styles from "./style.module.css";

//date-fns import
import formatISO from "date-fns/formatISO";
import addHours from "date-fns/addHours";
import addDays from "date-fns/addDays";
import intlFormat from "date-fns/intlFormat";
import getDate from "date-fns/getDate";

function MainCalendar() {
	const { hours, setHours } = useContext(GlobalContext);
	const { days, setDays } = useContext(GlobalContext);
	const { months, setMonths } = useContext(GlobalContext);

	let currentTime = useContext(GlobalContext);

	let today = useContext(GlobalContext);
	let weekday = useContext(GlobalContext);
	today = today.today;
	// let newDate;

	weekday = days[today.getDay() - 1];
	let [year, month, day, initDate, hour] = [
		today.getFullYear(),
		today.toLocaleString("default", { month: "long" }),
		today.getDay(),
		today.getDate(),
		today.getHours(),
	];
	let [date, setDate] = useState(initDate);
	// let todayStringified = intlFormat(
	// 	today,
	// 	{
	// 		year: "numeric",
	// 		month: "long",
	// 		day: "2-digit",
	// 	},
	// 	{ locale: "fr" }
	// );

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

	const setDayBlock = () => {
		const dayBlock = [];

		for (let index = 0; index < 7; index++) {
			dayBlock.push({
				id: index,

				name: "",
			});
		}

		return dayBlock;
	};

	// const addDays = function(date, days) {
	// 	date.setDate(date.getDate() + days);
	// 	return date;
	// };

	// let newDate = new Date();

	// console.log("MainCalendar ", todayStringified);
	let newDate;
	return (
		<Fragment>
			{showModal && (
				<div>
					<div
						onClick={toggleEventModalHandler}
						className={styles.backdrop}
					></div>
					<div>
						<SessionModal></SessionModal>
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
						newDate = addDays(today, 1);
						let todayStringified = formatISO(newDate, {
							format: "extended",
							representation: "date",
						});
						return (
							<div
								className={styles.dayBlock}
								onClick={toggleEventModalHandler}
								key={dayIdx}
								day
							>
								<div className={styles.dayName}>{day}</div>
								{setTimeBlock().map((hour, hrIdx) => {
									return (
										<HourBlock
											onClick={toggleEventModalHandler}
											key={hrIdx}
											className={styles.hourBlock}
											modalIsShown
											hourIndex={hour.name}
											date={todayStringified}
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
