import React from "react";
import { intlFormat, formatISO } from "date-fns";
function FormatTime(today) {
	let date = [];
	let newDate;
	let dayIndex;
	for (let i = 0; i <= 7; i++) {
		dayIndex = today.getDate() - today.getDay() + i;
		newDate = new Date(today.setDate(dayIndex));
		date.push(
			formatISO(newDate, {
				format: "extended",
				representation: "date",
			})
		);
	}
	return date;
}

export default FormatTime;
