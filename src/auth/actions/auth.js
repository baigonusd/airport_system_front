import axios from 'axios';
import { useEffect, useState } from 'react';
import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    //AUTHENTICATED_SUCCESS,
    //AUTHENTICATED_FAIL,
    TICKET_FAIL,
    TICKET_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    BAGGAGE_FAIL,
    BAGGAGE_SUCCESS,
    SELECT_SUCCESS,
    SELECT_FAIL,
    EMPLOYEE_SUCCESS,
    EMPLOYEE_FAIL,
    LOGOUT
} from './types';

// export const checkAuthenticated = () => async dispatch =>{
//     if (localStorage.getItem('access')){
//         const config ={
//             hadders: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         };

//         const body = JSON.stringify({token: localStorage.getItem('access')});

//         try{
    // KAKOI URL?? Nado sprosit' Proverka authentification
//             const res = await axios.post(`${process.env.REACT_APP_API_URL}/`)

//             if (res.data.code !== ''){
//                 dispatch ({
//                     type: AUTHENTICATED_SUCCESS
//                 });


//             } else{
//                 dispatch({
//                     type: AUTHENTICATED_FAIL
//                 });
//             }
            

//         } catch (err) {
//             dispatch({
//                 type: AUTHENTICATED_FAIL
//             });
//         }

//     } else {
//         dispatch({
//             type: AUTHENTICATED_FAIL
//         });
//     }

// };

export const signup = (name, surname, email, iin, mobile_phone, number_of_doc, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({ name, surname, email, iin, mobile_phone, number_of_doc, password });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/signup/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: body
        });
    } catch (err) {
        console.log(err)
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

export const load_user = () => async dispatch => {
    if (localStorage.getItem('token')){
        const config ={
            hadders: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Accept': 'application/json'
            }
        };

        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/users/`, config );
            /// api/v1/track/ticket/
            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            });
    } 
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        });

    }
};

export const login = (email, phoneNumber, password) => async dispatch => {
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({email, phoneNumber, password});

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/login/`, body, config );
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        dispatch(load_user)
    } catch (err) {
        console.log(err)
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });

    }
};


export const verify = (mobile_phone, code) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ code, mobile_phone });

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/activate/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS,
        });
    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
};

export const getTicket = (token) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Token ${token}`
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/track/ticket/`, config);
        dispatch({
            type: TICKET_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TICKET_FAIL
        })
    }
};
export const selectTicket = (token, ticket) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Token ${token}`
        }
    };
    const body = JSON.stringify({ticket});
    try {
        const own_tickets = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/track/boarding/`, body, config);
        const baggages = [];
        for (let i = 0; i < own_tickets.data.baggages.length; i++) {
            const baggage_info = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/track/baggage/${own_tickets.data.baggages[i]}`, body, config);
            baggages.push(baggage_info);
        }
        dispatch({
            type: SELECT_SUCCESS,
            payload: JSON.stringify(baggages)
        });
    } catch (err) {
        dispatch({
            type: SELECT_FAIL
        })
    }
};
export const getBaggage = (token) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Token ${token}`
        }
    };

    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/track/baggage/`, config);
        dispatch({
            type: BAGGAGE_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: BAGGAGE_FAIL
        })
    }
};

export const getIin = (token, iin) => async dispatch => {
    const config = {
        headers: {
            'Authorization': `Token ${token}`
        }
    };
    const body = JSON.stringify({iin})

    try{
        //const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/track/`, body);
        dispatch({
            type: EMPLOYEE_SUCCESS,
            //payload: res.data
        });
    } catch(err){
        dispatch({
            type: EMPLOYEE_FAIL
        })
    }
};


export const reset_password = (email) => async dispatch => {
    const config ={
        headers: {
            'Content-Type': 'application/json'
        }
    };
    const body = JSON.stringify({email});

    try{
        await axios.post(`${process.env.REACT_APP_API_URL}/api/v1/users/reset-password/`, body, config);
        dispatch({
            type: PASSWORD_RESET_SUCCESS
        });
    } catch (err){
        dispatch({
            type:PASSWORD_RESET_FAIL
        });

    };

};

export const reset_password_confirm = (password, re_new_password) => async dispatch =>{
    const config ={

        headers: {
            'Authorization': `Token 0983cd00685628d035930589b3d0a11eed9589ff`
        }
    };
    const body = {password: `${password}`};

    try{
        await axios.put(`${process.env.REACT_APP_API_URL}/api/v1/users/reset-password/`, body, config);
        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
            
        });
    } catch (err){
        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        });

    };
};

export const logout = () => dispatch =>{
    dispatch({
        type: LOGOUT
    });

};