import { useEffect, useState } from "react";
import "./App.css";
import AboutUS from "./components/about_us_section/AboutUS";
import ModalForm from "./components/all_utils/ModalForm";
import BookNow from "./components/book_now_section/BookNow";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery_section/Gallery";
import Hero from "./components/hero_section/Hero";
import Nav from "./components/nav/Nav";
import Packages from "./components/packages_section/Packages";
import Services from "./components/services_section/Services";
import ModalAlert from "./components/all_utils/ModalAlert";

const initialState = {
	isLoginBtnClicked: false,
	isRegisterBtnClicked: false,
	isUserLoggedIn: false,
	isBookingFormSubmitted: false,
	isModalAlertOpen: false,
	userDetails: {},
  alertBoxMsg : {}
};


function App() {
	const [globalState, setGlobalState] = useState(initialState);

	function globalStateHandler(updatedState) {
    console.log("updated");
    
		setGlobalState((prevGlobalState) => ({
			...prevGlobalState,
			...updatedState,
		}));
	}

	return (
		<>
			<Nav globalState={globalState} updateGlobalState={globalStateHandler} />
			<Hero />
			<BookNow
				globalState={globalState}
				updateGlobalState={globalStateHandler}
			/>
			<Packages />
			<Services />
			<Gallery />
			<AboutUS />
			<Footer />
			<ModalForm
				globalState={globalState}
				updateGlobalState={globalStateHandler}
			/>
      <ModalAlert globalState={globalState}
				updateGlobalState={globalStateHandler}
        />
		</>
	);
}

export default App;
