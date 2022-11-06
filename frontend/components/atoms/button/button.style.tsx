import styled from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  background: transparent;
  border: unset;
  border-radius: 8px;
  width: max-content;
  height: max-content;
  overflow: hidden;
  cursor: pointer;

  .button__text {
    z-index: 1;
    position: relative;
  }

  &.button--clicked {
    animation: 0.5s jitter ease forwards;
  }

  .button__background {
    opacity: 0;
    transition: all 0.5s ease;
  }

  &:hover .button__background {
    opacity: 1;
  }

  @keyframes jitter {
    10% {
      transform: translate(-1px, -2px) scale(1.01, 1.01);
    }
    20% {
      transform: translate(3px, 2px) scale(1, 1);
    }
    30% {
      transform: translate(-4px, -5px) scale(1.01, 1.01);
    }
    40% {
      transform: translate(2px, 3px) scale(1, 1);
    }
    50% {
      transform: translate(-1px, -2px) scale(0.98, 0.98);
    }
    70% {
      transform: translate(2px, 3px) scale(1.5, 1.5);
    }
    100% {
      transform: translate(3px, 1px) scale(0, 0);
    }
  }
`;

export default StyledButton;
