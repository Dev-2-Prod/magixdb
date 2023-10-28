import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "../company_animation/App";

const QueryYourDatabase = styled.b`
  position: absolute;
  top: 43.4px;
  left: calc(50% - 450.95px);
  letter-spacing: -1.73px;
  line-height: 70.57px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 902.7px;
`;
const Heading1 = styled.div`
  position: absolute;
  width: 98.3%;
  top: 0px;
  right: 0.85%;
  left: 0.85%;
  height: 158.4px;
`;
const WeProvideSupport = styled.p`
  margin: 0;
`;
const QueryYourDatabaseContainer1 = styled.span`
  font-size: 30px;
  line-break: anywhere;
  width: 100%;
`;
const QueryYourDatabaseContainer = styled.div`
  position: absolute;
  top: 2px;
  left: calc(50% - 356.55px);
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 713.3px;
  height: 77px;
`;
const P = styled.div`
  position: absolute;
  width: 120.03%;
  top: 178.4px;
  right: -10.02%;
  left: -10.02%;
  height: 81px;
  font-size: var(--font-size-9xl);
  color: var(--color-dimgray);
`;
const TryNow = styled.b`
  position: relative;
  line-height: 36.67px;
`;
const Button = styled.div`
  position: absolute;
  top: 290px;
  left: calc(50% - 143.95px);
  border-radius: 10.19px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 36.66666793823242px 76.14445495605469px 36.66666793823242px
    73.33333587646484px;
  cursor: pointer;
  font-size: 36px;
  color: var(--color-white);
`;
const AnalyticsPlatformHeroImageIcon = styled.video`
  position: absolute;
  top: 487px;
  left: calc(50% - 390.35px);
  width: 780.7px;
  height: 387.9px;
  object-fit: cover;
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  width: 60.94%;
  top: 170px;
  right: 19.54%;
  left: 19.53%;
  height: 974.8px;
  text-align: center;
  font-size: 63.27px;
`;
const AnalyticsPlatformOrganizeImIcon = styled.img`
  position: absolute;
  top: calc(50% - 247.75px);
  left: calc(50% - 270.55px);
  border-radius: 21.43px;
  width: 541px;
  height: 538.4px;
  object-fit: cover;
`;
const DivelementorWidgetWrap1 = styled.div`
  position: relative;
  border-radius: 21.43px;
  background-color: var(--color-whitesmoke-200);
  width: 455.3px;
  height: 452.7px;
`;
const TalkWithYour = styled.b`
  position: absolute;
  top: calc(50% - 63.5px);
  left: calc(50% - 286px);
  letter-spacing: -1.39px;
  line-height: 61.71px;
  display: flex;
  align-items: center;
  width: 554px;
  height: 127px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 62px;
  left: 11px;
  width: 562px;
  height: 155px;
`;
const FireYourQueryContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  line-height: 28.92px;
  display: flex;
  align-items: center;
  width: 562px;
  height: 135px;
`;
const P1 = styled.div`
  position: absolute;
  top: 239px;
  left: 11px;
  width: 562px;
  height: 137px;
  font-size: var(--font-size-9xl);
  color: var(--color-dimgray);
`;
const SpanelementorDividerSeparat = styled.div`
  position: absolute;
  width: calc(100% - 72px);
  top: 384.1px;
  right: 61.3px;
  left: 10.7px;
  border-top: 1.1px solid var(--color-dimgray);
  box-sizing: border-box;
  height: 1.1px;
`;
const DivelementorWidgetWrap2 = styled.div`
  position: relative;
  width: 583.8px;
  height: 495.6px;
`;
const DivelementorWidgetWrapParent = styled.div`
  position: absolute;
  top: 1870px;
  left: calc(50% - 595.5px);
  width: 1191px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 144px;
  font-size: var(--font-size-31xl);
`;
const SettingUpMagixdb = styled.b`
  position: absolute;
  top: -1.9px;
  left: 0px;
  letter-spacing: -1.25px;
  line-height: 55.42px;
  display: flex;
  align-items: center;
  width: 499px;
  height: 114.1px;
`;
const Heading21 = styled.div`
  position: absolute;
  top: 47.9px;
  left: 9.6px;
  width: 505.1px;
  height: 110.8px;
  font-size: var(--font-size-31xl);
`;
const TellUsYour = styled.div`
  position: absolute;
  top: 1.9px;
  left: 29.3px;
  line-height: 25.98px;
  display: flex;
  align-items: center;
  width: 465.1px;
  height: 22.1px;
`;
const Div = styled.div`
  position: absolute;
  top: 6.3px;
  left: 0px;
  font-size: 13.47px;
  line-height: 13.47px;
  font-family: var(--font-font-awesome-5-free);
  color: var(--color-mediumslateblue);
  display: flex;
  align-items: center;
  width: 13.7px;
  height: 13.5px;
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 505.1px;
  height: 33.7px;
`;
const StartQueryingYour = styled.div`
  position: absolute;
  top: 1.5px;
  left: 29.4px;
  line-height: 25.98px;
  display: flex;
  align-items: center;
  width: 476px;
  height: 23px;
`;
const Item1 = styled.div`
  position: absolute;
  top: 41.4px;
  left: 0px;
  width: 505.1px;
  height: 26px;
`;
const UpdateTheForm = styled.div`
  position: absolute;
  top: 2.3px;
  left: 29.4px;
  line-height: 25.98px;
  display: flex;
  align-items: center;
  width: 476px;
  height: 53px;
`;
const Item2 = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  width: 505px;
  height: 55px;
`;
const List = styled.div`
  position: absolute;
  top: 177.8px;
  left: 10px;
  width: 505px;
  height: 151px;
  color: var(--color-dimgray);
`;
const GetStarted = styled.b`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 9px);
  left: calc(50% - 67.75px);
  line-height: 17.32px;
  display: inline-block;
  z-index: 0;
`;
const Button1 = styled.div`
  position: absolute;
  top: 345.8px;
  left: 10px;
  border-radius: 4.81px;
  background-color: var(--color-gray-100);
  height: 68px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 17.317230224609375px 35.894771575927734px 17.317230224609375px
    34.63446044921875px;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-white);
`;
const DivelementorWidgetWrap3 = styled.div`
  position: relative;
  width: 541.6px;
  height: 477.2px;
`;
const Heading22 = styled.b`
  position: absolute;
  top: 17.3px;
  left: 24px;
  letter-spacing: -1.25px;
  line-height: 55.42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 19.5px;
  height: 58.7px;
`;
const Heading4 = styled.b`
  position: relative;
  letter-spacing: -0.62px;
  line-height: 27.71px;
`;
const FillTheForm = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20.2px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 301px;
  margin-top: -0.2px;
