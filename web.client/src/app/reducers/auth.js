import { handleActions } from 'redux-actions';

//App Import
import {
    resetUser,
    isUserConnected,
    userIsConnecting,
    setUser,
    setAuth
} from '../actions/auth';

export const INITIAL_STATE = {
    isConnected: false,
    isConnecting: false,
    user: {
        id: null,
        email: null,
        name: null,
        firstName: null,
        picture: null
    }
};

export default handleActions(
    {
        [setAuth]: (state, {payload}) => {
            return{
                ...state,
                userObject:payload
            }
        },
        [isUserConnected]: (state, { payload }) => {
            return {
                ...state,
                isConnected: payload
            };
        },
        [userIsConnecting]: (state, { payload }) => {
            return {
                ...state,
                isConnecting: payload
            };
        },
        [setUser]: (state, { payload }) => {
            return {
                ...state,
                user: payload
            };
        },
        [resetUser]: () => INITIAL_STATE
    },
    INITIAL_STATE
);