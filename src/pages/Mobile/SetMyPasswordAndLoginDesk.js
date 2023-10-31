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
  top: 34px;
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
const InputLabelmedium = styled.div`
  position: absolute;
  top: 0%;
  left: calc(50% - 174px);
  line-height: 29px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: var(--br-5xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-gainsboro);
  box-sizing: border-box;
  width: 348px;
  height: 52px;
`;
const InputPlaceholdermediumon = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 158.8px);
  line-height: 26px;
  display: inline-block;
  width: 195.6px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% - 174px);
  width: 348px;
  height: 52px;
  font-size: var(--font-size-base);
  color: var(--color-darkgray);
`;
const Email = styled.div`
  position: relative;
  width: 348px;
  height: 82px;
  text-align: left;
`;
const InputPlaceholdermediumon1 = styled.div`
  position: absolute;
  top: 25%;
  left: calc(50% - 158.8px);
  line-height: 26px;
  display: inline-block;
  width: 221px;
`;
const SubmitChild = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 174px);
  border-radius: var(--br-7xs);
  background-color: var(--color-gray-200);
  width: 348px;
  height: 50px;
`;
const LogIn = styled.div`
  position: absolute;
  top: calc(50% - 13px);
  left: calc(50% - 102px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: relative;
  width: 348px;
  height: 50px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: 122px;
  left: calc(50% - 170px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;
const SetMyPasswordAndLoginDeskRoot = styled.div`
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

const SetMyPasswordAndLoginDesk = () => {
  const navigate = useNavigate();

  const onTopNavContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <SetMyPasswordAndLoginDeskRoot>
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
        <SignInTo>Change password</SignInTo>
        <Email>
          <InputLabelmedium>New password</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon>
              Enter new password
            </InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Email>
          <InputLabelmedium>Confirm new password</InputLabelmedium>
          <RectangleParent>
            <GroupChild />
            <InputPlaceholdermediumon1>
              Confirm new password
            </InputPlaceholdermediumon1>
          </RectangleParent>
        </Email>
        <Submit>
          <SubmitChild />
          <LogIn>Set my password and login</LogIn>
        </Submit>
      </SignInToDhiwiseParent>
    </SetMyPasswordAndLoginDeskRoot>
  );
};

export default SetMyPasswordAndLoginDesk;
