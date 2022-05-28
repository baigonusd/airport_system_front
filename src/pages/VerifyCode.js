import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../auth/actions/auth';
import {
    StyledFormArea,
    StyledTitle,
    colors,
    StyledContainer,
    StyledError,
    StyledSeconds,
    StyledButtonAct
} from '../component/Styles'
import styled from "styled-components";
import ReactInputVerificationCode from "react-input-verification-code";


const StyledReactInputVerificationCode = styled.div`
  display: flex;
  justify-content: center;

  --ReactInputVerificationCode-itemWidth: 40px;
  --ReactInputVerificationCode-itemHeight: 48px;
  --ReactInputVerificationCode-itemSpacing: 8px;

  .ReactInputVerificationCode__item {
    font-size: 16px;
    font-weight: 500;
    color: #000000;

    background: rgba(53, 67, 98, 1);
    border: 1px solid
      ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
    border-radius: 4px;
    box-shadow: none;
  }

  .ReactInputVerificationCode__item.is-active {
    box-shadow: none;
    border: 1px solid #36c6d9;
  }
`;

const VerifyCode = ({verify, match }) => {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const [error, setError] = useState(null);
    const [verified, setVerified] = useState(false);
    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/' />
    }


    
  
    //const [seconds, setSeconds] = useState(null);
    return (
        <div>
            <StyledContainer>
                {/* <Icon to="/"> Airport System</Icon> */}
                <StyledFormArea>
                    <StyledTitle color={colors.theme} size={25}> Enter the Verification Code! </StyledTitle>
                    <StyledReactInputVerificationCode isInvalid={isInvalid}>
                        <ReactInputVerificationCode
                            value={value}
                            placeholder={null}
                            length={4}
                            onChange={(newValue) => {
                                setValue(newValue);

                                if (newValue !== "") {
                                    setError(null);
                                }
                            }}
                        />
                    </StyledReactInputVerificationCode>
                    

                    {error && <StyledError>{error}</StyledError>}

                    {/* {seconds && (
                        <StyledSeconds>{`Verification code has been re-sent (${seconds}s)`}</StyledSeconds>
                    )}  */}

                    <StyledButtonAct
                        onClick={verify_account}
                    
                        // onClick={() => {
                        //     setValue("");
                        //     setError("Incorrect code. Please try again");
                        //     setIsInvalid(true);
                        //     setSeconds(60);

                        //     let mySeconds = 60;

                        //     // TODO Clear previos interval

                        //     const intervalId = setInterval(() => {
                        //         mySeconds = mySeconds - 1;
                        //         setSeconds(mySeconds);

                        //         if (mySeconds === 0) {
                        //             clearInterval(intervalId);
                        //             setSeconds(null);
                        //         }
                        //     }, 1000);

                        //     setTimeout(() => {
                        //         setIsInvalid(false);
                        //     }, 1000);
                        // }}
                    >
                        Send
                    </StyledButtonAct>
                

                </StyledFormArea>

            </StyledContainer>
        </div>

    );

};

export default connect(null, { verify })(VerifyCode);




