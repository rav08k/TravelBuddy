// default data
$(document).ready(function () {
	IS_USER_LOGGED_IN = getDataFromLocal("isUserLoggedIN");
	USER_DETAILS = {
		name: "",
		email: "",
		password: "",
		contact: "",
	};
	// NUMBER_OF_USERS = 0;

	const travelPackages = [
		{
			image: "assets/places/india.jpg",
			title: "India",
			description:
				"Experience the rich culture, diverse landscapes, and historic sites like the Taj Mahal and Jaipur forts.",
			price: "$1500/- Only",
			ratings: 4.3,
		},

		{
			image: "assets/places/brazil.jpg",
			title: "Brazil",
			description:
				"Discover the vibrant culture of Rio de Janeiro, the Amazon rainforest, and stunning beaches in Bahia.",
			price: "$2000/- Only",
			ratings: 4.5,
		},
		{
			image: "assets/places/japan.jpg",
			title: "Japan",
			description:
				"Experience a blend of different culture, from ancient temples in Kyoto to neon lights in Tokyo.",
			price: "$3000/- Only",
			ratings: 4.9,
		},
		{
			image: "assets/places/aus.jpg",
			title: "Australia",
			description:
				"Explore the Great Barrier Reef, Sydney Opera House, and the unique wildlife in national parks.",
			price: "$3500/- Only",
			ratings: 3.8,
		},
		{
			image: "assets/places/france.jpg",
			title: "France",
			description:
				"Enjoy the romance of Paris, visit the Eiffel Tower, and indulge in world-class cuisine in Lyon.",
			price: "$2500/- Only",
			ratings: 4.8,
		},
		{
			image: "assets/places/egypt.jpg",
			title: "Egypt",
			description:
				"Marvel at the Pyramids of Giza, cruise the Nile, and explore the ancient temples of Luxor.",
			price: "$1800/- Only",
			ratings: 4.3,
		},
		{
			image: "assets/places/italy.jpg",
			title: "Italy",
			description:
				"Visit iconic cities like Rome, Venice, and Florence, and enjoy authentic Italian cuisine and art.",
			price: "$2800/- Only",
			ratings: 3.7,
		},
		{
			image: "assets/places/us.jpg",
			title: "United States",
			description:
				"From New York City’s skyline to the natural wonders of Yellowstone, explore diverse landscapes and cultures.",
			price: "$5000/- Only",
			ratings: 3.5,
		},
		{
			image: "assets/places/germany.jpg",
			title: "Germany",
			description:
				"Discover historic cities like Berlin and Munich, and enjoy world-renowned beer and festivals.",
			price: "$2300/- Only",
			ratings: 4,
		},
	];

	// nav user functions

	function changeLoginStatus() {
		if (IS_USER_LOGGED_IN) {
			$("#nav_btns button").hide();
			$("#nav_btns img").show();
		}else{
			$("#nav_btns img").hide();
			$("#nav_btns button").show();
		}
	}

	function userLogout() {
		IS_USER_LOGGED_IN = false;
		setDataToLocal("isUserLoggedIN",IS_USER_LOGGED_IN);
		changeLoginStatus();
		showAlert("Logout Successful", "Come back Soon", "assets/icons/check.png");
	}
	changeLoginStatus();
	
	$('.nav-image').click((e)=>{
		console.log("img");
		e.preventDefault();
		e.stopPropagation();
		$(".logt_wrap").addClass("active");
	})

	$('.logt_wrap .cancel_btn').click(()=>{
		$(".logt_wrap").removeClass("active");
		userLogout();
	})


	// ham burger menu handling functions

	const hamburger = document.getElementById("hamburger");
	const menu = document.getElementById("menu");

	hamburger.addEventListener("click", () => {
		menu.classList.toggle("open");
		hamburger.classList.toggle("open");
	});

	menu.childNodes.forEach((e) => {
		e.addEventListener("click", () => {
			menu.classList.toggle("open");
			hamburger.classList.toggle("open");
		});
	});

	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
	let el = document.getElementById("hero_big_text");
	let i = 0;
	setInterval(() => {
		i = i == travelPackages.length - 1 ? 0 : i + 1;
		el.innerText = travelPackages[i].title;
	}, 200);

	// Booking Form functions
	// Form dates handling

	const startDateInput = document.getElementById("start_date");
	const endDateInput = document.getElementById("end_date");
	let today = new Date();
	const dd = String(today.getDate()).padStart(2, "0");
	const mm = String(today.getMonth() + 1).padStart(2, "0");
	const yyyy = today.getFullYear();
	today = yyyy + "-" + mm + "-" + dd;
	startDateInput.setAttribute("min", today);

	startDateInput.addEventListener("change", function () {
		const startDate = new Date(startDateInput.value);
		const nextDay = new Date(startDate);
		nextDay.setDate(nextDay.getDate() + 1);
		endDateInput.setAttribute("min", nextDay.toISOString().split("T")[0]);

		if (startDateInput.value) {
			endDateInput.value = "";
			endDateInput.removeAttribute("disabled");
		}
	});

	endDateInput.addEventListener("change", function () {
		const startDate = new Date(startDateInput.value);
		const endDate = new Date(endDateInput.value);
		if (endDate <= startDate) {
			alert("End date must be greater than start date.");
			endDateInput.value = "";
		}
	});

	endDateInput.setAttribute("disabled", "true");

	// form selec option handling

	const selec = document.getElementById("dest");
	function createOptions(e) {
		let optn = document.createElement("option");
		optn.value = e.title;
		optn.textContent = e.title;
		return optn;
	}
	travelPackages.forEach((e) => {
		optnEl = createOptions(e);
		selec.appendChild(optnEl);
	});
	selec.size = 5;

	function keepSelectOpen() {
		selec.addEventListener("change", () => {
			selec.size = 1;
			if (selec[0].value == "") {
				selec.remove(0);
			}
		});
	}

	selec.addEventListener("focus", keepSelectOpen);

	// form submit and modal handling

	const modalBg = document.getElementById("alertModal");
	const modalBox = document.getElementById("modal_box");
	const closeBtn = document.getElementById("modal_close");

	$("#bookingForm").on("submit", userFormSubmit);

	function userFormSubmit(e) {
		e.preventDefault();
		if (!IS_USER_LOGGED_IN) {
			return $(loginBtn).click();
		}
		const formData = new FormData(e.target);
		for (const [key, value] of formData.entries()) {
			console.log(`${key}: ${value}`);
		}

		showAlert("!!Hurray!!", "Your booking is successful!", "assets/icons/check.png");
		e.target.reset();
	}
	closeBtn.onclick = function () {
		hideAlert();
	};

	// Packages Section Functions
	//  packages cards creation

	function createCard(package) {
		const card = document.createElement("div");
		card.classList.add("pkg_box");
		card.id = package.title;

		const img = document.createElement("img");
		img.src = package.image;
		img.alt = "";

		const title = document.createElement("h3");
		title.textContent = package.title;

		const description = document.createElement("p");
		description.classList.add("desc");
		description.textContent = package.description;

		const price = document.createElement("p");
		price.classList.add("price");
		let s = document.createElement("span");
		s.classList.add("conditions");
		s.textContent = `for 2 person`;
		price.textContent = `Price: ${package.price}*  `;
		price.appendChild(s);

		const ratings = document.createElement("p");
		ratings.classList.add("ratings");
		ratings.textContent = `User Ratings: ${package.ratings} `;
		const star = document.createElement("span");
		star.classList.add("star-rating");
		ratings.appendChild(star);

		renderRatingStars(ratings, package.ratings);

		const button = document.createElement("button");
		button.classList.add("def_btn");
		button.textContent = "Book Now";

		card.appendChild(img);
		card.appendChild(title);
		card.appendChild(description);
		card.appendChild(price);
		card.appendChild(ratings);
		card.appendChild(button);

		return card;
	}

	const cardContainer = document.getElementById("pkg_box_wrap");
	travelPackages.forEach((e) => {
		const cardElement = createCard(e);
		cardContainer.appendChild(cardElement);
	});

	// cards rating handling

	function renderRatingStars(ratingElement, rating) {
		const fullStars = Math.floor(rating);
		const hasHalfQuarterStar = rating % 1 > 0.5;
		const hasHalfStar = rating % 1 == 0.5;
		const hasQuarterStar = rating % 1 < 0.5 && rating % 1 > 0;

		for (let i = 0; i < fullStars; i++) {
			const star = document.createElement("span");
			star.classList.add("star", "full");
			star.textContent = "★";
			ratingElement.appendChild(star);
		}

		if (hasHalfQuarterStar) {
			const halfQuarterStar = document.createElement("span");
			halfQuarterStar.classList.add("star", "half_quarter");
			halfQuarterStar.textContent = "★";
			ratingElement.appendChild(halfQuarterStar);
		} else if (hasHalfStar) {
			const halfStar = document.createElement("span");
			halfStar.classList.add("star", "half");
			halfStar.textContent = "★";
			ratingElement.appendChild(halfStar);
		} else if (hasQuarterStar) {
			const quarterStar = document.createElement("span");
			quarterStar.classList.add("star", "quarter");
			quarterStar.textContent = "★";
			ratingElement.appendChild(quarterStar);
		}

		// Create empty stars
		const totalStars = 5;
		const emptyStars =
			totalStars -
			fullStars -
			(hasHalfStar ? 1 : 0) -
			(hasQuarterStar ? 1 : 0) -
			(hasHalfQuarterStar ? 1 : 0);
		for (let i = 0; i < emptyStars; i++) {
			const star = document.createElement("span");
			star.classList.add("star");
			star.textContent = "★"; // Empty star
			ratingElement.appendChild(star);
		}
	}

	// Gallery Section Functions
	// gallery slider

	const glThumbs = new Swiper(".gl_nav", {
		speed: 1000,
		spaceBetween: 30,
		slidesPerView: "auto",
		centeredSlides: true,
		slideToClickedSlide: true,
		autoplay: {
			delay: 1500,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".gl_nav .swiper-button-next",
			prevEl: ".gl_nav .swiper-button-prev",
		},
	});
	const glImages = new Swiper(".gl_wrap", {
		speed: 1000,
		spaceBetween: 100,
		slidesPerView: 1,
		centeredSlides: true,
		autoplay: {
			delay: 1500,
		},
		pagination: {
			el: ".gl_wrap .swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		breakpoints: {
			768: {
				autoplay: {
					enabled: false,
					pauseOnMouseEnter: true,
				},
				pagination: {
					enabled: false,
				},
			},
		},
	});
	glImages.controller.control = glThumbs;
	glThumbs.controller.control = glImages;

	// Login and resigter Functions

	const modal = document.getElementById("modal");
	let loginBtn = document.getElementById("loginBtn");
	let registerBtn = document.getElementById("registerBtn");
	const closeMBtn = document.querySelectorAll(".cancel_btn");
	const loginForm = document.getElementById("loginForm");
	const registerForm = document.getElementById("registerForm");
	const modalTitle = document.getElementById("modalTitle");

	// input and validation hanlders

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
				return passwordPattern.test(inp) ? true : "Invalid Password";
			case "contact":
				return mobilePattern.test(inp) ? true : "Invalid Number";
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

	function closeModalFun() {
		loginForm.reset();
		registerForm.reset();
		modal.style.display = "none";
		resetForms();
	}

	function resetForms() {
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
	// form switch handler

	function switchForms(event, name, toShow, toHide) {
		event.preventDefault();
		modal.style.display = "flex";
		modalTitle.textContent = name;
		toHide.classList.add("hidden");
		toShow.classList.remove("hidden");
	}

	// login handler

	function loginHandler(e) {
		e.preventDefault();
		let formData = new FormData(e.target);
		let userDetail = {};
		for (const [key, value] of formData.entries()) {
			userDetail[key] = value;
		}

		let hasUser = getDataFromLocal(userDetail.email);
		if (hasUser !== null) {
			USER_DETAILS = hasUser;
			if (hasUser.password === userDetail.password) {
				console.log("login successful");
				IS_USER_LOGGED_IN = true;
				setDataToLocal("isUserLoggedIN", IS_USER_LOGGED_IN);
				changeLoginStatus();
				showAlert("Lets' Go", "Login Successful", "assets/icons/check.png");
			} else {
				console.log("incorrect password");
				showAlert("Error", "Invalid Password", "assets/icons/delete.png");
			}
		} else {
			console.log("user not found, please register");
			showAlert("User Not Found", "Please Register", "assets/icons/delete.png");
			setTimeout(() => {
				registerBtn.click();
				hideAlert();
			}, 3000);
		}
	}

	// register handler

	function registerHandler(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		let userDetails = {};
		for (const [key, value] of formData.entries()) {
			userDetails[key] = value;
		}
		setDataToLocal(userDetails.email, userDetails);
		showAlert(
			"Registration Successful!!",
			"Please Login Now",
			"assets/icons/check.png"
		);
		setTimeout(() => {
			hideAlert();
		}, 3000);
	}

	// local storage functions

	function setDataToLocal(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	}

	function getDataFromLocal(key) {
		const data = localStorage.getItem(key);
		return data ? JSON.parse(data) : null;
	}

	function removeDataFromLocal(key) {
		localStorage.removeItem(key);
	}

	function clearStorage() {
		localStorage.clear();
	}

	// events attachment

	$(loginBtn).click((e) => switchForms(e, "LogIn", loginForm, registerForm));
	$(registerBtn).click((e) =>
		switchForms(e, "Register", registerForm, loginForm)
	);
	closeMBtn.forEach((el) => el.addEventListener("click", closeModalFun));

	$("body").click((event) => {
		if (event.target === modal) closeModalFun();
	});

	$("#switchToRegister").click((e) =>
		switchForms(e, "Register", registerForm, loginForm)
	);
	$("#switchToLogin").click((e) =>
		switchForms(e, "LogIn", loginForm, registerForm)
	);

	$(loginForm).keyup(debounce(formInputHandler, 500));
	$(registerForm).keyup(debounce(formInputHandler, 500));

	$(loginForm).submit((e) => loginHandler(e));
	$(registerForm).submit((e) => registerHandler(e));

	// alert modal handler

	function setAlertContent(title, subTitle, img) {
		$(modalBox).find(".alert_title").text(title);
		$(modalBox).find(".alert_subtitle").text(subTitle);
		$(modalBox).find(".alert_img").attr("src", img);
		if (img?.includes("delete")) {
			$(modalBox).find(".alert_title").addClass("danger");
			$(modalBox).find(".alert_subtitle").addClass("danger");
		} else {
			$(modalBox).find(".alert_title").removeClass("danger");
			$(modalBox).find(".alert_subtitle").removeClass("danger");
		}
	}

	async function showAlert(t, st, i) {
		await setAlertContent(t, st, i);
		closeModalFun();
		modalBg.classList.add("active");
		modalBox.classList.add("active");
	}

	function hideAlert() {
		modalBg.classList.remove("active");
		modalBox.classList.remove("active");
	}
});
