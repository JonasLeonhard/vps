import StyledText from './text.style';


const Text = ({ children }) => {
  return (
    <StyledText>
      { children }
    </StyledText>
  )
}

export default Text