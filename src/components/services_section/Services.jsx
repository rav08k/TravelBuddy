import React from "react";
import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";

function Services() {
	return (
		<Section className="services-section" id="Services">
			<Container>
				<h1 className="title">Our Services</h1>
				<h3 className="subtitle">We treat our Buddies as family!</h3>
				<div className="service-cards">
					<div className="service-card">
						<i className="fa fa-hotel" />
						<h3>Affordable Hotels</h3>
						<p>Find budget-friendly accommodations to suit your needs.</p>
					</div>
					<div className="service-card">
						<i className="fa fa-cutlery" />
						<h3>Food &amp; Drinks</h3>
						<p>Discover local cuisine and enjoy delicious meals.</p>
					</div>
					<div className="service-card">
						<i className="fa fa-shield" />
						<h3>Safety Guide</h3>
						<p>Get tips on staying safe while traveling.</p>
					</div>
					<div className="service-card">
						<i className="fa fa-suitcase" />
						<h3>Luggage Assistance</h3>
						<p>Let us handle your baggage, so you can focus on exploring.</p>
					</div>
					<div className="service-card">
						<i className="fa fa-map" />
						<h3>Personalized Itinerary</h3>
						<p>Create a custom travel plan tailored to your interests.</p>
					</div>
					<div className="service-card">
						<i className="fa fa-language" />
						<h3>Language Translation</h3>
						<p>Communicate effectively with locals and fellow travelers.</p>
					</div>
				</div>
			</Container>
		</Section>
	);
}

export default Services;
