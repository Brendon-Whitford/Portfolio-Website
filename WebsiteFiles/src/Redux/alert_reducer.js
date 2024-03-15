//--------------------------------------------------
//Redux reducer for alertActions
//--------------------------------------------------

import { alertConstants } from "./constants";

const INITIALSTATE = {};

export function alert(state = INITIALSTATE, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {type: 'success', message: action.message};
        case alertConstants.WARNING:
            return {type: 'warning', message: action.message};
        case alertConstants.ERROR:
            return {type: 'danger', message: action.message};
        case alertConstants.CLEAR:
            return {};
        case alertConstants.Loading:
            return {...state, loading: action.info};
        default:
            return state
    }
}