'use client'; // styled-components fix

import React from 'react';
import StyledDefault from './default.style';
import GlobalStyle from 'styles/globals.style';

import SeoHead from 'components/atoms/seoHead/seoHead';
import Footer from 'components/organisms/footer/footer';
import Header from 'components/organisms/header/header';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

const Default = ({
  children,
  title,
  description,
  noindex,
  nofollow
}: {
  children: JSX.Element | string;
  title: string;
  description: string;
  noindex?: boolean | undefined;
  nofollow?: boolean | undefined;
}) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <StyledDefault>
        <SeoHead
          title={title}
          description={description}
          noindex={noindex}
          nofollow={nofollow}
        />
        <Header />

        <div className="default__container">{children}</div>

        <Footer />
      </StyledDefault>
    </ThemeProvider>
  );
};

export default Default;
