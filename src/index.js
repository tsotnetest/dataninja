import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {StoreProvider} from './store/Store';
import {initialState, appReducer} from './store/AppReducer';

ReactDOM.render(
    <React.StrictMode>
      <StoreProvider initialState={initialState} reducer={appReducer}>
        <App/>
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
