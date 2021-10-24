import React from 'react';
import imgBot from '../styles/img/pic.png';
import Slider from "react-slick";
import { Card, Container } from 'react-bootstrap';
import CarouselCheck from './Carousel';
export default function View2() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		slidesToShow: 2,
		speed: 500,
		centerPadding: "70px",
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
	};
	return (
		<div className="view2-container">
			<div className="view2-image">
				<img src={imgBot} alt="img-bot"/>
			</div>
			<div className="view2-quote">
			<h3>
				<strong style={{color: "#0B24FB"}}>Deffinition; </strong>
				a practice or exercise to test or improve one's fitness
				for athletic competition, ability, or performance to exhaust 
				(something, such as a mine) by working to devise, arrange, or 
				achieve by resolving difficulties.
				</h3>
				<h3>
					Merriam-Webster.com Dictionary.
				</h3>
				<h3 style={{"color":"#fff"}}>-weekend team</h3>
			</div>			
			<div className="testimonial-div">
				<div class="circle-bg"></div>
				<CarouselCheck/>
				</div>
		</div>
	)
}