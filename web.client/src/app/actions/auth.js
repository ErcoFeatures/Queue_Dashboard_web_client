import { createAction } from 'redux-actions';
import http from "../http/index";
import Config from "../profiles";

export const setAuth = createAction('SET_AUTH');
export const raiseError =  createAction("RAISE_ERROR");

export function doLogout(sourceCall) {
    return dispatch => {
        let url = Config.queueDashboardUrl + '/logout';
        http.post(url).then(response => {
            if (response.status !== 200) {
                dispatch(
                    raiseError({
                        code: sourceCall,
                        message:"test"
                            // response.message + " " + response.data.data

                    })
                )
            } else {
                dispatch(
                    setAuth({
                        loginURL: Config.loginURL,
                        isAuthenticated: false,
                    })
                )
            }
        }).catch(error => {
            console.log("Error when loading Data = ", error);
            dispatch(
                raiseError({
                    code: sourceCall,
                    message:"test"
                    // response.message + " " + response.data.data

                })
            )
        });
    };
}