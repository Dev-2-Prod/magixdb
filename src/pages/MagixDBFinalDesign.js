import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const QueryYourDatabase = styled.b`
  position: absolute;
  top: 39px;
  left: 78px;
  letter-spacing: -1.94px;
  line-height: 79.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1013px;
`;
const Heading1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 575px);
  width: 1150px;
  height: 158.4px;
  font-size: 71px;
`;
const WeProvideSupport = styled.p`
  margin: 0;
`;
const QueryYourDatabaseContainer1 = styled.span`
  line-break: anywhere;
  width: 100%;
`;
const QueryYourDatabaseContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 713.3px;
  height: 77px;
`;
const P = styled.div`
  position: absolute;
  top: 178.4px;
  left: 210.5px;
  width: 749px;
  height: 81px;
  color: var(--color-dimgray);
`;
const TryNow = styled.b`
  position: relative;
  line-height: 18px;
`;
const Button = styled.div`
  position: absolute;
  top: 290px;
  left: 513px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) 37.3800048828125px var(--padding-lg)
    var(--padding-17xl);
  cursor: pointer;
  color: var(--color-white);
`;
const AnalyticsPlatformHeroImageIcon = styled.video`
  position: absolute;
  top: calc(50% - 84px);
  left: calc(50% - 575px);
  width: 1150px;
  height: 600.4px;
  object-fit: cover;
  
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  top: 170px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 974.8px;
`;
const AnalyticsPlatformOrganizeImIcon = styled.img`
  position: absolute;
  top: calc(50% - 231.3px);
  left: calc(50% - 252.5px);
  border-radius: var(--br-xl);
  width: 505px;
  height: 502.6px;
  object-fit: cover;
`;
const DivelementorWidgetWrap1 = styled.div`
  position: absolute;
  width: calc(100% - 745px);
  top: 10px;
  right: 735px;
  left: 10px;
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke-200);
  height: 422.6px;
`;
const TalkWithYour = styled.b`
  position: absolute;
  top: -2px;
  left: 0px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  width: 471px;
  height: 118.6px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 87.7px;
  left: 10px;
  width: 525px;
  height: 115.2px;
`;
const FireYourQueryContainer = styled.div`
  position: absolute;
  top: 2.1px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 477px;
  height: 86px;
`;
const P1 = styled.div`
  position: absolute;
  top: 222.9px;
  left: 10px;
  width: 525px;
  height: 54px;
  font-size: var(--font-size-lg);
  color: var(--color-dimgray);
`;
const SpanelementorDividerSeparat = styled.div`
  position: absolute;
  width: calc(100% - 67.2px);
  top: 311.9px;
  right: 57.2px;
  left: 10px;
  border-top: 1px solid var(--color-dimgray);
  box-sizing: border-box;
  height: 1px;
`;
const DivelementorWidgetWrap2 = styled.div`
  position: absolute;
  width: calc(100% - 625px);
  top: 0px;
  right: 40px;
  left: 585px;
  height: 462.6px;
`;
const Section = styled.div`
  position: absolute;
  top: 2049px;
  left: calc(50% - 576px);
  width: 1170px;
  height: 462.6px;
  text-align: left;
  font-size: var(--font-size-28xl);
`;
const SettingUpMagixdb = styled.b`
  position: absolute;
  top: -2px;
  left: 0px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  width: 518.7px;
  height: 118.6px;
`;
const Heading21 = styled.div`
  position: absolute;
  top: 49.8px;
  left: 10px;
  width: 525px;
  height: 115.2px;
  font-size: var(--font-size-28xl);
`;
const TellUsYour = styled.div`
  position: absolute;
  top: 2px;
  left: 30.5px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 483.4px;
  height: 23px;
`;
const Div = styled.div`
  position: absolute;
  top: 6.5px;
  left: 0px;
  font-size: var(--font-size-sm);
  line-height: 14px;
  font-family: var(--font-font-awesome-5-free);
  color: var(--color-mediumslateblue);
  display: flex;
  align-items: center;
  width: 14.2px;
  height: 14px;
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 525px;
  height: 35px;
`;
const StartQueryingYour = styled.div`
  position: absolute;
  top: 2px;
  left: 30.5px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 361.4px;
  height: 23px;
`;
const Item1 = styled.div`
  position: absolute;
  top: 43px;
  left: 0px;
  width: 525px;
  height: 27px;
`;
const Item2 = styled.div`
  position: absolute;
  top: 91px;
  left: 0px;
  width: 525px;
  height: 35px;
`;
const List = styled.div`
  position: absolute;
  top: 185px;
  left: 10px;
  width: 525px;
  height: 137px;
  color: var(--color-dimgray);
`;
const Button1 = styled.div`
  position: absolute;
  top: 359px;
  left: 10px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) 37.30999755859375px var(--padding-lg)
    var(--padding-17xl);
  text-align: center;
  color: var(--color-white);
`;
const DivelementorWidgetWrap3 = styled.div`
  position: absolute;
  width: calc(100% - 625px);
  top: 0px;
  right: 625px;
  left: 0px;
  height: 496px;
`;
const Heading22 = styled.b`
  position: absolute;
  top: 18px;
  left: 25px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20.2px;
  height: 61px;
`;
const Heading4 = styled.b`
  position: relative;
  letter-spacing: -0.65px;
  line-height: 28.8px;
`;
const FillTheForm = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 21px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 287px;
  margin-top: -0.21px;
