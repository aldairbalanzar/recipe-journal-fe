import { REGISTER_INIT, REGISTER_SUCCESS, REGISTER_ERROR, LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/authActions";

const init = {
    id: '' || JSON.parse(localStorage.getItem('id')),
    username: '' || JSON.parse(localStorage.getItem('username')),
    imageURL: '',
    message: '',
    status: null,
    isPostingCredentials: false
}

const authReducer = (state=init, action={}) => {
    switch(action.type) {
        case REGISTER_INIT:
            return {
                ...state,
                isPostingCredentials: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                message: action.payload.message,
                isPostingCredentials: false
            }
        case REGISTER_ERROR:
            return {
                ...state,
                message: action.payload.data.errorMessage,
                isPostingCredentials: false
            }
        case LOGIN_INIT:
            return {
                ...state,
                isPostingCredentials: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                imageURL: action.payload.imageURL,
                message: action.payload.message,
                isPostingCredentials: false,
            }
        case LOGIN_ERROR:
            return {
                ...state,
                message: action.payload.errorMessage,
                message: action.payload.data.errorMessage,
                isPostingCredentials: false
            }
        default:
            return state
    }
}

export default authReducer;