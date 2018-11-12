
import { createAction } from 'redux-actions';
import http from '../http'
export const raiseError =  createAction( "RAISE_ERROR");
export const receiveQDData = createAction( "RECEIVE_QD_DATA");


// export const retrieveAllUserQueues createAction( RETRIEVEALLUSERQUEUES)
// export const createQueue createAction( RETRIEVEALLUSERQUEUES)
// export const retrieveQueue createAction( RETRIEVEALLUSERQUEUES)
// export const deleteQueue createAction( RETRIEVEALLUSERQUEUES)
// export const retrieveAllQueueMembers createAction( RETRIEVEALLUSERQUEUES)
// export const AddQueueMember createAction( RETRIEVEALLUSERQUEUES)


// export const createUser createAction( RETRIEVEALLUSERQUEUES)
// export const retrieveAllUsers createAction( RETRIEVEALLUSERQUEUES)
// export const retrieveUser createAction( RETRIEVEALLUSERQUEUES)
// export const deletSer createAction( RETRIEVEALLUSERQUEUES)


export function doCallQDService(method, url, payload, callDescription) {
    return dispatch => {
        switch(method){
            case "post":
                http.post(url, payload).then(response => {
                    if (response.data.isError) {
                        dispatch(
                            raiseError({
                                url: url,
                                message:
                                    callDescription + ": "+response.data.message + " " + response.data.data
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
                                callDescription + ": "+error.message + " " + error.data
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
                                    callDescription + ": "+response.data.message + " " + response.data.data
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
                                callDescription + ": "+error.message + " " + error.data
                        })
                    )
                });
        }

    };
}