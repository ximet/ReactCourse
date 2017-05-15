import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { AppView } from './views/AppView.js';
import { appViewActions, SET_ACTIVE_VIEW } from './actions/appViewActions.js';

import configureStore from './store/configureStore.js';
const store = configureStore();
store.dispatch(appViewActions[ SET_ACTIVE_VIEW ]('TestView'));

ReactDOM.render(
        <Provider store={ store }>
            <AppView />
        </Provider>,
        window.document.getElementById('container')
    );
