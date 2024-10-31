import { useEffect, useState } from "react";
import DefButton from "../all_utils/elements/DefButton";

function Menu(props) {
	let localState = {
		isRegisterBtnClicked: false,
		isLoginBtnClicked: false,
	};

	const pkgMenu = ["United States", "India", "France", "Germany", "Japan"];
	let [open, setOpen] = useState("");
	let [userStatus, setUserStatus] = useState(false);
	let [logoutActive, setLogoutActive] = useState(false);
	function hamburgerClickHandler() {
		if (open === "") {
			setOpen("open");
		} else {
			setOpen("");
		}
	}

	function btnClickHandler(event) {
		let target = event.target.textContent;
		localState = {
			isRegisterBtnClicked: target.toLowerCase() === "register",
			isLoginBtnClicked: target.toLowerCase() === "login",
		}
		props.updateGlobalState(localState)
		
	}
	
	function logoutHandler(e) {
		e.preventDefault();
		setLogoutActive(false);
		props.updateGlobalState({isUserLoggedIn:false})
	}

	function showLogout(e) {
		e.preventDefault();
		if (logoutActive) {
			setLogoutActive(false);
		}else{
			setLogoutActive(true);
		}
	}
	
	useEffect(() => {
		setUserStatus(props.globalState.isUserLoggedIn);
	}, [props.globalState])
	

	return (
		<div className="menu_wrapper">
			<ul className={"menu " + open} id="menu">
				<li>
					<a href="#Hero">Home</a>
				</li>
				<li>
					<a href="#Book_Now">Book</a>
				</li>
				<li className="pkg_menu_wrap" id="pkg_menu_wrap">
					<a href="#pkgs">Packages</a>
					<ul className="pkg_menu" id="pkg_menu">
						{pkgMenu.map((e) => (
							<li key={e}>
								<a href={"#" + e}>{e}</a>
							</li>
						))}
					</ul>
				</li>
				<li>
					<a href="#Services">Services</a>
				</li>
				<li>
					<a href="#gallery">Gallery</a>
				</li>
				<li id="nav_btns">
					<DefButton
						extraClass={userStatus?"hidden":"menu_btn"}
						id="loginBtn"
						onClick={btnClickHandler}
					>
						LogIn
					</DefButton>
					<DefButton
						extraClass={userStatus?"hidden":"menu_btn"}
						id="registerBtn"
						onClick={btnClickHandler}
					>
						Register
					</DefButton>
					<img src={require("../../assets/icons/user.png")} alt="" className={userStatus?"nav-image":"hidden"} onClick={showLogout} />
				</li>
				<span className={logoutActive ? "logt_wrap active" : "logt_wrap"}>
					<DefButton className="cancel_btn" onClick={logoutHandler}>Log Out</DefButton>
				</span>
			</ul>
			<div
				className={"hamburger " + open}
				id="hamburger"
				onClick={hamburgerClickHandler}
			/>
		</div>
	);
}

export default Menu;
