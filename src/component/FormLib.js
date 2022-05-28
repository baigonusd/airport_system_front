
import { useState } from "react";
import {
    StyledTextInput,
    StyledLabel,
    ErrorMsg
} from './Styles';

//import {FiEyeOff, FiEye} from 'react-icons/fi';

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useState(props);
    //const [show, setshow] = useState(false);

    return (
        <div style={{ position: "relative" }}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            {props.type !=="password" && (
            <StyledTextInput 
            invalid={meta.touched && meta.error}
            {...field} 
            {...props}
            />)}

            {/* ?<RadioButtonLabel  */}





            {/* {props.type === "password" &&(
                <StyledTextInput
                invalid={meta.touched && meta.error}
                {...field} 
                {...props}
                type={show ? "text" : "password"}
                />
            )}
            <StyledIcon> {icon} </StyledIcon> */}
            {/* {
                props.type === "password" && (
                <StyledIcon onClick={() => setshow(!show)} right>
                   {show && <FiEye/>} 
                   {!show && <FiEyeOff/>} 
                </StyledIcon>
            )} */}

            {meta.touched && meta.error ?(
                <ErrorMsg>{meta.error}</ErrorMsg>
            ): (
                <ErrorMsg style={{visibility: "hidden"}}>.</ErrorMsg>

            )}

        </div>
    );
};