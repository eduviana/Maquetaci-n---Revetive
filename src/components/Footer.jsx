import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <span className="brand__title--white">Reve</span>
        <span className="brand__title--blue">Tive.</span>
      </div>

      <div className="footer__information">
        <h4 className="information">Contact Information</h4>

        <span>301 The Greenhouse, Custard Factory, London, E2 8DY.</span>

        <span>Email: example@mail.com</span>

        <span>Phone: +00 112323980</span>
      </div>

      <div className="footer__company">
        <h4 className="company">Company</h4>
        <span>Carrer</span>
        <span>Resources</span>
        <span>News & Feed</span>
      </div>

      <div className="footer__newsletter">
        <h4 className="newsletter">Newsletter</h4>
        <input type="text" placeholder="Enter your email" />
        <button className="btn btn-primary">Submit</button>
      </div>

      <hr />
    </footer>
  );
};

export default Footer;
