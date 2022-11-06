import React from 'react';
import { NextSeo, DefaultSeo } from 'next-seo';

const SeoHead = ({
  title,
  description,
  noindex,
  nofollow
}: {
  title: string;
  description: string;
  noindex: boolean | undefined;
  nofollow: boolean | undefined;
}) => {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'de',
          url: 'https://www.jonasleonhard.de/',
          site_name: 'jonasleonhard.de'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <NextSeo
        title={title}
        description={description}
        noindex={noindex}
        nofollow={nofollow}
        openGraph={{
          title,
          description
        }}
      />
    </>
  );
};

export default SeoHead;
