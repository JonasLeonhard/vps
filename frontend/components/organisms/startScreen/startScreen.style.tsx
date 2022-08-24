import styled from "styled-components";
import { space, color } from "../../../styles/helper";

const StyledStartScreen = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  .header__left {
    background: white;
    width: 100%;

    .header__left__link {
      position: absolute;
      bottom: 0;
      right: 0;

      .header__left__link-rotate {
        transform: rotate(90deg) translateX(1rem);
        transform-origin: 100% 0% 0px;
        padding-top: ${space("l")};
      }
    }
  }

  .header__right {
    background: black;
    width: 100%;
    color: ${color("white")};
    overflow: hidden;

    .header__right__link {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: ${space("l")};
    }
  }

  .header__left,
  .header__right {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .header__right svg {
    transform: scale(2);
  }
`;

export default StyledStartScreen;
