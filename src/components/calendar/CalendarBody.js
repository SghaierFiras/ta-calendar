import React, { useState, useContext, Fragment, useEffect } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";
import HourBlock from "./HourBlock";
import SessionModal from "../features/SessionModal";
import WeekdayHelper from "./WeekdayHelper";
import PaginateWeeks from "../features/PaginateWeeks";

import { addDays, formatISO } from "date-fns";
function CalendarBody() {
	let { today } = useContext(GlobalContext);

	let newDate = today;

	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		return setShowModal(true);
	};

	const toggleEventModalHandler = (e, hrIdx, dayIdx) => {
		e.preventDefault();
		setShowModal(!showModal);
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
	console.log(newDate);
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
			<div className={styles.mainCalendar}>
				<div onClick={closeModal} className={styles.timeline}>
					<div className={styles.hourHeader}>TIME</div>
					{setTimeBlock().map((hour) => (
						<div className={styles.hour}>{hour.name}</div>
					))}
				</div>
				<div className={styles.calendarBody}>
					{PaginateWeeks().map((day, dayIdx) => {
						newDate = addDays(newDate, 1);
						let todayStringified = formatISO(newDate, {
							format: "extended",
							representation: "date",
						});
						return (
							<div
								className={styles.dayBlock}
								onClick={toggleEventModalHandler}
								key={dayIdx}
							>
								<div className={styles.dayName}>
									{day.dayName + "\n" + day.date}
								</div>
								{setTimeBlock().map((hour, hrIdx) => {
									return (
										<HourBlock
											onClick={toggleEventModalHandler}
											key={hrIdx}
											className={styles.hourBlock}
											modalIsShown
											time={todayStringified + "T" + hour.name}
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

export default CalendarBody;
