import axios from "axios";
import cookie from "react-cookie";
import Config from "../profiles";

const http = axios.create({
    withCredentials: true,
    headers: {'X-Requested-With': 'XMLHttpRequest'}
});

// http.verifyServiceStatus = (onMaintenancePage) => {
//     return http.head(`${Config.wantedServiceURL}/ws/services/v2/gInfo`)
//         .then(response => {
//             if(onMaintenancePage) window.location = Config.loginURL;
//         })
//         .catch(error => {
//             if(!onMaintenancePage) window.location = `${window.location.protocol}//${window.location.host}/#/servicemaintenance`;
//         });
// }

http.interceptors.request.use(function (config) {
    if(config.url.indexOf(Config.adminServiceURL) >= 0){
        let prefix = (config.url.indexOf('?') >= 0) ? '&' : '?';
        config.url += `${prefix}token=${cookie.load('S3Token')}`;
    }

    return config;

});

http.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response && (error.response.status === 401)) {
            window.location = Config.loginURL;
        } else {
            return Promise.reject(error);
        }
    }
);

http.all = axios.all;

export default http;