`;
const DivbdtEpAdvancedIconBoxC = styled.div`
  position: absolute;
  top: 22px;
  left: 67.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.971687376499176px;
  text-align: left;
  font-size: var(--font-size-5xl);
`;
const Section1 = styled.div`
  position: absolute;
  width: calc(100% - 19.2px);
  top: 23.1px;
  right: 81.7px;
  left: -62.5px;
  border-radius: 5.77px;
  background-color: var(--color-white);
  box-shadow: 0px 9.6px 48.1px -9.62px rgba(0, 0, 0, 0.15);
  height: 93.9px;
  overflow: hidden;
`;
const Heading23 = styled.b`
  position: absolute;
  top: 17.3px;
  left: 20.5px;
  letter-spacing: -1.25px;
  line-height: 55.42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26.5px;
  height: 58.7px;
`;
const SelectYourPlan = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20.2px;
  color: var(--color-dimgray);
  margin-top: -0.19px;
`;
const DivbdtEpAdvancedIconBoxC1 = styled.div`
  position: absolute;
  top: 22px;
  left: 67.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.9620683789253235px;
  text-align: left;
  font-size: var(--font-size-5xl);
`;
const Section2 = styled.div`
  position: absolute;
  width: calc(100% - 19.2px);
  top: 140.1px;
  right: -62.6px;
  left: 81.8px;
  border-radius: 5.77px;
  background-color: var(--color-white);
  box-shadow: 0px 9.6px 48.1px -9.62px rgba(0, 0, 0, 0.15);
  height: 93.9px;
  overflow: hidden;
`;
const Heading24 = styled.b`
  position: absolute;
  top: 17.3px;
  left: 20.3px;
  letter-spacing: -1.25px;
  line-height: 55.42px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 58.7px;
`;
const ReceiveYourApi = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20.2px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 300px;
  margin-top: -0.2px;
`;
const Section3 = styled.div`
  position: absolute;
  width: calc(100% - 19.2px);
  top: 257px;
  right: 81.8px;
  left: -62.6px;
  border-radius: 5.77px;
  background-color: var(--color-white);
  box-shadow: 0px 9.6px 48.1px -9.62px rgba(0, 0, 0, 0.15);
  height: 93.9px;
  overflow: hidden;
  opacity: 0.99;
`;
const TalkWithYour1 = styled.div`
  position: relative;
  font-size: var(--font-size-base);
  line-height: 20.2px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 301px;
  margin-top: -0.19px;
`;
const Section4 = styled.div`
  position: absolute;
  width: calc(100% - 19.2px);
  top: 374.2px;
  right: -62.6px;
  left: 81.8px;
  border-radius: 5.77px;
  background-color: var(--color-white);
  box-shadow: 0px 9.6px 48.1px -9.62px rgba(0, 0, 0, 0.15);
  height: 94.3px;
  overflow: hidden;
`;
const DivelementorWidgetWrap4 = styled.div`
  position: relative;
  border-radius: 19.24px;
  background-color: var(--color-whitesmoke-200);
  width: 387.7px;
  height: 519.5px;
  text-align: center;
  font-size: 46.18px;
`;
const DivelementorWidgetWrapGroup = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 582.5px);
  width: 1165px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 133px;
`;
const Section = styled.div`
  position: absolute;
  top: 2456px;
  left: calc(50% - 588.5px);
  width: 1177px;
  height: 531px;
`;
const Heading3 = styled.b`
  position: absolute;
  top: 70px;
  left: 70px;
  font-size: var(--font-size-21xl);
  letter-spacing: -0.86px;
  line-height: 38.4px;
`;
const Heading31 = styled.b`
  position: absolute;
  top: 70px;
  left: 249.9px;
  font-size: var(--font-size-21xl);
  letter-spacing: -0.86px;
  line-height: 38.4px;
  color: var(--color-mediumslateblue);
`;
const Database = styled.div`
  position: absolute;
  top: 118px;
  left: 70px;
  line-height: 24px;
  color: var(--color-dimgray);
`;
const DatabaseQueringOf = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 226px;
  height: 45px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 3.5px;
  left: 0px;
  font-size: var(--font-size-mid);
  line-height: 17px;
  font-family: var(--font-font-awesome-5-free);
  display: flex;
  align-items: center;
  width: 17.2px;
  height: 17px;
`;
const Item3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 252px;
  height: 46px;
`;
const UnlimitedQuerying = styled.div`
  position: absolute;
  top: 1.4px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 224px;
  height: 21px;
`;
const Item4 = styled.div`
  position: absolute;
  top: 58.6px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const UnlimitedSupport = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 224px;
  height: 21px;
`;
const Item5 = styled.div`
  position: absolute;
  top: 105px;
  left: 0px;
  width: 250px;
  height: 34px;
`;
const Item6 = styled.div`
  position: absolute;
  top: 151px;
  left: 0px;
  width: 250px;
  height: 34px;
`;
const UnlimitedUser = styled.div`
  position: absolute;
  top: 5px;
  left: 30px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 220px;
  height: 21px;
`;
const Item7 = styled.div`
  position: absolute;
  top: 197px;
  left: 0px;
  width: 250px;
  height: 34px;
`;
const List1 = styled.div`
  position: absolute;
  top: 166px;
  left: 70px;
  width: 252px;
  height: 244px;
`;
const ChoosePlan = styled.b`
  position: absolute;
  top: 18px;
  left: 49.9px;
  line-height: 18px;
`;
const Button2 = styled.div`
  position: absolute;
  width: calc(100% - 140.3px);
  top: 434.4px;
  right: 70.3px;
  left: 70px;
  border-radius: var(--br-8xs);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  height: 56px;
  text-align: center;
`;
const DivelementorWidgetWrap5 = styled.div`
  position: absolute;
  width: calc(100% + 8.3px);
  top: -10px;
  right: -24.3px;
  left: 16px;
  height: 552px;
`;
const Section5 = styled.div`
  position: absolute;
  top: -21px;
  left: calc(50% - 411.5px);
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 0px 20px 40px rgba(95, 95, 95, 0.17);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  width: 382.7px;
  height: 540.4px;
`;
const Heading32 = styled.b`
  position: absolute;
  top: 60px;
  left: 70px;
  font-size: var(--font-size-21xl);
  letter-spacing: -0.86px;
  line-height: 38.4px;
`;
const Heading33 = styled.b`
  position: absolute;
  top: 60px;
  left: 266.9px;
  font-size: var(--font-size-21xl);
  letter-spacing: -0.86px;
  line-height: 38.4px;
  color: var(--color-mediumslateblue);
`;
const Database1 = styled.div`
  position: absolute;
  top: 108px;
  left: 70px;
  line-height: 24px;
`;
const DatabasesOfYour = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 243px;
  height: 41px;
