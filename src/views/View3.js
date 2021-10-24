import React from 'react'
import imgBot from '../styles/img/pic2.png';
import image from '../styles/img/image.png';
import image2 from '../styles/img/image_2.png';
import image3 from '../styles/img/image_3.png';
import jellyBg from '../styles/img/jelly-bg.png';
import { FaArrowRight } from "react-icons/fa";

export default function View3() {
	return (
		<div className="view3-container">
			<div className="text-div">
				<h2>POV</h2>
				<h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse 
					cillum dolore eu fugiat nulla pariatur.
					</h4>
			</div>
			<div className="text-div">
				<h2>Resources</h2>
				<h4>These cases are perfectly simple and easy to distinguish. 
					In a free hour, when our power of choice is untrammelled and
					when nothing prevents our being able to do what we like best
				</h4>
			</div>
			<div className="tips-div">
				<h2>Help & Tips</h2>
			<img src={jellyBg} className="jelly-bg" alt="img"/>
				<div class="tips-cards">
					<div class="card bg-dark text-white card-tip ">
						<img src={image} class="card-img" alt="..."/>
						<div class="card-img-overlay">
							<div className="tip-text">
								<h5 class="card-text">Start quickly with simple stops</h5>
								<FaArrowRight/>
							</div>
						</div>
					</div>
					<div class="card bg-dark text-white card-tip ">
						<img src={image2} class="card-img" alt="..."/>
						<div class="card-img-overlay">
							<div className="tip-text">
								<h5 class="card-text">Run smoothly at vero eos et accusamus</h5>
								<FaArrowRight/>
							</div>
						</div>
					</div>
					<div class="card bg-dark text-white card-tip ">
						<img src={image3} class="card-img" alt="..."/>
						<div class="card-img-overlay">
							<div className="tip-text">
								<h5 class="card-text">Denounce with righteous indignation</h5>
								<FaArrowRight/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-div last">
				<h2>You're all set.</h2>
				<h4>The wise man therefore always holds in these matters to this principle of selection.</h4>
			</div>
			<img src={imgBot} className="bottom-img" alt="img"/>
		</div>
	)
}