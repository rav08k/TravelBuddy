import React from "react";
import DefButton from "../all_utils/elements/DefButton";
import { useState } from "react";
import travelPackages from "../all_utils/PackageApi";

function BookingForm(props) {
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0");
	const yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;
	const [startMinDate, setStartMinDate] = useState(today);
	const [endMinDate, setEndMinDate] = useState(today);

	function startDateChangeHandler(event) {
		const nextDay = new Date(event.target.value);
		nextDay.setDate(nextDay.getDate() + 1);
		setEndMinDate(nextDay.toISOString().split("T")[0]);
	}

	const [selecSize, setSelecSize] = useState(5);

	function selectionHandler(event) {
		setSelecSize(1);
		if (event.target[0].value === "") {
			event.target.remove(0);
		}
	}

	function userFormSubmit(e) {
    e.preventDefault();
    let userStatus = props.globalState.isUserLoggedIn;
		if (!userStatus) {
			return props.updateGlobalState({
        isLoginBtnClicked : true
      })
		}
		const formData = new FormData(e.target);
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}
    props.updateGlobalState({
      alertBoxMsg: {
        title: "!!Hurray!!",
        subTitle: "Your booking is successful!",
        img: "check.png",
      },
    });
		e.target.reset();
	}

	return (
		<div className="fs_form_wrap">
			<form action="" id="bookingForm" onSubmit={userFormSubmit}>
				<span>
					<label htmlFor="dest">Where To:</label>
					<select
						name="dest"
						id="dest"
						required
						size={selecSize}
						onFocus={(e) => {
							e.target.addEventListener("change", selectionHandler);
						}}
					>
						<option value="" disabled>
							select place
						</option>
						{travelPackages.map((e) => (
							<option value={e.title} key={"selec_" + e.id}>
								{e.title}
							</option>
						))}
					</select>
				</span>
				<span>
					<label htmlFor="no_of_people">How Many Person:</label>
					<input
						type="number"
						name="no_of_people"
						id="no_of_people"
						required
					/>
				</span>
				<span>
					<label htmlFor="start_date">Start Date:</label>
					<input
						type="date"
						name="start_date"
						id="start_date"
						required
						min={startMinDate}
						onChange={startDateChangeHandler}
					/>
				</span>
				<span>
					<label htmlFor="end_date">End Date:</label>
					<input
						type="date"
						name="end_date"
						id="end_date"
						required
						min={endMinDate}
					/>
				</span>
				<span>
					<label htmlFor="desc">Description:</label>
					<textarea
						name="desc"
						id="desc"
						minLength={50}
						maxLength={500}
						required
						defaultValue={""}
					/>
				</span>
				<DefButton type="submit" extraClass="" id="submit">
					Book Now
				</DefButton>
			</form>
		</div>
	);
}

export default BookingForm;