`;
const DivbdtEpAdvancedIconBoxC = styled.div`
  position: absolute;
  top: 22.9px;
  left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 1.0099983215332031px;
  text-align: left;
  font-size: var(--font-size-4xl);
`;
const Section2 = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 24px;
  right: 85px;
  left: -65px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.15);
  height: 97.6px;
  overflow: hidden;
`;
const Heading23 = styled.b`
  position: absolute;
  top: 18px;
  left: 21.3px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27.5px;
  height: 61px;
`;
const SelectYourPlan = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 21px;
  color: var(--color-dimgray);
  margin-top: -0.2px;
`;
const DivbdtEpAdvancedIconBoxC1 = styled.div`
  position: absolute;
  top: 22.9px;
  left: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-12xs);
  text-align: left;
  font-size: var(--font-size-4xl);
`;
const Section3 = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 145.6px;
  right: -65px;
  left: 85px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.15);
  height: 97.6px;
  overflow: hidden;
`;
const Heading24 = styled.b`
  position: absolute;
  top: 18px;
  left: 21.1px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 61px;
`;
const ReceiveYourApi = styled.div`
  position: relative;
  font-size: var(--font-size-sm);
  line-height: 21px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 285px;
  margin-top: -0.21px;
`;
const Section4 = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 267.2px;
  right: 85px;
  left: -65px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.15);
  height: 97.6px;
  overflow: hidden;
  opacity: 0.99;
`;
const Section5 = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 389px;
  right: -65px;
  left: 85px;
  border-radius: var(--br-7xs);
  background-color: var(--color-white);
  box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.15);
  height: 98px;
  overflow: hidden;
`;
const DivelementorWidgetWrap4 = styled.div`
  position: absolute;
  width: calc(100% - 785px);
  top: 0px;
  right: 80px;
  left: 705px;
  border-radius: var(--br-xl);
  background-color: var(--color-whitesmoke-200);
  height: 540px;
  text-align: center;
  font-size: var(--font-size-29xl);
`;
const Section1 = styled.div`
  position: absolute;
  top: 2709px;
  left: calc(50% - 585px);
  width: 1188px;
  height: 552px;
  text-align: left;
`;
const Heading3 = styled.b`
  position: absolute;
  top: 69px;
  left: 70px;
  letter-spacing: -0.86px;
  line-height: 38.4px;
  display: flex;
  align-items: center;
  width: 159px;
  height: 40px;
`;
const Heading31 = styled.b`
  position: absolute;
  top: 69px;
  left: 249.9px;
  letter-spacing: -0.86px;
  line-height: 38.4px;
  display: flex;
  color: var(--color-mediumslateblue);
  align-items: center;
  width: 63px;
  height: 40px;
`;
const Database = styled.div`
  position: absolute;
  top: 109px;
  left: 70px;
  font-size: var(--font-size-base);
  line-height: 24px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 100px;
  height: 21px;
`;
const DatabaseQueringOf = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 196px;
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
  top: -0.4px;
  left: 0px;
  width: 235px;
  height: 46px;
`;
const UnlimitedQuerying = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 170px;
  height: 21px;
`;
const Item4 = styled.div`
  position: absolute;
  top: 57.6px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const UnlimitedSupport = styled.div`
  position: absolute;
  top: 1px;
  left: 26.3px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 149.8px;
  height: 21px;
`;
const Item5 = styled.div`
  position: absolute;
  top: 93.6px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const DaysFreeTrial = styled.div`
  position: absolute;
  top: 1px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 160px;
  height: 21px;
`;
const Item6 = styled.div`
  position: absolute;
  top: 141.6px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const UnlimitedUser = styled.div`
  position: absolute;
  top: 4.6px;
  left: 30px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 110.9px;
  height: 21px;
