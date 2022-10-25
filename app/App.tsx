import React from 'react';
import {Provider} from 'react-redux';
import {LoginStack} from '@navigators';
import store from './redux/store';

export default () => {
  return (
    <Provider store={store}>
      <LoginStack />
    </Provider>
  );
};
