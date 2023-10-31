import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "../../company_animation/App";

const QueryYourDatabase = styled.b`
  position: absolute;
  top: 29.9px;
  left: calc(50% - 311.5px);
  letter-spacing: -1.19px;
  line-height: 48.65px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 622.3px;
`;
const Heading1 = styled.div`
  position: absolute;
  width: 98.29%;
  top: 0px;
  right: 0.84%;
  left: 0.87%;
  height: 109.2px;
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
  top: 1.4px;
  left: calc(50% - 245.7px);
  line-height: 18.61px;
  display: flex;
  align-items: center;
  width: 491.7px;
  height: 53.1px;
`;
const P = styled.div`
  position: absolute;
  width: 120.03%;
  top: 123px;
  right: -10%;
  left: -10.03%;
  height: 55.8px;
  font-size: 19.3px;
  color: var(--color-dimgray);
`;
const TryNow = styled.b`
  position: relative;
  line-height: 25.28px;
`;
const Button = styled.div`
  position: absolute;
  top: 199.9px;
  left: calc(50% - 98.85px);
  border-radius: 7.02px;
  background-color: var(--color-gray-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 25.277759552001953px 52.49348068237305px 25.277759552001953px
    50.555519104003906px;
  cursor: pointer;
  font-size: 24.82px;
  color: var(--color-white);
`;
const AnalyticsPlatformHeroImageIcon = styled.img`
  position: absolute;
  top: 335.7px;
  left: calc(50% - 268.65px);
  width: 538.2px;
  height: 267.4px;
  object-fit: cover;
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  top: 89px;
  left: calc(50% - 208px);
  width: 415.9px;
  height: 672px;
  text-align: center;
`;
const AnalyticsPlatformOrganizeImIcon = styled.img`
  position: absolute;
  top: calc(50% - 146.5px);
  left: calc(50% - 159.85px);
  border-radius: 12.66px;
  width: 319.8px;
  height: 318.3px;
  object-fit: cover;
`;
const DivelementorWidgetWrap1 = styled.div`
  position: relative;
  border-radius: 12.66px;
  background-color: var(--color-whitesmoke-200);
  width: 269.1px;
  height: 267.6px;
`;
const TalkWithYour = styled.b`
  position: absolute;
  top: calc(50% - 37.5px);
  left: calc(50% - 169.1px);
  letter-spacing: -0.82px;
  line-height: 36.47px;
  display: flex;
  align-items: center;
  width: 327.5px;
  height: 75.1px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 36.6px;
  left: 6.5px;
  width: 332.2px;
  height: 91.6px;
`;
const FireYourQueryContainer = styled.div`
  position: absolute;
  top: 1.2px;
  left: 0px;
  line-height: 17.1px;
  display: flex;
  align-items: center;
  width: 332.2px;
  height: 79.8px;
`;
const P1 = styled.div`
  position: absolute;
  top: 141.3px;
  left: 6.5px;
  width: 332.2px;
  height: 81px;
  font-size: 16.55px;
  color: var(--color-dimgray);
`;
const SpanelementorDividerSeparat = styled.div`
  position: absolute;
  width: calc(100% - 42.6px);
  top: 227.1px;
  right: 36.3px;
  left: 6.3px;
  border-top: 0.6px solid var(--color-dimgray);
  box-sizing: border-box;
  height: 0.6px;
`;
const DivelementorWidgetWrap2 = styled.div`
  position: relative;
  width: 345.1px;
  height: 292.9px;
`;
const DivelementorWidgetWrapParent = styled.div`
  position: absolute;
  top: 1501px;
  left: calc(50% - 352px);
  width: 704px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 85.12px;
  font-size: 29.55px;
`;
const SettingUpMagixdb = styled.b`
  position: absolute;
  top: -1.1px;
  left: 0px;
  letter-spacing: -0.74px;
  line-height: 33.01px;
  display: flex;
  align-items: center;
  width: 297.3px;
  height: 68px;
`;
const Heading21 = styled.div`
  position: absolute;
  top: 28.5px;
  left: 5.7px;
  width: 300.9px;
  height: 66px;
  font-size: 29.78px;
`;
const TellUsYour = styled.div`
  position: absolute;
  top: 1.1px;
  left: 17.5px;
  line-height: 15.47px;
  display: flex;
  align-items: center;
  width: 277px;
  height: 13.2px;
`;
const Div = styled.div`
  position: absolute;
  top: 3.7px;
  left: 0px;
  font-size: 8.02px;
  line-height: 8.02px;
  font-family: var(--font-font-awesome-5-free);
  color: var(--color-mediumslateblue);
  display: flex;
  align-items: center;
  width: 8.1px;
  height: 8px;
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300.9px;
  height: 20.1px;
`;
const StartQueryingYour = styled.div`
  position: absolute;
  top: 0.9px;
  left: 17.5px;
  line-height: 15.47px;
  display: flex;
  align-items: center;
  width: 283.5px;
  height: 13.7px;
`;
const Item1 = styled.div`
  position: absolute;
  top: 24.6px;
  left: 0px;
  width: 300.9px;
  height: 15.5px;
`;
const UpdateTheForm = styled.div`
  position: absolute;
  top: 1.4px;
  left: 17.5px;
  line-height: 15.47px;
  display: flex;
  align-items: center;
  width: 283.5px;
  height: 31.6px;
`;
const Item2 = styled.div`
  position: absolute;
  top: 47.7px;
  left: 0px;
  width: 300.8px;
  height: 32.8px;
`;
const List = styled.div`
  position: absolute;
  top: 105.9px;
  font-size:  16px;
  left: 6px;
  width: 300.8px;
  height: 89.9px;
  color: var(--color-dimgray);
`;
const GetStarted = styled.b`
font-size:22px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 5.35px);
  // left: calc(50% - 40.4px);
  line-height: 10.32px;
  display: inline-block;
  z-index: 0;
`;
const Button1 = styled.div`
  position: absolute;
  top: 206px;
  width:160px;
  left: 6px;
  border-radius: 2.87px;
  background-color: var(--color-gray-200);
  height: 40.5px;
  padding: 16.315603256225586px 21.381956100463867px 6.315603256225586px 52.63120651245117px;

  color: var(--color-white);
`;
const DivelementorWidgetWrap3 = styled.div`
  position: relative;
  width: 322.6px;
  height: 284.3px;
`;
const Heading22 = styled.b`
  position: absolute;
  top: 10.3px;
  left: 14.3px;
  letter-spacing: -0.74px;
  line-height: 33.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.6px;
  height: 35px;
`;
const Heading4 = styled.b`
  position: relative;
  letter-spacing: -0.37px;
  line-height: 16.5px;
`;
const FillTheForm = styled.div`
  position: relative;
  font-size: 9.53px;
  line-height: 12.03px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 179.3px;
  margin-top: -0.12px;
`;
const DivbdtEpAdvancedIconBoxC = styled.div`
  position: absolute;
  top: 13.1px;
  left: 40.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.5788190364837646px;
  text-align: left;
  font-size: var(--font-size-mini-3);
`;
const Section1 = styled.div`
  position: absolute;
  width: calc(100% - 11.5px);
  top: 13.8px;
  right: 48.8px;
  left: -37.3px;
  border-radius: 3.44px;
  background-color: var(--color-white);
  box-shadow: 0px 5.7px 28.65px -5.73px rgba(0, 0, 0, 0.15);
  height: 55.9px;
  overflow: hidden;
`;
const Heading23 = styled.b`
  position: absolute;
  top: 10.3px;
  left: 12.2px;
  letter-spacing: -0.74px;
  line-height: 33.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15.8px;
  height: 35px;
`;
const SelectYourPlan = styled.div`
  position: relative;
  font-size: 9.53px;
  line-height: 12.03px;
  color: var(--color-dimgray);
  margin-top: -0.11px;
`;
const DivbdtEpAdvancedIconBoxC1 = styled.div`
  position: absolute;
  top: 13.1px;
  left: 40.1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.5730891227722168px;
  text-align: left;
  font-size: var(--font-size-mini-3);
`;
const Section2 = styled.div`
  position: absolute;
  width: calc(100% - 11.5px);
  top: 83.4px;
  right: -37.2px;
  left: 48.7px;
  border-radius: 3.44px;
  background-color: var(--color-white);
  box-shadow: 0px 5.7px 28.65px -5.73px rgba(0, 0, 0, 0.15);
  height: 55.9px;
  overflow: hidden;
`;
const Heading24 = styled.b`
  position: absolute;
  top: 10.3px;
  left: 12.1px;
  letter-spacing: -0.74px;
  line-height: 33.01px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.1px;
  height: 35px;
`;
const ReceiveYourApi = styled.div`
  position: relative;
  font-size: 9.53px;
  line-height: 12.03px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 178.7px;
  margin-top: -0.12px;
`;
const Section3 = styled.div`
  position: absolute;
  width: calc(100% - 11.5px);
  top: 153.1px;
  right: 48.8px;
  left: -37.3px;
  border-radius: 3.44px;
  background-color: var(--color-white);
  box-shadow: 0px 5.7px 28.65px -5.73px rgba(0, 0, 0, 0.15);
  height: 55.9px;
  overflow: hidden;
  opacity: 0.99;
`;
const TalkWithYour1 = styled.div`
  position: relative;
  font-size: 9.53px;
  line-height: 12.03px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 179.3px;
  margin-top: -0.11px;
`;
const Section4 = styled.div`
  position: absolute;
  width: calc(100% - 11.5px);
  top: 222.9px;
  right: -37.2px;
  left: 48.7px;
  border-radius: 3.44px;
  background-color: var(--color-white);
  box-shadow: 0px 5.7px 28.65px -5.73px rgba(0, 0, 0, 0.15);
  height: 56.2px;
  overflow: hidden;
`;
const DivelementorWidgetWrap4 = styled.div`
  position: relative;
  border-radius: 11.46px;
  background-color: var(--color-whitesmoke-200);
  width: 231px;
  height: 309.5px;
  text-align: center;
  font-size: 27.51px;
`;
const DivelementorWidgetWrapGroup = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 346.95px);
  width: 694px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 79.23px;
