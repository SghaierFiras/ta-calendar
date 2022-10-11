import React, { useContext } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";
import TimeIndexHelper from "./TimeIndexHelper";
import { addDays, formatISO } from "date-fns";

function HourBlock(props) {
	let today = useContext(GlobalContext);
	today = today.today;
	let currentTime = useContext(GlobalContext);
	let showModal = useContext(GlobalContext);

	const showEventHandler = (e) => {
		e.preventDefault();
		showModal = true;
		// let newDate = addDays(props.date, 1);
		// let todayStringified = formatISO(newDate, {
		// 	format: "extended",
		// 	representation: "date",
		// });
		currentTime.currentTime = props.date + "T" + props.hourIndex + ":00";
		console.log(currentTime.currentTime);
	};
	return (
		// <div className={styles.dayBlock}>
		<div className={styles.hourBlock} onClick={showEventHandler}></div>
		// </div>
	);
}

export default HourBlock;