`;
const Item8 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 269px;
  height: 46px;
`;
const UnlimitedQuerying1 = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 240px;
  height: 21px;
`;
const Item9 = styled.div`
  position: absolute;
  top: 58px;
  left: 0px;
  width: 266px;
  height: 34px;
`;
const UnlimitedSupport1 = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 221px;
  height: 21px;
`;
const Item10 = styled.div`
  position: absolute;
  top: 104px;
  left: 0px;
  width: 266px;
  height: 34px;
`;
const DaysFreeTrial1 = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 211px;
  height: 21px;
`;
const Item11 = styled.div`
  position: absolute;
  top: 150px;
  left: 0px;
  width: 269px;
  height: 34px;
`;
const UnlimitedUser1 = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 184px;
  height: 21px;
`;
const Item12 = styled.div`
  position: absolute;
  top: 196px;
  left: 0px;
  width: 266px;
  height: 34px;
`;
const List2 = styled.div`
  position: absolute;
  top: 166px;
  left: 70px;
  width: 269px;
  height: 244px;
`;
const Button3 = styled.div`
  position: absolute;
  width: calc(100% - 140px);
  top: 424.4px;
  right: 70px;
  left: 70px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  height: 56px;
  text-align: center;
  color: var(--color-darkslategray-100);
`;
const DivelementorWidgetWrap6 = styled.div`
  position: absolute;
  top: -21px;
  left: calc(50% + 29.5px);
  border-radius: var(--br-xl);
  width: 382.7px;
  height: 540.4px;
  background-image: url("/divelementorwidgetwrap@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--color-white);
`;
const DivelementorSection = styled.div`
  position: absolute;
  width: 100%;
  top: 3765px;
  right: 0px;
  left: 0px;
  background: linear-gradient(180deg, #fff 40%, #f5f8f3 40%);
  height: 683px;
`;
const Heading26 = styled.b`
  position: absolute;
  top: -1px;
  left: calc(50% - 319.95px);
  font-size: var(--font-size-31xl);
  letter-spacing: -1.29px;
  line-height: 57.29px;
`;
const WhetherYoureLookingContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 31px;
  line-height: 26.85px;
  display: flex;
  align-items: center;
  width: 806px;
  height: 50px;
`;
const P2 = styled.div`
  position: absolute;
  top: 77.2px;
  left: calc(50% - 385.85px);
  width: 828px;
  height: 54px;
  color: var(--color-dimgray);
`;
const WhatKindOf = styled.div`
  position: absolute;
  top: 10.5px;
  left: 20.1px;
  line-height: 21.48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 440px;
  height: 45px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 21.5px;
  left: 521.2px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 4.97px;
  background-color: var(--color-white);
  width: 562px;
  height: 65.2px;
  overflow: hidden;
`;
const IsItEasy = styled.div`
  position: absolute;
  top: 20.9px;
  left: 21.9px;
  line-height: 21.48px;
  font-weight: 500;
`;
const Div14 = styled.div`
  position: absolute;
  top: 24.4px;
  left: 523.2px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const Heading5 = styled.div`
  position: absolute;
  top: 89.1px;
  left: 0px;
  border-radius: 4.97px;
  background-color: var(--color-white);
  width: 562px;
  height: 65.2px;
  overflow: hidden;
`;
const Div15 = styled.div`
  position: absolute;
  top: 24.3px;
  left: 523.2px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const Heading6 = styled.div`
  position: absolute;
  top: 178.2px;
  left: 0px;
  border-radius: 4.97px;
  background-color: var(--color-white);
  width: 562px;
  height: 65.2px;
  overflow: hidden;
`;
const WhichDatabasesDoes = styled.div`
  position: absolute;
  top: 11.2px;
  left: 21.1px;
  line-height: 21.48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 469px;
`;
const Div16 = styled.div`
  position: absolute;
  top: 23.2px;
  left: 522.2px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const Heading7 = styled.div`
  position: absolute;
  top: 267.3px;
  left: 0px;
  border-radius: 4.97px;
  background-color: var(--color-white);
  width: 562px;
  height: 65.2px;
  overflow: hidden;
`;
const DivbdtEpAccordion241177b = styled.div`
  position: absolute;
  top: 9.9px;
  left: 9.9px;
  width: 562px;
  height: 332.6px;
`;
const WhatHappensWhen = styled.div`
  position: absolute;
  top: 13.5px;
  left: 23.2px;
  line-height: 21.48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 458px;
  height: 39px;
`;
const Div17 = styled.div`
  position: absolute;
  top: 25.5px;
  left: 524.3px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const WhatKindOf1 = styled.div`
  position: absolute;
  top: 10.4px;
  left: 22.2px;
  line-height: 21.48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 393px;
  height: 45px;
`;
const Div18 = styled.div`
  position: absolute;
  top: 23.4px;
  left: 523.3px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const CanICollaborate = styled.div`
  position: absolute;
  top: 10.3px;
  left: 22.2px;
  line-height: 21.48px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 420px;
  height: 44px;
`;
const Div19 = styled.div`
  position: absolute;
  top: 22.3px;
  left: 523.3px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const WhatIsThe = styled.div`
  position: absolute;
  top: 21.2px;
  left: 21.9px;
  line-height: 21.48px;
  font-weight: 500;
`;
const Div20 = styled.div`
  position: absolute;
  top: 22.2px;
  left: 523.3px;
  font-size: 19.03px;
  line-height: 19.03px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.9px;
  height: 19px;
`;
const DivbdtEpAccordion19c020e = styled.div`
  position: absolute;
  top: 9.9px;
  left: 591.8px;
  width: 562px;
  height: 332.6px;
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: 160.7px;
  left: calc(50% - 581.85px);
  width: 1163.7px;
  height: 352.5px;
  text-align: left;
`;
const DivelementorWidgetWrap7 = styled.div`
  position: absolute;
  top: 23.8px;
  left: calc(50% - 581.5px);
  width: 1163.7px;
  height: 513.2px;
`;
const DivelementorSection1 = styled.div`
  position: absolute;
  width: 100%;
  top: 4448px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 578px;
  text-align: center;
`;
const Logo1webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 30.35px);
  left: calc(50% - 481px);
  width: 158.4px;
  height: 62px;
  object-fit: cover;
`;
const Logo4webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 30.35px);
  left: calc(50% - 213.1px);
  width: 158.4px;
  height: 62px;
  object-fit: cover;
`;
const Logo3webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 30.35px);
  left: calc(50% + 54.7px);
  width: 158.4px;
  height: 62px;
  object-fit: cover;
`;
const Logo2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 30.35px);
  left: calc(50% + 322.6px);
  width: 158.4px;
  height: 62px;
  object-fit: cover;