`;
const Item7 = styled.div`
  position: absolute;
  top: 176px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const Item8 = styled.div`
  position: absolute;
  top: 220px;
  left: 0px;
  width: 242.7px;
  height: 24px;
`;
const List1 = styled.div`
  position: absolute;
  top: 156.4px;
  left: 70px;
  width: 242.7px;
  height: 244px;
  font-size: var(--font-size-base);
`;
const ChoosePlan = styled.b`
  position: absolute;
  top: 16px;
  left: 67.9px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107.1px;
  height: 23px;
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
  font-size: var(--font-size-lg);
`;
const DivelementorWidgetWrap5 = styled.div`
  position: absolute;
  width: calc(100% + 8.3px);
  top: -10px;
  right: -24.3px;
  left: 16px;
  height: 552px;
`;
const Section6 = styled.div`
  position: absolute;
  width: calc(100% - 441px);
  top: 0px;
  right: 441px;
  left: 0px;
  border-radius: var(--br-xl);
  background-color: var(--color-white);
  box-shadow: 0px 20px 40px rgba(95, 95, 95, 0.17);
  border: 1px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  height: 540.4px;
`;
const Heading32 = styled.b`
  position: absolute;
  top: 60px;
  left: 70px;
  letter-spacing: -0.86px;
  line-height: 38.4px;
  display: flex;
  align-items: center;
  width: 161px;
`;
const Heading33 = styled.b`
  position: absolute;
  top: 59px;
  left: 255.9px;
  letter-spacing: -0.86px;
  line-height: 38.4px;
  display: flex;
  color: var(--color-mediumslateblue);
  align-items: center;
  width: 57px;
  height: 40px;
`;
const Database1 = styled.div`
  position: absolute;
  top: 99px;
  left: 70px;
  font-size: var(--font-size-base);
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 94px;
  height: 21px;
`;
const DatabasesOfYour = styled.div`
  position: absolute;
  top: 1px;
  left: 26.3px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 133.1px;
  height: 21px;
`;
const Item9 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const UnlimitedQuerying1 = styled.div`
  position: absolute;
  top: 0.6px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 180px;
  height: 21px;
`;
const Item10 = styled.div`
  position: absolute;
  top: 44px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const Item11 = styled.div`
  position: absolute;
  top: 88px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const DaysFreeTrial1 = styled.div`
  position: absolute;
  top: 0.6px;
  left: 26px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 152px;
  height: 21px;
`;
const Item12 = styled.div`
  position: absolute;
  top: 132px;
  left: 0px;
  width: 242.7px;
  height: 34px;
`;
const UnlimitedUser1 = styled.div`
  position: absolute;
  top: 1px;
  left: 26.3px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 110.9px;
  height: 21px;
`;
const List2 = styled.div`
  position: absolute;
  top: 146.4px;
  left: 70px;
  width: 242.7px;
  height: 244px;
  font-size: var(--font-size-base);
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
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-100);
`;
const DivelementorWidgetWrap6 = styled.div`
  position: absolute;
  width: calc(100% - 441px);
  top: 0px;
  right: 0px;
  left: 441px;
  border-radius: var(--br-xl);
  height: 540.4px;
  background-image: url("/divelementorwidgetwrap@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--color-white);
`;
const SectionParent = styled.div`
  position: absolute;
  top: -21px;
  left: calc(50% - 412px);
  width: 823.7px;
  height: 540.4px;
`;
const DivelementorSection = styled.div`
  position: absolute;
  width: 100%;
  top: 4127px;
  right: 0px;
  left: 0px;
  background: linear-gradient(180deg, #fff 40%, #f5f8f3 40%);
  height: 683px;
  text-align: left;
  font-size: var(--font-size-12xl);
`;
const Heading26 = styled.b`
  position: absolute;
  top: -2px;
  left: 279.4px;
  font-size: var(--font-size-28xl);
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 611.4px;
  height: 61px;
`;
const WhetherYoureLookingContainer = styled.div`
  position: absolute;
  top: 2px;
  left: 31.5px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 537.2px;
  height: 50px;
`;
const P2 = styled.div`
  position: absolute;
  top: 77.6px;
  left: 285px;
  width: 600px;
  height: 54px;
  color: var(--color-dimgray);
`;
const WhatKindOf = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 442.7px;
  height: 23px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 24.8px;
  left: 526px;
  font-size: var(--font-size-base);
  line-height: 16px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.2px;
  height: 16px;
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 565px;
  height: 65.6px;
  overflow: hidden;
`;
const IsItEasy = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 147.2px;
  height: 23px;
`;
const Heading5 = styled.div`
  position: absolute;
  top: 89.6px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 565px;
  height: 65.6px;
  overflow: hidden;
`;
const CanIGet = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 244.8px;
  height: 23px;
`;
const Heading6 = styled.div`
  position: absolute;
  top: 179.2px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 565px;
  height: 65.6px;
  overflow: hidden;
`;
const WhichDatabasesDoes = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 423px;
  height: 23px;
`;
const Heading7 = styled.div`
  position: absolute;
  top: 268.8px;
  left: 0px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 565px;
  height: 65.6px;
  overflow: hidden;
`;
const DivbdtEpAccordion241177b = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 565px;
  height: 334.4px;
`;
const WhatHappensWhen = styled.div`
  position: absolute;
  top: 20.9px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 461px;
  height: 23px;
`;
const WhatKindOf1 = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 395.3px;
  height: 23px;
`;
const CanICollaborate = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 422.8px;
  height: 23px;
`;
const WhatIsThe = styled.div`
  position: absolute;
  top: 21px;
  left: 22px;
  line-height: 21.6px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 293px;
  height: 23px;
`;
const DivbdtEpAccordion19c020e = styled.div`
  position: absolute;
  top: 10px;
  left: 595px;
  width: 565px;
  height: 334.4px;
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: 161.6px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 354.4px;
  text-align: left;
`;
const DivelementorWidgetWrap7 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 516px;
`;
const DivelementorSection1 = styled.div`
  position: absolute;
  width: 100%;
  top: 4810px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 578px;
`;
const Logo1webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 33.3px);
  left: calc(50% - 516.2px);
  width: 170px;
  height: 66.6px;
  object-fit: cover;
`;
const Logo4webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 33.3px);
  left: calc(50% - 228.7px);
  width: 170px;
  height: 66.6px;
  object-fit: cover;
`;
const Logo3webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 33.3px);
  left: calc(50% + 58.8px);
  width: 170px;
  height: 66.6px;
  object-fit: cover;
