import React, { useState, createContext } from "react";
import WeekdayHelper from "../components/calendar/WeekdayHelper";

const GlobalContext = createContext({
	today: new Date(),
	currentTime: "",
	weekdays: [],
	daysPerView: 7,
	currentWeekIndex: 1,
});

export const GlobalContextProvider = (props) => {
	const today = new Date();
	const weekdays = [];
	const [currentTime, setCurrentTime] = useState("");
	const [currentWeekIndex, setCurrentWeekIndex] = useState(1);
	const daysPerView = 7;
	const showPrevWeek = (e) => {
		e.preventDefault();
		setCurrentWeekIndex(currentWeekIndex - 1);
	};
	const showNextWeek = (e) => {
		e.preventDefault();
		setCurrentWeekIndex(currentWeekIndex + 1);
	};
	return (
		<GlobalContext.Provider
			value={{
				today: today,
				weekdays: weekdays,
				currentTime: currentTime,
				daysPerView: daysPerView,
				currentWeekIndex: currentWeekIndex,
				setCurrentWeekIndex: setCurrentWeekIndex,
				showNextWeek: showNextWeek,
				showPrevWeek: showPrevWeek,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;