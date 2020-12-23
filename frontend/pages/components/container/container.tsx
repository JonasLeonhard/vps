import StyledContainer from './container.style';


const Container = ({ children, className }: { children: JSX.Element | string, className?: string}) => {
  return (
    <StyledContainer className={className}>
      { children }
    </StyledContainer>
  )
}

export default Container