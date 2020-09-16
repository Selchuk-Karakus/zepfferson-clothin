import React from 'react';
import { FooterMenuContainer } from './footer.styles';

const Footer = () => (
    <FooterMenuContainer>
    <section>Zepfferson Clothin</section>
<footer class="footer-distributed">

			<div class="footer-left">

				<h3>Company<span>logo</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Selchuk Karakus © 2020</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>777 S. Karakus Ave</span> Heaven Beach, Leytonstone</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+44.555.555.5555</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p> 
                        &copy; {new Date().getFullYear()} Copyright: 
                        <a href="https://selchuk-karakus.now.sh/">Selchuk Karakus</a>
                    </p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><i class="fa fa-facebook"></i>fB</a>
					<a href="#"><i class="fa fa-twitter"></i>Tel</a>
					<a href="#"><i class="fa fa-linkedin"></i>Txt</a>
					<a href="#"><i class="fa fa-github"></i>Z</a>

				</div>

			</div>

		</footer>
    </FooterMenuContainer>
);

export default Footer;