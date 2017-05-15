import { SET_ACTIVE_VIEW } from '../actions/appViewActions.js';
import { initialState } from '../initials/appViewInitialState.js';

export default function appViewReducer (state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_VIEW: {
            const { activeViewName } = action.values;

            return state.update('history', history => history.push({
                    viewName: activeViewName
                }));
        }

        default: {
            return state;
        }
    }
}
