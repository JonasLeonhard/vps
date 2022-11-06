import styled from 'styled-components';

const StyledFooter = styled.div`
  margin-top: auto;
  width: 100%;

  .footer__card {
    border-radius: 3px;
    max-width: max-content;
    padding: 5px;
    cursor: pointer;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .footer__card:hover {
    cursor: pointer;
  }

  .footer__copyright {
    font-size: 0.6rem;
    text-align: center;
  }

  .footer__links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export default StyledFooter;