`;
const Section = styled.div`
  position: absolute;
  top: 1860px;
  left: calc(50% - 351px);
  width: 701.1px;
  height: 316.3px;
  font-size: var(--font-size-mini-3);
`;
const Heading3 = styled.b`
  position: absolute;
  top: 58.1px;
  left: 58.1px;
  font-size: 33.22px;
  letter-spacing: -0.72px;
  line-height: 31.89px;
`;
const Heading31 = styled.b`
  position: absolute;
  top: 58.1px;
  left: 207.5px;
  font-size: 33.22px;
  letter-spacing: -0.72px;
  line-height: 31.89px;
  color: var(--color-mediumslateblue);
`;
const Database = styled.div`
  position: absolute;
  top: 98px;
  left: 58.1px;
  line-height: 19.93px;
  color: var(--color-dimgray);
`;
const DatabaseQueringOf = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 187.7px;
  height: 37.4px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 2.9px;
  left: 0px;
  font-size: 14.12px;
  line-height: 14.12px;
  font-family: var(--font-font-awesome-5-free);
  display: flex;
  align-items: center;
  width: 14.3px;
  height: 14.1px;
`;
const Item3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 209.3px;
  height: 38.2px;
`;
const UnlimitedQuerying = styled.div`
  position: absolute;
  top: 1.2px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 186px;
  height: 17.4px;
