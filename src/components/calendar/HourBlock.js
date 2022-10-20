import React, { useContext } from "react";
import styles from "./style.module.css";
import GlobalContext from "../../context/GlobalContext";

function HourBlock(props) {
	let { setCurrentTime, currentTime, showModal, setShowModal } = useContext(
		GlobalContext
	);

	const showEventHandler = (e) => {
		e.preventDefault();
		setShowModal(!showModal);
		setCurrentTime(props.time);
	};
	return (
		<div
			className={styles.hourBlock}
			onClick={(e) => showEventHandler(e)}
		></div>
	);
}

export default HourBlock;