`;
const Logo2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 33.3px);
  left: calc(50% + 346.3px);
  width: 170px;
  height: 66.6px;
  object-fit: cover;
`;
const DivelementorContainer1 = styled.div`
  position: absolute;
  top: 10px;
  left: calc(50% - 575px);
  width: 1150px;
  height: 86.6px;
`;
const PoweredByMost = styled.b`
  position: absolute;
  top: 27px;
  left: 0px;
  letter-spacing: -1.08px;
  line-height: 48px;
  display: flex;
  align-items: center;
  width: 492.3px;
  height: 99px;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 24px;
  left: 19px;
  width: 633px;
  height: 154px;
`;
const B = styled.b`
  position: absolute;
  top: 0px;
  left: -3.5px;
  line-height: 72px;
`;
const ActiveUsers = styled.div`
  position: absolute;
  top: 72px;
  left: -1px;
  font-size: var(--font-size-lg);
  line-height: 27px;
`;
const DivbdtEpAdvancedCounterCo = styled.div`
  position: relative;
  width: 107.3px;
  height: 99px;
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 27px;
  left: 152px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 41px 0px 0px;
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  top: 24px;
  right: 30px;
  width: 400px;
  height: 154px;
  text-align: center;
  font-size: var(--font-size-29xl);
`;
const DivelementorContainer2 = styled.div`
  position: absolute;
  top: 36.5px;
  left: calc(50% - 533px);
  width: 1082px;
  height: 214px;
`;
const Section7 = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  top: 146.5px;
  right: 10px;
  left: 10px;
  border-radius: 15px;
  border: 1px solid var(--color-white);
  box-sizing: border-box;
  height: 281px;
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  top: 50px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 437.5px;
`;
const DivelementorSection2 = styled.div`
  position: absolute;
  width: 100%;
  top: 3365px;
  right: 0px;
  left: 0px;
  height: 567.5px;
  background-image: url("/divelementorsection@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: left;
  font-size: 39px;
  color: var(--color-white);
`;
const ExploreOurCuttingEdge = styled.b`
  position: absolute;
  top: -2px;
  left: 13.7px;
  letter-spacing: -1.3px;
  line-height: 57.6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 639.8px;
  height: 118.6px;
`;
const Heading28 = styled.div`
  position: absolute;
  top: 10px;
  left: 251.5px;
  width: 667px;
  height: 115.2px;
`;
const ProvideYourEmail = styled.div`
  position: absolute;
  top: 2px;
  left: 12.3px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 528.5px;
  height: 50px;
`;
const P3 = styled.div`
  position: absolute;
  top: 145.2px;
  left: 308.5px;
  width: 553px;
  height: 54px;
  font-size: var(--font-size-lg);
  color: rgba(255, 255, 255, 0.64);
`;
const EnterYourMail = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  width: 181.7px;
  height: 21px;
`;
const Input = styled.div`
  position: absolute;
  top: 16px;
  left: 45px;
  width: 299.7px;
  height: 21px;
  overflow: hidden;
`;
const Button4 = styled.div`
  position: absolute;
  width: calc(100% - 364.7px);
  top: calc(50% - 27px);
  right: -12.5px;
  left: 377.2px;
  border-radius: var(--br-8xs);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-lg) 37.27000427246094px var(--padding-lg)
    var(--padding-17xl);
  box-sizing: border-box;
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-white);
`;
const Form = styled.div`
  position: absolute;
  top: 8px;
  left: -24px;
  width: 551px;
  height: 54px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 239.2px;
  left: 313.5px;
  border-radius: var(--br-8xs);
  background-color: var(--color-white);
  width: 543px;
  height: 70px;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  top: 80px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 319.2px;
`;
const Section8 = styled.div`
  position: absolute;
  width: 100%;
  top: 5388px;
  right: 1px;
  left: -1px;
  height: 514px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: var(--font-size-28xl);
  color: var(--color-white);
`;
const Heading29 = styled.b`
  position: absolute;
  top: -2px;
  left: 263.9px;
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
  top: 2px;
  left: 10.1px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 659px;
  height: 50px;
`;
const P4 = styled.div`
  position: absolute;
  top: 77.6px;
  left: 245.5px;
  width: 679px;
  height: 54px;
  font-size: var(--font-size-lg);
  color: var(--color-dimgray);
`;
const SpanbdtEpAdvancedIconBox = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% - 30.2px);
  border-radius: var(--br-3xs);
  width: 62px;
  height: 62px;
  overflow: hidden;
`;
const Heading44 = styled.b`
  position: absolute;
  top: -2px;
  left: 12.8px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 199.1px;
  height: 31px;
`;
const IdentifyTrendsInContainer = styled.div`
  position: absolute;
  top: 1px;
  left: 5.4px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 213.9px;
  height: 45px;
`;
const P5 = styled.div`
  position: absolute;
  top: 36.8px;
  left: 0px;
  width: 224.5px;
  height: 48px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC4 = styled.div`
  position: absolute;
  top: 93.1px;
  left: 0px;
  width: 225px;
  height: 152px;
`;
const DivbdtEpAdvancedIconBox = styled.div`
  position: absolute;
  top: 34.1px;
  left: 34px;
  width: 225px;
  height: 249px;
`;
const SpanbdtEpAdvancedIconBox1 = styled.img`
  position: absolute;
  top: 0px;
  left: calc(50% - 30.7px);
  border-radius: var(--br-3xs);
  width: 62px;
  height: 62px;
  overflow: hidden;
`;
const Heading45 = styled.b`
  position: absolute;
  top: 6.1px;
  left: 6.5px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 245px;
  height: 31px;
`;
const QueryDynamicallyAnd = styled.div`
  position: absolute;
  top: -1px;
  left: 6px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212.7px;
`;
const P6 = styled.div`
  position: absolute;
  top: 59.1px;
  left: 0.5px;
  width: 224.5px;
  height: 48px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC5 = styled.div`
  position: absolute;
  top: 93px;
  left: 1px;
  width: 225px;
  height: 164px;
