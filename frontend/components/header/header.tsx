import StyledHeader from './header.style';
import Link from 'next/link';

type HeaderProps = {};

const Header = ({}: HeaderProps) => {
    return (
        <StyledHeader>
            <Link href="/">
                <a className="header__logo">
                    Animated Logo
                </a>
            </Link>
            <nav className="header__nav">
                Bubble Hamburger Nav
            </nav>
        </StyledHeader>
    )
}

export default Header