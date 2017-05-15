import expect from 'expect';
import { SET_ACTIVE_VIEW, appViewActions } from '../../src/actions/appViewActions';
import {describe, it} from "eslint";

describe('actionSetActiveView', () => {
    describe('actionSetActiveStringView', () => {
        it('should set active view with correct string', () => {
            const viewName = 'TestView';
            const expectedAction = {
                type: SET_ACTIVE_VIEW,
                values: {
                    activeViewName: viewName
                }
            };

            expect(appViewActions[SET_ACTIVE_VIEW](viewName)).toEqual(expectedAction);
        });
    });


    describe('actionSetActiveNumberView', () => {
        it('should set active view', () => {
            const viewName = 0;
            const expectedAction = {
                type: SET_ACTIVE_VIEW,
                values: {
                    activeViewName: viewName
                }
            };

            expect(appViewActions[SET_ACTIVE_VIEW](viewName)).toEqual(expectedAction);
        });
    });

    describe('actionSetActiveUndefinedView', () => {
        it('should set active view', () => {
            const viewName = undefined;
            const expectedAction = {
                type: SET_ACTIVE_VIEW,
                values: {
                    activeViewName: viewName
                }
            };

            expect(appViewActions[SET_ACTIVE_VIEW](viewName)).toEqual(expectedAction);
        });
    });
});
