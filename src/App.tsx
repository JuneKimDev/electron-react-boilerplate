import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './controllers';
import Router from './pages/Router';
import './App.global.scss';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
