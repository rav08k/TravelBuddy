import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider(props) {
	return (
		<Swiper className={props.className} {...props}>
			<div class="swiper-wrapper">
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_1.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_2.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_3.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_4.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_5.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_6.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_7.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_8.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_9.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_10.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_11.jpg")}
						alt=""
					/>
				</SwiperSlide>
				<SwiperSlide>
					<img
						className="gl_img"
						src={require("../../assets/gl_imgs/gl_13.jpg")}
						alt=""
					/>
				</SwiperSlide>
			</div>
			{props.children}
		</Swiper>
	);
}

export default Slider;
