import React, { ReactNode } from 'react';
import Presenter from './mainFramePresenter';

// eslint-disable-next-line react/require-default-props
const Interactor = (props: { children?: ReactNode[] | ReactNode }) => {
  const { children } = props;
  return <Presenter {...{ children }} />;
};

export default Interactor;
