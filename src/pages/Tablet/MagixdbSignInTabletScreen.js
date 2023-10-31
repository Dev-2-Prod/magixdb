// import styled from "styled-components";
// import { useCallback } from "react";

// const Magixdb = styled.b`
//   position: absolute;
//   top: 0px;
//   left: 98.8px;
//   line-height: 102.67px;
// `;
// const Logo1RemovebgPreview1Icon = styled.img`
//   position: absolute;
//   top: 3.9px;
//   left: 0px;
//   width: 86px;
//   height: 96.3px;
//   object-fit: cover;
// `;
// const MagixdbParent = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 229.8px;
//   height: 103px;
// `;
// const ButtonChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 98px);
//   border-radius: 5.61px;
//   background-color: var(--color-gray-100);
//   width: 196px;
//   height: 56px;
// `;
// const PrimaryButton = styled.div`
//   position: absolute;
//   top: calc(50% - 13px);
//   left: calc(50% - 90px);
//   line-height: 24.29px;
//   display: inline-block;
//   width: 179px;
// `;
// const Button = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 40px);
//   width: 196px;
//   height: 56px;
// `;
// const SignIn = styled.div`
//   position: absolute;
//   top: 15px;
//   left: calc(50% - 156px);
//   line-height: 24.29px;
//   color: #0d1624;
//   text-align: right;
// `;
// const ButtonParent = styled.div`
//   position: absolute;
//   top: 23px;
//   left: calc(50% + 81px);
//   width: 312px;
//   height: 56px;
//   font-size: var(--font-size-5xl);
//   color: var(--color-white);
//   font-family: var(--font-inter);
// `;
// const GroupParent = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 393px);
//   width: 786px;
//   height: 103px;
// `;
// const TopNav = styled.div`
//   position: absolute;
//   top: 37px;
//   left: calc(50% - 403px);
//   width: 786px;
//   height: 103px;
// `;
// const SignInTo = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 145px);
//   font-size: var(--font-size-13xl);
//   line-height: 52px;
//   font-weight: 600;
// `;
// const InputLabelmedium = styled.div`
//   position: absolute;
//   top: 0%;
//   left: calc(50% - 264px);
//   line-height: 29px;
// `;
// const GroupChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 264px);
//   border-radius: var(--br-5xs);
//   background-color: var(--color-white);
//   border: 1px solid var(--color-gainsboro);
//   box-sizing: border-box;
//   width: 528px;
//   height: 52px;
// `;
// const InputPlaceholdermediumon = styled.div`
//   position: absolute;
//   top: 25%;
//   left: calc(50% - 252px);
//   line-height: 26px;
// `;
// const RectangleParent = styled.div`
//   position: absolute;
//   top: 30px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 52px;
//   font-size: var(--font-size-base);
//   color: #9ea8ba;
// `;
// const Email = styled.div`
//   position: absolute;
//   height: 13.16%;
//   top: 12.2%;
//   bottom: 74.64%;
//   left: calc(50% - 264px);
//   width: 528px;
//   text-align: left;
// `;
// const RectangleGroup = styled.div`
//   position: absolute;
//   top: 30px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 52px;
//   font-size: var(--font-size-base);
//   color: var(--color-silver);
// `;
// const Email1 = styled.div`
//   position: absolute;
//   height: 13.16%;
//   top: 27.93%;
//   bottom: 58.91%;
//   left: calc(50% - 264px);
//   width: 528px;
//   text-align: left;
// `;
// const SubmitChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 264px);
//   border-radius: var(--br-7xs);
//   background-color: var(--color-gray-100);
//   width: 528px;
//   height: 50px;
// `;
// const LogIn = styled.div`
//   position: absolute;
//   top: calc(50% - 13px);
//   left: calc(50% - 35px);
//   line-height: 26px;
// `;
// const Submit = styled.div`
//   position: absolute;
//   top: 317px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 50px;
//   font-size: var(--font-size-5xl);
//   color: var(--color-white);
// `;
// const InputLabelsmall = styled.div`
//   position: absolute;
//   top: 42.38%;
//   left: calc(50% + 111px);
//   line-height: 29px;
//   color: var(--color-gray-100);
//   text-align: right;
// `;
// const OrContinueWith1 = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 60px);
//   line-height: 26px;
// `;
// const OrContinueWithChild = styled.div`
//   position: absolute;
//   top: 12.5px;
//   left: calc(50% + 76.5px);
//   background-color: var(--color-silver);
//   border-top: 1px solid var(--color-silver);
//   box-sizing: border-box;
//   width: 180px;
//   height: 1px;
// `;
// const OrContinueWithItem = styled.div`
//   position: absolute;
//   top: 12.5px;
//   left: calc(50% - 256.5px);
//   background-color: var(--color-silver);
//   border-top: 1px solid var(--color-silver);
//   box-sizing: border-box;
//   width: 181px;
//   height: 1px;
// `;
// const OrContinueWith = styled.div`
//   position: absolute;
//   top: 391px;
//   left: calc(50% - 256px);
//   width: 512px;
//   height: 26px;
//   text-align: left;
//   font-size: var(--font-size-base);
//   color: var(--color-silver);
// `;
// const LoginChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 264px);
//   border-radius: var(--br-7xs);
//   border: 1px solid var(--color-gray-100);
//   box-sizing: border-box;
//   width: 528px;
//   height: 50px;
// `;
// const LoginParent = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 50px;
// `;
// const SignInWith = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 58px);
//   line-height: 26px;
// `;
// const Google1Icon = styled.img`
//   position: absolute;
//   top: 1px;
//   left: calc(50% - 88px);
//   width: 24px;
//   height: 24px;
//   overflow: hidden;
// `;
// const SignInWithGoogleParent = styled.div`
//   position: absolute;
//   top: 12px;
//   left: calc(50% - 87px);
//   width: 176px;
//   height: 26px;
// `;
// const SignInWith1 = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 68.5px);
//   line-height: 26px;
// `;
// const Facebook1Icon = styled.img`
//   position: absolute;
//   top: 1px;
//   left: calc(50% - 98.5px);
//   width: 24px;
//   height: 24px;
//   overflow: hidden;
// `;
// const SignInWithFacebookParent = styled.div`
//   position: absolute;
//   top: 12px;
//   left: calc(50% - 97px);
//   width: 197px;
//   height: 26px;
// `;
// const LoginGroup = styled.div`
//   position: absolute;
//   top: 66px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 50px;
// `;
// const SignInWith2 = styled.div`
//   position: absolute;
//   top: 0px;
//   left: calc(50% - 63.5px);
//   line-height: 26px;
// `;
// const Linkedin11 = styled.img`
//   position: absolute;
//   top: 1px;
//   left: calc(50% - 91.5px);
//   width: 24px;
//   height: 24px;
//   overflow: hidden;
// `;
// const SignInWithLinkedinParent = styled.div`
//   position: absolute;
//   top: 12px;
//   left: calc(50% - 89px);
//   width: 183px;
//   height: 26px;
// `;
// const LoginContainer = styled.div`
//   position: absolute;
//   top: 132px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 50px;
// `;
// const GroupContainer = styled.div`
//   position: absolute;
//   top: 441px;
//   left: calc(50% - 264px);
//   width: 528px;
//   height: 182px;
//   font-size: var(--font-size-base);
//   color: var(--color-gray-100);
// `;
// const SignInToDhiwiseParent = styled.div`
//   position: absolute;
//   top: 155px;
//   left: calc(50% - 256px);
//   width: 528px;
//   height: 623px;
//   text-align: center;
//   font-size: var(--font-size-lg);
//   color: var(--color-darkslategray-200);
//   font-family: var(--font-inter);
// `;
// const MagixdbSignUpTabletScreenRoot = styled.div`
//   position: relative;
//   background-color: var(--color-white);
//   width: 100%;
//   height: 1080px;
//   overflow: hidden;
//   text-align: left;
//   font-size: 30.8px;
//   color: var(--color-black);
//   font-family: var(--font-space-grotesk);
// `;

