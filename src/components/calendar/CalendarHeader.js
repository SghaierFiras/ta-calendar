import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import logo from "./TxLogo.png";
import GlobalContext from "../../context/GlobalContext";

function CalendarHeader(props) {
	let { setShowPrevWeek, setShowNextWeek } = useContext(GlobalContext);
	const showPrev = () => {};
	const showNext = () => setShowNextWeek(true);

	return (
		<div className={styles.calendarHeader}>
			<div className={styles.logo}>
				<div className={styles.flex} href=''>
					<img src={logo} alt='' />
					<span>TakiAcademy Calendar</span>
				</div>
			</div>
			<div className={styles.sousHeader}>
				<button className={styles.button} onClick={showPrev}>
					Previous Week
				</button>
				<h1>THIS WEEKS EVENTS</h1>
				<button className={styles.button} onClick={showNext}>
					Next Week
				</button>
			</div>
		</div>
	);
}

export default CalendarHeader;
