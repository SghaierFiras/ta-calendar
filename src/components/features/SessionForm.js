import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./featuresStyles.module.css";
import GlobalContext from "../../context/GlobalContext";

function SessionForm(props) {
	const { currentTime } = useContext(GlobalContext);

	const [events, setEvents] = useState([]);
	const titleRef = useRef();
	const instructorRef = useRef();
	const timeRef = useRef();
	const subjectRef = useRef();
	const levelRef = useRef();

	useEffect(() => {
		fetch("https://calendar-ta-default-rtdb.firebaseio.com/events.json")
			.then((res) => res.json())
			.then((data) => {
				setEvents(data);
			});
	}, []);

	const addEventHandler = (e) => {
		e.preventDefault();
		const addedEvent = {
			title: titleRef.current.value,
			instructor: instructorRef.current.value,
			time: timeRef.current.value,
			level: levelRef.current.value,
			subject: subjectRef.current.value,
		};
		fetch("https://calendar-ta-default-rtdb.firebaseio.com/events.json", {
			method: "POST",
			body: JSON.stringify(addedEvent),
			headers: { "Content-Type": "application/json" },
		});
	};
	console.log("sessionForm", currentTime);
	return (
		<div className={styles.card}>
			<form className={styles.form} onSubmit={addEventHandler}>
				<div>
					<label htmlFor='sessionTitle'>Session Title: </label>
					<input ref={titleRef} type='text' name='sessionTitle' />
				</div>
				<div>
					<label htmlFor='instructor'>Instructor Name: </label>
					<input ref={instructorRef} type='text' name='instructor' id='' />
				</div>
				<div>
					<label htmlFor='time'>Session Time: </label>
					<input
						ref={timeRef}
						type='datetime-local'
						name='time'
						defaultValue={currentTime}
					/>
				</div>
				<div>
					<label htmlFor='subject'>Subject: </label>
					<input ref={subjectRef} list='subjects' />
					<datalist id='subjects'>
						<option value='Maths'></option>
						<option value='Physics'></option>
						<option value='SVT'></option>
						<option value='English'></option>
						<option value='Arabic'></option>
						<option value='French'></option>
					</datalist>
				</div>
				<div>
					<label htmlFor='subject'>Level: </label>
					<input ref={levelRef} list='levels' />
					<datalist id='levels'>
						<option value='Hard'></option>
						<option value='Easy'></option>
						<option value='Medium'></option>
					</datalist>
				</div>
				<div>
					<button type='submit'>Plan Session</button>
					<button type='reset'>Reset Editing</button>
					<span className={styles.closeModal} onClick={props.closeModal}>
						X
					</span>
				</div>
			</form>
		</div>
	);
}

export default SessionForm;
