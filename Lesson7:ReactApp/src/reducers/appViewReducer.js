import { SET_ACTIVE_VIEW } from '../actions/appViewActions.js';
import { initialState } from '../initials/appViewInitialState.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {

        default: {
            return state;
        }
    }
}