`;
const Item4 = styled.div`
  position: absolute;
  top: 48.7px;
  left: 0px;
  width: 201.5px;
  height: 28.2px;
`;
const UnlimitedSupport = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 186px;
  height: 17.4px;
`;
const Item5 = styled.div`
  position: absolute;
  top: 87.2px;
  left: 0px;
  width: 207.6px;
  height: 28.2px;
`;
const Item6 = styled.div`
  position: absolute;
  top: 125.4px;
  left: 0px;
  width: 207.6px;
  height: 28.2px;
`;
const UnlimitedUser = styled.div`
  position: absolute;
  top: 4.2px;
  left: 24.9px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 182.7px;
  height: 17.4px;
`;
const Item7 = styled.div`
  position: absolute;
  top: 163.6px;
  left: 0px;
  width: 207.6px;
  height: 28.2px;
`;
const List1 = styled.div`
  position: absolute;
  top: 137.9px;
  left: 58.1px;
  width: 209.3px;
  height: 202.7px;
`;
const ChoosePlan = styled.b`
  position: absolute;
  top: 15px;
  left: 41.4px;
  line-height: 14.95px;
`;
const Button2 = styled.div`
  position: absolute;
  width: calc(100% - 116.8px);
  top: 360.8px;
  right: 58.7px;
  left: 58.1px;
  border-radius: 4.15px;
  border: 0.8px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  height: 46.5px;
  text-align: center;
`;
const DivelementorWidgetWrap5 = styled.div`
  position: absolute;
  top: calc(50% - 217.4px);
  left: calc(50% - 144.7px);
  width: 290px;
  height: 434px;
`;
const Section5 = styled.div`
  position: absolute;
  top: 72px;
  left: calc(50% - 347.2px);
  border-radius: 16.61px;
  background-color: var(--color-white);
  box-shadow: 0px 16.6px 33.22px rgba(95, 95, 95, 0.17);
  border: 0.8px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  width: 317.8px;
  height: 448.8px;
`;
const Heading32 = styled.b`
  position: absolute;
  top: 49.8px;
  left: 58.1px;
  font-size: 33.22px;
  letter-spacing: -0.72px;
  line-height: 31.89px;
`;
const Heading33 = styled.b`
  position: absolute;
  top: 49.8px;
  left: 221.7px;
  font-size: 33.22px;
  letter-spacing: -0.72px;
  line-height: 31.89px;
  color: var(--color-mediumslateblue);
`;
const Database1 = styled.div`
  position: absolute;
  top: 89.7px;
  left: 58.1px;
  line-height: 19.93px;
`;
const DatabasesOfYour = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 201.8px;
  height: 34.1px;