// const MagixdbSignInTabletScreen = () => {
  // const onGmailLogin = useCallback(() => {
  //   window.location.replace("https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin");

  // }, )
  // const onOutlookLogin = useCallback(() => {

  //   window.location.replace('https://login.live.com/');
  // }, )
  // const onLinkedinLogin = useCallback(() => {
  //   window.location.replace('https://www.linkedin.com/login/');
  //   // navigate("https://www.linkedin.com/login/");
  // }, )


//   return (
//     <MagixdbSignUpTabletScreenRoot>
//       <TopNav>
//         <GroupParent>
//           <MagixdbParent>
//             <Magixdb>MagixDB</Magixdb>
//             <Logo1RemovebgPreview1Icon
//               alt=""
//               src="/logo1removebgpreview-12@2x.png"
//             />
//           </MagixdbParent>
//           <ButtonParent>
//             <Button>
//               <ButtonChild />
//               <PrimaryButton>Sign up for free</PrimaryButton>
//             </Button>
//             <SignIn>Sign in</SignIn>
//           </ButtonParent>
//         </GroupParent>
//       </TopNav>
//       <SignInToDhiwiseParent>
//         <SignInTo>Sign in to MagixDB</SignInTo>
//         <Email>
//           <InputLabelmedium>Email</InputLabelmedium>
//           <RectangleParent>
//             <GroupChild />
//             <InputPlaceholdermediumon>Enter Email</InputPlaceholdermediumon>
//           </RectangleParent>
//         </Email>
//         <Email1>
//           <InputLabelmedium>Password</InputLabelmedium>
//           <RectangleGroup>
//             <GroupChild />
//             <InputPlaceholdermediumon>Enter Password</InputPlaceholdermediumon>
//           </RectangleGroup>
//         </Email1>
//         <Submit>
//           <SubmitChild />
//           <LogIn>Log in</LogIn>
//         </Submit>
//         <InputLabelsmall>Forgot Password?</InputLabelsmall>
//         <OrContinueWith>
//           <OrContinueWith1>Or continue with</OrContinueWith1>
//           <OrContinueWithChild />
//           <OrContinueWithItem />
//         </OrContinueWith>
//         <GroupContainer>
//           <LoginParent onClick={onGmailLogin}>
//             <LoginParent>
//               <LoginChild />
//             </LoginParent>
//             <SignInWithGoogleParent>
//               <SignInWith>Sign in with Google</SignInWith>
//               <Google1Icon alt="" src="/google-1.svg" />
//             </SignInWithGoogleParent>
//           </LoginParent>
//           <LoginGroup onClick={onOutlookLogin}>
//             <LoginParent>
//               <LoginChild />
//             </LoginParent>
//             <SignInWithFacebookParent>
//               <SignInWith1>Sign in with Outlook</SignInWith1>
//               <Facebook1Icon alt="" src="/outlook.svg" />
//             </SignInWithFacebookParent>
//           </LoginGroup>
//           <LoginContainer onClick={onLinkedinLogin}>
//             <LoginParent>
//               <LoginChild />
//             </LoginParent>
//             <SignInWithLinkedinParent>
//               <SignInWith2>Sign in with Linkedin</SignInWith2>
//               <Linkedin11 alt="" src="/linkedin-1-1.svg" />
//             </SignInWithLinkedinParent>
//           </LoginContainer>
//         </GroupContainer>
//       </SignInToDhiwiseParent>
//     </MagixdbSignUpTabletScreenRoot>
//   );
// };

