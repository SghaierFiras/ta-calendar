import React, { useContext } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";
import TimeIndexHelper from "./TimeIndexHelper";
import { addDays } from "date-fns";

function HourBlock(props) {
	let today = useContext(GlobalContext);
	today = today.today;
	let currentTime = useContext(GlobalContext);

	const showEventHandler = (e) => {
		e.preventDefault();
		currentTime.currentTime = TimeIndexHelper(today, props.hourIndex);
	};
	return (
		// <div className={styles.dayBlock}>
		<div className={styles.hourBlock} onClick={showEventHandler}></div>
		// </div>
	);
}

export default HourBlock;
