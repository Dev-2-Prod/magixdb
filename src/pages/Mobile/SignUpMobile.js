import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SignInTo = styled.div`
  position: relative;
  font-size: 27.84px;
  line-height: 30.4px;
  font-weight: 600;
  text-align: center;
`;
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 174px);
  line-height: 16.95px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: 4.68px;
  background-color: var(--color-white);
  border: 0.6px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 348px;
  height: 33.4px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 26.95%;
  left: calc(50% - 159.1px);
  line-height: 15.2px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 20.9px;
  left: calc(50% - 174px);
  width: 348px;
  height: 33.4px;
  color: var(--color-darkgray);
`;
const InputLabelmediumParent = styled.div`
  position: relative;
  width: 348px;
  height: 54.3px;
`;
const Component2Child = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: 4.68px;
  background-color: var(--color-white);
  border: 0.6px solid var(--color-gainsboro);
  box-sizing: border-box;
`;
const InputPlaceholdermediumon4 = styled.div`
  position: absolute;
  top: 26.95%;
  left: 4.28%;
  line-height: 15.2px;
`;
const IconParkOutlinedown = styled.img`
  position: absolute;
  height: 66.77%;
  width: 6.41%;
  top: 16.77%;
  right: 3.59%;
  bottom: 16.47%;
  left: 90%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: 4.68px;
  background-color: var(--color-gray-200);
  border: 0.6px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 348px;
  height: 33.4px;
`;
const InputPlaceholdermediumon5 = styled.div`
  position: absolute;
  top: calc(50% - 8.3px);
  left: calc(50% - 29.2px);
  line-height: 15.2px;
`;
const RectangleParent2 = styled.div`
  position: relative;
  width: 348px;
  height: 33.4px;
  color: var(--color-white);
`;
const SignIn = styled.span`
  text-decoration: underline;
`;
const AlreadyHaveAnContainer = styled.div`
  position: relative;
  line-height: 15.2px;
  color: var(--color-black);
  cursor: pointer;
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 122px;
  left: calc(50% - 174px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25.06px;
`;
const Magixdb = styled.b`
  position: absolute;
  top: 13.7px;
  left: 55.5px;
  line-height: 57.65px;
  display: flex;
  align-items: center;
  width: 131.2px;
  height: 25.9px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 48.3px;
  height: 54px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 24px;
  left: calc(50% - 68px);
  width: 135px;
  height: 54px;
  cursor: pointer;
  font-size: 17.3px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;
const SignupMobileRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-base-7);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;

const SignupMobile = () => {
  const navigate = useNavigate();

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SignupMobileRoot>
      <SignInToDhiwiseParent>
        <SignInTo>Sign up to MagixDB</SignInTo>
        <InputLabelmediumParent>
          <InputLabelmedium>Full name</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>Enter full name</InputPlaceholdermediumon>
          </RectangleParent>
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          <InputLabelmedium>Work email address</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter work email address
            </InputPlaceholdermediumon>
          </RectangleParent>
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          <InputLabelmedium>Company name</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter company name
            </InputPlaceholdermediumon>
          </RectangleParent>
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          <InputLabelmedium>Company phone</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter company phone
            </InputPlaceholdermediumon>
          </RectangleParent>
        </InputLabelmediumParent>
        <InputLabelmediumParent>
          <InputLabelmedium>Company size</InputLabelmedium>
          <RectangleParent>
            <Component2Child />
            <InputPlaceholdermediumon4>
              Select company size
            </InputPlaceholdermediumon4>
            <IconParkOutlinedown alt="" src="/iconparkoutlinedown1.svg" />
          </RectangleParent>
        </InputLabelmediumParent>
        <RectangleParent2>
          <GroupChild1 />
          <InputPlaceholdermediumon5>Sign up</InputPlaceholdermediumon5>
        </RectangleParent2>
        <AlreadyHaveAnContainer onClick={onAlreadyHaveAnClick}>
          {`Already have an account? `}
          <SignIn>Sign in</SignIn>
        </AlreadyHaveAnContainer>
      </SignInToDhiwiseParent>
      <MagixdbParent onClick={onFrameContainer1Click}>
        <Magixdb>MagixDB</Magixdb>
        <Logo1RemovebgPreview1Icon
          alt=""
          src="/logo1removebgpreview-11@2x.png"
        />
      </MagixdbParent>
    </SignupMobileRoot>
  );
};

export default SignupMobile;
