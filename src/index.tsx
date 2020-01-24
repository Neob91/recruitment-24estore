import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'emotion';

import { App } from '@/components/App';
import { store } from '@/store';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);
