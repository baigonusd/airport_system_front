
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
SEARCH_FAIL,
SEARCH_SUCCESS,
BAGGAGE_SUCCESS,
IIN_SUCCESS
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('token'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    tickets: localStorage.getItem('tickets'),
    baggages: localStorage.getItem('baggages'),
    form: localStorage.getItem('form'),
    selected_ticket: null,
    user: null,
    detail: null,
    employee_ticket: localStorage.getItem('employee_ticket')
};

export default function (state = initialState, action){
    const { type, payload } = action;
    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            localStorage.setItem('detail', payload.detail)
            return{
                ...state,
                isAuthenticated: true,
                access: payload.token,
                refresh: payload.refresh,
                detail: payload.detail
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
            console.log(`fail ${payload.detail}`)
            localStorage.setItem('detail', payload.detail)
            return{
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null,
                detail: payload.detail        
            }
        case ACTIVATION_SUCCESS:
            return{
                ...state,
                isAuthenticated: true,
                access: payload.token,
                refresh: payload.refresh
            }
        case SEARCH_SUCCESS:
            localStorage.setItem('employee_ticket', JSON.stringify(payload))
            console.log(`reducer ${JSON.stringify(payload)}`)

            return{
                ...state,
                employee_ticket: JSON.stringify(payload),
                refresh: payload.refresh
            }

        case TICKET_SUCCESS:
            localStorage.setItem('tickets', JSON.stringify(payload))
            console.log(JSON.stringify(payload));
            return{
                ...state,
                tickets: JSON.stringify(payload),
                refresh: payload.refresh
            }
        case SELECT_SUCCESS:
                localStorage.setItem('selected_ticket', payload)
                return{
                    ...state,
                    selected_ticket : payload,
                    // baggages: JSON.stringify(payload),
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
        case SEARCH_FAIL:
            return{
                ...state
            }
        default:
                return state
    }
};