// export default MagixdbSignInTabletScreen;
import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Magixdb = styled.b`
  position: absolute;
  top: 0px;
  left: 79.5px;
  line-height: 82.65px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 3.1px;
  left: 0px;
  width: 69.2px;
  height: 77.5px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 185.5px;
  height: 83px;
`;
const SignIn = styled.div`
  position: absolute;
  top: 11px;
  left: calc(50% + 22.65px);
  line-height: 24.29px;
  cursor: pointer;
`;
const ButtonChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 69.15px);
  border-radius: 5.61px;
  background-color: var(--color-gray-200);
  width: 138.3px;
  height: 46.7px;
`;
const PrimaryButton = styled.div`
  position: absolute;
  top: calc(50% - 12.35px);
  left: calc(50% - 25.15px);
  line-height: 24.29px;
`;
const Button = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 139.65px);
  width: 138.3px;
  height: 46.7px;
  text-align: left;
  color: var(--color-white);
`;
const SignInParent = styled.div`
  position: absolute;
  top: 19px;
  left: 404.5px;
  width: 279.3px;
  height: 46.7px;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const GroupParent = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 350px);
  width: 700px;
  height: 83px;
`;
const SignInTo = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 167.85px);
  font-size: 37.03px;
  line-height: 60.18px;
  font-weight: 600;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 305.55px);
  line-height: 33.56px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 305.55px);
  border-radius: 9.26px;
  background-color: var(--color-white);
  border: 1.2px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 611.1px;
  height: 60.2px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 24.92%;
  left: calc(50% - 291.65px);
  line-height: 30.09px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 34.7px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 60.2px;
  font-size: 18.52px;
  color: var(--color-darkgray);
