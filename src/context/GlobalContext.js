import React from "react";
const GlobalContext = React.createContext({
	today: new Date(),
	weekdays: [],
	currentTime: "",
});

export default GlobalContext;
