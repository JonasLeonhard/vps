import React from "react";
import StyledHeader from "./header.style";
import Link from "next/link";
import Button from "components/atoms/button/button";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <a className="header__logo">Animated Logo</a>
      </Link>
      <nav className="header__nav">
        <Button text="Contact" />
      </nav>
    </StyledHeader>
  );
};

export default Header;