`;
const Email = styled.div`
  position: absolute;
  height: 13.16%;
  top: 12.21%;
  bottom: 74.63%;
  left: calc(50% - 305.55px);
  width: 611.1px;
  text-align: left;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 34.7px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 60.2px;
  font-size: 18.52px;
  color: var(--color-silver);
`;
const Email1 = styled.div`
  position: absolute;
  height: 13.16%;
  top: 27.93%;
  bottom: 58.9%;
  left: calc(50% - 305.55px);
  width: 611.1px;
  text-align: left;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 305.55px);
  border-radius: 6.94px;
  background-color: var(--color-gray-200);
  width: 611.1px;
  height: 57.9px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 15.05px);
  left: calc(50% - 40.55px);
  line-height: 30.09px;
`;
const Submit = styled.div`
  position: absolute;
  top: 366.9px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 57.9px;
  font-size: 27.78px;
  color: var(--color-white);
`;
const InputLabelsmall = styled.div`
  position: absolute;
  top: 42.37%;
  left: calc(50% + 128.45px);
  line-height: 33.56px;
  color: var(--color-gray-200);
  text-align: right;
  cursor: pointer;
`;
const OrContinueWith1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 69.45px);
  line-height: 30.09px;
`;
const OrContinueWithChild = styled.div`
  position: absolute;
  top: 14.5px;
  left: calc(50% + 88.55px);
  background-color: var(--color-silver);
  border-top: 1.2px solid var(--color-silver);
  box-sizing: border-box;
  width: 208.3px;
  height: 1.2px;
`;
const OrContinueWithItem = styled.div`
  position: absolute;
  top: 14.5px;
  left: calc(50% - 296.85px);
  background-color: var(--color-silver);
  border-top: 1.2px solid var(--color-silver);
  box-sizing: border-box;
  width: 209.5px;
  height: 1.2px;
`;
const OrContinueWith = styled.div`
  position: absolute;
  top: 452.5px;
  left: calc(50% - 296.25px);
  width: 592.5px;
  height: 31px;
  text-align: left;
  font-size: 18.52px;
  color: var(--color-silver);
`;
const LoginChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 305.55px);
  border-radius: 6.94px;
  border: 1.2px solid var(--color-gray-200);
  box-sizing: border-box;
  width: 611.1px;
  height: 57.9px;
`;
const LoginParent = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 57.9px;
`;
const SignInWith = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 67.15px);
  line-height: 30.09px;
`;
const Google1Icon = styled.img`
  position: absolute;
  top: 1.2px;
  left: calc(50% - 101.85px);
  width: 27.8px;
  height: 27.8px;
  overflow: hidden;
`;
const SignInWithGoogleParent = styled.div`
  position: absolute;
  top: 13.9px;
  left: calc(50% - 100.75px);
  width: 203.7px;
  height: 31px;
