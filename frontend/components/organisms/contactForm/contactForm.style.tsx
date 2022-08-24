import styled from "styled-components";
import { color } from "../../../styles/helper";

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
    color: ${color("white")};
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