`;
const DivbdtEpAdvancedIconBox1 = styled.div`
  position: absolute;
  top: 34.1px;
  left: 327px;
  width: 224px;
  height: 269px;
`;
const Heading46 = styled.b`
  position: absolute;
  top: -2px;
  left: 25.3px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 174.1px;
  height: 31px;
`;
const GetStartedIn = styled.div`
  position: absolute;
  top: 1px;
  left: 4.3px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 216px;
  height: 45px;
`;
const DivbdtEpAdvancedIconBoxC6 = styled.div`
  position: absolute;
  top: 93px;
  left: 0px;
  width: 225px;
  height: 184px;
`;
const DivbdtEpAdvancedIconBox2 = styled.div`
  position: absolute;
  top: 34.1px;
  left: 619px;
  width: 225px;
  height: 253px;
`;
const Heading47 = styled.b`
  position: absolute;
  top: 0px;
  left: 36px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151.1px;
  height: 31px;
`;
const NoDatabaseIntegration = styled.div`
  position: absolute;
  top: 24px;
  left: 15px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 194.6px;
  height: 45px;
`;
const P8 = styled.div`
  position: absolute;
  top: 31px;
  left: 0px;
  width: 224.5px;
  height: 48px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC7 = styled.div`
  position: absolute;
  top: 93px;
  left: 1px;
  width: 224px;
  height: 176px;
`;
const DivbdtEpAdvancedIconBox3 = styled.div`
  position: absolute;
  top: 34px;
  left: 912px;
  width: 224px;
  height: 245px;
`;
const Section9 = styled.div`
  position: absolute;
  top: 181.7px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 327px;
  font-size: var(--font-size-4xl);
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  top: 78px;
  left: calc(50% - 561px);
  width: 1170px;
  height: 470.4px;
`;
const DivelementorWidgetWrapWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 1312px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 605px;
  overflow: hidden;
  font-size: var(--font-size-28xl);
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
  height: 5897px;
  text-align: center;
`;
const ItemLink = styled.b`
  position: relative;
  line-height: 80px;
  cursor: pointer;
`;
const List3 = styled.div`
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
  top: 1px;
  right: 88.1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;
const Magixdb = styled.b`
  position: absolute;
  top: 19px;
  left: 77px;
  line-height: 80px;
  display: flex;
  align-items: center;
  width: 182px;
  height: 36px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 67px;
  height: 75px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 4px;
  left: 59px;
  width: 259px;
  height: 75px;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const Nav = styled.div`
  position: relative;
  width: 1920px;
  height: 81.1px;
`;
const DivuicoreHeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 1px 0px #dcdcdc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-base);
`;
const Logo1RemovebgPreview1Icon1 = styled.img`
  position: relative;
  width: 57px;
  height: 61px;
  object-fit: cover;
`;
const Magixdb1 = styled.b`
  position: relative;
  font-size: var(--font-size-5xl);
  line-height: 80px;
  display: flex;
  align-items: center;
  width: 182px;
  height: 36px;
  flex-shrink: 0;
`;
const EnhanceThePower = styled.div`
  position: absolute;
  top: -12.6px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 306px;
  height: 65px;
`;
const P9 = styled.div`
  position: relative;
  width: 292px;
  height: 54px;
  color: var(--color-dimgray);
`;
const ItemLink4 = styled.div`
  position: absolute;
  top: 1.6px;
  left: 0px;
  line-height: 27px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 236px;
  height: 23px;
`;
const ItemLink5 = styled.div`
  position: absolute;
  top: 41px;
  left: 0px;
  line-height: 27px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 146px;
  height: 23px;
`;
const List4 = styled.div`
  position: relative;
  width: 417.5px;
  height: 66px;
  color: var(--color-midnightblue);
`;
const DivelementorWidgetWrap12 = styled.div`
  position: absolute;
  width: calc(100% - 752.5px);
  top: 0px;
  right: 752.5px;
  left: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px;
  box-sizing: border-box;
  gap: 11px;
  font-size: var(--font-size-lg);
  color: var(--color-black);
`;
const Heading48 = styled.b`
  position: absolute;
  top: 8px;
  left: 10px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  width: 148.7px;
  height: 31px;
`;
const ItemLink6 = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 49.3px;
  height: 23px;
`;
const ItemLink7 = styled.div`
  position: absolute;
  top: 41px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 73.7px;
  height: 23px;
`;
const ItemLink8 = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 76.2px;
  height: 23px;
`;
const ItemLink9 = styled.div`
  position: absolute;
  top: 119px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 79.7px;
  height: 23px;
`;
const List5 = styled.div`
  position: absolute;
  top: 58.8px;
  left: 10px;
  width: 213.5px;
  height: 144px;
  font-size: var(--font-size-lg);
`;
const DivelementorWidgetWrap13 = styled.div`
  position: absolute;
  width: calc(100% - 936.5px);
  top: 0px;
  right: 469px;
  left: 467.5px;
  height: 212.8px;
`;
const Heading49 = styled.b`
  position: absolute;
  top: 8px;
  left: 10px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  width: 95.9px;
  height: 31px;
`;
const ItemLink10 = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 126px;
  height: 23px;
