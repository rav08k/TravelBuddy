import { useState } from "react";
import { Controller, Autoplay, Navigation, Pagination } from "swiper/modules";

import Section from "../all_utils/elements/Section";
import Container from "../all_utils/elements/Container";
import Slider from "./Slider";

function Gallery() {
	const [mainSwiper,setMainSwiper ]= useState(null);
    // const [navSwiper, setNavSwiper ]= useState(null);

	let mainSliderOptions = {
		modules:[Controller, Autoplay,Navigation,Pagination],
		onSwiper:(s)=>{setMainSwiper(s)},
		speed: 1000,
		spaceBetween: 100,
		slidesPerView: 1,
		centeredSlides: true,
		slidesPerGroup:1,
		allowTouchMove :true,
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
				allowTouchMove:false,
				autoplay: {
					enabled: false,
				},
				pagination: {
					enabled: false,
				},
			},
		},
	}
	let navSliderOptions = {
		modules:[Controller, Autoplay,Navigation],
		speed: 1000,
		spaceBetween: 30,
		slidesPerView: "auto",
		centeredSlides: true,
		slidesPerGroup:1,
		slideToClickedSlide: true,
		autoplay: {
			delay: 1500,
			pauseOnMouseEnter: true,
		},
		navigation: {
			nextEl: ".gl_nav .swiper-button-next",
			prevEl: ".gl_nav .swiper-button-prev",
		},
		controller:{control:mainSwiper}
		
	}

	return (
		<Section className="gallery" id="gallery">
			<Container>
				<h1 className="title">Gallery</h1>
				<h3 className="subtitle">
					Here are some glimpses experienced by our Buddies
				</h3>

				<Slider className="gl_wrap" {...mainSliderOptions} >
				<div className="swiper-pagination"></div>
				</Slider>
				<Slider className="gl_nav" {...navSliderOptions} >
				<div className="swiper-button-prev"><img src={require("../../assets/icons/prev.png")} alt=""/></div>
				<div className="swiper-button-next"><img src={require("../../assets/icons/next.png")} alt=""/></div>
				</Slider>

			</Container>
		</Section>
	);
}

export default Gallery;