`;
const DivelementorContainer1 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 476.5px);
  width: 954px;
  height: 81.1px;
`;
const PoweredByMost = styled.b`
  position: absolute;
  top: 24.7px;
  left: 0px;
  letter-spacing: -0.99px;
  line-height: 43.83px;
  display: flex;
  align-items: center;
  width: 449.5px;
  height: 90.4px;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 21.9px;
  left: 17.3px;
  width: 578px;
  height: 140.6px;
`;
const B = styled.b`
  position: absolute;
  top: 0px;
  left: -10.2px;
  line-height: 65.74px;
`;
const ActiveUsers = styled.div`
  position: absolute;
  top: 65.7px;
  left: -46.9px;
  font-size: var(--font-size-13xl);
  line-height: 24.65px;
`;
const DivbdtEpAdvancedCounterCo = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: calc(50% - 48.5px);
  width: 98px;
  height: 90.4px;
  z-index: 0;
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 24.2px;
  left: 91.6px;
  width: 183px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 37.4365234375px 0px 0px;
  box-sizing: border-box;
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  top: 21.9px;
  right: 27.4px;
  width: 365.2px;
  height: 140.6px;
  text-align: center;
  font-size: var(--font-size-31xl);
`;
const DivelementorContainer2 = styled.div`
  position: absolute;
  top: 32.9px;
  left: calc(50% - 467.5px);
  width: 935px;
  height: 195.4px;
`;
const Section6 = styled.div`
  position: absolute;
  top: 147px;
  left: calc(50% - 467.5px);
  border-radius: 13.7px;
  border: 0.9px solid var(--color-white);
  box-sizing: border-box;
  width: 935px;
  height: 256.6px;
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  width: calc(100% - 750px);
  top: 50px;
  right: 375px;
  left: 375px;
  height: 437.5px;
`;
const DivelementorSection2 = styled.div`
  position: absolute;
  width: 100%;
  top: 3077px;
  right: 0px;
  left: 0px;
  height: 567.5px;
  background-image: url("/divelementorsection@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: 35.61px;
  color: var(--color-white);
`;
const ExploreOurCuttingEdge = styled.b`
  position: absolute;
  top: calc(50% - 59.5px);
  left: calc(50% - 454px);
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 908px;
  height: 119px;
`;
const Heading28 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 433px);
  width: 908px;
  height: 115px;
  font-size: 47px;
`;
const ProvideYourEmail = styled.div`
  position: absolute;
  top: 2px;
  left: calc(50% - 430px);
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 860px;
  height: 50px;
`;
const P3 = styled.div`
  position: absolute;
  top: 145px;
  left: calc(50% - 403px);
  width: 860px;
  height: 54px;
  color: rgba(255, 255, 255, 0.64);
`;
const EnterYourMail = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  width: 305px;
  height: 49px;
`;
const Input = styled.div`
  position: absolute;
  top: 16px;
  left: 45px;
  width: 305px;
  height: 49px;
  overflow: hidden;
`;
const GetFreeTrial = styled.b`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 8.5px);
  left: calc(50% - 74.55px);
  line-height: 18px;
  display: inline-block;
  z-index: 0;
`;
const Button4 = styled.div`
  position: absolute;
  width: calc(100% - 521.7px);
  top: calc(50% - 18px);
  right: 50.7px;
  left: 471px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gray-100);
  height: 69px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) 37.27000427246094px var(--padding-lg) 36px;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-white);
`;
const Form = styled.div`
  position: absolute;
  top: 8px;
  left: calc(50% - 370px);
  width: 745px;
  height: 54px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 239px;
  left: calc(50% - 348px);
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 778px;
  height: 102px;
  text-align: left;
  color: var(--color-dimgray);
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  width: calc(100% - 750px);
  top: 80px;
  right: 375px;
  left: 375px;
  height: 319.2px;
`;
const Section7 = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  top: 5026px;
  right: 0px;
  left: -1px;
  height: 514px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  color: var(--color-white);
`;
const Heading29 = styled.b`
  position: absolute;
  top: -2px;
  left: calc(50% - 320.6px);
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 642.4px;
  height: 61px;
`;
const WithMagixdbApi = styled.div`
  position: absolute;
  top: calc(50% - 44.5px);
  left: calc(50% - 464px);
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 928px;
  height: 89px;
`;
const P4 = styled.div`
  position: absolute;
  top: 78px;
  left: calc(50% - 464.5px);
  width: 928px;
  height: 111px;
  font-size: var(--font-size-5xl);
  color: var(--color-dimgray);
`;
const SpanbdtEpAdvancedIconBox = styled.img`
  position: absolute;
  top: 8.3px;
  left: calc(50% - 40.9px);
  border-radius: 14.08px;
  width: 83.1px;
  height: 83.1px;
  overflow: hidden;
`;
const Heading44 = styled.b`
  position: absolute;
  top: 9.7px;
  left: calc(50% - 105.3px);
  letter-spacing: -0.41px;
  line-height: 18.43px;
`;
const IdentifyTrendsInContainer = styled.div`
  position: absolute;
  top: calc(50% - 39.45px);
  left: calc(50% - 149.6px);
  line-height: 23.67px;
  display: flex;
  align-items: center;
  width: 299.2px;
  height: 79px;
`;
const P5 = styled.div`
  position: absolute;
  top: 51.3px;
  left: calc(50% - 149.6px);
  width: 299.2px;
  height: 101.1px;
  font-size: 24.94px;
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC4 = styled.div`
  position: absolute;
  top: 98.4px;
  left: 1.4px;
  width: 299.2px;
  height: 175.9px;
`;
const DivbdtEpAdvancedIconBox = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 150.3px);
  width: 300.6px;
  height: 274.3px;
`;
const Div51 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300.6px;
  height: 274.3px;
`;
const SpanbdtEpAdvancedIconBox1 = styled.img`
  position: absolute;
  top: 8.3px;
  left: calc(50% - 40.9px);
  border-radius: 13.41px;
  width: 83.1px;
  height: 83.1px;
  overflow: hidden;
`;
const Heading45 = styled.b`
  position: absolute;
  top: 4.2px;
  left: calc(50% - 149.6px);
  letter-spacing: -0.41px;
  line-height: 25.35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299.2px;
`;
const QueryDynamicallyAnd = styled.div`
  position: absolute;
  top: calc(50% - 39.45px);
  left: calc(50% - 149.6px);
  line-height: 23.67px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299.2px;
  height: 79px;
`;
const P6 = styled.div`
  position: absolute;
  top: 66.5px;
  left: calc(50% - 149.6px);
  width: 299.2px;
  height: 101.1px;
  font-size: 24.94px;
  color: var(--color-dimgray);
