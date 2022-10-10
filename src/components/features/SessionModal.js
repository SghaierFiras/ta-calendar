import React from "react";
import SessionForm from "./SessionForm";
import styles from "./featuresStyles.module.css";

function SessionModal(props) {
	return (
		<div className={styles.modal}>
			<SessionForm closeModal={props.closeModal}></SessionForm>
		</div>
	);
}

export default SessionModal;