`;
const ItemLink11 = styled.div`
  position: absolute;
  top: 41px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 130.5px;
  height: 23px;
`;
const ItemLink12 = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 114.5px;
  height: 23px;
`;
const List6 = styled.div`
  position: absolute;
  top: 58.8px;
  left: 10px;
  width: 214.5px;
  height: 105px;
  font-size: var(--font-size-lg);
`;
const DivelementorWidgetWrap14 = styled.div`
  position: absolute;
  width: calc(100% - 935.5px);
  top: 0px;
  right: 234.5px;
  left: 701px;
  height: 212.8px;
`;
const Heading410 = styled.b`
  position: absolute;
  top: 8px;
  left: 10px;
  letter-spacing: -0.65px;
  line-height: 28.8px;
  display: flex;
  align-items: center;
  width: 48.9px;
  height: 31px;
`;
const ItemLink13 = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 101.7px;
  height: 23px;
`;
const ItemLink14 = styled.div`
  position: absolute;
  top: 41px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 100.9px;
  height: 23px;
`;
const ItemLink15 = styled.div`
  position: absolute;
  top: 80px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 32.3px;
  height: 23px;
`;
const ItemLink16 = styled.div`
  position: absolute;
  top: 119px;
  left: 0px;
  line-height: 27px;
  display: flex;
  align-items: center;
  width: 70.7px;
  height: 23px;
`;
const List7 = styled.div`
  position: absolute;
  top: 58.8px;
  left: 10px;
  width: 214.3px;
  height: 144px;
  font-size: var(--font-size-lg);
`;
const DivelementorWidgetWrap15 = styled.div`
  position: absolute;
  width: calc(100% - 935.7px);
  top: 0px;
  right: 0.2px;
  left: 935.5px;
  height: 212.8px;
`;
const Section10 = styled.div`
  position: absolute;
  top: 70px;
  left: calc(50% - 585px);
  width: 1170px;
  height: 212.8px;
`;
const Copyright2023 = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  line-height: 24px;
  display: flex;
  align-items: center;
  width: 557px;
  height: 21px;
`;
const P10 = styled.div`
  position: absolute;
  top: 35px;
  left: calc(50% - 575px);
  width: 1150px;
  height: 24px;
`;
const DivelementorSection4 = styled.div`
  position: absolute;
  width: 100%;
  top: 447px;
  right: 0px;
  left: 0px;
  background-color: var(--color-gray-100);
  height: 94px;
  font-size: var(--font-size-base);
  color: var(--color-white);
`;
const DivelementorSection3 = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  top: 0px;
  right: -2px;
  left: 1px;
  background-color: var(--color-whitesmoke-100);
  height: 541px;
`;
const Footer = styled.div`
  position: absolute;
  width: calc(100% - 1px);
  top: 5980px;
  right: 1px;
  left: 0px;
  height: 541px;
  font-size: var(--font-size-4xl);
`;
const DivuicorePage = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 6526px;
`;
const MagixDbFinalDesignRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 6521px;
  text-align: left;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-100);
  font-family: var(--font-space-grotesk);
  overflow-y : hidden;
