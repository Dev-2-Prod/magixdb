import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Magixdb = styled.b`
  position: absolute;
  top: 16.1px;
  left: 65.1px;
  line-height: 67.61px;
  display: flex;
  align-items: center;
  width: 153.8px;
  height: 30.4px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 56.6px;
  height: 63.4px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 79.5px);
  width: 159px;
  height: 63.4px;
`;
const TopNav = styled.div`
  position: absolute;
  top: 20px;
  left: calc(50% - 80px);
  width: 159px;
  height: 63.4px;
  cursor: pointer;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 52px;
  font-weight: 600;
`;
const PleaseEnterYour = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 23px;
  color: var(--color-black);
  display: inline-block;
  width: 345px;
  height: 52px;
  flex-shrink: 0;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 176.5px);
  line-height: 29px;
  display: inline-block;
  width: 79.6px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 176.5px);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 353px;
  height: 52px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 168.5px);
  line-height: 26px;
  display: inline-block;
  width: 150px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 176.5px);
  width: 353px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray);
`;
const Email = styled.div`
  position: relative;
  width: 353px;
  height: 82px;
  text-align: left;
  font-size: var(--font-size-lg);
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 176.5px);
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-200);
  width: 353px;
  
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 28.5px);
  line-height: 26px;
  display: inline-block;
  width: 57px;
`;
const Submit = styled.div`
  position: relative;
  width: 353px;
  height: 50px;
  cursor: pointer;
  color: var(--color-white);
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: relative;
  line-height: 26px;
  color: var(--color-black);
  text-align: left;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 155px;
  left: calc(50% - 177px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;
const ForgotPasswordMobileRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 682px;
  overflow: hidden;
  text-align: left;
  font-size: 20.28px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;

const ForgotPasswordMobile = () => {
  const navigate = useNavigate();

  const onTopNavContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSubmitContainerClick = useCallback(() => {
    navigate("/newpassword");
  }, [navigate]);
  const onAlreadyClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <ForgotPasswordMobileRoot>
      <TopNav onClick={onTopNavContainerClick}>
        <MagixdbParent>
          <Magixdb>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-1@2x.png"
          />
        </MagixdbParent>
      </TopNav>
      <SignInToDhiwiseParent>
        <SignInTo>Forgot your password?</SignInTo>
        <PleaseEnterYour>
          Please enter your email address below to receive a password retrieval
          link.
        </PleaseEnterYour>
        <Email>
          <InputLabelmedium>Email address</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter email address
            </InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Submit onClick={onSubmitContainerClick}>
          <SubmitChild />
          <LogIn>Submit</LogIn>
        </Submit>
        <AlreadyHaveAnContainer onClick={onAlreadyClick}>
          {`Already have an account? `}
          <SignIn>Sign in</SignIn>
        </AlreadyHaveAnContainer>
      </SignInToDhiwiseParent>
    </ForgotPasswordMobileRoot>
  );
};

export default ForgotPasswordMobile;
