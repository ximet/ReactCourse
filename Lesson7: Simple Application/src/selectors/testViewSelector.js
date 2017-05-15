import { createSelector } from 'reselect';


export const testViewSelector = createSelector(
    [],
    () => {
        return {
            hello: 'Hello'
        };
    }
);
