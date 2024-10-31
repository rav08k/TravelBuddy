import { useEffect, useState, useRef } from "react";

const initLocalState = {
	loginClass: "hidden",
	registerClass: "hidden",
	title: "",
	modalDisplay: "none",
};

function ModalForm(props) {
	const [localState, setLocalState] = useState(initLocalState);
	const loginRef = useRef(null);
	const registerRef = useRef(null);

	function setGlobalState(updatedValues) {
		props.updateGlobalState(updatedValues);
	}

	function debounce(func, delay) {
		let timeoutId;

		return function () {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				func.apply(this, arguments);
			}, delay);
		};
	}

	function isValidInp(inp, target) {
		if (!inp) {
			return "Field cannot be empty";
		}
		const passwordPattern =
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$/;
		const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
		const mobilePattern = /^\d{10}$/;
		const namePattern = /^[a-zA-Z\s]+$/;
		switch (target) {
			case "fullName":
				return namePattern.test(inp) ? true : "Invalid Name";
			case "email":
				return emailPattern.test(inp) ? true : "Invalid Email";
			case "password":
				return passwordPattern.test(inp)
					? true
					: "Invalid Password : It must contain an UpperCase, LowerCase, Symbol and Digit";
			case "contact":
				return mobilePattern.test(inp) ? true : "Invalid Number";
			default:
				break;
		}
	}

	function formInputHandler(event) {
		let inpEle = event.target;
		let errorMsgEle = inpEle.nextElementSibling;
		let inpMsg = isValidInp(inpEle.value, inpEle.name);
		if (inpMsg === true) {
			errorMsgEle.classList.remove("active");
			inpEle.classList.replace(inpEle.className, "good");
		} else {
			errorMsgEle.classList.add("active");
			errorMsgEle.textContent = inpMsg;
			inpEle.classList.replace(inpEle.className, "error");
		}
	}

	// close and reset handlers

	function resetForms() {
		let loginForm = loginRef.current,
			registerForm = registerRef.current;
		loginForm.reset();
		registerForm.reset();
		for (const child of loginForm.children || registerForm.children) {
			child.classList.replace("error", "cl");
			child.classList.replace("good", "cl");
			child.classList.remove("active");
		}
		for (const child of registerForm.children) {
			child.classList.replace("error", "cl");
			child.classList.replace("good", "cl");
			child.classList.remove("active");
		}
	}

	// login handler

	function loginHandler(e) {
		e.preventDefault();
		let formData = new FormData(e.target);
		let userDetail = {};
		for (const [key, value] of formData.entries()) {
			userDetail[key] = value;
		}

		let hasUser = props.globalState.userDetails;
		let isUserRegistered = Object.keys(hasUser).length > 0;
		if (isUserRegistered) {
			if (hasUser.password === userDetail.password) {
				console.log("login successful");
				setGlobalState({
					isUserLoggedIn: true,
					isLoginBtnClicked: false,
					isRegisterBtnClicked: false,
					alertBoxMsg: {
						title: "Lets' Go",
						subTitle: "Login Successful",
						img: "check.png",
					},
				});
			} else {
				console.log("incorrect password");
				setGlobalState({
					alertBoxMsg: {
						title: "Error",
						subTitle: "Invalid Password",
						img: "delete.png",
						class: "danger",
					},
				});
			}
		} else {
			console.log("user not found, please register");
			setGlobalState({
				alertBoxMsg: {
					title: "User Not Found",
					subTitle: "Please Register",
					img: "delete.png",
					class: "danger",
				},
			});
			setTimeout(() => {
				resetForms();
				setGlobalState({
					isLoginBtnClicked: false,
					isRegisterBtnClicked: true,
					alertBoxMsg: {},
				});
			}, 3000);
		}
	}

	// register handler

	function registerHandler(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let details = {};
		for (const [key, value] of formData.entries()) {
			details[key] = value;
		}
		setGlobalState({
			userDetails: details,
			alertBoxMsg: {
				title: "Registration Successful!!",
				subTitle: "Please Login Now",
				img: "check.png",
			},
		});
		setTimeout(() => {
			setGlobalState({
				isLoginBtnClicked: false,
				isRegisterBtnClicked: false,
				alertBoxMsg: {},
			});
		}, 3000);
	}

	function formSwitchHandler(event) {
		event.preventDefault();
		resetForms();
		let target = event.target.textContent;
		let isLogin = target === "Login";
		let isRegister = target === "Register";
		setGlobalState({
			isLoginBtnClicked: isLogin,
			isRegisterBtnClicked: isRegister,
		});
	}

	function cancelBtnHandler(event) {
		event?.preventDefault();
		resetForms();
		let isLogin = false;
		let isRegister = false;
		setGlobalState({
			isLoginBtnClicked: isLogin,
			isRegisterBtnClicked: isRegister,
		});
	}

	function getNewLocalState() {
		const globalState = props.globalState;
		return {
			loginClass: globalState.isLoginBtnClicked ? "" : "hidden",
			registerClass: globalState.isRegisterBtnClicked ? "" : "hidden",
			title: globalState.isLoginBtnClicked ? "Login" : "Register",
			modalDisplay:
				globalState.isLoginBtnClicked || globalState.isRegisterBtnClicked
					? "flex"
					: "none",
		};
	}

	function updateLocalState() {
		console.log(props.globalState);
		let newLocalState = getNewLocalState();
		setLocalState(newLocalState);
	}

	useEffect(() => {
		updateLocalState();
	}, [props.globalState]);

	return (
		<div
			id="modal"
			className="modal"
			style={{ display: localState.modalDisplay }}
		>
			<div className="login-modal-content">
				<h2 id="modalTitle">{localState.title}</h2>
				<form
					className={"form " + localState.loginClass}
					onSubmit={loginHandler}
					ref={loginRef}
				>
					<input
						type="email"
						className="cl"
						placeholder="Email"
						required=""
						name="email"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<input
						type="password"
						className="cl"
						placeholder="Password"
						required=""
						name="password"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<button type="submit" className="def_btn">
						Login
					</button>
					<button
						type="reset"
						className="cancel_btn"
						onClick={cancelBtnHandler}
					>
						Cancel
					</button>
					<p>
						Don't have an account?{" "}
						<a href="#Hero" id="switchToRegister" onClick={formSwitchHandler}>
							Register
						</a>
					</p>
				</form>
				<form
					className={"form " + localState.registerClass}
					onSubmit={registerHandler}
					ref={registerRef}
				>
					<input
						type="text"
						className="cl"
						placeholder="Full Name"
						required=""
						name="fullName"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<input
						type="email"
						className="cl"
						placeholder="Email ID"
						required=""
						name="email"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<input
						type="password"
						className="cl"
						placeholder="Password"
						required=""
						name="password"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<input
						type="tel"
						className="cl"
						placeholder="Contact"
						required=""
						name="contact"
						onKeyUp={debounce(formInputHandler, 600)}
					/>
					<p className="form_error_msg" />
					<button type="submit" className="def_btn">
						Register
					</button>
					<button
						type="reset"
						className="cancel_btn"
						onClick={cancelBtnHandler}
					>
						Cancel
					</button>
					<p>
						Already have an account?{" "}
						<a href="#Hero" id="switchToLogin" onClick={formSwitchHandler}>
							Login
						</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default ModalForm;
