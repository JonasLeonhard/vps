import styled from 'styled-components';

const StyledContactForm = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .contactForm__left {
    background: white;
    width: 100%;
  }

  .contactForm__right {
    background: black;
    width: 100%;
    overflow: hidden;
  }

  .contactForm__left,
  .contactForm__right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
`;

export default StyledContactForm;
