//--------------------------------------------------
//Handles the redux requests for alerts
//--------------------------------------------------
import { alertConstants } from "../Redux/constants";

export const alertActions = {
    Success,
    Warning,
    Error,
    Clear
};

function Success(success) {
    if(typeof success === "string") {
        return { type: alertConstants.SUCCESS, message: success }
    }
    if(typeof success === "object" && JSON.stringify(success) != '{}') {
        return { type: alertConstants.SUCCESS, message: success.message }
    }
    return { type: alertConstants.SUCCESS, message: "Error: Please contact your administrator." }
}

function Warning(warning) {
    if(typeof warning === "string") {
        return { type: alertConstants.WARNING, message: warning }
    }
    if(typeof warning === "object" && JSON.stringify(warning) != '{}') {
        return { type: alertConstants.WARNING, message: warning.message }
    }
    return { type: alertConstants.WARNING, message: "Error: Please contact your administrator." }
}
    
function Error(err) {
    if(typeof err === "string") {
        return { type: alertConstants.ERROR, message: err }
    }
    if(typeof err === "object" && JSON.stringify(err) != '{}') {
        return { type: alertConstants.ERROR, message: err.message }
    }
    return { type: alertConstants.ERROR, message: "Error: Please contact your administrator." }
}
    
function Clear() {
    return { type: alertConstants.CLEAR };
}