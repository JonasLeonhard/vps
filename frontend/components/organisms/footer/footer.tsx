import React from "react";
import StyledFooter from "./footer.style";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__inner">
        <div className="footer__links">
          <div className="footer__card">
            <div>
              <h3>Github</h3>
              <div>icon</div>
            </div>
          </div>

          <div className="footer__card">
            <div>
              <h3>Contact</h3>
              <div>icon</div>
            </div>
          </div>

          <div className="footer__copyright">
            Copyright 2020 Jonas Leonhard, All rights reserved.
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
