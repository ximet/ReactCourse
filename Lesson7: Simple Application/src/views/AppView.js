import React from 'react';
import { connect } from 'react-redux';
import { appViewSelector } from '../selectors/appViewSelector.js';
import { appViewActions } from '../actions/appViewActions.js';
import * as views from './index.js';

export const AppView = connect(appViewSelector, appViewActions)((props) => {
    const CurrentView = views[props.activeViewName];

    return <div>
        {
            CurrentView
                ? <CurrentView />
                : <div>{'Error 404: Some problem'}</div>
        }
    </div>
});
