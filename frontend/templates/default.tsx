import StyledDefault from './default.style';

import SeoHead from '../components/seoHead/seoHead';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Default = ({ children, title, description, noindex, nofollow }: { children: JSX.Element | string, title: string, description: string, noindex?: boolean | undefined, nofollow?: boolean | undefined}) => {
  return (
    <StyledDefault>
        <SeoHead title={title} description={description} noindex={noindex} nofollow={nofollow} />
        <Header/>

        <div className="default__container">
              { children }
        </div>

        <Footer/>
    </StyledDefault>
  )
}

export default Default;