import Config from "../profiles";
import http from "./index";
import auth from "../auth";

const getAuthData = (store) => {
    return new Promise((resolve, reject) => {
        //Get User from windows -i.e. from Tomcat -> Index.html
        if (Config.getUserContext) {
            console.log("Auth Already exists in UserContext");
            resolve(Config.getUserContext);
            return;
        }
        http
            .get(Config.queueDashboardUrl + "/userdetails/Qdashboard")
            .then(response => {
                if (response.data.isError) {
                    console.log("Auth API Failed - IsError is true");
                    reject(null);
                }

                resolve(response.data.Data[0]);
            })
            .catch(error => {
                console.log("Auth API Failed");
                console.log(error);
                auth.setAuthFailed(store)
                reject(null);
            });
    });
};

const sessionValidResponse = (store) => {
    return new Promise((resolve, reject) => {

        http
            .get(Config.wantedServiceURL + "/sessionValidResponse")
            .then(response => {
                if (response.data.isError) {
                    console.log("Auth API Failed - IsError is true");
                }

                resolve(response.data.Data[0]);
            })
            .catch(error => {
                console.log("Auth API Failed");
                console.log(error);
                auth.setAuthFailed(store)
            });
    });
};

export default { getAuthData , sessionValidResponse};
