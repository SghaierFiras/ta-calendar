import React, { useContext } from "react";
import { intlFormat } from "date-fns";
import GlobalContext from "../../context/GlobalContext";

function WeekdayHelper() {
	let { today, weekdays } = useContext(GlobalContext);

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
			date: intlFormat(date, {
				month: "long",
				day: "numeric",
			}),
			dayName: dayName,
		};
		weekdays.push(day);
	}

	return weekdays;
}

export default WeekdayHelper;
