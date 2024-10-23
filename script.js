// default data
const travelPackages = [
	{
		image: "assets/india.jpg",
		title: "India",
		description:
			"Experience the rich culture, diverse landscapes, and historic sites like the Taj Mahal and Jaipur forts.",
		price: "$1500/- Only",
		ratings: 4.3,
	},

	{
		image: "assets/brazil.jpg",
		title: "Brazil",
		description:
			"Discover the vibrant culture of Rio de Janeiro, the Amazon rainforest, and stunning beaches in Bahia.",
		price: "$2000/- Only",
		ratings: 4.5,
	},
	{
		image: "assets/japan.jpg",
		title: "Japan",
		description:
			"Experience a blend of different culture, from ancient temples in Kyoto to neon lights in Tokyo.",
		price: "$3000/- Only",
		ratings: 4.9,
	},
	{
		image: "assets/aus.jpg",
		title: "Australia",
		description:
			"Explore the Great Barrier Reef, Sydney Opera House, and the unique wildlife in national parks.",
		price: "$3500/- Only",
		ratings: 3.8,
	},
	{
		image: "assets/france.jpg",
		title: "France",
		description:
			"Enjoy the romance of Paris, visit the Eiffel Tower, and indulge in world-class cuisine in Lyon.",
		price: "$2500/- Only",
		ratings: 4.8,
	},
	{
		image: "assets/egypt.jpg",
		title: "Egypt",
		description:
			"Marvel at the Pyramids of Giza, cruise the Nile, and explore the ancient temples of Luxor.",
		price: "$1800/- Only",
		ratings: 4.3,
	},
	{
		image: "assets/italy.jpg",
		title: "Italy",
		description:
			"Visit iconic cities like Rome, Venice, and Florence, and enjoy authentic Italian cuisine and art.",
		price: "$2800/- Only",
		ratings: 3.7,
	},
	{
		image: "assets/us.jpg",
		title: "United States",
		description:
			"From New York City’s skyline to the natural wonders of Yellowstone, explore diverse landscapes and cultures.",
		price: "$5000/- Only",
		ratings: 3.5,
	},
	{
		image: "assets/germany.jpg",
		title: "Germany",
		description:
			"Discover historic cities like Berlin and Munich, and enjoy world-renowned beer and festivals.",
		price: "$2300/- Only",
		ratings: 4,
	},
];

// ham burger menu handling

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

	renderRatingStars(ratings,package.ratings)

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

function renderRatingStars(ratingElement,rating){
	
		const fullStars = Math.floor(rating);
		const hasHalfQuarterStar = rating % 1 > 0.50;
		const hasHalfStar = rating % 1 == 0.50;
		const hasQuarterStar = (rating % 1 < 0.50 && rating % 1 > 0); 
		
		for (let i = 0; i < fullStars; i++) {
			const star = document.createElement("span");
			star.classList.add("star", "full");
			star.textContent = "★";
			ratingElement.appendChild(star);
		}
		
		if(hasHalfQuarterStar){
			const halfQuarterStar = document.createElement("span");
			halfQuarterStar.classList.add("star", "half_quarter");
			halfQuarterStar.textContent = "★"; 
			ratingElement.appendChild(halfQuarterStar);
		}
		else if (hasHalfStar) {
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
	totalStars - fullStars - (hasHalfStar ? 1 : 0) - (hasQuarterStar ? 1 : 0) - (hasHalfQuarterStar ? 1 : 0);
	for (let i = 0; i < emptyStars; i++) {
		const star = document.createElement("span");
		star.classList.add("star");
		star.textContent = "★"; // Empty star
		ratingElement.appendChild(star);
	}
}

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

const modalBg = document.getElementById("successModal");
const modalBox = document.getElementById("modal_box");
const closeBtn = document.getElementById("modal_close");
function userFormSubmit(e) {
	e.preventDefault();
	const formData = new FormData(e.target);
	for (const [key, value] of formData.entries()) {
		console.log(`${key}: ${value}`);
	}

	modalBg.classList.add("active");
	modalBox.classList.add("active");
	e.target.reset();
}
closeBtn.onclick = function () {
	modalBg.classList.remove("active");
	modalBox.classList.remove("active");
};
