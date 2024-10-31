import React from "react";
import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";

function AboutUS() {
	return (
		<Section className="aboutUs">
			<Container>
				<h1 className="title">About Us</h1>
				<div className="about_us_wrap">
					<div className="left">
						<img src="" alt="" />
					</div>
					<div className="right">
						<h1>About TravelBuddy</h1>
						<p>
							Founded in 2020, TravelBuddy has quickly become a trusted name in
							the travel industry. Our mission is to create unforgettable travel
							experiences for our clients, ensuring every trip is tailored to
							meet their unique needs and preferences.
						</p>
						<p>
							At TravelBuddy, we believe that travel is more than just visiting
							new places; it’s about creating memories that last a lifetime. Our
							team of experienced travel consultants is passionate about
							exploring the world and sharing that passion with our clients.
						</p>
						<p>
							We offer a wide range of services, including personalized tour
							packages, adventure trips, family vacations, and corporate travel
							solutions. Whether you’re looking for a relaxing beach holiday or
							an exhilarating mountain trek, TravelBuddy has got you covered.
						</p>
						<p>
							Join us in discovering the beauty of the world, and let us take
							care of the details while you enjoy the journey!
						</p>
						<p>
							<strong>Contact Us:</strong> For inquiries, reach us at{" "}
							<a href="mailto:info@travelbuddy.com">info@travelbuddy.com</a> or
							call us at (123) 456-7890.
						</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

export default AboutUS;
