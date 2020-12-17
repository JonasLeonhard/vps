import styled, { css } from 'styled-components';
import { mq, color } from '../../../styles/helper';

const StyledText = styled.div`
    text-align: center;

    ${mq('s')} {
        margin-top: 10rem;
    }

    background: ${color('red')}
`


export default StyledText;