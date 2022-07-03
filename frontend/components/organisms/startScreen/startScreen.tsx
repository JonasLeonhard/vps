import StyledStartScreen from './startScreen.style';
import SplashSvg from '../../../public/svg/splash.svg';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    return (
        <StyledStartScreen>
           <div className="header__left">
               <div>
                   <h1>Hello, I'm Jonas</h1>
                   <p>🐲 A Fullstack Developer from Germany</p>
                </div>

               <div className="header__left__link">
                   <div className="header__left__link-rotate">
                        Projects -ARROW
                   </div>
               </div>
           </div>
           <div className="header__right">
               <SplashSvg />

               <div className="header__right__link">
                   Blog -ARROW
               </div>
           </div>
        </StyledStartScreen>
    )
}

export default Header