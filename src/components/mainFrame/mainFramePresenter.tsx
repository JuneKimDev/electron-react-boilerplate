import React, { ReactNode } from 'react';
import styles from './mainFrame.module.scss';
import Navbar from './mainFrameViewNavbar';

const presenter = (props: { children?: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return (
    <main role="main" className={styles.main}>
      <Navbar />
      <section className="mainFrame">{children}</section>
    </main>
  );
};

export default presenter;
