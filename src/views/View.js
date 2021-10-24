import React from 'react'
import imgBot from '../styles/img/Big_Bitmap.png';

export default function View() {
	return (
		<div className="view-container">
			<div className="text">
				<h1>WEEKEND FROM HOME</h1>
				<h3>Stay active with a little workout.</h3>
			</div>
			<div className="viewImg">
				<img src={imgBot} alt="bitmap"/>
				<button type="button" class="btn btn-outline-secondary">Let's go</button>
			</div>
		</div>
	)
}
