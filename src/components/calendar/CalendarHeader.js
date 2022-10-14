import React from "react";
import styles from "./style.module.css";
import logo from "./TxLogo.png";

function CalendarHeader(props) {
	return (
		<div className={styles.calendarHeader}>
			<div className={styles.logo}>
				<div className={styles.flex} href=''>
					<img src={logo} alt='' />
					<span>TakiAcademy Calendar</span>
				</div>
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
