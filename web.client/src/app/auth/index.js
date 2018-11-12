import {setAuth} from "../actions/auth";
import Config from "../profiles";

const parseAuthResponse = (usercontext, store) => {
    let isAuthenticated = true;

    if (!usercontext) {
        console.log("Auth User Context is Empty");
        setAuthFailed(store);
        return;
    }

    const userDetails = {
        UserID: usercontext.id,
        Email: usercontext.email,
        FirstName: usercontext.firstName,
        LastName: usercontext.lastName,
        Title: usercontext.title,
        ListQueue: usercontext.queues,
        Roles: usercontext.roles,
    };

    return store.dispatch(
        setAuth({
            loginURL: Config.loginURL,
            isAuthenticated,
            userDetails
        })
    );
};
const setAuthFailed = store => {
    store.dispatch(
        setAuth({
            isAuthenticated: false,
            loginURL: Config.loginURL
        })
    );
};

export default { parseAuthResponse, setAuthFailed };
