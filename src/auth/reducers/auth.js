
import {
LOGIN_SUCCESS,
LOGIN_FAIL, 
USER_LOADED_SUCCESS, 
USER_LOADED_FAIL,
SIGNUP_FAIL,
SIGNUP_SUCCESS,
PASSWORD_RESET_SUCCESS,
PASSWORD_RESET_FAIL,
PASSWORD_RESET_CONFIRM_SUCCESS,
PASSWORD_RESET_CONFIRM_FAIL,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function (state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);
            return{
                ...state,
                isAuthenticated: true,
                access: payload.access,
                refresh: payload.refresh
            }
        case SIGNUP_SUCCESS:
                return {
                    ...state,
                    isAuthenticated: false
                }
        case USER_LOADED_SUCCESS:
            return{
                ...state,
                user: payload
            }
        case USER_LOADED_FAIL:
            return{
                ...state,
                user: null
            }
        case SIGNUP_FAIL:
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAutheeticated: false,
                user: null               
            }
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
            return{
                ...state
            }
        default:
                return state
    }
};