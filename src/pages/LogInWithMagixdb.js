import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const IphoneXOrNewerlightdefa = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 428px;
  height: 47px;
  overflow: hidden;
`;
const HomeIndicator = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% - 67px);
  border-radius: 100px;
  background-color: #000910;
  width: 134px;
  height: 5px;
`;
const HomeIndicatorlight = styled.div`
  position: absolute;
  top: 892px;
  left: 0px;
  width: 428px;
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
  width: 428px;
  height: 50px;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: 26px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 396px;
  height: 44px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 20.45%;
  left: 3.03%;
  line-height: 26px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: 0px;
  width: 396px;
  height: 44px;
  color: var(--color-silver);
`;
const Email = styled.div`
  position: absolute;
  height: 27.72%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 72.28%;
  left: 0%;
`;
const EyeoutlineIcon = styled.img`
  position: absolute;
  top: 12px;
  left: 364px;
  width: 20px;
  height: 20px;
  overflow: hidden;
`;
const Email1 = styled.div`
  position: absolute;
  height: 71.15%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 28.85%;
  left: 0%;
  font-size: var(--font-size-base);
`;
const InputLabelsmall = styled.div`
  position: absolute;
  top: 78.85%;
  left: 68.43%;
  line-height: 22px;
  color: var(--color-gray-100);
  text-align: right;
`;
const CheckboxChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.5px;
  background-color: var(--color-white);
  border: 0.8px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 20px;
  height: 20px;
`;
const Checkbox = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 20px;
  height: 20px;
`;
const InputLabelsmall1 = styled.div`
  position: absolute;
  top: 0%;
  left: 22.58%;
  line-height: 22px;
`;
const CheckboxParent = styled.div`
  position: absolute;
  top: 82px;
  left: 0px;
  width: 124px;
  height: 22px;
  color: var(--color-silver);
`;
const Password = styled.div`
  position: absolute;
  height: 38.95%;
  width: 100%;
  top: 33.33%;
  right: 0%;
  bottom: 27.72%;
  left: 0%;
  font-size: var(--font-size-sm);
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-100);
  width: 396px;
  height: 50px;
`;
const SignIn = styled.div`
  position: absolute;
  top: 12px;
  left: 173px;
  line-height: 26px;
`;
const Login = styled.div`
  position: absolute;
  top: 217px;
  left: 0px;
  width: 396px;
  height: 50px;
  text-align: center;
  color: var(--color-white);
`;
const EmailParent = styled.div`
  position: absolute;
  height: 51.05%;
  width: 99.75%;
  top: 0%;
  right: 0.25%;
  bottom: 48.95%;
  left: 0%;
`;
const OrContinueWith = styled.div`
  position: absolute;
  top: 0px;
  left: 138px;
  line-height: 26px;
`;
const GroupInner = styled.div`
  position: absolute;
  top: 12.5px;
  left: 266.5px;
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 130px;
  height: 1px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 12.5px;
  left: -0.5px;
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 131px;
  height: 1px;
`;
const OrContinueWithParent = styled.div`
  position: absolute;
  top: 291px;
  left: 0px;
  width: 396px;
  height: 26px;
  color: var(--color-silver);
`;
const LoginItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 396px;
  height: 50px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  cursor:pointer
  left: 0px;
  width: 396px;
  height: 50px;
`;
const SignInWith = styled.div`
  position: absolute;
  top: 0px;
  left: 30px;
  line-height: 26px;
`;
const Google1Icon = styled.img`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 24px;
  height: 24px;
  overflow: hidden;
`;
const SignInWithGoogleParent = styled.div`
  position: absolute;
  top: 12px;
  left: 109px;
  width: 176px;
  height: 26px;
`;
const SignInWithFacebookParent = styled.div`
  position: absolute;
  top: 12px;
  left: 109px;
  width: 197px;
  height: 26px;
`;
const LoginGroup = styled.div`
  position: absolute;
  cursor:pointer;
  top: 66px;
  left: 0px;
  width: 396px;
  height: 50px;
`;
const SignInWith2 = styled.div`
  position: absolute;
  top: 0px;
  left: 28px;
  line-height: 26px;
`;
const SignInWithLinkedinParent = styled.div`
  position: absolute;
  top: 12px;
  left: 109px;
  width: 183px;
  height: 26px;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 132px;
  cursor:pointer;
  left: 0px;
  width: 396px;
  height: 50px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 341px;
  left: 1px;
  width: 396px;
  height: 182px;
  text-align: center;
  color: var(--color-gray-100);
`;
const GroupParent = styled.div`
  position: absolute;
  height: 56.48%;
  width: 92.76%;
  top: 13.07%;
  right: 3.5%;
  bottom: 30.45%;
  left: 3.74%;
  text-align: left;
  font-size: var(--font-size-base);
`;
const LoginWithMagixdbRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: center;
  font-size: 24px;
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;

const LogInWithMagixdb = () => {
  const navigate = useNavigate();

  const onArrowLeftOutlineIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGmailLogin = useCallback(() => {
    window.location.replace("https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin");

  }, [navigate])
  const onOutlookLogin = useCallback(() => {
    
    window.location.replace('https://login.live.com/');
  }, [navigate])
  const onLinkedinLogin = useCallback(() => {
    window.location.replace('https://www.linkedin.com/login/');
    // navigate("https://www.linkedin.com/login/");
  }, [navigate])

  return (
    <LoginWithMagixdbRoot>
      
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
              <InputLabelmedium>Password</InputLabelmedium>
              <RectangleParent>
                <GroupChild />
                <EyeoutlineIcon alt="" src="/eyeoutline.svg" />
                <InputPlaceholdermediumon>
                  Enter Password
                </InputPlaceholdermediumon>
              </RectangleParent>
            </Email1>
            <InputLabelsmall>Forgot Password?</InputLabelsmall>
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
          <LoginParent onClick={onGmailLogin}>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithGoogleParent>
              <SignInWith>Sign in with Google</SignInWith>
              <Google1Icon alt="" src="/google-1.svg" />
            </SignInWithGoogleParent>
          </LoginParent>
          <LoginGroup onClick={onOutlookLogin}>
            <LoginParent>
              <LoginItem />
            </LoginParent>
            <SignInWithFacebookParent>
              <SignInWith>Sign in with Outlook</SignInWith>
              <Google1Icon alt="" src="/outlook.svg" />
            </SignInWithFacebookParent>
          </LoginGroup>
          <LoginContainer onClick={onLinkedinLogin}>
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
    </LoginWithMagixdbRoot>
  );
};

export default LogInWithMagixdb;
