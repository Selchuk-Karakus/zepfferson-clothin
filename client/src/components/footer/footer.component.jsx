import React from "react";
import { FooterMenuContainer } from "./footer.styles";

const Footer = () => (
  <FooterMenuContainer>
    <section>Zepfferson Clothin</section>
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          Company<span>logo</span>
        </h3>
        <p className="footer-links">
          <button className="link-1">
            Home
          </button>
          <button>Blog</button>
          <button>Pricing</button>
          <button>About</button>
          <button>Faq</button>
          <button>Contact</button>
        </p>
        <p className="footer-company-name">Selchuk Karakus © 2020</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>777 S. Karakus Ave</span> Heaven Beach, Leytonstone
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+44.555.555.5555</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
          euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <button>
            <i className="fa fa-facebook"></i>fB
          </button>
          <button>
            <i className="fa fa-twitter"></i>Tel
          </button>
          <button>
            <i className="fa fa-linkedin"></i>Txt
          </button>
          <button>
            <i className="fa fa-github"></i>Z
          </button>
        </div>
      </div>
    </footer>
  </FooterMenuContainer>
);

export default Footer;
