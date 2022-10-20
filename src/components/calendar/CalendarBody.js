import React, { useState, useContext, useEffect } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";
import HourBlock from "./HourBlock";
import SessionModal from "../features/SessionForm";
import DaysMatrixHelper from "./DaysMatrixHelper";

import { addDays, subDays } from "date-fns";

function CalendarBody() {
	let {
		timezone,
		showModal,
		setShowModal,
		showNextWeek,
		showPrevWeek,
	} = useContext(GlobalContext);

	const closeModal = () => {
		setShowModal(false);
	};

	let days = DaysMatrixHelper(timezone);

	return (
		<>
			{showModal && (
				<div>
					<div onClick={closeModal} className={styles.backdrop}></div>
					<div>
						<SessionModal closeModal={closeModal} />
					</div>
				</div>
			)}
			<div className={styles.mainCalendar}>
				<div className={styles.timeline}>
					<div className={styles.hourHeader}>TIME</div>
					{timezone.map((hour) => (
						<div className={styles.hour}>{hour}</div>
					))}
				</div>
				<div className={styles.calendarBody}>
					{days.map((day, i) => {
						return (
							<>
								<div className={styles.dayBlock}>
									<div className={styles.dayName}>
										{day.day + "\n" + day.date}
									</div>
									{day.hour.map((hour, j) => (
										<HourBlock time={day.date + "T" + hour} />
									))}
								</div>
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default CalendarBody;
