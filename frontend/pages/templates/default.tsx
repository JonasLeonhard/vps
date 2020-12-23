import StyledDefault from './default.style';

import SeoHead from '../components/seoHead/seoHead';
import Container from '../components/container/container';
import Footer from '../components/footer/footer';

const Default = ({ children, title, description, noindex, nofollow }: { children: JSX.Element | string, title: string, description: string, noindex?: boolean | undefined, nofollow?: boolean | undefined}) => {
  return (
    <StyledDefault>
        <SeoHead title={title} description={description} noindex={noindex} nofollow={nofollow} />

        <Container className="default__container">
              { children }
        </Container>

        <Footer/>
    </StyledDefault>
  )
}

export default Default;