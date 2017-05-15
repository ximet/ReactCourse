import React from 'react';
import { connect } from 'react-redux';
import { testViewSelector } from '../selectors/testViewSelector.js';
import { testViewActions } from '../actions/testViewActions.js';

export const TestView = connect(testViewSelector, testViewActions)((props) => {

    return <div>
        {`${props.hello}!!!`}
    </div>
});
