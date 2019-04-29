import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import Pane from 'Components/Pane';
import Routes from 'Routes/routes';
import configureStore from 'Store/configureStore';

const store = configureStore();

const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
  }
`;

render(
  <Provider store={store}>
    <Pane className="fullscreen">
      <GlobalStyle />
      <Routes />
    </Pane>
  </Provider>,
  document.getElementById('root')
);
