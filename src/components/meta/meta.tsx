import React from 'react';
import { Helmet } from 'react-helmet';
// import GTag from './gtag';
import { TMPropsMeta } from './metaType';

const Mata = (props: TMPropsMeta) => {
  const { title, url, desc } = props;
  const orgName = 'JuneKimDev';

  return (
    <Helmet>
      {/* <GTag /> */}
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={desc} />
      <meta name="author" content={orgName} />
      <meta />
    </Helmet>
  );
};

export default Mata;
