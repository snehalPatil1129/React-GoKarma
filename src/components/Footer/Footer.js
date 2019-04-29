/**
 * Footer
 */
import React from 'react';
import Button from 'material-ui/Button';
import { Link } from 'react-router-dom';


// app config
import AppConfig from '../../constants/AppConfig';

const Footer = () => (
	<div className="rct-footer d-flex justify-content-between align-items-center">
		<ul className="list-inline footer-menus mb-0">
			<li className="list-inline-item">
				<Button component={Link} to="/app/dashboard">Getting Started</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/about-us">About Us</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/pages/faq">faq(s)</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/terms-condition">terms & Conditions</Button>
			</li>
			<li className="list-inline-item">
				<Button component={Link} to="/app/pages/feedback">Feedback</Button>
			</li>
		</ul>
		<h5 className="mb-0">{AppConfig.copyRightText}</h5>
	</div>
);

export default Footer;
