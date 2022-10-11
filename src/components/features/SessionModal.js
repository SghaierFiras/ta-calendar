import React, { useContext } from "react";
import SessionForm from "./SessionForm";
import styles from "./featuresStyles.module.css";
import GlobalContext from "../../context/GlobalContext";
function SessionModal(props) {
	const { currentTime } = useContext(GlobalContext);
	return (
		<div className={styles.modal}>
			<SessionForm closeModal={props.closeModal} />
		</div>
	);
}

export default SessionModal;
