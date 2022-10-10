import React, { useState } from "react";

function EventsAPI() {
	const [events, setEvents] = useState([]);

	const fetchEvents = () => {
		fetch("https://calendar-ta-default-rtdb.firebaseio.com/events.json")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data);
			});
	};
	return fetchEvents;
}

export default EventsAPI;
