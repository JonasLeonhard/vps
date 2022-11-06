import styled from 'styled-components';

const StyledHeader = styled.header`
  height: var(--header-height);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  pointer-events: none;

  .header__logo {
    pointer-events: all;
  }

  .header__nav {
    pointer-events: all;
  }
`;

export default StyledHeader;
