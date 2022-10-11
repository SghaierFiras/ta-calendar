import React from "react";

const GlobalContext = React.createContext({
	today: new Date(),
	weekday: "",
	currentTime: "",

	days: [
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
		"Sunday",
	],
});

export default GlobalContext;
