import React from "react";
import styles from "./style.module.css";

function CalendarHeader(props) {
	return (
		<div className={styles.calendarHeader}>
			<div className={styles.logo}>
				<a>
					{/* <img src='/public/TxLogo.svg' alt='TAlogo' /> */}
					<span>TakiAcademy Calendar</span>
				</a>
			</div>
			<div className={styles.sousHeader}>
				<button className={styles.button} onClick={props.showPrevWeek}>
					Previous Week
				</button>
				<h1>THIS WEEKS EVENTS</h1>
				<button className={styles.button} onClick={props.showNextWeek}>
					Next Week
				</button>
			</div>
		</div>
	);
}

export default CalendarHeader;
