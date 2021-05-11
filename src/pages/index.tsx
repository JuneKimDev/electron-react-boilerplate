import React, { useEffect } from 'react';
import Meta from '../components/meta';
import MainFrame from '../components/mainFrame';

const Page = () => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:1212';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Template | JuneKimDev"
        desc="Template created by JuneKimDev"
        url={publicUrl}
      />
      <MainFrame />
    </>
  );
};

export default Page;
