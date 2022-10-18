import React from "react";
import "./App.css";
import MainCalendar from "./components/calendar/MainCalendar";
import styles from "./components/calendar/style.module.css";
import GlobalContext from "./context/GlobalContext";
function App() {
	return (
		<div className={styles.app}>
			<MainCalendar></MainCalendar>
		</div>
	);
}

export default App;
