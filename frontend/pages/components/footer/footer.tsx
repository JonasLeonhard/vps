import StyledFooter from './footer.style';

import Container from '../container/container';

const Footer = () => {
  return (
      <StyledFooter>
        <Container className="footer__inner">
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
        </Container>
      </StyledFooter>
  )
}

export default Footer