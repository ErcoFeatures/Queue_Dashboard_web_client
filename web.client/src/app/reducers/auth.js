import { handleActions } from 'redux-actions';

//App Import
import {
    raiseError,
    setAuth
} from '../actions/auth';

export const INITIAL_STATE = {
    userObject: null,
    error:null
};

export default handleActions(
    {
        [setAuth]: (state, {payload}) => {
            return{
                ...state,
                userObject:payload
            }
        },
        [raiseError]: (state, {payload}) => {
            return{
                ...state,
                error:payload
            }
        }
    },
    INITIAL_STATE
);