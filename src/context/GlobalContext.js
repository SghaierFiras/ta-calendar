import React, { useState, createContext } from "react";

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
	const timezone = [
		"08:00",
		"09:00",
		"10:00",
		"11:00",
		"12:00",
		"13:00",
		"14:00",
		"15:00",
		"16:00",
		"17:00",
		"18:00",
		"19:00",
		"20:00",
		"21:00",
		"22:00",
	];
	const [showModal, setShowModal] = useState(false);
	const [days, setDays] = useState([]);
	const [currentTime, setCurrentTime] = useState("");
	const [currentWeekIndex, setCurrentWeekIndex] = useState(1);
	const daysPerView = 7;
	const [showPrevWeek, setShowNextWeek] = useState(false);
	const [showNextWeek, setShowPrevWeek] = useState(false);
	return (
		<GlobalContext.Provider
			value={{
				showModal: showModal,
				setShowModal: setShowModal,
				today: today,
				weekdays: weekdays,
				timezone: timezone,
				days: days,
				setDays: setDays,
				currentTime: currentTime,
				setCurrentTime: setCurrentTime,
				daysPerView: daysPerView,
				currentWeekIndex: currentWeekIndex,
				setCurrentWeekIndex: setCurrentWeekIndex,
				showNextWeek: showNextWeek,
				showPrevWeek: showPrevWeek,
				setShowNextWeek: setShowNextWeek,
				setShowPrevWeek: setShowPrevWeek,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContext;
