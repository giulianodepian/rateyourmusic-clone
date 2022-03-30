import { Outlet, Link } from "react-router-dom";
import rymlogo from "./../static/images/sonemic-512.png";
import React from 'react';
import './../static/styles/Layout.css';

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
			  </div>

			  <Outlet />
			</>
		)
	}
}

export default Layout