
import { useEffect, useState } from 'react';
import {
LOGIN_SUCCESS,
LOGIN_FAIL, 
USER_LOADED_SUCCESS, 
USER_LOADED_FAIL,
SIGNUP_FAIL,
SIGNUP_SUCCESS,
PASSWORD_RESET_SUCCESS,
PASSWORD_RESET_FAIL,
ACTIVATION_SUCCESS,
ACTIVATION_FAIL,
PASSWORD_RESET_CONFIRM_SUCCESS,
PASSWORD_RESET_CONFIRM_FAIL,
TICKET_FAIL,
TICKET_SUCCESS,
BAGGAGE_FAIL,
SELECT_SUCCESS,
SELECT_FAIL,
BAGGAGE_SUCCESS
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('token'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    tickets: localStorage.getItem('tickets'),
    baggages: localStorage.getItem('baggages'),
    form: localStorage.getItem('form'),
    user: null
};

export default function (state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case LOGIN_SUCCESS:
            // const [token, setToken] = useState(null);
            // useEffect(() => {
            //     localStorage.setItem('token', token);
            // }, [token]);
            // setToken(payload.token)
            // const [row, setRow] = useState(null);
            // // localStorage.setItem('token', payload.token);
            // setRow(payload.token);
            // useEffect(() => {
            //     localStorage.setItem("token", row);
            // }, row);
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                isAuthenticated: true,
                access: payload.token,
                refresh: payload.refresh
            }
        case SIGNUP_SUCCESS:
            localStorage.setItem('form', JSON.stringify(payload))
                return {
                    ...state,
                    isAuthenticated: false,
                    form: payload
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
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null               
            }
        case ACTIVATION_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                access: payload.token,
                refresh: payload.refresh
            }
        
        case TICKET_SUCCESS:
            // const [payload, setItems] = useState(null);
            // useEffect(() => {
            //     window.localStorage.setItems('tickets', JSON.stringify(payload));
            // }, [payload])
            // setItems(payload)
            // AsynStorage.setItem('tickets', JSON.stringify(payload))
            // localStorage.setItem('tickets', JSON.stringify(payload));
            console.log(JSON.stringify(payload))
            localStorage.setItem('tickets', JSON.stringify(payload))
            return{
                ...state,
                tickets: JSON.stringify(payload),
                refresh: payload.refresh
            }
        case SELECT_SUCCESS:
                console.log(payload)
                localStorage.setItem('baggages', JSON.stringify(payload))
                return{
                    ...state,
                    baggages: JSON.stringify(payload),
                    refresh: payload.refresh
                }
        case BAGGAGE_SUCCESS:
            localStorage.setItem('baggages', JSON.stringify(payload));
            return{
                ...state,
                baggages: JSON.stringify(payload),
                refresh: payload.refresh
            }
        case BAGGAGE_FAIL:
        case TICKET_FAIL:
        case SELECT_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_FAIL:
            return{
                ...state
            }
        default:
                return state
    }
};