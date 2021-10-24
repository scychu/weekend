import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function CarouselCheck() {

	const settings = {
		infinite: true,
		centerMode: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 500,
				settings: {
					centerPadding: "40px",
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}
	return (
		<div className="carousel-container">
			<h2>Testimonial</h2>
			<Container className="testi-main">
				<Container className="testi-slide">
					<Slider {...settings}>
						<div>
							<Card style={{ width: "247px", height: "140px" }}>
								<Card.Body>
									<h2 class="card-title">Blu Kicks</h2>
									<p class="card-text">Places where you can leverage tools and software to free up time to focus on growing the business.</p>
								</Card.Body>
							</Card>
						</div>
						<div>
							<Card style={{ width: "247px", height: "140px" }}>
								<Card.Body>
									<h2 class="card-title">Angelus</h2>
									<p class="card-text">All those apps took me months to get running. Now the site practically runs itself!</p>
								</Card.Body>
							</Card>
						</div>
						<div>
							<Card style={{ width: "247px", height: "140px" }}>
								<Card.Body>
									<h2 class="card-title">SoYoung</h2>
									<p class="card-text">Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction</p>
								</Card.Body>
							</Card>
						</div>
						<div>
							<Card style={{ width: "247px", height: "140px" }}>
								<Card.Body>
									<h2 class="card-title">Kelsey</h2>
									<p class="card-text">Wow what great service, I love it! Without WEEKEND, we would have gone by now. You guys rock!</p>
								</Card.Body>
							</Card>
						</div>
						</Slider>
				</Container>
				</Container>
		</div>
	)
}
