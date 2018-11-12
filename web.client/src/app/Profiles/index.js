if (!window.Gemini) {
    console.log("Window Gemini is empty");
    window.Gemini = {};
    window.Gemini.Config = {};
    window.Gemini.UserContext = null;
} else {
    console.log("Window Gemini Object exists");
    console.log(window.Gemini.UserContext);
}

class Config {

    static get adminServiceURL() {
        return window.Gemini.Config.adminServiceURL
            ? window.Gemini.Config.adminServiceURL
            : "https://localhost:8080/adminservices/";
    }
    static get queueDashboardUrl() {
        return window.Gemini.Config.legacyRecurit
            ? window.Gemini.Config.legacyRecuritUrl
            : window.Gemini.Config.legacyRecuritUrl;
    }
    
    static get loginURL() {
        return window.Gemini.Config.loginURL
            ? window.Gemini.Config.loginURL
            : "http://localhost:8080/memberweb";
    }
    static get changePasswordURL() {
        return window.Gemini.Config.s3ChangePasswordUrl
            ? window.Gemini.Config.s3ChangePasswordUrl
            : Config.s3URL +
            "/login/resetpassword?app=GEMINI&redirecturl=/s3/user/v1/adminprofile?appcode=GEMINI&returnurl=http://localhost:3000";
    }
    static get helpCenter() {
        return "https://tnsupport.cebglobal.com/support/solutions/19000100424"
    }
    
    static get logoutURL() {
        return window.Gemini.Config.s3logoutURL
            ? window.Gemini.Config.s3logoutURL
            : Config.s3URL +
            "/resources/ceb_security_logout?redirecturl=https://localhost:8080/logout";
    }
    static get getUserContext() {
        return window.Gemini.UserContext ? window.Gemini.UserContext : null;
    }
}

export default Config;
