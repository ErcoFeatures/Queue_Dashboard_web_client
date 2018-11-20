import {setAuth} from "../actions/auth";
import Config from "../profiles";

const parseAuthResponse = (usercontext, store) => {


    if (typeof usercontext !== "object") {
        console.log("Auth User Context is Empty");
        setAuthFailed(store);
        return;
    }

    const userDetails = {
        UserID: usercontext.id,
        Email: usercontext.email,
        FirstName: usercontext.firstname,
        LastName: usercontext.lastname,
        Title: usercontext.title,
        ListQueue: usercontext.queues,
        Roles: usercontext.roles,
    };

    return store.dispatch(
        setAuth({
            loginURL: Config.loginURL,
            isAuthenticated:true,
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
