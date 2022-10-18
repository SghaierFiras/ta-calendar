import React, { useContext } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";

function HourBlock(props) {
	let { currentTime } = useContext(GlobalContext);

	const showEventHandler = (e) => {
		e.preventDefault();
		currentTime = props.time;
		console.log("HourBlock", props.time, currentTime);
	};
	return (
		// <div className={styles.dayBlock}>
		<div className={styles.hourBlock} onClick={showEventHandler}></div>
		// </div>
	);
}

export default HourBlock;
