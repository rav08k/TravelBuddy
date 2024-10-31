import { useState , useEffect} from "react";
import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";
import travelPackages from "../all_utils/PackageApi";
import DefButton from "../all_utils/elements/DefButton";

function Hero() {
	const [title, setTitle] = useState("United States");
	
	useEffect(() => {
		let i = 0;
		const timeoutId = setInterval(() => {
				i = i === travelPackages.length - 1 ? 0 : i + 1;
				setTitle(travelPackages[i].title);
			}, 200);
		return () => clearTimeout(timeoutId);
	  }, []);
	  
	return (
		<Section className="hero_section" id="Hero">
			<Container>
				<h1 className="hero_heading">
					Welcome to <span>Travel Budddy</span>
				</h1>
				<h1 className="hero_big_text">
					Visit <span id="hero_big_text">{title}</span>
				</h1>
				<a href="#Book_Now">
					<DefButton extraClass= "hero_btn">Book Now</DefButton>
				</a>
			</Container>
		</Section>
	);
}

export default Hero;
