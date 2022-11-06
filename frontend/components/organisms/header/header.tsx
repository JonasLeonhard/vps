'use client'; // styled-components fix

import React from 'react';
import StyledHeader from './header.style';
import Link from 'next/link';
import Button from 'components/atoms/button/button';

const Header = () => (
  <StyledHeader>
    <Link className="header__logo" href="/">
      Animated Logo
    </Link>
    <nav className="header__nav">
      <Button text="Contact" />
    </nav>
  </StyledHeader>
);
export default Header;
