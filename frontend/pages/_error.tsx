import { withApollo } from '../lib/apollo';
import styled from 'styled-components';
import { color, mq } from '../styles/helper';

import Default  from './templates/default';

const StyledError = styled.div`
    margin: auto;
    width: 100%;
    text-align: center;

    span {
        padding: 1rem;
        margin: 1rem;
        border-bottom: 1px solid ${color('grey')};

        ${mq('m')} {
            padding: 1rem 1rem 1rem 0;
            border-right: 1px solid ${color('grey')};
            border-bottom: none;
            margin: 0 1rem 0 0;
        }
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        ${mq('m')} {
            flex-direction: initial;
        }
    }
`

const Error = ({
  statusCode
}) => {
  return (
      <Default title={`${statusCode} Fehler`} description="Fehler ist aufgetreten, diese Seite konnte nicht gefunden werden" noindex={true} nofollow={true} >
        <StyledError>
            <p>
                <span>{statusCode}</span>
                Diese Seite konnte nicht gefunden werden
            </p>
        </StyledError>
      </Default>
  );
};

Error.getInitialProps = async ctx => {
  let statusCode = null;
  if (ctx.res) {
    statusCode = ctx.res.statusCode;
  } else if (ctx.err) {
    statusCode = ctx.err.statusCode;
  }

  return {
    statusCode
  };
};


export default withApollo()(Error);