`;

const MagixDBFinalDesign = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.zoom = "80%";
  }, []);
  const onButtonContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divelementorWidgetWrapContainer1']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemLinkClick = useCallback(() => {
    navigate("/signuplogin-module-desktop");
  }, [navigate]);

  const onItemLink1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemLink2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divelementorWidgetWrapContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onItemLink3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='divelementorSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <MagixDbFinalDesignRoot>
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
            <Section>
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
                        {" "}
                        Let our AI do all the magic
                      </WeProvideSupport>
                    </QueryYourDatabaseContainer1>
                  </FireYourQueryContainer>
                </P1>
                <SpanelementorDividerSeparat />
              </DivelementorWidgetWrap2>
            </Section>
            <Section1>
              <DivelementorWidgetWrap3 data-scroll-to="divelementorWidgetWrapContainer1">
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
                    </svg>
                    </Div>
                  </Item>
                  <Item1>
                    <StartQueryingYour>
                      Start querying your database.
                    </StartQueryingYour>
                    <Div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875Z" fill="#3866FF" />
                    </svg>
                    </Div>
                  </Item1>
                  <Item2>
                    <TellUsYour>
                      Update the form only when Database Schema changes
                    </TellUsYour>
                    <Div><svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 0.46875C10.7461 0.46875 13.7812 3.50391 13.7812 7.25C13.7812 10.9961 10.7461 14.0312 7 14.0312C3.25391 14.0312 0.21875 10.9961 0.21875 7.25C0.21875 3.50391 3.25391 0.46875 7 0.46875Z" fill="#3866FF" />
                    </svg>
                    </Div>
                  </Item2>
                </List>
                <Button1>
                  <TryNow>Get Started</TryNow>
                </Button1>
              </DivelementorWidgetWrap3>
              <DivelementorWidgetWrap4>
                <Section2>
                  <Heading22>1</Heading22>
                  <DivbdtEpAdvancedIconBoxC>
                    <Heading4>Fill Form</Heading4>
                    <FillTheForm>
                      Fill the form for providing information regarding your
                      database.
                    </FillTheForm>
                  </DivbdtEpAdvancedIconBoxC>
                </Section2>
                <Section3>
                  <Heading23>2</Heading23>
                  <DivbdtEpAdvancedIconBoxC1>
                    <Heading4>Make Payment</Heading4>
                    <SelectYourPlan>
                      Select your plan and make payment
                    </SelectYourPlan>
                  </DivbdtEpAdvancedIconBoxC1>
                </Section3>
                <Section4>
                  <Heading24>3</Heading24>
                  <DivbdtEpAdvancedIconBoxC1>
                    <Heading4>Recieve API</Heading4>
                    <ReceiveYourApi>
                      Receive your API on platform and E-mail
                    </ReceiveYourApi>
                  </DivbdtEpAdvancedIconBoxC1>
                </Section4>
                <Section5>
                  <Heading23>4</Heading23>
                  <DivbdtEpAdvancedIconBoxC1>
                    <Heading4>Start Quering</Heading4>
                    <SelectYourPlan>
                      Talk with your database in plain English.
                    </SelectYourPlan>
                  </DivbdtEpAdvancedIconBoxC1>
                </Section5>
              </DivelementorWidgetWrap4>
            </Section1>
            <DivelementorSection>
              <SectionParent>
                <Section6>
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
                        </svg>
                        </Div3>
                      </Item3>
                      <Item4>
                        <UnlimitedQuerying>
                          Unlimited Querying
                        </UnlimitedQuerying>
                        <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                        </svg>
                        </Div3>
                      </Item4>
                      <Item5>
                        <UnlimitedSupport>Unlimited Support</UnlimitedSupport>
                        <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                        </svg>
                        </Div3>
                      </Item5>
                      <Item6>
                        <DaysFreeTrial>15 Days Free Trial</DaysFreeTrial>
                        <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                        </svg>
                        </Div3>
                      </Item6>
                      <Item7>
                        <UnlimitedUser>Unlimited user</UnlimitedUser>
                        <Div3><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                        </svg>
                        </Div3>
                      </Item7>
                      <Item8 />
                    </List1>
                    <Button2>
                      <ChoosePlan>Choose plan</ChoosePlan>
                    </Button2>
                  </DivelementorWidgetWrap5>
                </Section6>
                <DivelementorWidgetWrap6 data-scroll-to="divelementorWidgetWrapContainer">
                  <Heading32>Advanced</Heading32>
                  <Heading33>$89</Heading33>
                  <Database1>2 Database</Database1>
                  <List2>
                    <Item9>
                      <DatabasesOfYour>
                        2 Databases of your Choice
                      </DatabasesOfYour>
                      <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg>
                      </Div3>
                    </Item9>
                    <Item10>
                      <UnlimitedQuerying1>
                        Unlimited Querying
                      </UnlimitedQuerying1>
                      <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg>
                      </Div3>
                    </Item10>
                    <Item11>
                      <UnlimitedSupport>Unlimited Support</UnlimitedSupport>
                      <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                      </svg>
                      </Div3>
                    </Item11>
                    <Item12>
                      <DaysFreeTrial1>15 Days Free Trial</DaysFreeTrial1>
                      <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                      </svg>
                      </Div3>
                    </Item12>
                    <Item7>
                      <UnlimitedUser1>Unlimited user</UnlimitedUser1>
                      <Div3><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                      </svg>
                      </Div3>
                    </Item7>
                    <Item8 />
                  </List2>
                  <Button3>
                    <ChoosePlan>Choose plan</ChoosePlan>
                  </Button3>
                </DivelementorWidgetWrap6>
              </SectionParent>
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
                      </svg>
                      </Div13>
                    </Heading>
                    <Heading5>
                      <IsItEasy>Is it easy to use?</IsItEasy>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading5>
                    <Heading6>
                      <CanIGet>Can I get real-time insights?</CanIGet>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading6>
                    <Heading7>
                      <WhichDatabasesDoes>
                        Which databases does MagixDB supports?
                      </WhichDatabasesDoes>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading7>
                  </DivbdtEpAccordion241177b>
                  <DivbdtEpAccordion19c020e>
                    <Heading>
                      <WhatHappensWhen>
                        What happens when a new data is added to my DB?
                      </WhatHappensWhen>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading>
                    <Heading5>
                      <WhatKindOf1>
                        What kind of visualizations are available?
                      </WhatKindOf1>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading5>
                    <Heading6>
                      <CanICollaborate>
                        Can I collaborate with my team on this platform?
                      </CanICollaborate>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading6>
                    <Heading7>
                      <WhatIsThe>What is the cost of this platform?</WhatIsThe>
                      <Div13><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                      </svg>
                      </Div13>
                    </Heading7>
                  </DivbdtEpAccordion19c020e>
                </DivelementorContainer>
              </DivelementorWidgetWrap7>
            </DivelementorSection1>
            <DivelementorSection2>
              <DivelementorWidgetWrap8>
                <DivelementorContainer1>
                  <Logo1webpIcon alt="" src="/logo1webp@2x.png" />
                  <Logo4webpIcon alt="" src="/logo4webp@2x.png" />
                  <Logo3webpIcon alt="" src="/logo3webp@2x.png" />
                  <Logo2webpIcon alt="" src="/logo2webp@2x.png" />
                </DivelementorContainer1>
                <Section7>
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
                </Section7>
              </DivelementorWidgetWrap8>
            </DivelementorSection2>
            <Section8>
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
                      <TryNow>Get Free Trial</TryNow>
                    </Button4>
                  </Form>
                </DivelementorWidgetContainer1>
              </DivelementorWidgetWrap10>
            </Section8>
            <DivelementorWidgetWrapWrapper data-scroll-to="frameContainer">
              <DivelementorWidgetWrap11>
                <Heading29>What makes us different</Heading29>
                <P4>
                  <WithMagixdbApi>
                    With "MagixDB API", you bring simplicity, efficiency, and
                    ease to your operations, empowering you to compete
                    confidently in today's data-driven world.
                  </WithMagixdbApi>
                </P4>
                <Section9>
                  <DivbdtEpAdvancedIconBox>
                    <SpanbdtEpAdvancedIconBox
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC4>
                      <Heading44>Visualize results</Heading44>
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
                  <DivbdtEpAdvancedIconBox1>
                    <SpanbdtEpAdvancedIconBox1
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap1.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC5>
                      <Heading45>Enhance database interaction</Heading45>
                      <P6>
                        <QueryDynamicallyAnd>
                          Query dynamically and effortlessly.
                        </QueryDynamicallyAnd>
                      </P6>
                    </DivbdtEpAdvancedIconBoxC5>
                  </DivbdtEpAdvancedIconBox1>
                  <DivbdtEpAdvancedIconBox2>
                    <SpanbdtEpAdvancedIconBox
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap2.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC6>
                      <Heading46>Quick setup</Heading46>
                      <P5>
                        <GetStartedIn>
                          Get started in just 10 minutes
                        </GetStartedIn>
                      </P5>
                    </DivbdtEpAdvancedIconBoxC6>
                  </DivbdtEpAdvancedIconBox2>
                  <DivbdtEpAdvancedIconBox3>
                    <SpanbdtEpAdvancedIconBox1
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap3.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC7>
                      <Heading47>Your data is your own</Heading47>
                      <P8>
                        <NoDatabaseIntegration>
                          No database integration required
                        </NoDatabaseIntegration>
                      </P8>
                    </DivbdtEpAdvancedIconBoxC7>
                  </DivbdtEpAdvancedIconBox3>
                </Section9>
              </DivelementorWidgetWrap11>
            </DivelementorWidgetWrapWrapper>
          </ArticleMain>
        </Divprimary>
        <DivuicoreHeaderWrapper>
          <Nav>
            <DivuicoreNavMenu>
              <List3>
                <ItemLink onClick={onItemLinkClick}>Login</ItemLink>
                <ItemLink onClick={onItemLink1Click}>Product</ItemLink>
                <ItemLink onClick={onItemLink2Click}>Pricing</ItemLink>
                <ItemLink onClick={onItemLink3Click}>About Us</ItemLink>
              </List3>
              <Button5>
                <Spanbar />
                <Spanbar1>
                  <Pseudo />
                </Spanbar1>
                <Spanbar2 />
              </Button5>
            </DivuicoreNavMenu>
            <MagixdbParent>
              <Magixdb>MagixDB</Magixdb>
              <Logo1RemovebgPreview1Icon
                alt=""
                src="/logo1removebgpreview-1@2x.png"
              />
            </MagixdbParent>
          </Nav>
        </DivuicoreHeaderWrapper>
        <Footer>
          <DivelementorSection3 data-scroll-to="divelementorSectionContainer">
            <Section10>
              <DivelementorWidgetWrap12>
                <Logo1RemovebgPreview1Icon1
                  alt=""
                  src="/logo1removebgpreview-11@2x.png"
                />
                <Magixdb1>MagixDB</Magixdb1>
                <P9>
                  <EnhanceThePower>
                    Enhance the power of your Database by Querying it like a
                    pro!
                  </EnhanceThePower>
                </P9>
                <List4>
                  <ItemLink4>contact@MagixDB.com</ItemLink4>
                  <ItemLink5>+8801712958789</ItemLink5>
                </List4>
              </DivelementorWidgetWrap12>
              <DivelementorWidgetWrap13>
                <Heading48>Our Company</Heading48>
                <List5>
                  <ItemLink6>Home</ItemLink6>
                  <ItemLink7>Services</ItemLink7>
                  <ItemLink8>Features</ItemLink8>
                  <ItemLink9>About Us</ItemLink9>
                </List5>
              </DivelementorWidgetWrap13>
              <DivelementorWidgetWrap14>
                <Heading49>Features</Heading49>
                <List6>
                  <ItemLink10>Data Analytics</ItemLink10>
                  <ItemLink11>User Reporting</ItemLink11>
                  <ItemLink12>Data Insights</ItemLink12>
                </List6>
              </DivelementorWidgetWrap14>
              <DivelementorWidgetWrap15>
                <Heading410>Help</Heading410>
                <List7>
                  <ItemLink13>Help Center</ItemLink13>
                  <ItemLink14>Information</ItemLink14>
                  <ItemLink15>FAQ</ItemLink15>
                  <ItemLink16>Contact</ItemLink16>
                </List7>
              </DivelementorWidgetWrap15>
            </Section10>
            <DivelementorSection4>
              <P10>
                <Copyright2023>
                  Copyright: © 2023 MagixDB. All Rights Reserved.
                </Copyright2023>
              </P10>
            </DivelementorSection4>
          </DivelementorSection3>
        </Footer>
      </DivuicorePage>
    </MagixDbFinalDesignRoot>
  );
};

export default MagixDBFinalDesign;
