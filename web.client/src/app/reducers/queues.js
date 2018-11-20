import { handleActions } from 'redux-actions';

//App Import
import {
    setShowNewQueueForm,
    setActiveQueue
} from '../actions/queues';
import {raiseError} from "../actions/auth";

export const INITIAL_STATE = {
    showNewQueueForm:false,
    activeQueue:null,
    error: null

};

export default handleActions(
    {
        [setShowNewQueueForm]: (state, {payload}) => {
            return{
                ...state,
                showNewQueueForm:payload
            }
        },
        [raiseError]: (state, {payload}) => {
            return{
                ...state,
                error:payload
            }
        },
        [setActiveQueue]: (state, {payload}) => {
            return{
                ...state,
                activeQueue:payload
            }
        }
    },
    INITIAL_STATE
);


