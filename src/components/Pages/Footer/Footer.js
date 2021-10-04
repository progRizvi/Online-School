import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="social-icons">
          <i className="pe-4 pointer fab fa-twitter-square"> </i>
          <i className="pe-4 pointer fab fa-facebook-square"></i>
          <i className="pe-4 pointer fab fa-linkedin"></i>
        </div>
        <p className="text-light">Copyright &copy; Rizvi Ahmed</p>
      </section>
    </footer>
  );
};

export default Footer;
