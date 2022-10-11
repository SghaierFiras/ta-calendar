import React, { useContext } from "react";
import { addDays, formatISO } from "date-fns";
import GlobalContext from "../../context/GlobalContext";

function TimeIndexHelper() {
	const { today, days } = useContext(GlobalContext);
	const timezones = [];
	const weekdays = [];
	let newDate = today;
	days.map((day, i) => {
		newDate = addDays(newDate, 1);
		let todayStringified = formatISO(newDate, {
			format: "extended",
			representation: "date",
		});
		for (let j = 8; j <= 10; j++) {
			timezones.push({
				// id: i * j,
				time: todayStringified + "T" + `${j < 10 ? `0${j}:00` : `${j}:00`}`,
			});
		}
	});
	return timezones;
}

export default TimeIndexHelper;
