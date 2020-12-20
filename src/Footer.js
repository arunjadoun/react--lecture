import React from "react";
import "./Footer.css"

const Footer = () => (
  <div className="footer">
    <div className="container">
        <div className="row">
                {/* Col 1 */}
                <div className="col">
                    <h4>ECTECH INC</h4>
                    <ul className="list-unstyled">
                        <li>Plot no 234</li>
                        <li>Bahodapur wale</li>
                        <li>Gwalior</li>
                    </ul>
                </div>
                {/* Col 2 */}
                <div className="col">
                    <h4>About Us</h4>
                    <ul className="list-unstyled">
                        <li>Welcome to Edtech</li>
                        <li>We are dedicated to give you </li>
                        <li>indepth knowledge of trading concepts</li>
                    </ul>
                </div>
                {/* Col 3 */}
                <div className="col">
                    <h4>Contact Us</h4>
                    <ul className="list-unstyled">
                        <li>Kaish Mangal</li>
                        <li>7996000000</li>
                        <li>dummy@dummy.com</li>
                    </ul>
                </div>
        </div>

    </div>
    <div className="row">
        <p className="col-sm">
            &copy;{new Date().getFullYear()} EDTECH INC | All rights reserved | Terms od service | Privacy
        </p>
    </div>
  </div>
);

export default Footer;