`;
const Div61 = styled.div`
  position: absolute;
  top: 0px;
  left: 356px;
  width: 300.6px;
  height: 274.3px;
`;
const Div5Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 656.7px;
  height: 274.3px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 302px;
  left: 306.2px;
  width: 44.3px;
  height: 16.6px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 656.7px;
  height: 318.6px;
`;
const Heading46 = styled.b`
  position: absolute;
  top: 16.6px;
  left: calc(50% - 149.6px);
  letter-spacing: -0.41px;
  line-height: 25.35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 299.2px;
`;
const Heading47 = styled.b`
  position: absolute;
  top: 16.6px;
  left: calc(50% - 77.6px);
  letter-spacing: -0.41px;
  line-height: 25.35px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 712.1px;
  width: 656.7px;
  height: 318.6px;
`;
const Section8 = styled.div`
  position: absolute;
  top: 194.4px;
  left: calc(50% - 356.5px);
  width: 712.1px;
  height: 318.6px;
  overflow: hidden;
  font-size: 27.71px;
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  top: calc(50% - 235.5px);
  left: calc(50% - 270.5px);
  width: 541px;
  height: 470.4px;
`;
const DivelementorWidgetWrapWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 1185px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 605px;
  overflow: hidden;
  text-align: center;
  font-size: var(--font-size-31xl);
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: relative;
  width: 67px;
  height: 71.7px;
  object-fit: cover;
`;
const Magixdb = styled.b`
  position: relative;
  font-size: 28.99px;
  line-height: 96.62px;
`;
const EnhanceThePower = styled.div`
  position: absolute;
  top: calc(50% - 42px);
  left: calc(50% - 205px);
  line-height: 26.52px;
  display: flex;
  align-items: center;
  width: 384px;
  height: 83px;
`;
const P9 = styled.div`
  position: relative;
  width: 410px;
  height: 82px;
  color: var(--color-dimgray);
`;
const ItemLink = styled.div`
  position: absolute;
  top: -0.4px;
  left: 0px;
  line-height: 26.52px;
  font-weight: 500;
`;
const ItemLink1 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 0px;
  line-height: 26.52px;
  font-weight: 500;
`;
const List3 = styled.div`
  position: relative;
  width: 410px;
  height: 64.8px;
  color: var(--color-midnightblue);
`;
const DivelementorWidgetWrap12 = styled.div`
  position: absolute;
  width: calc(100% - 739px);
  top: 0px;
  right: 739px;
  left: 0px;
  height: 288px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.9821428060531616px 0px;
  box-sizing: border-box;
  gap: 10.8px;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const Heading48 = styled.b`
  position: absolute;
  top: 8.9px;
  left: 9.8px;
  letter-spacing: -0.64px;
  line-height: 28.29px;
`;
const ItemLink2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 26.52px;
`;
const ItemLink3 = styled.div`
  position: absolute;
  top: 38.3px;
  left: 0px;
  line-height: 26.52px;
`;
const ItemLink4 = styled.div`
  position: absolute;
  top: 76.6px;
  left: 0px;
  line-height: 26.52px;
`;
const ItemLink5 = styled.div`
  position: absolute;
  top: 114.9px;
  left: 0px;
  line-height: 26.52px;
`;
const List4 = styled.div`
  position: absolute;
  top: 57.7px;
  left: 9.8px;
  width: 209.7px;
  height: 141.4px;
  font-size: var(--font-size-5xl);
`;
const DivelementorWidgetWrap13 = styled.div`
  position: absolute;
  width: calc(100% - 884px);
  top: 0px;
  right: 461px;
  left: 423px;
  height: 288px;
`;
const List5 = styled.div`
  position: absolute;
  top: 57.7px;
  left: 9.8px;
  width: 210.7px;
  height: 103.1px;
  font-size: var(--font-size-5xl);
`;
const DivelementorWidgetWrap14 = styled.div`
  position: absolute;
  width: calc(100% - 918px);
  top: 0px;
  right: 230px;
  left: 688px;
  height: 288px;
`;
const ItemLink10 = styled.div`
  position: absolute;
  top: 40.3px;
  left: 0.2px;
  line-height: 26.52px;
  display: flex;
  align-items: center;
  width: 145px;
  height: 23px;
`;
const ItemLink11 = styled.div`
  position: absolute;
  top: 78.3px;
  left: 0.2px;
  line-height: 26.52px;
  display: flex;
  align-items: center;
  width: 55px;
  height: 23px;
`;
const ItemLink12 = styled.div`
  position: absolute;
  top: 117.3px;
  left: 0.2px;
  line-height: 26.52px;
  display: flex;
  align-items: center;
  width: 100px;
  height: 22px;
`;
const List6 = styled.div`
  position: absolute;
  top: 57.7px;
  left: 9.8px;
  width: 210.4px;
  height: 141.4px;
  font-size: var(--font-size-5xl);
`;
const DivelementorWidgetWrap15 = styled.div`
  position: absolute;
  width: calc(100% - 919px);
  top: 0px;
  right: 0px;
  left: 919px;
  height: 288px;
`;
const Section9 = styled.div`
  position: absolute;
  top: 62px;
  left: calc(50% - 574.5px);
  width: 1149px;
  height: 288px;
`;
const Copyright2023 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 278.05px);
  line-height: 24px;
`;
const P10 = styled.div`
  position: absolute;
  top: 35px;
  left: calc(50% - 385.5px);
  width: 772.7px;
  height: 24px;
`;
const DivelementorSection4 = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--color-gray-100);
  height: 94px;
  font-size: var(--font-size-5xl);
  color: var(--color-white);
`;
const DivelementorSection3 = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  top: 0px;
  right: -1px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 541px;
`;
const Footer = styled.div`
  position: absolute;
  width: calc(100% - 1px);
  top: 5540px;
  right: 1px;
  left: 0px;
  height: 541px;
  font-size: var(--font-size-13xl);
`;
const ArticleMain = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 5897px;
`;
const Divprimary = styled.div`
  position: absolute;
  width: 100%;
  top: 83px;
  right: 0px;
  left: 0px;
  background-color: var(--color-white);
  height: 5540px;
`;
const ItemLink13 = styled.b`
  position: relative;
  line-height: 80px;
  cursor: pointer;
`;
const ItemLink14 = styled.b`
  position: relative;
  line-height: 80px;
`;
const List7 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1.1100006103515625px 0px 0px 15px;
  gap: 29.29px;
`;
const Spanbar = styled.div`
  position: absolute;
  top: calc(50% - 7.4px);
  left: calc(50% - 10px);
  border-radius: var(--br-881xl);
  background-color: var(--color-darkslategray-100);
  width: 20px;
  height: 2px;
