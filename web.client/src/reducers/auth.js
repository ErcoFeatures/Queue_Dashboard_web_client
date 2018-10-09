import {handleActions} from 'redux-actions';
import {
    setAuth,
}from '../actions/auth'
export const INITIAL_STATE = {
    userObject:null,
}
export default handleActions(

    {
        [setAuth]: (state, {payload}) => {
            return{
                ...state,
                userObject:payload
            }
        }
    },
    INITIAL_STATE
);