`;
const Item8 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 223.4px;
  height: 38.2px;
`;
const UnlimitedQuerying1 = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 199.3px;
  height: 17.4px;
`;
const Item9 = styled.div`
  position: absolute;
  top: 48.2px;
  left: 0px;
  width: 220.9px;
  height: 28.2px;
`;
const UnlimitedSupport1 = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 183.6px;
  height: 17.4px;
`;
const Item10 = styled.div`
  position: absolute;
  top: 86.4px;
  left: 0px;
  width: 220.9px;
  height: 28.2px;
`;
const DaysFreeTrial1 = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 175.3px;
  height: 17.4px;
`;
const Item11 = styled.div`
  position: absolute;
  top: 124.6px;
  left: 0px;
  width: 223.4px;
  height: 28.2px;
`;
const UnlimitedUser1 = styled.div`
  position: absolute;
  top: 0.8px;
  left: 21.6px;
  line-height: 19.93px;
  display: flex;
  align-items: center;
  width: 152.8px;
  height: 17.4px;
`;
const Item12 = styled.div`
  position: absolute;
  top: 162.8px;
  left: 0px;
  width: 220.9px;
  height: 28.2px;
`;
const List2 = styled.div`
  position: absolute;
  top: 137.9px;
  left: 58.1px;
  width: 223.4px;
  height: 202.7px;
`;
const Button3 = styled.div`
  position: absolute;
  width: calc(100% - 116.3px);
  top: 352.5px;
  right: 58.2px;
  left: 58.1px;
  border-radius: 4.15px;
  background-color: var(--color-white);
  border: 0.8px solid var(--color-white);
  box-sizing: border-box;
  height: 46.5px;
  text-align: center;
  color: var(--color-darkslategray-100);
`;
const DivelementorWidgetWrap6 = styled.div`
  position: absolute;
  top: 72px;
  left: calc(50% + 29.2px);
  border-radius: 16.61px;
  width: 317.8px;
  height: 448.8px;
  background-image: url("/divelementorwidgetwrap@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--color-white);
`;
const DivelementorSection = styled.div`
  position: absolute;
  width: 100%;
  top: 2726px;
  right: 0px;
  left: 0px;
  background: linear-gradient(180deg, #fff 40%, #f5f8f3 40%);
  height: 685px;
  font-size: 19.93px;
`;
const Heading26 = styled.b`
  position: absolute;
  top: -0.6px;
  left: calc(50% - 208.8px);
  letter-spacing: -0.84px;
  line-height: 37.4px;
`;
const WhetherYoureLookingContainer = styled.div`
  position: absolute;
  top: 1.3px;
  left: 20.2px;
  line-height: 17.53px;
  display: flex;
  align-items: center;
  width: 526.1px;
  height: 32.6px;
`;
const P2 = styled.div`
  position: absolute;
  top: 50.4px;
  left: calc(50% - 251.9px);
  width: 540.5px;
  height: 35.3px;
  font-size: 15.67px;
  color: var(--color-dimgray);
`;
const WhatKindOf = styled.div`
  position: absolute;
  top: 5.4px;
  left: 10.3px;
  line-height: 11.01px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 225.5px;
  height: 23.1px;
`;
const Div13 = styled.div`
  position: absolute;
  top: 11px;
  left: 267.1px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 2.55px;
  background-color: var(--color-white);
  width: 288px;
  height: 33.4px;
  overflow: hidden;
`;
const IsItEasy = styled.div`
  position: absolute;
  top: 10.7px;
  left: 11.2px;
  line-height: 11.01px;
  font-weight: 500;
`;
const Div14 = styled.div`
  position: absolute;
  top: 12.5px;
  left: 268.1px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const Heading5 = styled.div`
  position: absolute;
  top: 45.7px;
  left: 0px;
  border-radius: 2.55px;
  background-color: var(--color-white);
  width: 288px;
  height: 33.4px;
  overflow: hidden;
`;
const Heading6 = styled.div`
  position: absolute;
  top: 91.3px;
  left: 0px;
  border-radius: 2.55px;
  background-color: var(--color-white);
  width: 288px;
  height: 33.4px;
  overflow: hidden;
`;
const WhichDatabasesDoes = styled.div`
  position: absolute;
  top: 5.7px;
  left: 10.8px;
  line-height: 11.01px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 240.3px;
`;
const Div16 = styled.div`
  position: absolute;
  top: 11.9px;
  left: 267.6px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const Heading7 = styled.div`
  position: absolute;
  top: 137px;
  left: 0px;
  border-radius: 2.55px;
  background-color: var(--color-white);
  width: 288px;
  height: 33.4px;
  overflow: hidden;
`;
const DivbdtEpAccordion241177b = styled.div`
  position: absolute;
  top: 5.1px;
  left: 5.1px;
  width: 288px;
  height: 170.4px;
`;
const WhatHappensWhen = styled.div`
  position: absolute;
  top: 6.9px;
  left: 11.9px;
  line-height: 11.01px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 234.7px;
  height: 20px;
`;
const Div17 = styled.div`
  position: absolute;
  top: 13.1px;
  left: 268.7px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const WhatKindOf1 = styled.div`
  position: absolute;
  top: 5.3px;
  left: 11.4px;
  line-height: 11.01px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 201.4px;
  height: 23.1px;
`;
const Div18 = styled.div`
  position: absolute;
  top: 12px;
  left: 268.2px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const CanICollaborate = styled.div`
  position: absolute;
  top: 5.3px;
  left: 11.4px;
  line-height: 11.01px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 215.2px;
  height: 22.5px;
`;
const Div19 = styled.div`
  position: absolute;
  top: 11.4px;
  left: 268.2px;
  font-size: 9.75px;
  line-height: 9.75px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8.7px;
  height: 9.8px;
`;
const WhatIsThe = styled.div`
  position: absolute;
  top: 10.9px;
  left: 11.2px;
  line-height: 11.01px;
  font-weight: 500;
`;
const DivbdtEpAccordion19c020e = styled.div`
  position: absolute;
  top: 5.1px;
  left: 303.3px;
  width: 288px;
  height: 170.4px;
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: 126.8px;
  left: calc(50% - 298.2px);
  width: 596.3px;
  height: 180.6px;
  text-align: left;
  font-size:12px;
  // font-size: var(--font-size-smi-3);
`;
const DivelementorWidgetWrap7 = styled.div`
  position: absolute;
  top: calc(50% - 167px);
  left: calc(50% - 380px);
  width: 759.6px;
  height: 335px;
`;
const DivelementorSection1 = styled.div`
  position: absolute;
  width: 100%;
  top: 3410px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 456px;
  text-align: center;
  font-size: 32.64px;
`;
const Logo1webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 23.55px);
  left: calc(50% - 373.15px);
  width: 122.9px;
  height: 48.1px;
  object-fit: cover;
`;
const Logo4webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 23.55px);
  left: calc(50% - 165.35px);
  width: 122.9px;
  height: 48.1px;
  object-fit: cover;
`;
const Logo3webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 23.55px);
  left: calc(50% + 42.45px);
  width: 122.9px;
  height: 48.1px;
  object-fit: cover;
`;
const Logo2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 23.55px);
  left: calc(50% + 250.25px);
  width: 122.9px;
  height: 48.1px;
  object-fit: cover;
