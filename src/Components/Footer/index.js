import React from "react";
import { Container } from "react-bootstrap";
import './footer.css';

const Footer = () => {
	return (
		<div className="footer py-5">
			<Container>
				<div className="footer-menu py-5" align="center">
					<a href="/" className="footer-link mr-sm-3 ml-sm-3">
						Home
          </a>
					<a href="/about" className="footer-link mr-sm-3 ml-sm-3">
						About Us
          </a>
					<a href="/about" className="footer-link mr-sm-3 ml-sm-3">
						Membership
          </a>
					<a href="/contact" className="footer-link mr-sm-3 ml-sm-3">
						Contact Us
          </a>
					<a href="/gallery" className="footer-link mr-sm-3 ml-sm-3">
						Gallery
          </a>
					<a
						href="https://twitter.com/LFC"
						target="_blank"
						rel="noopener noreferrer"
						className="footer-link mr-sm-3 ml-sm-3"
					>
						#YNWA
          </a>
				</div>
				<div className="footer-social" align="center">
					<a
						href="https://web.facebook.com/groups/ugkop.lfc/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="images/facebook-logo.png"
							alt="facebook logo"
							className="social-media-icon mr-sm-1 ml-sm-1"
							width={35}
						/>
					</a>
					<a
						href="https://twitter.com/ug_kop"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="images/twitter-logo.png"
							alt="twitter logo"
							className="social-media-icon mr-sm-1 ml-sm-1"
							width={37}
						/>
					</a>
					<a
						href="https://www.instagram.com/ug_kop/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="images/instagram-logo.png"
							alt="instagram logo"
							className="social-media-icon mr-sm-1 ml-sm-1"
							width={38}
						/>
					</a>
				</div>
			</Container>
		</div>
	);
};

export default Footer;