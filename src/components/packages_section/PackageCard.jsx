import { useState } from "react";
import RatingStars from "./RatingStars";
import DefButton from "../all_utils/elements/DefButton";

function PackageCard(props) {
	let el = props.ele;
	let rating = el.ratings;

	let [ratings, setRatings] = useState([]);
	const totalStars = 5;

	function ratingHandler() {
		const fullStars = Math.floor(rating);
		const hasHalfQuarterStar = rating % 1 > 0.5;
		const hasHalfStar = rating % 1 === 0.5;
		const hasQuarterStar = rating % 1 < 0.5 && rating % 1 > 0;
		const starArr = [];

		for (let i = 0; i < fullStars; i++) {
			starArr.push("full");
		}

		if (hasHalfQuarterStar) {
			starArr.push("half_quarter");
		} else if (hasHalfStar) {
			starArr.push("half");
		} else if (hasQuarterStar) {
			starArr.push("quarter");
		}

		// Create empty stars
		const emptyStars =
			totalStars -
			fullStars -
			(hasHalfStar ? 1 : 0) -
			(hasQuarterStar ? 1 : 0) -
			(hasHalfQuarterStar ? 1 : 0);
		for (let i = 0; i < emptyStars; i++) {
			starArr.push("");
		}
		setRatings(starArr);
	}

	return (
		<div className="pkg_box" id={el.title} onLoad={ratingHandler}>
			<img src={el.image} alt="" />
			<h3>{el.title}</h3>
			<p className="desc">{el.description}</p>
			<p className="price">
				Price: {el.price}* <span className="conditions">for 2 person</span>
			</p>
			<p className="ratings">
				User Ratings: {el.ratings}
				<span className="star-rating"></span>
				{ratings.map((e,i) => (
					<RatingStars extraClass={e} key={i}/>
				))}
			</p>
			<DefButton extraClass="">Book Now</DefButton>
		</div>
	);
}

export default PackageCard;
