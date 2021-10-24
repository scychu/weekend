import React from 'react';
import '../styles/header.scss';
import imgHeader from '../styles/img/Bitmap_logo.png';
export default function Header() {
	return (
		<div className="header-container">
			<nav class="navbar">
				<img alt="Brand" src={imgHeader}/>
				<div className="nav-text">
					<p>Good Morning</p>
					<h5>Fellas</h5>
				</div>
			</nav>
		</div>
	)
}
