import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Magixdb = styled.b`
  position: absolute;
  top: 23.3px;
  left: 94.5px;
  line-height: 98.22px;
  display: flex;
  align-items: center;
  width: 223.5px;
  height: 44.2px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 82.3px;
  height: 92.1px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 159px);
  width: 318px;
  height: 92.1px;
`;
const TopNav = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 417px);
  width: 318px;
  height: 92.1px;
  cursor: pointer;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
  line-height: 52px;
  font-weight: 600;
`;
const PleaseEnterYour = styled.div`
  position: relative;
  line-height: 52px;
  color: var(--color-black);
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 264px);
  line-height: 29px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 528px;
  height: 52px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 252px);
  line-height: 26px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 264px);
  width: 528px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray);
`;
const Email = styled.div`
  position: relative;
  width: 528px;
  height: 82px;
  font-size: var(--font-size-lg);
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-100);
  width: 528px;
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 26px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: relative;
  width: 528px;
  height: 50px;
  cursor: pointer;
  text-align: center;
  color: var(--color-white);
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: relative;
  line-height: 26px;
  color: var(--color-black);
`;
const EmailParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 35px;
  text-align: left;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 155px;
  left: calc(50% - 281px);
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
const ForgotPasswordDesktopRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 682px;
  overflow: hidden;
  text-align: left;
  font-size: 29.47px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;

const ForgotPasswordDesktop = () => {
  const navigate = useNavigate();

  const onTopNavContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSubmitContainerClick = useCallback(() => {
    navigate("/newpassword");
  }, [navigate]);

  return (
    <ForgotPasswordDesktopRoot>
      <TopNav onClick={onTopNavContainerClick}>
        <MagixdbParent>
          <Magixdb>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-12@2x.png"
          />
        </MagixdbParent>
      </TopNav>
      <SignInToDhiwiseParent>
        <SignInTo>Forgot your password?</SignInTo>
        <PleaseEnterYour>
          Please enter your email address below to receive a password retrieval
          link.
        </PleaseEnterYour>
        <EmailParent>
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
          <AlreadyHaveAnContainer>
            {`Already have an account? `}
            <SignIn>Sign in</SignIn>
          </AlreadyHaveAnContainer>
        </EmailParent>
      </SignInToDhiwiseParent>
    </ForgotPasswordDesktopRoot>
  );
};

export default ForgotPasswordDesktop;
