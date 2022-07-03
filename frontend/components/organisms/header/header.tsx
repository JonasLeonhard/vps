import StyledHeader from './header.style';
import Link from 'next/link';
import Button from 'components/atoms/button/button';

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
                <Button text="Contact" />
            </nav>
        </StyledHeader>
    )
}

export default Header