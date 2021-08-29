import styled from 'styled-components';
import { space, color } from '../../styles/helper';

const StyledHeader = styled.header`
    height: var(--header-height);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${space('m')};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    pointer-events: none;

    .header__logo {
        pointer-events: all;
        margin: ${space('m')};
    }

    .header__nav {
        pointer-events: all;
        background: ${color('grey', 50)};
        color: ${color('white')};
    }
`;


export default StyledHeader;