import { REGISTER_INIT, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/authActions";

const init = {
    id: '',
    username: '',
    imageURL: '',
    message: '',
    err: '',
    isPosting: false
}

const authReducer = (state=init, action={}) => {
    switch(action.type) {
        case REGISTER_INIT:
            return {
                ...state,
                isPosting: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                isPosting: false
            }
        case REGISTER_ERROR:
            return {
                ...state,
                message: action.payload.message,
                err: action.payload.err,
                isPosting: false
            }
        case LOGIN_INIT:
            return {
                ...state,
                isPosting: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                imageURL: action.payload.imageURL,
                message: action.payload.message,
                isPosting: false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload.message,
                err: action.payload.err,
                isPosting: false
            }
        default:
            return state
    }
}

export default authReducer;