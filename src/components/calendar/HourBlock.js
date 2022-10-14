import React, { useEffect, useState, useContext, Fragment } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";

function HourBlock(props) {
	let { currentTime, showModal } = useContext(GlobalContext);

	const showEventHandler = (e) => {
		e.preventDefault();
		showModal = true;
		currentTime = props.time;
		console.log("HourBlock",  currentTime);
	};
	return (
		// <div className={styles.dayBlock}>
		<div className={styles.hourBlock} onClick={showEventHandler}></div>
		// </div>
	);
}

export default HourBlock;
