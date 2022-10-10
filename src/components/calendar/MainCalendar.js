import React, { useEffect, useState, useContext, Fragment } from "react";

import CalendarHeader from "./CalendarHeader";
import HourBlock from "./HourBlock";
import SessionModal from "../features/SessionModal";
import GlobalContext from "../../context/GlobalContext";
import styles from "./style.module.css";

//date-fns import
import formatISO from "date-fns/formatISO";
import addHours from "date-fns/addHours";
import addDays from "date-fns/addDays";

function MainCalendar() {
	const { hours, setHours } = useContext(GlobalContext);
	const { days, setDays } = useContext(GlobalContext);
	const { months, setMonths } = useContext(GlobalContext);

	let today = useContext(GlobalContext);
	let weekday = useContext(GlobalContext);
	today = today.today;

	weekday = days[today.getDay() - 1];
	let [year, month, day, initDate, hour] = [
		today.getFullYear(),
		today.toLocaleString("default", { month: "long" }),
		today.getDay(),
		today.getDate(),
		today.getHours(),
	];
	let [date, setDate] = useState(initDate);
	let todayStringified = formatISO(today, {
		format: "extended",
		representation: "date",
	});

	const [events, setEvents] = useState([]);
	const [showModal, setShowModal] = useState(false);
	useEffect(() => {
		fetch("https://calendar-ta-default-rtdb.firebaseio.com/events.json")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data);
			});
	}, []);

	const closeModal = () => {
		return setShowModal(false);
	};

	const toggleEventModalHandler = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
	};
	const showNextWeek = () => {
		console.log(todayStringified);
		return setDate(date + 7);
	};
	const showPrevWeek = () => {
		console.log(todayStringified);
		return setDate(date - 7);
	};
	const setTimeBlock = (day) => {
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
						<SessionModal closeModal={closeModal}></SessionModal>
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
					{days.map((day, dayIndex) => (
						<div
							className={styles.dayBlock}
							onClick={toggleEventModalHandler}
							key={dayIndex}
							day
						>
							<div className={styles.dayName}>{day}</div>
							{setTimeBlock().map((hour, i) => (
								<HourBlock
									key={i}
									className={styles.hourBlock}
									modalIsShown
									hourIndex={hour.name}
								/>
							))}
						</div>
					))}
				</div>
			</div>
		</Fragment>
	);
}

export default MainCalendar;
