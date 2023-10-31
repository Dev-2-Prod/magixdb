import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-200);
  width: 528px;
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 28px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 264px);
  width: 528px;
  height: 50px;
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: absolute;
  top: 73px;
  left: 139px;
  line-height: 26px;
  color: var(--color-black);
  text-align: left;
  cursor: pointer;
`;
const SubmitParent = styled.div`
  position: absolute;
  top: 791px;
  left: calc(50% - 264px);
  width: 528px;
  height: 99px;
  text-align: center;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
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
  left: calc(50% - 340.15px);
  width: 318px;
  height: 92.1px;
`;
const SignIn1 = styled.div`
  position: relative;
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
  left: calc(50% + 123.85px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 27px;
  text-align: right;
  font-size: var(--font-size-base);
  color: var(--color-gray-100);
  font-family: var(--font-inter);
`;
const TopNav = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 340px);
  width: 680.3px;
  height: 92.1px;
  font-size: 29.47px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;
const SignInTo = styled.div`
  position: absolute;
  top: 190px;
  left: calc(50% - 151px);
  font-size: var(--font-size-13xl);
  line-height: 52px;
  font-weight: 600;
  text-align: center;
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
  position: absolute;
  height: 7.59%;
  top: 24.63%;
  bottom: 67.78%;
  left: calc(50% - 264px);
  width: 528px;
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
  height: 7.59%;
  top: 34.35%;
  bottom: 58.06%;
  left: calc(50% - 264px);
  width: 528px;
`;
const Email2 = styled.div`
  position: absolute;
  height: 7.59%;
  top: 44.07%;
  bottom: 48.33%;
  left: calc(50% - 264px);
  width: 528px;
`;
const Email3 = styled.div`
  position: absolute;
  height: 7.59%;
  top: 53.8%;
  bottom: 38.61%;
  left: calc(50% - 264px);
  width: 528px;
`;
const LanguageChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
`;
const IconParkOutlinedown = styled.img`
  position: absolute;
  height: 46.15%;
  width: 4.55%;
  top: 26.92%;
  right: 4%;
  bottom: 26.92%;
  left: 91.46%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SelectCompanySize = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
`;
const SelectCompanySizeWrapper = styled.div`
  position: absolute;
  height: 36.54%;
  width: 29.55%;
  top: 32.69%;
  right: 66.48%;
  bottom: 30.77%;
  left: 3.98%;
`;
const Email4 = styled.div`
  position: absolute;
  height: 7.59%;
  top: 63.52%;
  bottom: 28.89%;
  left: calc(50% - 264px);
  width: 528px;
`;
const SignupTablet768pxRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 1080px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;

const SignupTablet768px = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);
  const onLogoCLick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SignupTablet768pxRoot>
      <SubmitParent>
        <Submit>
          <SubmitChild />
          <LogIn>Sign up</LogIn>
        </Submit>
        <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
          {`Already have an account? `}
          <SignIn>Sign in</SignIn>
        </AlreadyHaveAnContainer>
      </SubmitParent>
      <TopNav>
        <MagixdbParent onClick={onLogoCLick}>
          <Magixdb>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-12@2x.png"
          />
        </MagixdbParent>
        <SignInParent>
          <SignIn1 onClick={onSignInTextClick}>Sign in</SignIn1>
          <Button>
            <ButtonChild />
            <PrimaryButton>Sign up for free</PrimaryButton>
          </Button>
        </SignInParent>
      </TopNav>
      <SignInTo>Sign up to MagixDB</SignInTo>
      <Email>
        <InputLabelmedium>Full name</InputLabelmedium>
        <RectangleParent>
          <GroupChild />
          <InputPlaceholdermediumon>Enter full name</InputPlaceholdermediumon>
        </RectangleParent>
      </Email>
      <Email1>
        <InputLabelmedium>Work email address</InputLabelmedium>
        <RectangleGroup>
          <GroupChild />
          <InputPlaceholdermediumon>
            Enter work email address
          </InputPlaceholdermediumon>
        </RectangleGroup>
      </Email1>
      <Email2>
        <InputLabelmedium>Company name</InputLabelmedium>
        <RectangleGroup>
          <GroupChild />
          <InputPlaceholdermediumon>
            Enter company name
          </InputPlaceholdermediumon>
        </RectangleGroup>
      </Email2>
      <Email3>
        <InputLabelmedium>Company phone</InputLabelmedium>
        <RectangleGroup>
          <GroupChild />
          <InputPlaceholdermediumon>
            Enter company phone
          </InputPlaceholdermediumon>
        </RectangleGroup>
      </Email3>
      <Email4>
        <InputLabelmedium>Company size</InputLabelmedium>
        <RectangleGroup>
          <LanguageChild />
          <IconParkOutlinedown alt="" src="/iconparkoutlinedown.svg" />
          <SelectCompanySizeWrapper>
            <SelectCompanySize>Select company size</SelectCompanySize>
          </SelectCompanySizeWrapper>
        </RectangleGroup>
      </Email4>
    </SignupTablet768pxRoot>
  );
};

export default SignupTablet768px;
