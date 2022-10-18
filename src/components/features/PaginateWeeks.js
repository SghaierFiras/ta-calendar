import React, { useContext } from "react";
import WeekdayHelper from "../calendar/WeekdayHelper";
import GlobalContext from "../../context/GlobalContext";

function PaginateWeeks() {
	let { daysPerView, currentWeekIndex } = useContext(GlobalContext);

	let lastDayInWeekIndex = daysPerView * currentWeekIndex;
	let nextDayInWeekIndex = lastDayInWeekIndex - daysPerView;
	let currentDays = WeekdayHelper().slice(
		nextDayInWeekIndex,
		lastDayInWeekIndex
	);

	return currentDays;
}

export default PaginateWeeks;
