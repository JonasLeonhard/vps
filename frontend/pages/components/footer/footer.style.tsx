import styled from 'styled-components';

import { color, space, mq } from '../../../styles/helper';

const StyledFooter = styled.div`
    margin-top: auto;
    width: 100%;
    padding: ${space('s')};
    margin-top: ${space('s')};
    
    .footer__card {
        background: ${color('grey')};
        color: ${color('white')};
        border-radius: 3px;
        max-width: max-content;
        padding: 5px;
        cursor: pointer;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: ${space('xs')};
        }
    }
    .footer__card:hover {
        cursor: pointer;
        background: ${color('grey', 50)};
    }

    .footer__copyright {
        font-size: 0.6rem;
        text-align: center;

        ${mq('m')} {
            margin-left: auto;
        }
    }

    .footer__links {
        display: flex;
        gap: ${space('s')};
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
    }
`


export default StyledFooter;