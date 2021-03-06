import {createAction} from 'redux-actions';
import http from '../http'
import Config from '../profiles'

export const raiseError = createAction("RAISE_ERROR");
export const receiveQDData = createAction("RECEIVE_QD_DATA");
export const setShowNewQueueForm = createAction("SET_SHOW_NEW_QUEUE_FORM");
export const setActiveQueue = createAction("SET_ACTIVE_QUEUE");


export function createQueue({payload, callDescription}) {
    return dispatch => {
        http.post(Config.queueDashboardUrl + "/users/"+payload.owner+"/queues", payload.data).then(response => {
            if (response.status !== 201) {
                dispatch(
                    raiseError({
                        message:
                            callDescription + ": " + response.data.message + " " + response.data.data
                    })
                )
            }
        }).catch(error => {
            console.log("Error when creating Queue= ", error);
            dispatch(
                raiseError({
                    message:
                        callDescription + ": " + error.message + " " + error.data
                })
            )
        });
    }
}


export function doCallQDService(method, url, payload, callDescription) {
    return dispatch => {
        switch (method) {
            case "post":
                http.post(url, payload).then(response => {
                    if (response.data.isError) {
                        dispatch(
                            raiseError({
                                url: url,
                                message:
                                    callDescription + ": " + response.data.message + " " + response.data.data
                            })
                        )
                    } else {
                        dispatch(setActiveQueue({
                                description: callDescription,
                                data: response.data.data
                            })
                        )
                    }
                }).catch(error => {
                    console.log("Error when loading Data = ", error);
                    dispatch(
                        raiseError({
                            url: url,
                            message:
                                callDescription + ": " + error.message + " " + error.data
                        })
                    )
                });
            case "get":
                http.get(url).then(response => {
                    if (response.data.isError) {
                        dispatch(
                            raiseError({
                                url: url,
                                message:
                                    callDescription + ": " + response.data.message + " " + response.data.data
                            })
                        )
                    } else {
                        dispatch(receiveQDData({
                                description: callDescription,
                                data: response.data.data
                            })
                        )
                    }
                }).catch(error => {
                    console.log("Error when loading Data = ", error);
                    dispatch(
                        raiseError({
                            url: url,
                            message:
                                callDescription + ": " + error.message + " " + error.data
                        })
                    )
                });
        }

    };
}