`;
const DivelementorContainer1 = styled.div`
  position: absolute;
  top: 7.8px;
  left: calc(50% - 370px);
  width: 740.1px;
  height: 62.9px;
`;
const PoweredByMost = styled.b`
  position: absolute;
  top: 19.1px;
  left: 0px;
  letter-spacing: -0.77px;
  line-height: 34px;
  display: flex;
  align-items: center;
  width: 348.7px;
  height: 70.1px;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 17px;
  left: 13.5px;
  width: 448.4px;
  height: 109.1px;
`;
const B = styled.b`
  position: absolute;
  top: 0px;
  left: -7.9px;
  line-height: 51px;
`;
const ActiveUsers = styled.div`
  position: absolute;
  top: 51px;
  left: -36.4px;
  font-size: 24.82px;
  line-height: 19.13px;
`;
const DivbdtEpAdvancedCounterCo = styled.div`
  position: absolute;
  margin: 0 !important;
  top: 0px;
  left: calc(50% - 37.6px);
  width: 76px;
  height: 70.1px;
  z-index: 0;
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 18.8px;
  left: 71.1px;
  width: 142px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 29.041667938232422px 0px 0px;
  box-sizing: border-box;
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  top: 17px;
  right: 21.3px;
  width: 283.3px;
  height: 109.1px;
  text-align: center;
  font-size: 38.79px;
`;
const DivelementorContainer2 = styled.div`
  position: absolute;
  top: 25.5px;
  left: calc(50% - 362.65px);
  width: 725.3px;
  height: 151.6px;
`;
const Section6 = styled.div`
  position: absolute;
  top: 114px;
  left: calc(50% - 363.1px);
  border-radius: 10.63px;
  border: 0.7px solid var(--color-white);
  box-sizing: border-box;
  width: 725.3px;
  height: 199px;
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  width: calc(100% - 581.8px);
  top: 38.8px;
  right: 290.9px;
  left: 290.9px;
  height: 339.4px;
