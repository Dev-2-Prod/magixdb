import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Magixdb = styled.b`
  position: absolute;
  top: 0px;
  left: 92.3px;
  line-height: 95.85px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 3.6px;
  left: 0px;
  width: 80.3px;
  height: 89.9px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 14px;
  left: 27px;
  width: 215.3px;
  height: 96px;
`;
const Product = styled.div`
  position: relative;
  line-height: 23px;
  font-weight: 500;
`;
const LoginSignUp = styled.div`
  position: relative;
  line-height: 23px;
  font-weight: 500;
  cursor: pointer;
`;
const ProductParent = styled.div`
  position: absolute;
  top: 128px;
  left: calc(50% - 132.5px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36.574073791503906px 35.11111068725586px;
  gap: 38.04px;
  text-align: center;
  font-size: 29.26px;
  font-family: var(--font-dm-sans);
`;
const GroupParentRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 291px;
  height: 844px;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  text-align: left;
  font-size: 28.75px;
  color: var(--color-black);
  font-family: var(--font-space-grotesk);
`;

const Frame = () => {
  const navigate = useNavigate();

  const onLoginSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <GroupParentRoot>
      <MagixdbParent>
        <Magixdb>MagixDB</Magixdb>
        <Logo1RemovebgPreview1Icon
          alt=""
          src="/logo1removebgpreview-1@2x.png"
        />
      </MagixdbParent>
      <ProductParent>
        <Product>Product</Product>
        <Product>Pricing</Product>
        <Product>About us</Product>
        <LoginSignUp onClick={onLoginSignUpClick}>Login/ Sign up</LoginSignUp>
      </ProductParent>
    </GroupParentRoot>
  );
};

export default Frame;
