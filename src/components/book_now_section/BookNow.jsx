import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";
import BookingForm from "./BookingForm";
import img from "../../assets/travel.png"

function BookNow(props) {
	return (
		<Section className="form_section" id="Book_Now">
			<Container>
				<h1 className="title">Book Now</h1>
				<h3 className="subtitle">Get ready to travel with US!</h3>
				<div className="fs_bottom">
					<div className="fs_img_wrap">
						<img src={img} alt="" className="fs_img" />
					</div>
					<BookingForm globalState={props.globalState} updateGlobalState={props.updateGlobalState} />
				</div>
			</Container>
		</Section>
	);
}

export default BookNow;
