import React from "react";
import {
	addDays,
	formatISO,
	isMonday,
	isTuesday,
	isWednesday,
	isThursday,
	isFriday,
	isSaturday,
	isSunday,
} from "date-fns";
const GlobalContext = React.createContext({
	today: new Date(),
	weekday: "",
	dayHeader: [],
	currentTime: "",

	days: [
		{ name: "Monday", helper: isMonday },
		{ name: "Tuesday", helper: isTuesday },
		{ name: "Wednesday", helper: isWednesday },
		{ name: "Thursday", helper: isThursday },
		{ name: "Friday", helper: isFriday },
		{ name: "Saturday", helper: isSaturday },
		{ name: "Sunday", helper: isSunday },
	],
});

export default GlobalContext;
