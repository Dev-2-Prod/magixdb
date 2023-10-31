import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const IphoneXOrNewerlightdefa = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 391px;
  height: 47px;
  overflow: hidden;
`;
const HomeIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% - 67px);
  border-radius: var(--br-81xl);
  background-color: var(--color-gray-100);
  width: 134px;
  height: 5px;
`;
const HomeIndicatorlight = styled.div`
  position: absolute;
  top: 892px;
  left: 0px;
  width: 390px;
  height: 34px;
`;
const ArrowLeftoutlineIcon = styled.img`
  position: absolute;
  top: 14px;
  left: 16px;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
`;
const EmailSignIn = styled.div`
  position: absolute;
  top: 6px;
  left: calc(50% - 109px);
  line-height: 39px;
  font-weight: 600;
`;
const ArrowLeftoutlineParent = styled.div`
  position: absolute;
  top: 47px;
  left: 0px;
  width: 390px;
  height: 50px;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  width: 11.42%;
  top: 0%;
  left: 0%;
  line-height: 23.46px;
  display: inline-block;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.41px;
  background-color: var(--color-white);
  border: 0.9px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 357.4px;
  height: 39.7px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  width: 32.46%;
  top: 19.9%;
  left: 2.38%;
  line-height: 23.46px;
  display: inline-block;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 27.1px;
  left: 1.5px;
  width: 357.4px;
  height: 39.7px;
  color: var(--color-silver);
`;
const Email = styled.div`
  position: absolute;
  height: 27.72%;
  width: 99.97%;
  top: 0%;
  right: 0.03%;
  bottom: 72.28%;
  left: 0%;
`;
const InputLabelmedium1 = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: 23.46px;
`;
const EyeoutlineIcon = styled.img`
  position: absolute;
  top: 10.8px;
  left: 328.5px;
  width: 18px;
  height: 18px;
  overflow: hidden;
`;
const EnterPassword = styled.div`
  position: absolute;
  top: 20.4%;
  left: 2.35%;
  line-height: 23.46px;
`;
const Email1 = styled.div`
  position: absolute;
  height: 71.06%;
  width: 99.97%;
  top: 0%;
  right: 0.03%;
  bottom: 28.94%;
  left: 0%;
  font-size: 14.44px;
`;
const InputLabelsmall = styled.div`
  position: absolute;
  width: 30.64%;
  top: 78.4%;
  left: 69.36%;
  line-height: 19.85px;
  color: var(--color-gray-200);
  text-align: right;
  display: inline-block;
  cursor: pointer;
`;
const CheckboxChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.26px;
  background-color: var(--color-white);
  border: 0.8px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 18px;
  height: 18px;
`;
const Checkbox = styled.div`
  position: absolute;
  top: 0.9px;
  left: 0px;
  width: 18px;
  height: 18px;
`;
const InputLabelsmall1 = styled.div`
  position: absolute;
  top: 0%;
  left: 19.82%;
  line-height: 19.85px;
`;
const CheckboxParent = styled.div`
  position: absolute;
  top: 74px;
  left: 1.5px;
  width: 108.5px;
  height: 20px;
  color: var(--color-silver);
`;
const Password = styled.div`
  position: absolute;
  height: 39%;
  width: 100%;
  top: 33.32%;
  right: 0%;
  bottom: 27.68%;
  left: 0%;
  font-size: 12.63px;
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.41px;
  background-color: var(--color-gray-200);
  width: 357.4px;
  height: 45.1px;
`;
const SignIn = styled.div`
  position: absolute;
  top: 10.8px;
  left: 156.1px;
  line-height: 23.46px;
`;
const Login = styled.div`
  position: absolute;
  top: 195.8px;
  left: 1.5px;
  width: 357.4px;
  height: 45.1px;
  text-align: center;
  color: var(--color-white);
`;
const EmailParent = styled.div`
  position: absolute;
  height: 51.06%;
  width: 99.78%;
  top: 0%;
  right: 0.22%;
  bottom: 48.94%;
  left: 0%;
`;
const OrContinueWith = styled.div`
  position: absolute;
  top: 0px;
  left: 124.5px;
  line-height: 23.46px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 11.3px;
  left: 240.5px;
  background-color: var(--color-silver);
  border-top: 0.9px solid var(--color-silver);
  box-sizing: border-box;
  width: 117.3px;
  height: 0.9px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 11.3px;
  left: -0.5px;
  background-color: var(--color-silver);
  border-top: 0.9px solid var(--color-silver);
  box-sizing: border-box;
  width: 118.2px;
  height: 0.9px;
`;
const OrContinueWithParent = styled.div`
  position: absolute;
  top: 262.6px;
  left: 1.5px;
  width: 357.4px;
  height: 24px;
  color: var(--color-silver);
`;
const LoginItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 5.41px;
  border: 0.9px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 357.4px;
  height: 45.1px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 357.4px;
  height: 45.1px;
`;
const SignInWith = styled.div`
  position: absolute;
  top: 0px;
  left: 27.1px;
  line-height: 23.46px;
