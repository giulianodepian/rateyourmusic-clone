import { Outlet, Link } from "react-router-dom";
import rymlogo from "./../static/images/sonemic-512.png";
import React from 'react';
import './../static/styles/Layout.css';
import Button from 'react-bootstrap/Button';

class Layout extends React.Component {
	render() {
		return (
			<>
			  <div class="rym-menu">
			    <div class="rym-logo">
			      <Link to="/">
			        <img class="rym-logo-img" src={rymlogo} alt="Logo" />
			      </Link>
			    </div>
			    <div class="rym-menu-separator1" />
			    <div class="menu-links">
			      <Link to="/new-music">
			        new music
			      </Link>
			    </div>
			    <div class="menu-links">
			      <Link to="/genres">
			        genres
			      </Link>
			    </div>
			    <div class="menu-links">
			      <Link to="/charts">
			        charts
			      </Link>
			    </div>
			    <div class="rym-menu-separator1" />
			  </div>

			  <Outlet />
			</>
		)
	}
}

export default Layout