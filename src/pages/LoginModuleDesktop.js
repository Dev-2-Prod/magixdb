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
  cursor: pointer;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 82.3px;
  height: 92.1px;
  object-fit: cover;
  cursor: pointer;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 419.45px);
  width: 318px;
  height: 92.1px;
  cursor: pointer;
`;
const SignIn = styled.div`
  position: relative;
  line-height: 24.29px;
`;
const ButtonChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 69.15px);
  border-radius: 5.61px;
  background-color: var(--color-gray-100);
  width: 138.3px;
  height: 46.7px;
`;
const PrimaryButton = styled.div`
  position: absolute;
  top: calc(50% - 12.35px);
  left: calc(50% - 58.75px);
  line-height: 24.29px;
`;
const Button = styled.div`
  position: relative;
  width: 138.3px;
  height: 46.7px;
  text-align: left;
  color: var(--color-white);
`;
const SignInParent = styled.div`
  position: absolute;
  top: 22px;
  left: 622.6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 27px;
  text-align: right;
  font-size: var(--font-size-base);
  color: #0d1624;
  font-family: var(--font-inter);
`;
const TopNav = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 417px);
  width: 838.9px;
  height: 92.1px;
`;
const SignInTo = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 145px);
  font-size: 32px;
  line-height: 52px;
  font-weight: 600;
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
  color: #9ea8ba;
`;
const Email = styled.div`
  position: absolute;
  height: 13.16%;
  top: 12.2%;
  bottom: 74.64%;
  left: calc(50% - 264px);
  width: 528px;
  text-align: left;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 264px);
  width: 528px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-silver);
`;
const Email1 = styled.div`
  position: absolute;
  height: 13.16%;
  top: 27.93%;
  bottom: 58.91%;
  left: calc(50% - 264px);
  width: 528px;
  text-align: left;
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
  top: 12px;
  left: calc(50% - 23px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: absolute;
  top: 317px;
  left: calc(50% - 264px);
  width: 528px;
  height: 50px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const InputLabelsmall = styled.div`
  position: absolute;
  top: 42.38%;
  left: calc(50% + 111px);
  line-height: 29px;
  color: var(--color-gray-100);
  text-align: right;
`;
const OrContinueWith1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 60px);
  line-height: 26px;
`;
const OrContinueWithChild = styled.div`
  position: absolute;
  top: 12.5px;
  left: calc(50% + 76.5px);
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 180px;
  height: 1px;
`;
const OrContinueWithItem = styled.div`
  position: absolute;
  top: 12.5px;
  left: calc(50% - 256.5px);
  background-color: var(--color-silver);
  border-top: 1px solid var(--color-silver);
  box-sizing: border-box;
  width: 181px;
  height: 1px;
`;
const OrContinueWith = styled.div`
  position: absolute;
  top: 391px;
  left: calc(50% - 256px);
  width: 512px;
  height: 26px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-silver);
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-7xs);
  border: 1px solid var(--color-gray-100);
  box-sizing: border-box;
  width: 528px;
  height: 50px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  cursor : pointer;
  left: calc(50% - 264px);
  width: 528px;
  height: 50px;
`;
const Google1Icon = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
  overflow: hidden;
  flex-shrink: 0;
`;
const SignInWith = styled.div`
  position: relative;
  line-height: 26px;
`;
const Google1Parent = styled.div`
  position: absolute;
  top: 12px;
  left: 174px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const Facebook1Parent = styled.div`
  position: absolute;
  top: 12px;
  left: 174px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-7xs);
`;
const LoginGroup = styled.div`
  position: absolute;
  top: 66px;
  cursor : pointer;
  left: calc(50% - 264px);
  width: 528px;
  height: 50px;
`;
const Linkedin11Parent = styled.div`
  position: absolute;
  top: 12px;
  left: 175px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;
const LoginContainer = styled.div`
  position: absolute;
  cursor : pointer;
  top: 132px;
  left: calc(50% - 264px);
  width: 528px;
  height: 50px;
`;
const GroupParent = styled.div`
  position: absolute;
  top: 441px;
  left: calc(50% - 264px);
  width: 528px;
  height: 182px;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 155px;
  left: calc(50% - 256px);
  width: 528px;
  height: 623px;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;
const SignuploginModuleDesktopRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: 29.47px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;

const LoginModuleDesktop = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMagixDBTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogo1RemovebgPreview1ImageClick = useCallback(() => {
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
    <SignuploginModuleDesktopRoot>
      <TopNav>
        <MagixdbParent onClick={onFrameContainerClick}>
          <Magixdb onClick={onMagixDBTextClick}>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-12@2x.png"
            onClick={onLogo1RemovebgPreview1ImageClick}
          />
        </MagixdbParent>
        <SignInParent>
          <SignIn>Sign in</SignIn>
          <Button>
            <ButtonChild />
            <PrimaryButton>Sign up for free</PrimaryButton>
          </Button>
        </SignInParent>
      </TopNav>
      <SignInToDhiwiseParent>
        <SignInTo>Sign in to MagixDB</SignInTo>
        <Email>
          <InputLabelmedium>Email</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>Enter Email</InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Email1>
          <InputLabelmedium>Password</InputLabelmedium>
          <RectangleGroup>
            <GroupChild />
            <InputPlaceholdermediumon>Enter Password</InputPlaceholdermediumon>
          </RectangleGroup>
        </Email1>
        <Submit>
          <SubmitChild />
          <LogIn>Log in</LogIn>
        </Submit>
        <InputLabelsmall>Forgot Password?</InputLabelsmall>
        <OrContinueWith>
          <OrContinueWith1>Or continue with</OrContinueWith1>
          <OrContinueWithChild />
          <OrContinueWithItem />
        </OrContinueWith>
        <GroupParent>
          <LoginParent onClick={onGmailLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <Google1Parent>
              <Google1Icon alt="" src="/google-1.svg" />
              <SignInWith>Sign in with Google</SignInWith>
            </Google1Parent>
          </LoginParent>
          <LoginGroup onClick={onOutlookLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <Facebook1Parent>
              <Google1Icon alt="" src="/outlook.svg" />
              <SignInWith>Sign in with Outlook</SignInWith>
            </Facebook1Parent>
          </LoginGroup>
          <LoginContainer onClick={onLinkedinLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <Linkedin11Parent>
              <Google1Icon alt="" src="/linkedin-1-1.svg" />
              <SignInWith>Sign in with Linkedin</SignInWith>
            </Linkedin11Parent>
          </LoginContainer>
        </GroupParent>
      </SignInToDhiwiseParent>
    </SignuploginModuleDesktopRoot>
  );
};

export default LoginModuleDesktop;
