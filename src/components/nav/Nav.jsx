import Menu from "./Menu";
import logo from "../../assets/icons/logo.png";
import Container from "../all_utils/elements/Container";

function Nav(props) {
	return (
		<nav className="navigation">
			<Container>
				<div className="logo_wrapper">
					<a href="/"><img src={logo} alt="" /></a>
				</div>
				<Menu globalState={props.globalState} updateGlobalState={props.updateGlobalState}/>
			</Container>
		</nav>
	);
}

export default Nav;
