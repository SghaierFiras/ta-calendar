import React, { useContext } from "react";
import FormatTime from "../features/FormatTime";
import GlobalContext from "../../context/GlobalContext";

function DaysMatrixHelper(timezone) {
	let today = new Date();
	let days = [];
	const date = FormatTime(today);
	days = [
		{ day: "Monday", hour: timezone, date: date[0] },
		{ day: "Tuesday", hour: timezone, date: date[1] },
		{ day: "Wednesday", hour: timezone, date: date[2] },
		{ day: "Thursday", hour: timezone, date: date[3] },
		{ day: "Friday", hour: timezone, date: date[4] },
		{ day: "Saturday", hour: timezone, date: date[5] },
		{ day: "Sunday", hour: timezone, date: date[6] },
	];
	return days;
}
export default DaysMatrixHelper;