`;
const SignInWith1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 79.15px);
  line-height: 30.09px;
`;
const Facebook1Icon = styled.img`
  position: absolute;
  top: 1.2px;
  left: calc(50% - 113.85px);
  width: 27.8px;
  height: 27.8px;
  overflow: hidden;
`;
const SignInWithFacebookParent = styled.div`
  position: absolute;
  top: 13.9px;
  left: calc(50% - 112.25px);
  width: 227.7px;
  height: 31px;
`;
const LoginGroup = styled.div`
  position: absolute;
  top: 76.4px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 57.9px;
`;
const SignInWith2 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 73.8px);
  line-height: 30.09px;
`;
const Linkedin11 = styled.img`
  position: absolute;
  top: 1.2px;
  left: calc(50% - 106.2px);
  width: 27.8px;
  height: 27.8px;
  overflow: hidden;
`;
const SignInWithLinkedinParent = styled.div`
  position: absolute;
  top: 13.9px;
  left: calc(50% - 103.05px);
  width: 212.4px;
  height: 31px;
`;
const LoginContainer = styled.div`
  position: absolute;
  top: 152.8px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 57.9px;
`;
const GroupContainer = styled.div`
  position: absolute;
  top: 510.4px;
  left: calc(50% - 305.55px);
  width: 611.1px;
  height: 210.6px;
  font-size: 18.52px;
  color: var(--color-gray-200);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 180px;
  left: calc(50% - 306px);
  width: 611.1px;
  height: 721px;
  text-align: center;
  font-size: 20.83px;
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;
const MagixdbSignInTabletScreenRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: 24.79px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;

const MagixdbSignInTabletScreen = () => {
  const navigate = useNavigate();

  const onSignInTextClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);
  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onInputLabelSmallTextClick = useCallback(() => {
    navigate("/forgotpassword");
  }, [navigate]);

  const onGmailLogin = useCallback(() => {
    window.location.replace("https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser&ec=asw-gmail-globalnav-signin");

  }, )
  const onOutlookLogin = useCallback(() => {

    window.location.replace('https://login.live.com/');
  }, )
  const onLinkedinLogin = useCallback(() => {
    window.location.replace('https://www.linkedin.com/login/');
    // navigate("https://www.linkedin.com/login/");
  }, )

  return (
    <MagixdbSignInTabletScreenRoot>
      <GroupParent>
        <MagixdbParent onClick={onLogoClick}>
          <Magixdb>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-12@2x.png"
          />
        </MagixdbParent>
        <SignInParent>
          <SignIn onClick={onSignInTextClick}>Sign up for free</SignIn>
          <Button>
            <ButtonChild />
            <PrimaryButton>Sign in</PrimaryButton>
          </Button>
        </SignInParent>
      </GroupParent>
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
        <InputLabelsmall onClick={onInputLabelSmallTextClick}>
          Forgot Password?
        </InputLabelsmall>
        <OrContinueWith>
          <OrContinueWith1>Or continue with</OrContinueWith1>
          <OrContinueWithChild />
          <OrContinueWithItem />
        </OrContinueWith>
        <GroupContainer>
          <LoginParent onClick={onGmailLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithGoogleParent >
              <SignInWith>Sign in with Google</SignInWith>
              <Google1Icon alt="" src="/google-1.svg" />
            </SignInWithGoogleParent>
          </LoginParent>
          <LoginGroup onClick={onOutlookLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithFacebookParent >
              <SignInWith1>Sign in with Outlook</SignInWith1>
              <Facebook1Icon alt="" src="/outlook.svg" />
            </SignInWithFacebookParent>
          </LoginGroup>
          <LoginContainer onClick={onLinkedinLogin}>
            <LoginParent>
              <LoginChild />
            </LoginParent>
            <SignInWithLinkedinParent>
              <SignInWith2>Sign in with Linkedin</SignInWith2>
              <Linkedin11 alt="" src="/linkedin-1-1.svg" />
            </SignInWithLinkedinParent>
          </LoginContainer>
        </GroupContainer>
      </SignInToDhiwiseParent>
    </MagixdbSignInTabletScreenRoot>
  );
};

export default MagixdbSignInTabletScreen;