`;
const Pseudo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-881xl);
  background-color: var(--color-darkslategray-100);
  width: 16px;
  height: 2px;
`;
const Spanbar1 = styled.div`
  position: absolute;
  top: calc(50% - 1px);
  left: calc(50% - 10px);
  border-radius: var(--br-881xl);
  background-color: var(--color-darkslategray-100);
  width: 16px;
  height: 2px;
`;
const Spanbar2 = styled.div`
  position: absolute;
  top: calc(50% + 5.4px);
  left: calc(50% - 10px);
  border-radius: var(--br-881xl);
  background-color: var(--color-darkslategray-100);
  width: 20px;
  height: 2px;
`;
const Button5 = styled.div`
  position: relative;
  width: 20px;
  height: 15px;
`;
const DivuicoreNavMenu = styled.div`
  position: absolute;
  top: -0.1px;
  right: 88.1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;
const Magixdb1 = styled.b`
  position: absolute;
  top: 0px;
  left: 77px;
  line-height: 80px;
`;
const Logo1RemovebgPreview1Icon1 = styled.img`
  position: absolute;
  top: 3px;
  left: 0px;
  width: 67px;
  height: 75px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 5px;
  left: 59px;
  width: 180px;
  height: 80px;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const Nav = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 81px;
`;
const DivuicoreHeaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 3082px);
  left: calc(50% - 645.5px);
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 1px 0px #dcdcdc;
  width: 1291px;
  height: 81px;
  font-size: var(--font-size-base);
`;
const DivuicorePage = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 6164px;
`;
const MagixdbVersion1FinalllllTaRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 6164px;
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-space-grotesk);
`;

