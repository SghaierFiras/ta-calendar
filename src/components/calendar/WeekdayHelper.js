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
	let { dayHeader, weekday, today, days } = useContext(GlobalContext);
	let newDate = today;
	days.map((day) => {
		weekday =
			day.helper(today) &&
			day.name +
				" " +
				intlFormat(newDate, {
					month: "long",
					day: "numeric",
				});
		dayHeader.push(weekday);
		newDate = addDays(newDate, 1);
	});
	console.table(dayHeader);
	return dayHeader;
}

export default WeekdayHelper;
