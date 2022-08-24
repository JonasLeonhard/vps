import styled from "styled-components";
import { color } from "../../../styles/helper";

const StyledBannerTicker = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;

  div {
    width: 100%;
    height: 20%;
    background: black;
    color: ${color("white")};
  }
`;

export default StyledBannerTicker;
