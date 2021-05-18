import React from 'react';
import Presenter from './placeholderPresenter';
import { useDispatch } from '../../controllers';

const Interactor = () => {
  const dispatch = useDispatch();
  dispatch({ type: 'placeholder', payload: 'test' });
  return <Presenter />;
};

export default Interactor;
