import { combineReducers } from "redux";
import translation from "./translation";
import auth from "./auth";
import queues from "./queues";
export default combineReducers({
    auth,
    queues,
    translation,
});
