//--------------------------------------------------
//Redux constants for reducers and actions
//--------------------------------------------------

//Create read update delete. Should be separate constant variables for large projects
export const crudConstants = {
    ViewSuccess: "ViewSuccess",
}

//Socket connections
export const socketConstants = {
    TestAction: "Socket Test Action",
}

//User management
export const sessionConstants = {
    DefaultConstSUCCESS: "DefaultConstSUCCESS",

    LoginSuccess: "LoginSuccess",
    RegisterSuccess: "RegisterSuccess",
    ResetEmailSuccess: "ResetEmailSuccess",
    CheckResetCodeSuccess: "CheckResetCodeSuccess",
    FindUserSuccess: "FindUserSuccess",
    UseCaptcha: "UseCaptcha",
    Logout: "Logout",

    REQUEST: "Default LOG",
}

//Page alerts
export const alertConstants = {
    SUCCESS: "Action SUCCESS",
    WARNING: "Action WARNING",
    ERROR: "Action DANGER",
    CLEAR: "Action CLEAR",
    Loading: "Action LOADING"
}