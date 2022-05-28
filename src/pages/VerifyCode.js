import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    StyledFormArea,
    StyledTitle,
    colors,
    StyledContainer
} from '../component/Styles'
import styled from "styled-components";
import ReactInputVerificationCode from "react-input-verification-code";
import {verify} from "./../auth/actions/auth";
import { useNavigate } from "react-router-dom";

export const StyledSeconds = styled.div`
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.002em;
  color: rgba(255, 255, 255, 0.4);
  color: #000000;
`;

const StyledError = styled.div`
  margin-top: 13px;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.004em;
  color: #000000;
`;

const StyledButton = styled.button`
  margin-top: 20px;
  background: #36c6d9;
  border-radius: 24px;
  border: none;
  outline: none;
  width: 312px;
  height: 48px;
`;

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

const VerifyCode = ({verify, form}) => {
    const [value, setValue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const [error, setError] = useState(null);
  
    const [seconds, setSeconds] = useState(null);
    let navigate = useNavigate();
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

                    {seconds && (
                        <StyledSeconds>{`Verification code has been re-sent (${seconds}s)`}</StyledSeconds>
                    )}

                    <StyledButton
                    
                        onClick={() => {
                            var obj = JSON.parse(form);
                            verify(obj.mobile_phone, value)
                            navigate("/signin");
                        }}
                    >
                        Send
                    </StyledButton>
                

                </StyledFormArea>

            </StyledContainer>
        </div>

    );

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    form: state.auth.form
  });
  
  export default connect(mapStateToProps, {verify})(VerifyCode);