const MagixDBTablet = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divelementorWidgetWrapContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemLink13Click = useCallback(() => {
    navigate("/magixdb-sign-uptablet-screen");
  }, [navigate]);

  const onItemLink16Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divelementorSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <MagixdbVersion1FinalllllTaRoot>
      <DivuicorePage>
        <Divprimary>
          <ArticleMain>
            <DivelementorWidgetWrap>
              <Heading1>
                <QueryYourDatabase>
                  Query your database like a PRO
                </QueryYourDatabase>
              </Heading1>
              <P>
                <QueryYourDatabaseContainer>
                  <QueryYourDatabaseContainer1>
                    <WeProvideSupport>
                      Query your database in natural language.
                    </WeProvideSupport>
                    <WeProvideSupport>
                      We provide support to 20+ databases.
                    </WeProvideSupport>
                  </QueryYourDatabaseContainer1>
                </QueryYourDatabaseContainer>
              </P>
              <Button onClick={onButtonContainerClick}>
                <TryNow>Try Now</TryNow>
              </Button>
              <AnalyticsPlatformHeroImageIcon  source src="SQLite.mp4" type="video/mp4" muted={true} controls={true}
              >
                <source src="SQLite.mp4" type="video/mp4" />
              </AnalyticsPlatformHeroImageIcon>
            </DivelementorWidgetWrap>
            <DivelementorWidgetWrapParent>
              <DivelementorWidgetWrap1>
                <AnalyticsPlatformOrganizeImIcon
                  alt=""
                  src="/analyticsplatformorganizeimagewebp@2x.png"
                />
              </DivelementorWidgetWrap1>
              <DivelementorWidgetWrap2>
                <Heading2>
                  <TalkWithYour>
                    Talk with your databases in English
                  </TalkWithYour>
                </Heading2>
                <P1>
                  <FireYourQueryContainer>
                    <QueryYourDatabaseContainer1>
                      <WeProvideSupport>{`Fire your query in plain English instead of database query language. `}</WeProvideSupport>
                      <WeProvideSupport>
                        Let our AI do all the magic
                      </WeProvideSupport>
                    </QueryYourDatabaseContainer1>
                  </FireYourQueryContainer>
                </P1>
                <SpanelementorDividerSeparat />
              </DivelementorWidgetWrap2>
            </DivelementorWidgetWrapParent>
            <Section>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap3 data-scroll-to="divelementorWidgetWrapContainer">
                  <Heading21>
                    <SettingUpMagixdb>
                      Setting up MagixDB is simple
                    </SettingUpMagixdb>
                  </Heading21>
                  <List>
                    <Item>
                      <TellUsYour>Tell us your database schema .</TellUsYour>
                      <Div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875Z" fill="#3866FF" />
                    </svg></Div>
                    </Item>
                    <Item1>
                      <StartQueryingYour>
                        Start querying your database.
                      </StartQueryingYour>
                      <Div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875Z" fill="#3866FF" />
                    </svg></Div>
                    </Item1>
                    <Item2>
                      <UpdateTheForm>
                        Update the form only when Database Schema changes
                      </UpdateTheForm>
                      <Div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875Z" fill="#3866FF" />
                    </svg></Div>
                    </Item2>
                  </List>
                  <Button1>
                    <GetStarted>Get Started</GetStarted>
                  </Button1>
                </DivelementorWidgetWrap3>
                <DivelementorWidgetWrap4>
                  <Section1>
                    <Heading22>1</Heading22>
                    <DivbdtEpAdvancedIconBoxC>
                      <Heading4>Fill Form</Heading4>
                      <FillTheForm>
                        Fill the form for providing information regarding your
                        database.
                      </FillTheForm>
                    </DivbdtEpAdvancedIconBoxC>
                  </Section1>
                  <Section2>
                    <Heading23>2</Heading23>
                    <DivbdtEpAdvancedIconBoxC1>
                      <Heading4>Make Payment</Heading4>
                      <SelectYourPlan>
                        Select your plan and make payment
                      </SelectYourPlan>
                    </DivbdtEpAdvancedIconBoxC1>
                  </Section2>
                  <Section3>
                    <Heading24>3</Heading24>
                    <DivbdtEpAdvancedIconBoxC1>
                      <Heading4>Recieve API</Heading4>
                      <ReceiveYourApi>
                        Receive your API on platform and E-mail
                      </ReceiveYourApi>
                    </DivbdtEpAdvancedIconBoxC1>
                  </Section3>
                  <Section4>
                    <Heading23>4</Heading23>
                    <DivbdtEpAdvancedIconBoxC1>
                      <Heading4>Start Quering</Heading4>
                      <TalkWithYour1>
                        Talk with your database in plain English.
                      </TalkWithYour1>
                    </DivbdtEpAdvancedIconBoxC1>
                  </Section4>
                </DivelementorWidgetWrap4>
              </DivelementorWidgetWrapGroup>
            </Section>
            <DivelementorSection>
              <Section5>
                <DivelementorWidgetWrap5>
                  <Heading3>Standard</Heading3>
                  <Heading31>$59</Heading31>
                  <Database>1 Database</Database>
                  <List1>
                    <Item3>
                      <DatabaseQueringOf>
                        1 database quering of your choice
                      </DatabaseQueringOf>
                      <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                        </svg></Div3>
                    </Item3>
                    <Item4>
                      <UnlimitedQuerying>Unlimited Querying</UnlimitedQuerying>
                      <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                        </svg></Div3>
                    </Item4>
                    <Item5>
                      <UnlimitedSupport>Unlimited Support</UnlimitedSupport>
                      <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                        </svg></Div3>
                    </Item5>
                    <Item6>
                      <UnlimitedSupport>15 Days Free Trial</UnlimitedSupport>
                      <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                        </svg></Div3>
                    </Item6>
                    <Item7>
                      <UnlimitedUser>Unlimited user</UnlimitedUser>
                      <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                        </svg></Div3>
                    </Item7>
                  </List1>
                  <Button2>
                    <ChoosePlan>Choose plan</ChoosePlan>
                  </Button2>
                </DivelementorWidgetWrap5>
              </Section5>
              <DivelementorWidgetWrap6>
                <Heading32>Advanced</Heading32>
                <Heading33>$89</Heading33>
                <Database1>2 Database</Database1>
                <List2>
                  <Item8>
                    <DatabasesOfYour>
                      2 Databases of your Choice
                    </DatabasesOfYour>
                    <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg></Div3>
                  </Item8>
                  <Item9>
                    <UnlimitedQuerying1>Unlimited Querying</UnlimitedQuerying1>
                    <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg></Div3>
                  </Item9>
                  <Item10>
                    <UnlimitedSupport1>Unlimited Support</UnlimitedSupport1>
                    <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg></Div3>
                  </Item10>
                  <Item11>
                    <DaysFreeTrial1>15 Days Free Trial</DaysFreeTrial1>
                    <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                      </svg></Div3>
                  </Item11>
                  <Item12>
                    <UnlimitedUser1>Unlimited user</UnlimitedUser1>
                    <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                      </svg></Div3>
                  </Item12>
                </List2>
                <Button3>
                  <ChoosePlan>Choose plan</ChoosePlan>
                </Button3>
              </DivelementorWidgetWrap6>
            </DivelementorSection>
            <DivelementorSection1>
              <DivelementorWidgetWrap7>
                <Heading26>Frequently asked questions</Heading26>
                <P2>
                  <WhetherYoureLookingContainer>
                    <QueryYourDatabaseContainer1>
                      <WeProvideSupport>
                        Whether you’re looking to improve your marketing
                        strategy or
                      </WeProvideSupport>
                      <WeProvideSupport>
                        optimize your operations, our platform has you covered.
                      </WeProvideSupport>
                    </QueryYourDatabaseContainer1>
                  </WhetherYoureLookingContainer>
                </P2>
                <DivelementorContainer>
                  <DivbdtEpAccordion241177b>
                    <Heading>
                      <WhatKindOf>
                        What kind of data can I visualize with this platform?
                      </WhatKindOf>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div13>
                    </Heading>
                    <Heading5>
                      <IsItEasy>Is it easy to use?</IsItEasy>
                      <Div14><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div14>
                    </Heading5>
                    <Heading6>
                      <IsItEasy>Can I get real-time insights?</IsItEasy>
                      <Div15><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div15>
                    </Heading6>
                    <Heading7>
                      <WhichDatabasesDoes>
                        Which databases does MagixDB supports?
                      </WhichDatabasesDoes>
                      <Div16><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div16>
                    </Heading7>
                  </DivbdtEpAccordion241177b>
                  <DivbdtEpAccordion19c020e>
                    <Heading>
                      <WhatHappensWhen>
                        What happens when a new data is added to my DB?
                      </WhatHappensWhen>
                      <Div17><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div17>
                    </Heading>
                    <Heading5>
                      <WhatKindOf1>
                        What kind of visualizations are available?
                      </WhatKindOf1>
                      <Div18><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div18>
                    </Heading5>
                    <Heading6>
                      <CanICollaborate>
                        Can I collaborate with my team on this platform?
                      </CanICollaborate>
                      <Div19><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div19>
                    </Heading6>
                    <Heading7>
                      <WhatIsThe>What is the cost of this platform?</WhatIsThe>
                      <Div20><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg></Div20>
                    </Heading7>
                  </DivbdtEpAccordion19c020e>
                </DivelementorContainer>
              </DivelementorWidgetWrap7>
            </DivelementorSection1>
            <DivelementorSection2>
              <DivelementorWidgetWrap8>
                <DivelementorContainer1>
                  <Carousel/>
                  {/* <Logo1webpIcon alt="" src="/logo1webp@2x.png" />
                  <Logo4webpIcon alt="" src="/logo4webp@2x.png" />
                  <Logo3webpIcon alt="" src="/logo3webp@2x.png" />
                  <Logo2webpIcon alt="" src="/logo2webp@2x.png" /> */}
                </DivelementorContainer1>
                <Section6>
                  <DivelementorContainer2>
                    <Heading27>
                      <PoweredByMost>
                        Powered by most advanced Generative AI technologies
                      </PoweredByMost>
                    </Heading27>
                    <DivelementorWidgetWrap9>
                      <DivelementorWidgetContainer>
                        <DivbdtEpAdvancedCounterCo>
                          <B>100+</B>
                          <ActiveUsers>Active Users</ActiveUsers>
                        </DivbdtEpAdvancedCounterCo>
                      </DivelementorWidgetContainer>
                    </DivelementorWidgetWrap9>
                  </DivelementorContainer2>
                </Section6>
              </DivelementorWidgetWrap8>
            </DivelementorSection2>
            <Section7>
              <DivelementorWidgetWrap10>
                <Heading28>
                  <ExploreOurCuttingEdge>
                    Explore our cutting-edge API today and elevate your data
                    experience.
                  </ExploreOurCuttingEdge>
                </Heading28>
                <P3>
                  <ProvideYourEmail>
                    Provide your email address to receive a link to access the
                    API subscription form.
                  </ProvideYourEmail>
                </P3>
                <DivelementorWidgetContainer1>
                  <Form>
                    <Input>
                      <EnterYourMail>Enter your mail address</EnterYourMail>
                    </Input>
                    <Button4>
                      <GetFreeTrial>Get Free Trial</GetFreeTrial>
                    </Button4>
                  </Form>
                </DivelementorWidgetContainer1>
              </DivelementorWidgetWrap10>
            </Section7>
            <DivelementorWidgetWrapWrapper>
              <DivelementorWidgetWrap11>
                <Heading29>What makes us different</Heading29>
                <P4>
                  <WithMagixdbApi>
                    With "MagixDB API", you bring simplicity, efficiency, and
                    ease to your operations, empowering you to compete
                    confidently in today's data-driven world.
                  </WithMagixdbApi>
                </P4>
                <Section8>
                  <FrameParent>
                    <Div5Parent>
                      <Div51>
                        <DivbdtEpAdvancedIconBox>
                          <SpanbdtEpAdvancedIconBox
                            alt=""
                            src="/spanbdtepadvancediconboxiconwrap.svg"
                          />
                          <DivbdtEpAdvancedIconBoxC4>
                            <Heading44>Visualise results</Heading44>
                            <P5>
                              <IdentifyTrendsInContainer>
                                <QueryYourDatabaseContainer1>
                                  <WeProvideSupport>
                                    Identify trends in your data
                                  </WeProvideSupport>
                                  <WeProvideSupport>
                                    to make better decisions.
                                  </WeProvideSupport>
                                </QueryYourDatabaseContainer1>
                              </IdentifyTrendsInContainer>
                            </P5>
                          </DivbdtEpAdvancedIconBoxC4>
                        </DivbdtEpAdvancedIconBox>
                      </Div51>
                      <Div61>
                        <DivbdtEpAdvancedIconBox>
                          <SpanbdtEpAdvancedIconBox1
                            alt=""
                            src="/spanbdtepadvancediconboxiconwrap1.svg"
                          />
                          <DivbdtEpAdvancedIconBoxC4>
                            <Heading45>Enhance database interaction</Heading45>
                            <P6>
                              <QueryDynamicallyAnd>
                                Query dynamically and effortlessly
                              </QueryDynamicallyAnd>
                            </P6>
                          </DivbdtEpAdvancedIconBoxC4>
                        </DivbdtEpAdvancedIconBox>
                      </Div61>
                    </Div5Parent>
                    <FrameChild alt="" src="/frame-1000004206.svg" />
                  </FrameParent>
                  <FrameGroup>
                    <Div5Parent>
                      <Div61>
                        <DivbdtEpAdvancedIconBox>
                          <SpanbdtEpAdvancedIconBox1
                            alt=""
                            src="/spanbdtepadvancediconboxiconwrap2.svg"
                          />
                          <DivbdtEpAdvancedIconBoxC4>
                            <Heading46>Your data is your own</Heading46>
                            <P6>
                              <QueryDynamicallyAnd>
                                No database integration required
                              </QueryDynamicallyAnd>
                            </P6>
                          </DivbdtEpAdvancedIconBoxC4>
                        </DivbdtEpAdvancedIconBox>
                      </Div61>
                      <Div51>
                        <DivbdtEpAdvancedIconBox>
                          <SpanbdtEpAdvancedIconBox1
                            alt=""
                            src="/spanbdtepadvancediconboxiconwrap3.svg"
                          />
                          <DivbdtEpAdvancedIconBoxC4>
                            <Heading47>Quick setup</Heading47>
                            <P6>
                              <QueryDynamicallyAnd>
                                Get started in just 10 minutes
                              </QueryDynamicallyAnd>
                            </P6>
                          </DivbdtEpAdvancedIconBoxC4>
                        </DivbdtEpAdvancedIconBox>
                      </Div51>
                    </Div5Parent>
                    <FrameChild alt="" src="/frame-1000004207.svg" />
                  </FrameGroup>
                </Section8>
              </DivelementorWidgetWrap11>
            </DivelementorWidgetWrapWrapper>
            <Footer>
              <DivelementorSection3 data-scroll-to="divelementorSectionContainer">
                <Section9>
                  <DivelementorWidgetWrap12>
                    <Logo1RemovebgPreview1Icon
                      alt=""
                      src="/logo1removebgpreview-1@2x.png"
                    />
                    <Magixdb>MagixDB</Magixdb>
                    <P9>
                      <EnhanceThePower>
                        Enhance the power of your Database by Querying it like a
                        pro!
                      </EnhanceThePower>
                    </P9>
                    <List3>
                      <ItemLink>contact@MagixDB.com</ItemLink>
                      <ItemLink1>+8801712958789</ItemLink1>
                    </List3>
                  </DivelementorWidgetWrap12>
                  <DivelementorWidgetWrap13>
                    <Heading48>Our Company</Heading48>
                    <List4>
                      <ItemLink2>Home</ItemLink2>
                      <ItemLink3>Services</ItemLink3>
                      <ItemLink4>Features</ItemLink4>
                      <ItemLink5>About Us</ItemLink5>
                    </List4>
                  </DivelementorWidgetWrap13>
                  <DivelementorWidgetWrap14>
                    <Heading48>Features</Heading48>
                    <List5>
                      <ItemLink2>Data Analytics</ItemLink2>
                      <ItemLink3>User Reporting</ItemLink3>
                      <ItemLink4>Data Insights</ItemLink4>
                    </List5>
                  </DivelementorWidgetWrap14>
                  <DivelementorWidgetWrap15>
                    <Heading48>Help</Heading48>
                    <List6>
                      <ItemLink2>Help Center</ItemLink2>
                      <ItemLink10>Information</ItemLink10>
                      <ItemLink11>FAQ</ItemLink11>
                      <ItemLink12>Contact</ItemLink12>
                    </List6>
                  </DivelementorWidgetWrap15>
                </Section9>
                <DivelementorSection4>
                  <P10>
                    <Copyright2023>
                      Copyright: © 2023 MagixDB. All Rights Reserved.
                    </Copyright2023>
                  </P10>
                </DivelementorSection4>
              </DivelementorSection3>
            </Footer>
          </ArticleMain>
        </Divprimary>
        <DivuicoreHeaderWrapper>
          <Nav>
            <DivuicoreNavMenu>
              <List7>
                <ItemLink13 onClick={onItemLink13Click}>Login</ItemLink13>
                <ItemLink14>Product</ItemLink14>
                <ItemLink14>Pricing</ItemLink14>
                <ItemLink13 onClick={onItemLink16Click}>About Us</ItemLink13>
              </List7>
              <Button5>
                <Spanbar />
                <Spanbar1>
                  <Pseudo />
                </Spanbar1>
                <Spanbar2 />
              </Button5>
            </DivuicoreNavMenu>
            <MagixdbParent>
              <Magixdb1>MagixDB</Magixdb1>
              <Logo1RemovebgPreview1Icon1
                alt=""
                src="/logo1removebgpreview-11@2x.png"
              />
            </MagixdbParent>
          </Nav>
        </DivuicoreHeaderWrapper>
      </DivuicorePage>
    </MagixdbVersion1FinalllllTaRoot>
  );
};

export default MagixDBTablet;
