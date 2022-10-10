import React from "react";

function TimeIndexHelper(inputDate, hourIndex) {
	const [year, month, day, date, hour, minute] = [
		inputDate.getFullYear(),
		inputDate.getMonth(),
		inputDate.getDay(),
		inputDate.getDate(),
		inputDate.getHours(),
		inputDate.getMinutes(),
	];
	const newDate =
		year +
		"-" +
		month.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		}) +
		"-" +
		date +
		"T" +
		hourIndex +
		":00";
	// console.log(newDate);
	return newDate;
}

export default TimeIndexHelper;