`;
const Google1Icon = styled.img`
  position: absolute;
  top: 0.9px;
  left: 0px;
  width: 21.7px;
  height: 21.7px;
  overflow: hidden;
`;
const SignInWithGoogleParent = styled.div`
  position: absolute;
  top: 10.8px;
  left: 100.2px;
  width: 159.1px;
  height: 24px;
`;
const SignInWithFacebookParent = styled.div`
  position: absolute;
  top: 10.8px;
  left: 91.2px;
  width: 178.1px;
  height: 24px;
`;
const LoginGroup = styled.div`
  position: absolute;
  top: 59.6px;
  left: 0px;
  width: 357.4px;
  height: 45.1px;
`;
const SignInWith2 = styled.div`
  position: absolute;
  top: 0px;
  left: 25.3px;
  line-height: 23.46px;
`;
const SignInWithLinkedinParent = styled.div`
  position: absolute;
  top: 10.8px;
  left: 98.4px;
  width: 165.3px;
  height: 24px;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 119.1px;
  left: 0px;
  width: 357.4px;
  height: 45.1px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 307.7px;
  left: 2.4px;
  width: 357.4px;
  height: 164.3px;
  text-align: center;
  color: var(--color-gray-200);
`;
const GroupParent = styled.div`
  position: absolute;
  height: 50.97%;
  width: 92.26%;
  top: 13.07%;
  right: 3.9%;
  bottom: 35.96%;
  left: 3.85%;
  text-align: left;
  font-size: 14.44px;
`;
const SignUp = styled.span`
  text-decoration: underline;
`;
const DontHaveAnContainer = styled.div`
  position: absolute;
  top: 864px;
  left: calc(50% - 119px);
  font-size: var(--font-size-base);
  line-height: 19.85px;
  color: var(--color-black);
  text-align: right;
  cursor: pointer;
`;
const LoginWithMagixdbRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;

const LogInWithMagixdb = () => {
  const navigate = useNavigate();

  const onArrowLeftOutlineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInputLabelSmallTextClick = useCallback(() => {
    navigate("/forgotpassword");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <LoginWithMagixdbRoot>
      {/* <IphoneXOrNewerlightdefa
        alt=""
        src="/iphone-x-or-newerlightdefault.svg"
      /> */}
      <HomeIndicatorlight>
        <HomeIndicator />
      </HomeIndicatorlight>
      <ArrowLeftoutlineParent>
        <ArrowLeftoutlineIcon
          alt=""
          src="/arrowleftoutline.svg"
          onClick={onArrowLeftOutlineIconClick}
        />
        <EmailSignIn>Sign in to MagixDB</EmailSignIn>
      </ArrowLeftoutlineParent>
      <GroupParent>
        <EmailParent>
          <Email>
            <InputLabelmedium>Email</InputLabelmedium>
            <RectangleParent>
              <GroupChild />
              <InputPlaceholdermediumon>
                Enter Your Email
              </InputPlaceholdermediumon>
            </RectangleParent>
          </Email>
          <Password>
            <Email1>
              <InputLabelmedium1>Password</InputLabelmedium1>
              <RectangleParent>
                <GroupChild />
                <EyeoutlineIcon alt="" src="/eyeoutline.svg" />
                <EnterPassword>Enter Password</EnterPassword>
              </RectangleParent>
            </Email1>
            <InputLabelsmall onClick={onInputLabelSmallTextClick}>
              Forgot Password?
            </InputLabelsmall>
            <CheckboxParent>
              <Checkbox>
                <CheckboxChild />
              </Checkbox>
              <InputLabelsmall1>Remember me</InputLabelsmall1>
            </CheckboxParent>
          </Password>
          <Login>
            <LoginChild />
            <SignIn>Sign in</SignIn>
          </Login>
        </EmailParent>
        <OrContinueWithParent>
          <OrContinueWith>Or continue with</OrContinueWith>
          <GroupInner />
          <LineDiv />
        </OrContinueWithParent>
        <GroupContainer>
          <LoginParent>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithGoogleParent>
              <SignInWith>Sign in with Google</SignInWith>
              <Google1Icon alt="" src="/google-1.svg" />
            </SignInWithGoogleParent>
          </LoginParent>
          <LoginGroup>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithFacebookParent>
              <SignInWith>Sign in with Facebook</SignInWith>
              <Google1Icon alt="" src="/facebook-1.svg" />
            </SignInWithFacebookParent>
          </LoginGroup>
          <LoginContainer>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithLinkedinParent>
              <SignInWith2>Sign in with Linkedin</SignInWith2>
              <Google1Icon alt="" src="/linkedin-1-1.svg" />
            </SignInWithLinkedinParent>
          </LoginContainer>
        </GroupContainer>
      </GroupParent>
      <DontHaveAnContainer onClick={onDontHaveAnClick}>
        {`Don’t have an account? `}
        <SignUp>Sign up</SignUp>
      </DontHaveAnContainer>
    </LoginWithMagixdbRoot>
  );
};

export default LogInWithMagixdb;
