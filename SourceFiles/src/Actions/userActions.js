//--------------------------------------------------
//Defines user requests to interact with the server and sends to redux
//--------------------------------------------------

import { alertConstants, sessionConstants, crudConstants } from "../Redux/constants";
import env from "react-dotenv";
import { alertActions } from "../Actions";

const API = env?.API  || "http://localhost:5000/api/" //URL of server if in production

export const userActions = {
    //General
    reroute,

    //User 
    Login,
    Register,
    SendResetEmail,
    CheckResetCode,
    ResetPassword,
    DeleteAccount,
    Logout,
    EditAccount,
    VerifyEmail,
    SendVerificationEmail,
    
    //Actions
    DefaultAction,
    FindUserById,
    Upload,
    Loading,
}


function DefaultAction(token) {
    return handleApiRequest("DefaultPath", "POST", { token }, (data, dispatch) => {
        const { message, user } = data;
        if(message && user) {
            dispatch(redux(sessionConstants.DefaultConstSUCCESS, user))
            dispatch(alertActions.Success(message));
        }
})}

function VerifyEmail(token, verificationToken) {
    return handleApiRequest("VerifyEmail", "PUT", { token, verificationToken }, (data, dispatch) => {
        const { message } = data;
        if(message) {
            dispatch(alertActions.Success(message))
            dispatch(redux(sessionConstants.Logout, "Logout"))
            setTimeout(() => reroute(""), 750);
        }
})}

function SendVerificationEmail(token) {
    return handleApiRequest("SendVerificationEmail", "POST", { token }, (data, dispatch) => {
        const { message } = data;
        if(message) dispatch(alertActions.Success(message))
})}

function EditAccount(token, name, email, password) {
    return handleApiRequest("EditAccount", "PUT", { token, name, email, password }, (data, dispatch) => {
        const { message, changedEmail } = data;
        if(message) dispatch(alertActions.Success(message));

        if(changedEmail) {
            Logout()
        } else {
            setTimeout(() => reroute("#/Account"), 750);
        }
})}

function FindUserById(token, id) {
    return handleApiRequest("FindUserById", "POST", { token, id }, (data, dispatch) => {
        const { message, userById } = data;
        if(userById[0]) {
            dispatch(redux(sessionConstants.FindUserSuccess, userById[0]))
        }
})}

function DeleteAccount(token, id) {
    return handleApiRequest("DeleteAccount", "DELETE", { token, id }, (data, dispatch) => {
        const { message } = data;
        if(message) {
            dispatch(alertActions.Success(message));
            dispatch(redux(sessionConstants.Logout, "Logout"))
            reroute("")
        }
})}

function Login({ email, password, useCaptcha, captchaToken}) {  
    const requestData = { email, password, useCaptcha };
    if (useCaptcha) {requestData.captchaToken = captchaToken}
    return handleApiRequest("Login", "POST", requestData, (data, dispatch) => {
        const { message, user, enableCaptcha } = data;
        if(message && user) {
            dispatch(redux(sessionConstants.LoginSuccess, user))
            dispatch(alertActions.Success(message));
        }
        if(enableCaptcha != null) {
            dispatch(redux(sessionConstants.UseCaptcha, enableCaptcha))
        }
})}
    
function Register({ name, email, password }) {
    return handleApiRequest("Register", "POST", { name, email, password }, (data, dispatch) => {
        const { message } = data;
        if(message) {
            dispatch(alertActions.Success(message));
            setTimeout(() => reroute(""), 750);
        }
})}

function SendResetEmail({ email }) {
    return handleApiRequest("SendResetEmail", "POST", { email }, (data, dispatch) => {
        const { message } = data;
        if(message) {
            dispatch(alertActions.Success(message));
            dispatch(redux(sessionConstants.ResetEmailSuccess, ""))
        }
})}

function CheckResetCode({ code, email, captchaToken }) {
    return handleApiRequest("CheckResetCode", "POST", { code, email, captchaToken }, (data, dispatch) => {
        const { message, accessToken} = data;
        if(message) {
            dispatch(alertActions.Success(message));
            if(data.accessToken) dispatch(redux(sessionConstants.CheckResetCodeSuccess, accessToken))
        }
})}

function ResetPassword({ accessToken, password }) {
    return handleApiRequest("ResetPassword", "PUT", { accessToken, password }, (data, dispatch) => {
        const {message} = data;
        if(message) {
            dispatch(alertActions.Success(message));
        }
})}

function handleApiRequest(endpoint, method, body, onApiSuccess) {
    return (dispatch) => {
        dispatch(redux(sessionConstants.REQUEST, endpoint));
        dispatch(alertActions.Clear());
        fetch(API + endpoint, {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
        .then((res) => {
            if (res.status === 429) {
                dispatch(alertActions.Error("Too many requests. Please try again later."));
                throw new Error('Too many requests');
            }
            return res.json();
        })
        .then((data) => {
            const {err} = data;
            if (err) dispatch(alertActions.Error(err))
            if (typeof onApiSuccess === 'function') onApiSuccess(data, dispatch)
        })
        .catch((err) => console.log("There was an error in the request", err));
    };
}

function Upload(files) {
    return (dispatch) => {
        dispatch(redux(sessionConstants.REQUEST, "File Upload"));
        dispatch(alertActions.Clear())
        fetch( API + "Upload", {
            method: "POST",
            body: files,
        })
        .then((res) => {
            if(res.status === 429) {
                dispatch(alertActions.Error("Too many requests. Please try again later."));
                throw new Error('Too many requests');
            }  
            return res.json();
            })
        .then((data) => {
            const {err, message} = data;
            if (err) dispatch(alertActions.Error(err))
            if (message) dispatch(alertActions.Success(message));
        })
        .catch((err) => console.log("There was an error in the request"));
    };
}

function Logout() {
    return (dispatch) => {
        dispatch(redux(sessionConstants.Logout, "Logout"))
        reroute("")
    }
}

function redux(type, info) {
    return { type: type, info };
}

//Value is true/false to display the loading screen
function Loading(value) {
    return (dispatch) => {
        dispatch(redux(alertConstants.Loading, value))
    }
}

function reroute(path) {
    window.location.assign(`${window.location.origin}/${path}`);
}


