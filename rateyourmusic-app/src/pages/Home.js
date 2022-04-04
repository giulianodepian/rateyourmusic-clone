import React from 'react';
import PageStats from './../components/PageStats'
import rymlogo from "./../static/images/sonemic-512.png";
import './../static/styles/Home.css';

class Home extends React.Component {
	render() {
		return (
			<div>
				<div class="desc">
					<div class="desc-logo">
						<img class="desc-logo-img" src={rymlogo} alt="Logo" />
					</div>
					<div class="desc-text">
					  <div class="desc-text-title">
						  <h1>
							  Welcome To&nbsp;
							  <span class="desc-text-title-rym">Rate Your Music</span>
							</h1>
						</div>
						<div class="desc-text-text">
						  RYM is one of the largest music databases and communities online, which you can use in endless ways to discover new music. 
						</div>
					</div>
				</div>
				<PageStats />
			</div>
		)
	}
}

export default Home
