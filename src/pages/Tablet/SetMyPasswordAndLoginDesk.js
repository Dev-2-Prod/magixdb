import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  cursor: pointer;
  top: 0px;
  left: calc(50% - 159px);
  width: 318px;
  height: 92.1px;
`;
const TopNav = styled.div`
  position: absolute;
  top: 39px;
  left: calc(50% - 334px);
  width: 318px;
  height: 92.1px;
`;
const SignInTo = styled.div`
  position: relative;
  font-size: var(--font-size-13xl);
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
  color: var(--color-darkgray);
`;
const Email = styled.div`
  position: relative;
  width: 528px;
  height: 82px;
  text-align: left;
`;
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
  left: calc(50% - 102px);
  line-height: 26px;
`;
const Submit = styled.div`
  position: relative;
  width: 528px;
  height: 50px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const SignInToDhiwiseParent = styled.div`
  position: absolute;
  top: calc(50% - 173px);
  left: calc(50% - 296px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 40px 32px;
  gap: var(--gap-5xl);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-200);
  font-family: var(--font-inter);
`;
const SetMyPasswordAndLoginTablRoot = styled.div`
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

const SetMyPasswordAndLoginTabl = () => {
    const navigate = useNavigate();
    const onLogoCLick = useCallback(() => {
        navigate("/");
      }, [navigate]);

  return (
    <SetMyPasswordAndLoginTablRoot>
      <TopNav>
        <MagixdbParent onClick={onLogoCLick}>
          <Magixdb>MagixDB</Magixdb>
          <Logo1RemovebgPreview1Icon
            alt=""
            src="/logo1removebgpreview-12@2x.png"
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
            <InputPlaceholdermediumon>
              Confirm new password
            </InputPlaceholdermediumon>
          </RectangleParent>
        </Email>
        <Submit>
          <SubmitChild />
          <LogIn>Set my password and login</LogIn>
        </Submit>
      </SignInToDhiwiseParent>
    </SetMyPasswordAndLoginTablRoot>
  );
};

export default SetMyPasswordAndLoginTabl;
