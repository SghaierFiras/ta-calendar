import React, { Fragment, useContext } from "react";
import {
	addDays,
	formatISO,
	intlFormat,
	isMonday,
	isTuesday,
	isWednesday,
	isThursday,
	isFriday,
	isSaturday,
	isSunday,
} from "date-fns";
import GlobalContext from "../../context/GlobalContext";

function WeekdayHelper() {
	let { dayHeader, weekdays, today, days } = useContext(GlobalContext);

	// let weekdays = [];
	for (let i = 1; i <= 7; i++) {
		let dayIndex = today.getDate() - today.getDay() + i;
		let date = new Date(today.setDate(dayIndex));
		const dayName = [
			"sunday",
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
		][new Date(date).getDay()];
		let day = {
			date: intlFormat(today, {
				month: "long",
				day: "numeric",
			}),
			dayName: dayName,
		};
		weekdays.push(day);
		console.log(weekdays);
	}
	return weekdays;
}

export default WeekdayHelper;