`;
const DivelementorSection2 = styled.div`
  position: absolute;
  width: 100%;
  top: 2257px;
  right: 0px;
  left: 0px;
  height: 440.3px;
  background-image: url("/divelementorsection@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: 27.63px;
  color: var(--color-white);
`;
const ExploreOurCuttingEdge = styled.b`
  position: absolute;
  top: calc(50% - 45.65px);
  left: calc(50% - 348.75px);
  letter-spacing: -1px;
  line-height: 44.25px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 697.5px;
  height: 91.4px;
`;
const Heading28 = styled.div`
  position: absolute;
  top: 7.7px;
  left: calc(50% - 332.75px);
  width: 697.5px;
  height: 88.3px;
  font-size: 36.1px;
`;
const ProvideYourEmail = styled.div`
  position: absolute;
  top: 1.5px;
  left: calc(50% - 330.3px);
  line-height: 20.74px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 660.6px;
  height: 38.4px;
`;
const P3 = styled.div`
  position: absolute;
  top: 111.4px;
  left: calc(50% - 309.65px);
  width: 660.6px;
  height: 41.5px;
  color: rgba(255, 255, 255, 0.64);
`;
const EnterYourMail = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  width: 234.3px;
  height: 37.6px;
`;
const Input = styled.div`
  position: absolute;
  top: 12.3px;
  left: 34.6px;
  width: 234.3px;
  height: 37.6px;
  overflow: hidden;
`;
const GetFreeTrial = styled.b`
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 6.5px);
  left: calc(50% - 57.25px);
  line-height: 13.83px;
  display: inline-block;
  z-index: 0;
`;
const Button4 = styled.div`
  position: absolute;
  width: calc(100% - 400.8px);
  top: calc(50% - 13.85px);
  right: 39px;
  left: 361.8px;
  border-radius: 3.84px;
  background-color: var(--color-gray-200);
  height: 53px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 13.826889038085938px 28.62934684753418px 13.826889038085938px
    27.653778076171875px;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-white);
`;
const Form = styled.div`
  position: absolute;
  top: 6.1px;
  left: calc(50% - 284.2px);
  width: 572.3px;
  height: 41.5px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 183.6px;
  left: calc(50% - 267.45px);
  border-radius: 3.84px;
  background-color: var(--color-white);
  width: 597.6px;
  height: 78.4px;
  text-align: left;
  color: var(--color-dimgray);
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  width: calc(100% - 575.9px);
  top: 61.5px;
  right: 287.8px;
  left: 288.1px;
  height: 245.2px;
`;
const Section7 = styled.div`
  position: absolute;
  width: 100%;
  top: 3865px;
  right: 0px;
  left: 0px;
  height: 395px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  font-size: 18.44px;
  color: var(--color-white);
`;
const Heading29 = styled.b`
  position: absolute;
  top: -1.9px;
  left: calc(50% - 306px);
  letter-spacing: -1.24px;
  line-height: 54.98px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 613.2px;
  height: 58.2px;
`;
const WithMagixdbApi = styled.div`
  position: absolute;
  top: calc(50% - 26px);
  left: calc(50% - 343.8px);
  line-height: 25.77px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 687px;
`;
const P4 = styled.div`
  position: absolute;
  top: 74px;
  left: calc(50% - 365.2px);
  width: 730px;
  height: 89px;
  font-size: var(--font-size-base);
  color: var(--color-dimgray);
`;
const SpanbdtEpAdvancedIconBox = styled.img`
  position: absolute;
  top: 7.9px;
  left: calc(50% - 39px);
  border-radius: 13.44px;
  width: 79.3px;
  height: 79.3px;
  overflow: hidden;
`;
const Heading44 = styled.b`
  position: absolute;
  top: 9.3px;
  left: calc(50% - 100.5px);
  letter-spacing: -0.4px;
  line-height: 17.59px;
`;
const IdentifyTrendsInContainer = styled.div`
  position: absolute;
  top: calc(50% - 37.65px);
  left: calc(50% - 142.8px);
  line-height: 22.59px;
  display: flex;
  align-items: center;
  width: 285.6px;
  height: 75.4px;
  font-size:24px;
`;
const P5 = styled.div`
  position: absolute;
  top: 48.9px;
  left: calc(50% - 142.8px);
  width: 285.6px;
  height: 96.5px;
  font-size: var(--font-size-4xl-8);
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC4 = styled.div`
  position: absolute;
  top: 93.9px;
  left: 1.3px;
  width: 285.6px;
  height: 167.9px;
`;
const DivbdtEpAdvancedIconBox = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 143.5px);
  width: 287px;
  height: 261.8px;
`;
const Div51 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 287px;
  height: 261.8px;
`;
const SpanbdtEpAdvancedIconBox1 = styled.img`
  position: absolute;
  top: 7.9px;
  left: calc(50% - 39px);
  border-radius: var(--br-smi-8);
  width: 79.3px;
  height: 79.3px;
  overflow: hidden;
`;
const Heading45 = styled.b`
  position: absolute;
  top: 4px;
  left: calc(50% - 142.8px);
  letter-spacing: -0.4px;
  line-height: 24.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285.6px;
`;
const QueryDynamicallyAnd = styled.div`
  position: absolute;
  top: calc(50% - 37.65px);
  left: calc(50% - 142.8px);
  line-height: 22.59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285.6px;
  height: 75.4px;
`;
const P6 = styled.div`
  position: absolute;
  top: 63.5px;
  left: calc(50% - 142.8px);
  width: 285.6px;
  height: 96.5px;
  font-size: var(--font-size-4xl-8);
  color: var(--color-dimgray);
`;
const Div61 = styled.div`
  position: absolute;
  top: 0px;
  left: 339.9px;
  width: 287px;
  height: 261.8px;
`;
const Div5Parent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 626.8px;
  height: 261.8px;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 288.3px;
  left: 292.2px;
  width: 42.3px;
  height: 15.9px;
`;
const FrameParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 626.8px;
  height: 304.1px;
`;
const Heading46 = styled.b`
  position: absolute;
  top: 15.9px;
  left: calc(50% - 142.8px);
  letter-spacing: -0.4px;
  line-height: 24.2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 285.6px;
`;
const Heading47 = styled.b`
  position: absolute;
  top: 15.9px;
  left: calc(50% - 74px);
  letter-spacing: -0.4px;
  line-height: 24.2px;
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 0px;
  left: 679.7px;
  width: 626.8px;
  height: 304.1px;
`;
const Section8 = styled.div`
  position: absolute;
  top: 185.5px;
  left: calc(50% - 340.3px);
  width: 679.7px;
  height: 304.1px;
  overflow-x: auto;
  font-size: 26.45px;
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  top: calc(50% - 224.5px);
  left: calc(50% - 258px);
  width: 516.4px;
  height: 449px;
`;
const DivelementorWidgetWrapWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 855px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 605px;
  overflow: hidden;
  text-align: center;
  font-size: 47.73px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: relative;
  width: 40.6px;
  height: 43.5px;
  object-fit: cover;
`;
const Magixdb = styled.b`
  position: relative;
  font-size: 17.58px;
  line-height: 58.61px;
`;
const EnhanceThePower = styled.div`
  position: absolute;
  top: calc(50% - 25.45px);
  left: calc(50% - 124.35px);
  line-height: 16.09px;
  display: flex;
  align-items: center;
  width: 232.9px;
  height: 50.3px;
`;
const P9 = styled.div`
  position: relative;
  width: 248.7px;
  height: 49.7px;
  color: var(--color-dimgray);
`;
const ItemLink = styled.div`
  position: absolute;
  top: -0.2px;
  left: 0px;
  line-height: 16.09px;
  font-weight: 500;
`;
const ItemLink1 = styled.div`
  position: absolute;
  top: 23.2px;
  left: 0px;
  line-height: 16.09px;
  font-weight: 500;
`;
const List3 = styled.div`
  position: relative;
  width: 248.7px;
  height: 39.3px;
  color: var(--color-midnightblue);
`;
const DivelementorWidgetWrap12 = styled.div`
  position: absolute;
  width: calc(100% - 448.3px);
  top: 0px;
  right: 448.3px;
  left: 0px;
  height: 174.7px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5957820415496826px 0px;
  box-sizing: border-box;
  gap: 6.55px;
  font-size: 14.56px;
  color: var(--color-black);
`;
const Heading48 = styled.b`
  position: absolute;
  top: 5.4px;
  left: 6px;
  letter-spacing: -0.39px;
  line-height: 17.16px;
`;
const ItemLink2 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  line-height: 16.09px;
`;
const ItemLink3 = styled.div`
  position: absolute;
  top: 23.2px;
  left: 0px;
  line-height: 16.09px;
`;
const ItemLink4 = styled.div`
  position: absolute;
  top: 46.4px;
  left: 0px;
  line-height: 16.09px;
`;
const ItemLink5 = styled.div`
  position: absolute;
  top: 69.7px;
  left: 0px;
  line-height: 16.09px;
`;
const List4 = styled.div`
  position: absolute;
  top: 35px;
  left: 6px;
  width: 127.2px;
  height: 85.8px;
  font-size: 14.56px;
`;
const DivelementorWidgetWrap13 = styled.div`
  position: absolute;
  width: calc(100% - 536.2px);
  top: 0px;
  right: 279.6px;
  left: 256.6px;
  height: 174.7px;
`;
const List5 = styled.div`
  position: absolute;
  top: 35px;
  left: 6px;
  width: 127.8px;
  height: 62.6px;
  font-size: 14.56px;
`;
const DivelementorWidgetWrap14 = styled.div`
  position: absolute;
  width: calc(100% - 556.9px);
  top: 0px;
  right: 139.5px;
  left: 417.4px;
  height: 174.7px;
`;
const ItemLink10 = styled.div`
  position: absolute;
  top: 24.4px;
  left: 0.1px;
  line-height: 16.09px;
  display: flex;
  align-items: center;
  width: 88px;
  height: 14px;
`;
const ItemLink11 = styled.div`
  position: absolute;
  top: 47.5px;
  left: 0.1px;
  line-height: 16.09px;
  display: flex;
  align-items: center;
  width: 33.4px;
  height: 14px;
`;
const ItemLink12 = styled.div`
  position: absolute;
  top: 71.1px;
  left: 0.1px;
  line-height: 16.09px;
  display: flex;
  align-items: center;
  width: 60.7px;
  height: 13.3px;
`;
const List6 = styled.div`
  position: absolute;
  top: 35px;
  left: 6px;
  width: 127.6px;
  height: 85.8px;
  font-size: 14.56px;
`;
const DivelementorWidgetWrap15 = styled.div`
  position: absolute;
  width: calc(100% - 557.5px);
  top: 0px;
  right: 0px;
  left: 557.5px;
  height: 174.7px;
`;
const Section9 = styled.div`
  position: absolute;
  top: 85.8px;
  left: calc(50% - 358px);
  width: 697px;
  height: 174.7px;
`;
const Copyright2023 = styled.div`
  position: absolute;
  top: calc(50% - 12px);
  left: calc(50% - 277.2px);
  line-height: 24px;
`;
const P10 = styled.div`
  position: absolute;
  top: 35px;
  left: calc(50% - 292px);
  width: 585px;
  height: 24px;
`;
const DivelementorSection4 = styled.div`
  position: absolute;
  width: 100%;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-color: var(--color-gray-200);
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
  height: 431px;
`;
const Footer = styled.div`
  position: absolute;
  width: calc(100% + 1px);
  top: 4260px;
  right: -1px;
  left: 0px;
  height: 431px;
  font-size: 19.41px;
`;
const ArticleMain = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  // height: 5820px;
`;
const Divprimary = styled.div`
  position: absolute;
  width: 100%;
  top: 83px;
  right: 0px;
  left: 0px;
  background-color: var(--color-white);
  height: 4691px;
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
  right: 48.1px;
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
  top: 1px;
  left: 59px;
  width: 180px;
  height: 80px;
  font-size: var(--font-size-5xl);
  color: var(--color-black);
`;
const Nav = styled.div`
  position: relative;
  width: 768px;
  height: 81px;
`;
const DivuicoreHeaderWrapper = styled.div`
  position: absolute;
  top: calc(50% - 2387px);
  left: calc(50% - 384px);
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 1px 0px #dcdcdc;
  width: 768px;
  height: 71px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-base);
`;
const DivuicorePage = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 4774px;
`;
const MagixdbVersion1FinalllllTaRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 4774px;
  text-align: left;
  font-size: 43.62px;
  color: var(--color-darkslategray-100);
  font-family: var(--font-space-grotesk);
`;

const MagixDBVersion1FinalllllTa = () => {
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
    navigate("/login");
  }, [navigate]);
  const onGetStartedClick = useCallback(() => {
    navigate("/signup");
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
              <AnalyticsPlatformHeroImageIcon
                alt=""
                src="/analyticsplatformheroimagewebp@2x.png"
              />
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
                  <Button1 onClick={onGetStartedClick}>
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
                      <Div14><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div14>
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
                      <Div19><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div19>
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
                                    Identify trends in your <br/> data
                                  </WeProvideSupport>
                                  <WeProvideSupport>
                                    to make better<br/> decisions.
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
                    <FrameChild alt="" src="/1.svg" />
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
                    <FrameChild alt="" src="/2.svg" />
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
                    <ItemLink>Email Address :<br/>  contact@MagixDB.com<br/></ItemLink>
                  <ItemLink1><br/>Contact Number: +8801712958789</ItemLink1>
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
                <ItemLink14 >Product</ItemLink14>
                <ItemLink14>Pricing</ItemLink14>
                <ItemLink13 onClick={onItemLink16Click}>About Us</ItemLink13>
              </List7>
              {/* <Button5>
                <Spanbar />
                <Spanbar1>
                  <Pseudo />
                </Spanbar1>
                <Spanbar2 />
              </Button5> */}
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

export default MagixDBVersion1FinalllllTa;
