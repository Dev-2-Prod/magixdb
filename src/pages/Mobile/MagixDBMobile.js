import { useState, useCallback } from "react";
import Frame from "../../components/Frame";
import PortalPopup from "../../components/PortalPopup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Carousel from "../../company_animation/App";

const QueryYourDatabase = styled.b`
  position: absolute;
  top: 15.3px;
  left: calc(50% - 158.7px);
  letter-spacing: -0.61px;
  line-height: 24.83px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 317.6px;
`;
const Heading1 = styled.div`
  position: absolute;
  width: 98.33%;
  top: 0px;
  right: 0.84%;
  left: 0.84%;
  height: 55.7px;
`;
const WeProvideSupport = styled.p`
  margin: 0;
`;
const QueryYourDatabaseContainer1 = styled.span`
  font-size: 10px;
  line-break: anywhere;
  width: 100%;
`;
const QueryYourDatabaseContainer = styled.div`
  position: absolute;
  top: 0.2px;
  left: calc(50% - 143.8px);
  line-height: 14.5px;
  display: flex;
  align-items: center;
  width: 288px;
  height: 28px;
`;
const P = styled.div`
  position: absolute;
  width: 120.1%;
  top: 62.8px;
  right: -10.05%;
  left: -10.05%;
  height: 28.5px;
  font-size: var(--font-size-xs);
  color: var(--color-dimgray);
`;
const TryNow = styled.b`
  position: relative;
  line-height: 11.58px;
`;
const Button = styled.div`
  position: absolute;
  top: 110px;
  left: calc(50% - 50.3px);
  border-radius: 3.22px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 11.579136848449707px 24.046009063720703px 11.579136848449707px
    23.158273696899414px;
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--color-white);
`;
const AnalyticsPlatformHeroImageIcon = styled.video`
  position: absolute;
  top: 171.4px;
  left: calc(50% - 155.8px);
  width: 311.2px;
  height: 154.6px;
  object-fit: cover;
`;
const DivelementorWidgetWrap = styled.div`
  position: absolute;
  top: 123px;
  left: calc(50% - 42px);
  width: 83.6px;
  height: 343px;
`;
const AnalyticsPlatformOrganizeImIcon = styled.img`
  position: absolute;
  top: calc(50% - 122.5px);
  left: calc(50% - 123.2px);
  border-radius: var(--br-xs-6);
  width: 246.4px;
  height: 245px;
  object-fit: cover;
`;
const DivelementorWidgetWrap1 = styled.div`
  position: absolute;
  top: 841px;
  left: calc(50% - 123px);
  border-radius: var(--br-xs-6);
  background-color: var(--color-whitesmoke-200);
  width: 246.4px;
  height: 245px;
`;
const Heading2 = styled.div`
  position: absolute;
  top: 41.7px;
  left: 4.8px;
  width: 249.7px;
  height: 54.8px;
`;
const TalkWithYour = styled.b`
  position: absolute;
  top: 14px;
  left: calc(50% - 124.6px);
  letter-spacing: -0.62px;
  line-height: 27.39px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 249px;
  height: 56px;
`;
const FireYourQueryContainer = styled.div`
  position: absolute;
  top: -14px;
  left: 0px;
  line-height: 17.84px;
  display: flex;
  align-items: center;
  width: 249px;
  height: 78px;
`;
const P1 = styled.div`
  position: absolute;
  top: 99px;
  left: 5px;
  width: 249px;
  height: 79px;
  font-size: var(--font-size-xs);
  color: var(--color-dimgray);
`;
const SpanelementorDividerSeparat = styled.div`
  position: absolute;
  top: 174.3px;
  left: calc(50% - 113.6px);
  border-top: 0.5px solid var(--color-dimgray);
  box-sizing: border-box;
  width: 227.2px;
  height: 0.5px;
`;
const DivelementorWidgetWrap2 = styled.div`
  position: absolute;
  top: 1124px;
  left: calc(50% - 130px);
  width: 259.2px;
  height: 220px;
  font-size: 22.35px;
`;
const SettingUpMagixdb = styled.b`
  position: absolute;
  top: -0.9px;
  left: calc(50% - 114.3px);
  letter-spacing: -0.57px;
  line-height: 25.43px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 229px;
  height: 52.4px;
`;
const Heading21 = styled.div`
  position: relative;
  width: 231.8px;
  height: 50.9px;
  font-size: var(--font-size-3xl);
`;
const TellUsYour = styled.div`
  position: absolute;
  top: 0.9px;
  left: 13.5px;
  line-height: 11.92px;
  display: flex;
  align-items: center;
  width: 213.4px;
  height: 10.2px;
`;
const Div = styled.div`
  position: absolute;
  top: 2.9px;
  left: 0px;
  font-size: 6.18px;
  line-height: 6.18px;
  font-family: var(--font-font-awesome-5-free);
  color: var(--color-mediumslateblue);
  display: flex;
  align-items: center;
  width: 6.3px;
  height: 6.2px;
`;
const Item = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 231.8px;
  height: 15.5px;
`;
const StartQueryingYour = styled.div`
  position: absolute;
  top: 1.3px;
  left: 13.6px;
  line-height: 11.92px;
  display: flex;
  align-items: center;
  width: 218px;
  height: 10px;
`;
const Item1 = styled.div`
  position: absolute;
  top: 19px;
  left: 0px;
  width: 231.8px;
  height: 11.9px;
`;
const UpdateTheForm = styled.div`
  position: absolute;
  top: 1.1px;
  left: 13.6px;
  line-height: 11.92px;
  display: flex;
  align-items: center;
  width: 218px;
  height: 27px;
`;
const Item2 = styled.div`
  position: absolute;
  top: 37px;
  left: 0px;
  width: 232px;
  height: 28px;
`;
const List = styled.div`
  position: relative;
  font-size: 10px;
  width: 232px;
  height: 72px;
  text-align: left;
  color: var(--color-dimgray);
`;
const GetStarted = styled.b`
  font-size: 10px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 7.9px);
  left: calc(50% - 34px);
  line-height: 7.95px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 16px;
  flex-shrink: 0;
  z-index: 0;
`;
const Button1 = styled.div`
  border-radius: 2.21px;
  background-color: var(--color-gray-100);
  width: 132px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 7.947579860687256px 16.473567962646484px 7.947579860687256px
    15.895159721374512px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  color: var(--color-white);
`;
const DivelementorWidgetWrap3 = styled.div`
  position: absolute;
  top: 1356px;
  left: calc(50% - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 22px 4px;
  gap: 17px;
  font-size: var(--font-size-xs);
`;
const Heading22 = styled.b`
  position: absolute;
  top: 7.1px;
  left: 15.2px;
  letter-spacing: -0.8px;
  line-height: 35.59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.5px;
  height: 37.7px;
`;
const Heading4 = styled.b`
  position: relative;
  letter-spacing: -0.4px;
  line-height: 17.79px;
  display: flex;
  align-items: center;
  width: 140px;
`;
const FillTheForm = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 12.98px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 193px;
  height: 33px;
  flex-shrink: 0;
`;
const DivbdtEpAdvancedIconBoxC = styled.div`
  position: absolute;
  top: 7px;
  left: 43px;
  width: 193px;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.6240435242652893px;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  text-align: left;
  font-size: var(--font-size-sm);
`;
const Section = styled.div`
  position: absolute;
  width: calc(100% - 13px);
  top: 14.9px;
  right: 53px;
  left: -40px;
  border-radius: 3.71px;
  background-color: var(--color-white);
  box-shadow: 0px 6.2px 30.89px -6.18px rgba(0, 0, 0, 0.15);
  height: 71px;
  overflow: hidden;
`;
const Heading23 = styled.b`
  position: absolute;
  top: 8.1px;
  left: 13.2px;
  letter-spacing: -0.8px;
  line-height: 35.59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 37.7px;
`;
const Heading41 = styled.b`
  position: relative;
  letter-spacing: -0.4px;
  line-height: 17.79px;
`;
const SelectYourPlan = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 12.98px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 193px;
`;
const DivbdtEpAdvancedIconBoxC1 = styled.div`
  position: absolute;
  top: 14px;
  left: 43.5px;
  width: 193px;
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.6178659796714783px;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  text-align: left;
  font-size: var(--font-size-sm);
`;
const Section1 = styled.div`
  position: absolute;
  width: calc(100% - 12.4px);
  top: 100px;
  right: -40.1px;
  left: 52.5px;
  border-radius: 3.71px;
  background-color: var(--color-white);
  box-shadow: 0px 6.2px 30.89px -6.18px rgba(0, 0, 0, 0.15);
  height: 71px;
  overflow: hidden;
`;
const Heading24 = styled.b`
  position: absolute;
  top: 8.1px;
  left: 13px;
  letter-spacing: -0.8px;
  line-height: 35.59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.3px;
  height: 37.7px;
`;
const DivbdtEpAdvancedIconBoxC2 = styled.div`
  position: absolute;
  top: 13.9px;
  left: 43.2px;
  width: 193px;
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.6178659796714783px;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  text-align: left;
  font-size: var(--font-size-sm);
`;
const Section2 = styled.div`
  position: absolute;
  width: calc(100% - 12.4px);
  top: 185.1px;
  right: 52.6px;
  left: -40.2px;
  border-radius: 3.71px;
  background-color: var(--color-white);
  box-shadow: 0px 6.2px 30.89px -6.18px rgba(0, 0, 0, 0.15);
  height: 71px;
  overflow: hidden;
  opacity: 0.99;
`;
const Heading25 = styled.b`
  position: absolute;
  top: 9.1px;
  left: 13.2px;
  letter-spacing: -0.8px;
  line-height: 35.59px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17px;
  height: 37.7px;
`;
const TalkWithYour1 = styled.div`
  position: relative;
  font-size: var(--font-size-xs);
  line-height: 12.98px;
  color: var(--color-dimgray);
  display: flex;
  align-items: center;
  width: 184px;
`;
const DivbdtEpAdvancedIconBoxC3 = styled.div`
  position: absolute;
  top: 13.7px;
  left: 43.5px;
  width: 184px;
  height: 53px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0.6178659796714783px;
  box-sizing: border-box;
  gap: var(--gap-7xs);
  text-align: left;
  font-size: var(--font-size-sm);
`;
const Section3 = styled.div`
  position: absolute;
  width: calc(100% - 12.4px);
  top: 270.3px;
  right: -40.1px;
  left: 52.5px;
  border-radius: 3.71px;
  background-color: var(--color-white);
  box-shadow: 0px 6.2px 30.89px -6.18px rgba(0, 0, 0, 0.15);
  height: 71px;
  overflow: hidden;
`;
const DivelementorWidgetWrap4 = styled.div`
  position: absolute;
  top: 1618px;
  left: calc(50% - 125px);
  border-radius: 12.36px;
  background-color: var(--color-whitesmoke-200);
  width: 249px;
  height: 358px;
  font-size: 29.66px;
`;
const Heading26 = styled.b`
  position: absolute;
  top: -0.8px;
  left: calc(50% - 122.3px);
  letter-spacing: -0.49px;
  line-height: 21.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 244.7px;
  height: 23.2px;
`;
const WithMagixdbApi = styled.div`
font-size: 15px;
  position: absolute;
  top: 5px;
  left: calc(50% - 164px);
  line-height: 14.28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 328px;
  height: 38px;
`;
const P2 = styled.div`
  position: absolute;
  top: 30.3px;
  left: calc(50% - 162.2px);
  width: 324px;
  height: 53px;
  font-size: var(--font-size-xs);
  color: var(--color-dimgray);
`;
const SpanbdtEpAdvancedIconBox = styled.img`
  position: absolute;
  top: 7px;
  left: calc(50% - 20px);
  border-radius: 6.77px;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;
const Heading44 = styled.b`
  position: absolute;
  top: -1px;
  left: calc(50% - 59px);
  letter-spacing: -0.3px;
  line-height: 13.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 14px;
`;
const IdentifyTrendsInContainer = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 82.5px);
  line-height: 11.08px;
  display: flex;

  flex-direction : column;
  align-items: center;
  width: 165px;
  height: 29px;
`;
const P3 = styled.div`
  position: absolute;
  top: 28px;
  left: calc(50% - 83px);
  width: 165px;
  height: 42px;
  font-size: var(--font-size-xs);
  color: var(--color-dimgray);
`;
const DivbdtEpAdvancedIconBoxC4 = styled.div`
  position: absolute;
  top: 71px;
  left: 1px;
  width: 172px;
  height: 70px;
`;
const DivbdtEpAdvancedIconBox = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 86px);
  width: 172px;
  height: 153px;
`;
const Div1Child = styled.img`
  position: absolute;
  top: 165px;
  left: 58px;
  width: 56px;
  height: 8px;
`;
const Div11 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 172px;
  height: 173px;
`;
const SpanbdtEpAdvancedIconBox1 = styled.img`
  position: absolute;
  top: 7px;
  left: calc(50% - 20px);
  border-radius: 6.45px;
  width: 40px;
  height: 40px;
  overflow: hidden;
`;
const Heading45 = styled.b`
  position: absolute;
  top: -1px;
  left: calc(50% - 83px);
  letter-spacing: -0.3px;
  line-height: 13.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 169px;
  height: 24px;
`;
const QueryDynamicallyAnd = styled.div`
  position: absolute;
  top: 12px;
  left: calc(50% - 82.5px);
  justify-content:flex-start;
  font-size:10px;
  flex-direction:column;
  line-height: 11.08px;
  display: flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  width: 165px;
  height: 29px;
`;
const Div21 = styled.div`
  position: absolute;
  top: 0px;
  left: 202px;
  width: 172px;
  height: 173px;
`;
const Div3 = styled.div`
  position: absolute;
  top: 0px;
  left: 404px;
  width: 172px;
  height: 173px;
`;
const Heading47 = styled.b`
  position: absolute;
  top: -1px;
  left: calc(50% - 59px);
  letter-spacing: -0.3px;
  line-height: 13.3px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 118px;
  height: 24px;
`;
const Div4 = styled.div`
  position: absolute;
  top: 0px;
  left: 606px;
  width: 172px;
  height: 173px;
`;
const Div1Parent = styled.div`
  position: absolute;
  top: 93.3px;
  left: calc(50% - 86.2px);
  width: 173px;
  height: 200px;
  overflow-x: auto;
  font-size: var(--font-size-sm);
`;
const DivelementorWidgetWrap5 = styled.div`
  position: absolute;
  width: calc(100% - 285.6px);
  top: 29.7px;
  right: 133.6px;
  left: 152px;
  height: 179.2px;
`;
const DivelementorWidgetWrapWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 490px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 331px;
  overflow: hidden;
  font-size: 18px;
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
const Button2 = styled.div`
  position: relative;
  width: 20px;
  height: 15px;
`;
const DivuicoreNavMenu = styled.div`
  position: absolute;
  top: 21px;
  right: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
const Magixdb = styled.b`
  position: absolute;
  top: 0px;
  left: 54.9px;
  line-height: 57px;
`;
const Logo1RemovebgPreview1Icon = styled.img`
  position: absolute;
  top: 2.1px;
  left: 0px;
  width: 47.7px;
  height: 53.4px;
  object-fit: cover;
`;
const MagixdbParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 127.9px;
  height: 57px;
`;
const DivuicoreNavMenuParent = styled.div`
  position: absolute;
  top: 12px;
  left: calc(50% - 163px);
  width: 326px;
  height: 57px;
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
  width: 100%;
  top: calc(50% - 2042px);
  right: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0px 1px 0px #dcdcdc;
  height: 81px;
  text-align: left;
  font-size: 17.1px;
  color: var(--color-black);
`;
const ArticleMain = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  height: 4084px;
  text-align: center;
  font-size: 22.26px;
`;
const Logo4webpIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 101px;
  width: 60.3px;
  height: 23.6px;
  object-fit: cover;
`;
const Logo3webpIcon = styled.img`
  position: absolute;
  top: 3px;
  left: 203.3px;
  width: 60.3px;
  height: 23.6px;
  object-fit: cover;
`;
const Logo1webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 10.9px);
  left: calc(50% - 183.8px);
  width: 60.3px;
  height: 23.6px;
  object-fit: cover;
`;
const Logo2webpIcon = styled.img`
  position: absolute;
  top: calc(50% - 10.9px);
  left: calc(50% + 122.2px);
  width: 60.3px;
  height: 23.6px;
  object-fit: cover;
`;
const DivelementorContainer = styled.div`
  position: absolute;
  top: 3.8px;
  left: calc(50% - 182.3px);
  width: 364.6px;
  height: 29.6px;
`;
const PoweredByMost = styled.b`
  position: absolute;
  top: 9.4px;
  left: 0px;
  letter-spacing: -0.38px;
  line-height: 16.69px;
  display: flex;
  align-items: center;
  width: 171.2px;
  height: 34.4px;
`;
const Heading27 = styled.div`
  position: absolute;
  top: 10.5px;
  left: 8.2px;
  width: 183px;
  height: 53px;
`;
const B = styled.b`
  position: absolute;
  top: 0px;
  left: -7.2px;
  line-height: 25.04px;
`;
const ActiveUsers = styled.div`
  position: absolute;
  top: 29.7px;
  left: -17.2px;
  font-size: var(--font-size-xs);
  line-height: 9.39px;
`;
const DivbdtEpAdvancedCounterCo = styled.div`
  position: relative;
  width: 52px;
  height: 35px;
`;
const DivelementorWidgetContainer = styled.div`
  position: absolute;
  top: 9.4px;
  left: 52.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 14.258050918579102px 0px 0px;
`;
const DivelementorWidgetWrap7 = styled.div`
  position: absolute;
  top: 10.5px;
  right: 8.4px;
  width: 139.1px;
  height: 53.6px;
  text-align: center;
  font-size: var(--font-size-3xl);
`;
const DivelementorContainer1 = styled.div`
  position: absolute;
  top: 12.5px;
  left: calc(50% - 178.05px);
  width: 356.1px;
  height: 74.4px;
`;
const Section4 = styled.div`
  position: absolute;
  top: 56px;
  left: calc(50% - 178.3px);
  border-radius: 5.22px;
  border: 0.3px solid var(--color-white);
  box-sizing: border-box;
  width: 356.1px;
  height: 97.7px;
`;
const DivelementorWidgetWrap6 = styled.div`
  position: absolute;
  width: calc(100% - 285.6px);
  top: 19px;
  right: 142.8px;
  left: 142.8px;
  height: 166.6px;
`;
const DivelementorSection = styled.div`
  position: absolute;
  width: 100%;
  top: 2008px;
  right: 0px;
  left: 0px;
  height: 216.2px;
  background-image: url("/divelementorsection@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  font-size: 13.56px;
  color: var(--color-white);
`;
const Heading28 = styled.b`
  position: absolute;
  top: 0px;
  left: calc(50% - 143px);
  letter-spacing: -0.37px;
  line-height: 16.39px;
`;
const WhetherYoureLookingContainer = styled.div`
  position: absolute;
  top: calc(50% - 21px);
  left: calc(50% - 155.5px);
  line-height: 11.18px;
  display: flex;
  align-items: center;
  width: 310px;
  height: 42px;
`;
const P7 = styled.div`
  position: absolute;
  top: 31.6px;
  left: calc(50% - 156.5px);
  width: 313px;
  height: 50px;
  font-size: var(--font-size-xs);
  color: var(--color-dimgray);
`;
const HeadingDiv = styled.div`
  position: absolute;
  top: 6.4px;
  left: 20px;
  width: 313px;
  height: 81.6px;
`;
const WhatKindOf = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  line-height: 12.4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 264px;
`;
const Div6 = styled.div`
  position: absolute;
  top: 10px;
  left: 302px;
  font-size: 9.19px;
  line-height: 9.19px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 13.5px;
`;
const Heading = styled.div`
  position: absolute;
  top: 0px;
  left: 1px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const IsItEasy = styled.div`
  position: absolute;
  top: 15px;
  left: 10px;
  line-height: 12.4px;
  font-weight: 500;
  display: flex;
  align-items: center;
  width: 264px;
`;
const Div7 = styled.div`
  position: absolute;
  top: 15px;
  left: 302px;
  font-size: 9.19px;
  line-height: 9.19px;
  font-family: var(--font-font-awesome-5-free);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 13.5px;
`;
const Heading3 = styled.div`
  position: absolute;
  top: 58px;
  left: 1px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading5 = styled.div`
  position: absolute;
  top: 116px;
  left: 1px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading6 = styled.div`
  position: absolute;
  top: 174px;
  left: 1px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading7 = styled.div`
  position: absolute;
  top: 232px;
  left: 2px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading8 = styled.div`
  position: absolute;
  top: 290px;
  left: 0px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading9 = styled.div`
  position: absolute;
  top: 348px;
  left: 0px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Heading10 = styled.div`
  position: absolute;
  top: 406px;
  left: 0px;
  border-radius: 2.87px;
  background-color: var(--color-white);
  width: 324.4px;
  height: 44px;
  overflow: hidden;
`;
const Div5 = styled.div`
  position: absolute;
  top: 109px;
  left: 14px;
  width: 326.4px;
  height: 450px;
  text-align: left;
  font-size: var(--font-size-xs);
`;
const DivelementorWidgetWrap8 = styled.div`
  position: absolute;
  top: calc(50% - 287px);
  left: calc(50% - 177px);
  width: 354px;
  height: 575px;
`;
const DivelementorSection2 = styled.div`
  position: absolute;
  width: 100%;
  top: 832px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 626px;
  text-align: center;
`;
const Heading31 = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.58px;
  line-height: 25.94px;
`;
const Heading32 = styled.b`
  position: absolute;
  top: 0px;
  left: 107px;
  letter-spacing: -0.58px;
  line-height: 25.94px;
  color: var(--color-mediumslateblue);
`;
const Heading3EssentialParent = styled.div`
  position: absolute;
  top: 25px;
  left: calc(50% - 73px);
  width: 146px;
  height: 26px;
`;
const Database = styled.div`
  position: absolute;
  top: 70px;
  left: 32px;
  font-size: var(--font-size-base);
  line-height: 16.21px;
  color: var(--color-dimgray);
`;
const DatabaseQueryingOf = styled.div`
  position: absolute;
  top: 1px;
  left: 18px;
  line-height: 16.21px;
  display: flex;
  align-items: center;
  width: 176px;
  height: 30px;
`;
const Div15 = styled.div`
  position: absolute;
  top: 2.4px;
  left: 0px;
  font-size: 11.48px;
  line-height: 11.48px;
  font-family: var(--font-font-awesome-5-free);
  display: flex;
  align-items: center;
  width: 11.6px;
  height: 11.5px;
`;
const Item3 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 194px;
  height: 31px;
`;
const UnlimitedQuerying = styled.div`
  position: absolute;
  top: 1px;
  left: 18px;
  line-height: 16.21px;
  display: flex;
  align-items: center;
  width: 176px;
  height: 14px;
`;
const Item4 = styled.div`
  position: absolute;
  top: 39px;
  left: 0px;
  width: 194px;
  height: 23px;
`;
const Item5 = styled.div`
  position: absolute;
  top: 70px;
  left: 0px;
  width: 194px;
  height: 23px;
`;
const DaysFreeTrial = styled.div`
  position: absolute;
  top: 0.4px;
  left: 18px;
  line-height: 16.21px;
  display: flex;
  align-items: center;
  width: 139px;
  height: 15px;
`;
const Item6 = styled.div`
  position: absolute;
  top: 101px;
  left: 0px;
  width: 194px;
  height: 23px;
`;
const UnlimitedUser = styled.div`
  position: absolute;
  top: 3px;
  left: 20px;
  line-height: 16.21px;
  display: flex;
  align-items: center;
  width: 174px;
  height: 14px;
`;
const Item7 = styled.div`
  position: absolute;
  top: 132px;
  left: 0px;
  width: 194px;
  height: 23px;
`;
const Item8 = styled.div`
  position: absolute;
  top: 148.6px;
  left: 0px;
  width: 163.9px;
  height: 16.2px;
`;
const List1 = styled.div`
  position: absolute;
  top: 106px;
  left: calc(50% - 97px);
  width: 194px;
  height: 164px;
  font-size: var(--font-size-xs);
`;
const ChoosePlan = styled.b`
  position: absolute;
  top: 11.8px;
  left: 39.9px;
  line-height: 12.16px;
`;
const Button3 = styled.div`
  position: absolute;
  width: calc(100% - 94.7px);
  top: 293.4px;
  right: 47.4px;
  left: 47.3px;
  border-radius: 3.38px;
  border: 0.7px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  height: 37.8px;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-sm);
`;
const DivelementorWidgetWrap9 = styled.div`
  position: absolute;
  width: calc(100% - 0.5px);
  top: 0px;
  right: 0.5px;
  left: 0px;
  height: 365px;
`;
const Section5 = styled.div`
  position: absolute;
  top: 33px;
  left: calc(50% - 129px);
  border-radius: 13.51px;
  background-color: var(--color-white);
  box-shadow: 0px 13.5px 27.02px rgba(95, 95, 95, 0.17);
  border: 0.7px solid var(--color-darkslategray-100);
  box-sizing: border-box;
  width: 258.5px;
  height: 365px;
`;
const Heading33 = styled.b`
  position: absolute;
  top: 0px;
  left: 0px;
  letter-spacing: -0.58px;
  line-height: 25.89px;
  display: flex;
  align-items: center;
  width: 108.6px;
`;
const Heading34 = styled.b`
  position: absolute;
  top: 0px;
  left: 120.6px;
  letter-spacing: -0.58px;
  line-height: 25.89px;
  color: var(--color-mediumslateblue);
`;
const Heading3StandardParent = styled.div`
  position: absolute;
  top: 25px;
  left: calc(50% - 80px);
  width: 159.6px;
  height: 26px;
`;
const Database1 = styled.div`
  position: absolute;
  top: 69.7px;
  left: 32px;
  font-size: var(--font-size-base);
  line-height: 16.18px;
`;
const DatabasesOfYour = styled.div`
  position: absolute;
  top: 1px;
  left: 18px;
  line-height: 16.18px;
  display: flex;
  align-items: center;
  width: 176px;
  height: 14px;
`;
const Div20 = styled.div`
  position: absolute;
  top: 2.4px;
  left: 0px;
  font-size: 11.46px;
  line-height: 11.46px;
  font-family: var(--font-font-awesome-5-free);
  display: flex;
  align-items: center;
  width: 11.6px;
  height: 11.5px;
`;
const Item9 = styled.div`
  position: absolute;
  top: 8px;
  left: 0px;
  width: 194px;
  height: 23px;
`;
const UnlimitedQuerying1 = styled.div`
  position: absolute;
  top: 0px;
  left: 18px;
  line-height: 16.18px;
  display: flex;
  align-items: center;
  width: 176px;
  height: 15px;
`;
const Item14 = styled.div`
  position: absolute;
  top: 148.3px;
  left: 0px;
  width: 163.6px;
  height: 16.2px;
`;
const List2 = styled.div`
  position: absolute;
  top: 101px;
  left: calc(50% - 97px);
  width: 194px;
  height: 164px;
  font-size: var(--font-size-xs);
`;
const ChoosePlan1 = styled.b`
  position: absolute;
  top: 11.8px;
  left: 39.8px;
  line-height: 12.14px;
`;
const Button4 = styled.div`
  position: absolute;
  width: calc(100% - 94.4px);
  top: 286.1px;
  right: 47.2px;
  left: 47.2px;
  border-radius: 3.37px;
  background-color: var(--color-white);
  border: 0.7px solid var(--color-white);
  box-sizing: border-box;
  height: 37.8px;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-sm);
  color: var(--color-darkslategray-100);
`;
const DivelementorWidgetWrap10 = styled.div`
  position: absolute;
  top: 450px;
  left: calc(50% - 129px);
  border-radius: 13.48px;
  width: 258px;
  height: 364.3px;
  background-image: url("/divelementorwidgetwrap@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  color: var(--color-white);
`;
const DivelementorSection1 = styled.div`
  position: absolute;
  width: 100%;
  top: 2224px;
  right: 0px;
  left: 0px;
  background: linear-gradient(180deg, #fff 40%, #f5f8f3 40%);
  height: 1458px;
  font-size: var(--font-size-3xl);
`;
const ExploreOurCuttingEdge = styled.b`
  position: absolute;
  top: calc(50% - 23px);
  left: calc(50% - 157.5px);
  letter-spacing: -0.49px;
  line-height: 21.94px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 315px;
  height: 45px;
`;
const Heading29 = styled.div`
  position: absolute;
  top: -3.5px;
  left: calc(50% - 158px);
  width: 315px;
  height: 44px;
  font-size: 17.9px;
`;
const ProvideYourEmail = styled.div`
  position: absolute;
  top: calc(50% - 9px);
  left: calc(50% - 144px);
  line-height: 13.28px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 287px;
  height: 19px;
`;
const P8 = styled.div`
  position: absolute;
  top: 55.5px;
  left: calc(50% - 144px);
  width: 292px;
  height: 28px;
  color: rgba(255, 255, 255, 0.64);
`;
const EnterYourMail = styled.div`
  position: absolute;
  top: calc(50% - 7px);
  left: calc(50% - 68.5px);
`;
const Input = styled.div`
  position: absolute;
  top: calc(50% - 11.5px);
  left: 14px;
  width: 153px;
  height: 22px;
  overflow: hidden;
`;
const GetFreeTrial = styled.b`
font-size:10px;
  position: relative;
  line-height: 8.96px;
`;
const Button5 = styled.div`
  position: absolute;
  width: calc(100% - 193.5px);
  top: calc(50% - 13.5px);
  right: 14.7px;
  left: 178.8px;
  border-radius: 2.49px;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 8.961113929748535px 18.554485321044922px 8.961113929748535px
    17.92222785949707px;
  box-sizing: border-box;
  text-align: center;
  color: var(--color-white);
`;
const Form = styled.div`
  position: absolute;
  top: calc(50% - 17.5px);
  left: calc(50% - 152.5px);
  width: 305px;
  height: 35px;
`;
const DivelementorWidgetContainer1 = styled.div`
  position: absolute;
  top: 108.5px;
  left: calc(50% - 153px);
  border-radius: 1.9px;
  background-color: var(--color-white);
  width: 305px;
  height: 35px;
  text-align: left;
  color: var(--color-dimgray);
`;
const DivelementorWidgetWrap11 = styled.div`
  position: absolute;
  width: calc(100% - 285.6px);
  top: 30.5px;
  right: 142.8px;
  left: 142.8px;
  height: 121.6px;
`;
const Section6 = styled.div`
  position: absolute;
  width: 100%;
  top: 3682px;
  right: 0px;
  left: 0px;
  height: 195.8px;
  background-image: url("/section@3x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  text-align: center;
  color: var(--color-white);
`;
const Logo1RemovebgPreview1Icon1 = styled.img`
  position: absolute;
  top: 5.7px;
  left: 0px;
  width: 31.8px;
  height: 34.1px;
  object-fit: cover;
`;
const Magixdb1 = styled.b`
  position: absolute;
  top: 0px;
  left: 40.6px;
  line-height: 44.7px;
`;
const Logo1RemovebgPreview1Parent = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  width: 98px;
  height: 44.8px;
  font-size: 13.41px;
`;
const EnhanceThePower = styled.div`
  position: absolute;
  font-size:10px
  top: -2px;
  left: calc(50% - 98.5px);
  line-height: 14.13px;
  display: flex;
  align-items: center;
  width: 197px;
  height: 44px;
`;
const P9 = styled.div`
  position: absolute;
  top: 50px;
  left: 3px;
  width: 197px;
  height: 38px;
  color: var(--color-dimgray);
`;
const ItemLink = styled.div`
  position: absolute;
  top: -1.2px;
  left: 0px;
  line-height: 13.13px;
  font-weight: 500;
`;
const ItemLink1 = styled.div`
  position: absolute;
  top: 17.9px;
  left: 0px;
  line-height: 13.13px;
  font-weight: 500;
`;
const List3 = styled.div`
font-weight: bold;
font-size:12px;
  position: absolute;
  top: 98px;
  left: 0px;
  width: 201px;
  height: 39px;
  // color: var(--color-midnightblue);
`;
const DivelementorWidgetWrap12 = styled.div`
  position: absolute;
  width: calc(100% - 139.7px);
  top: 0px;
  right: 139.7px;
  left: 0px;
  height: 144px;
`;
const Heading48 = styled.b`
  position: absolute;
  top: 4px;
  left: 5px;
  letter-spacing: -0.33px;
  line-height: 14.48px;
  display: flex;
  align-items: center;
  width: 107px;
  height: 16px;
`;
const ItemLink2 = styled.div`
  position: absolute;
  top: -1px;
  left: 0px;
  line-height: 13.58px;
`;
const ItemLink3 = styled.div`
  position: absolute;
  top: 18.6px;
  left: 0px;
  line-height: 13.58px;
`;
const ItemLink4 = styled.div`
  position: absolute;
  top: 38.2px;
  left: 0px;
  line-height: 13.58px;
`;
const ItemLink5 = styled.div`
  position: absolute;
  top: 57.8px;
  left: 0px;
  line-height: 13.58px;
`;
const List4 = styled.div`
  position: absolute;
  top: 29.6px;
  left: 5px;
  width: 107.4px;
  height: 72.4px;
  font-size: var(--font-size-xs);
`;
const DivelementorWidgetWrap13 = styled.div`
  position: absolute;
  width: calc(100% - 225px);
  top: 19px;
  right: 0px;
  left: 225px;
  height: 107px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-100);
`;
const DivelementorWidgetWrapParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 340.7px;
  height: 144px;
`;
const Heading49 = styled.b`
  position: absolute;
  top: 4.8px;
  left: 6px;
  letter-spacing: -0.39px;
  line-height: 17.19px;
`;
const ItemLink6 = styled.div`
  position: absolute;
  top: -0.8px;
  left: 0px;
  line-height: 16.12px;
`;
const ItemLink7 = styled.div`
  position: absolute;
  top: 22.5px;
  left: 0px;
  line-height: 16.12px;
`;
const ItemLink8 = styled.div`
  position: absolute;
  top: 45.8px;
  left: 0px;
  line-height: 16.12px;
`;
const List5 = styled.div`
  position: absolute;
  top: 35.1px;
  left: 6px;
  width: 128px;
  height: 62.7px;
  font-size: var(--font-size-xs);
`;
const DivelementorWidgetWrap14 = styled.div`
  position: absolute;
  width: calc(100% - 199.9px);
  top: 0px;
  right: 199.9px;
  left: 0px;
  height: 108px;
`;
const Heading410 = styled.b`
  position: absolute;
  top: 3.9px;
  left: 4.9px;
  letter-spacing: -0.32px;
  line-height: 14.08px;
`;
const ItemLink9 = styled.div`
  position: absolute;
  top: -1px;
  left: 0px;
  line-height: 13.2px;
`;
const ItemLink10 = styled.div`
  position: absolute;
  top: 18px;
  left: 0px;
  line-height: 13.2px;
`;
const ItemLink11 = styled.div`
  position: absolute;
  top: 37.1px;
  left: 0px;
  line-height: 13.2px;
`;
const ItemLink12 = styled.div`
  position: absolute;
  top: 56.2px;
  left: 0px;
  line-height: 13.2px;
`;
const List6 = styled.div`
  position: absolute;
  top: 28.7px;
  left: 4.9px;
  width: 104.7px;
  height: 70.4px;
  font-size: var(--font-size-xs);
`;
const DivelementorWidgetWrap15 = styled.div`
  position: absolute;
  width: calc(100% - 225px);
  top: 2px;
  right: 0px;
  left: 225px;
  height: 104px;
`;
const DivelementorWidgetWrapGroup = styled.div`
  position: absolute;
  top: 150px;
  left: 1px;
  width: 337.9px;
  height: 108px;
  font-size: var(--font-size-base);
  color: var(--color-darkslategray-100);
`;
const FrameParent = styled.div`
  position: absolute;
  top: 12px;
  left: calc(50% - 170px);
  width: 340.7px;
  height: 258px;
`;
const Copyright2023 = styled.div`
font-size:4px
  position: absolute;
  top: -0.4px;
  left: calc(50% - 138.2px);
  line-height: 9.15px;
`;
const P10 = styled.div`
font-size:10px;
  position: absolute;
  top: 13.6px;
  left: calc(50% - 143.2px);
  width: 287px;
  height: 9px;
`;
const DivelementorSection4 = styled.div`
  position: absolute;
  width: calc(100% + 0.4px);
  right: -0.4px;
  bottom: -0.2px;
  left: 0px;
  background-color: var(--color-gray-100);
  height: 35.8px;
  color: var(--color-white);
`;
const DivelementorSection3 = styled.div`
  position: absolute;
  width: 100%;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: var(--color-whitesmoke-100);
  height: 344px;
`;
const Footer = styled.div`
  position: absolute;
  width: 100%;
  top: 3878px;
  right: 0px;
  left: 0px;
  height: 344px;
  color: var(--color-black);
`;
const MagixdbVersion1FinalllllPhRoot = styled.div`
  position: relative;
  background-color: var(--color-white);
  width: 100%;
  height: 821px;
  overflow-y: auto;
  text-align: left;
  font-size: var(--font-size-xs);
  color: var(--color-darkslategray-100);
  font-family: var(--font-space-grotesk);
`;

const MagixDBMobile = () => {
  const [isFrame4Open, setFrame4Open] = useState(false);
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const openFrame4 = useCallback(() => {
    setFrame4Open(true);
  }, []);

  const closeFrame4 = useCallback(() => {
    setFrame4Open(false);
  }, []);

  const onButtonContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainer4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <MagixdbVersion1FinalllllPhRoot id="products">
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
            <AnalyticsPlatformHeroImageIcon source src="SQLite.mp4" type="video/mp4" muted={true} controls={true}
            >
              <source src="SQLite.mp4" type="video/mp4" />
            </AnalyticsPlatformHeroImageIcon>
          </DivelementorWidgetWrap>
          <DivelementorWidgetWrap1>
            <AnalyticsPlatformOrganizeImIcon
              alt=""
              src="/analyticsplatformorganizeimagewebp@2x.png"
            />
          </DivelementorWidgetWrap1>
          <DivelementorWidgetWrap2>
            <Heading2 />
            <TalkWithYour>Talk with your databases in English</TalkWithYour>
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
          <DivelementorWidgetWrap3>
            <Heading21>
              <SettingUpMagixdb>Setting up MagixDB is simple</SettingUpMagixdb>
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
            <Button1 onClick={onButtonContainer1Click}>
              <GetStarted>Get Started</GetStarted>
            </Button1>
          </DivelementorWidgetWrap3>
          <DivelementorWidgetWrap4>
            <Section>
              <Heading22>1</Heading22>
              <DivbdtEpAdvancedIconBoxC>
                <Heading4>Fill Form</Heading4>
                <FillTheForm>
                  Fill the form for providing information regarding your
                  database.
                </FillTheForm>
              </DivbdtEpAdvancedIconBoxC>
            </Section>
            <Section1>
              <Heading23>2</Heading23>
              <DivbdtEpAdvancedIconBoxC1>
                <Heading41>Make Payment</Heading41>
                <SelectYourPlan>
                  Select your plan and make payment
                </SelectYourPlan>
              </DivbdtEpAdvancedIconBoxC1>
            </Section1>
            <Section2>
              <Heading24>3</Heading24>
              <DivbdtEpAdvancedIconBoxC2>
                <Heading41>Recieve API</Heading41>
                <SelectYourPlan>
                  Receive your API on platform and E-mail
                </SelectYourPlan>
              </DivbdtEpAdvancedIconBoxC2>
            </Section2>
            <Section3>
              <Heading25>4</Heading25>
              <DivbdtEpAdvancedIconBoxC3>
                <Heading41>Start Quering</Heading41>
                <TalkWithYour1>
                  Talk with your database in plain English.
                </TalkWithYour1>
              </DivbdtEpAdvancedIconBoxC3>
            </Section3>
          </DivelementorWidgetWrap4>
          <DivelementorWidgetWrapWrapper>
            <DivelementorWidgetWrap5>
              <Heading26>What makes us different</Heading26>
              <P2>
                <WithMagixdbApi>
                  With "MagixDB API", you bring simplicity, efficiency, and ease
                  to your operations, empowering you to compete confidently in
                  today's data-driven world.
                </WithMagixdbApi>
              </P2>
              <Div1Parent>
                <Div11>
                  <DivbdtEpAdvancedIconBox>
                    <SpanbdtEpAdvancedIconBox
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC4>
                      <Heading44>Visualise results</Heading44>
                      <P3>
                        <IdentifyTrendsInContainer>
                          <QueryYourDatabaseContainer1>
                            <WeProvideSupport>
                              Identify trends in your data
                            </WeProvideSupport>
                            <WeProvideSupport>
                              to make better decisions.
                            </WeProvideSupport>
                          </QueryYourDatabaseContainer1>
                          <div style={{ padding: "10px" }}>

                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4" cy="4" r="4" fill="#2F2F2F" />
                              <circle cx="20" cy="4" r="4" fill="#DADADA" />
                              <circle cx="36" cy="4" r="4" fill="#DADADA" />
                              <circle cx="52" cy="4" r="4" fill="#DADADA" />
                            </svg>
                          </div>
                        </IdentifyTrendsInContainer>

                      </P3>

                    </DivbdtEpAdvancedIconBoxC4>

                  </DivbdtEpAdvancedIconBox>

                  <Div1Child alt="" src="/frame-1000004204.svg" />
                </Div11>
                <Div21>
                  <DivbdtEpAdvancedIconBox>
                    <SpanbdtEpAdvancedIconBox1
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap1.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC4>
                      <Heading45>Enhance database interaction</Heading45>
                      <P3>
                        <QueryDynamicallyAnd>
                          Query dynamically and effortlessly.
                          <div style={{ padding: "10px" }}>
                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4" cy="4" r="4" fill="#DADADA" />
                              <circle cx="20" cy="4" r="4" fill="#2F2F2F" />
                              <circle cx="36" cy="4" r="4" fill="#DADADA" />
                              <circle cx="52" cy="4" r="4" fill="#DADADA" />
                            </svg>

                          </div>
                        </QueryDynamicallyAnd>

                      </P3>
                    </DivbdtEpAdvancedIconBoxC4>
                  </DivbdtEpAdvancedIconBox>
                  <Div1Child alt="" src="/frame-10000042041.svg" />
                </Div21>
                <Div3>
                  <DivbdtEpAdvancedIconBox>
                    <SpanbdtEpAdvancedIconBox1
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap2.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC4>
                      <Heading44>Quick setup</Heading44>
                      <P3>
                        <QueryDynamicallyAnd>
                          Get started in just 10 minutes
                          <div style={{ margin: "22px" }}>

                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4" cy="4" r="4" fill="#DADADA" />
                              <circle cx="20" cy="4" r="4" fill="#DADADA" />
                              <circle cx="36" cy="4" r="4" fill="#2F2F2F" />
                              <circle cx="52" cy="4" r="4" fill="#DADADA" />
                            </svg>

                          </div>
                        </QueryDynamicallyAnd>
                      </P3>
                    </DivbdtEpAdvancedIconBoxC4>
                  </DivbdtEpAdvancedIconBox>
                  <Div1Child alt="" src="/frame-10000042042.svg" />
                </Div3>
                <Div4>
                  <DivbdtEpAdvancedIconBox>
                    <SpanbdtEpAdvancedIconBox1
                      alt=""
                      src="/spanbdtepadvancediconboxiconwrap3.svg"
                    />
                    <DivbdtEpAdvancedIconBoxC4>
                      <Heading47>Your data is your own</Heading47>
                      <P3>
                        <QueryDynamicallyAnd>
                          No database integration required
                          <div style={{ margin: "22px" }}>

                            <svg width="56" height="8" viewBox="0 0 56 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="4" cy="4" r="4" fill="#DADADA" />
                              <circle cx="20" cy="4" r="4" fill="#DADADA" />
                              <circle cx="36" cy="4" r="4" fill="#DADADA" />
                              <circle cx="52" cy="4" r="4" fill="#2F2F2F" />
                            </svg>

                          </div>
                        </QueryDynamicallyAnd>
                      </P3>
                    </DivbdtEpAdvancedIconBoxC4>
                  </DivbdtEpAdvancedIconBox>
                </Div4>
              </Div1Parent>
            </DivelementorWidgetWrap5>
          </DivelementorWidgetWrapWrapper>
          <DivuicoreHeaderWrapper>
            <Nav>
              <DivuicoreNavMenuParent>
                <DivuicoreNavMenu onClick={openFrame4}>
                  <Button2>
                    <Spanbar />
                    <Spanbar1>
                      <Pseudo />
                    </Spanbar1>
                    <Spanbar2 />
                  </Button2>
                </DivuicoreNavMenu>
                <MagixdbParent>
                  <Magixdb>MagixDB</Magixdb>
                  <Logo1RemovebgPreview1Icon
                    alt=""
                    src="/logo1removebgpreview-11@2x.png"
                  />
                </MagixdbParent>
              </DivuicoreNavMenuParent>
            </Nav>
          </DivuicoreHeaderWrapper>
        </ArticleMain>
        <DivelementorSection>
          <DivelementorWidgetWrap6>
            <DivelementorContainer>
              <Carousel/>
              {/* <Logo4webpIcon alt="" src="/logo4webp@2x.png" />
              <Logo3webpIcon alt="" src="/logo3webp@2x.png" />
              <Logo1webpIcon alt="" src="/logo1webp@2x.png" />
              <Logo2webpIcon alt="" src="/logo2webp@2x.png" /> */}
            </DivelementorContainer>
            <Section4>
              <DivelementorContainer1>
                <Heading27>
                  <PoweredByMost>
                    Powered by most advanced Generative AI technologies
                  </PoweredByMost>
                </Heading27>
                <DivelementorWidgetWrap7>
                  <DivelementorWidgetContainer>
                    <DivbdtEpAdvancedCounterCo>
                      <B>100+</B>
                      <ActiveUsers>Active Users</ActiveUsers>
                    </DivbdtEpAdvancedCounterCo>
                  </DivelementorWidgetContainer>
                </DivelementorWidgetWrap7>
              </DivelementorContainer1>
            </Section4>
          </DivelementorWidgetWrap6>
        </DivelementorSection>
        <DivelementorSection1>
          <DivelementorSection2>
            <DivelementorWidgetWrap8>
              <HeadingDiv>
                <Heading28>Frequently asked questions</Heading28>
                <P7>
                  <WhetherYoureLookingContainer>
                    <QueryYourDatabaseContainer1>
                      <WeProvideSupport>
                        Whether you’re looking to improve your marketing
                        strategy or
                      </WeProvideSupport>
                      <WeProvideSupport>
                        optimise your operations, our platform has you covered.
                      </WeProvideSupport>
                    </QueryYourDatabaseContainer1>
                  </WhetherYoureLookingContainer>
                </P7>
              </HeadingDiv>
              <Div5>
                <Heading>
                  <WhatKindOf>
                    What kind of data can I visualize with this platform?
                  </WhatKindOf>
                  <Div6><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div6>
                </Heading>
                <Heading3>
                  <IsItEasy>Is it easy to use?</IsItEasy>
                  <Div7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div7>
                </Heading3>
                <Heading5>
                  <IsItEasy>Can I get real-time insights?</IsItEasy>
                  <Div7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div7>
                </Heading5>
                <Heading6>
                  <IsItEasy>Which databases does Magix DB supports?</IsItEasy>
                  <Div7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div7>
                </Heading6>
                <Heading7>
                  <WhatKindOf>
                    What happens when a new data is added to my db?
                  </WhatKindOf>
                  <Div6><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div6>
                </Heading7>
                <Heading8>
                  <IsItEasy>
                    What kind of visualisations are available?
                  </IsItEasy>
                  <Div7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div7>
                </Heading8>
                <Heading9>
                  <WhatKindOf>
                    Can I collaborate with my team on this platform?
                  </WhatKindOf>
                  <Div6><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div6>
                </Heading9>
                <Heading10>
                  <IsItEasy>What is the cost of this platform?</IsItEasy>
                  <Div7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.1 5.88965C13.6312 5.88965 14.1 6.3584 14.1 6.88965V7.88965C14.1 8.45215 13.6312 8.88965 13.1 8.88965H8.6V13.3896C8.6 13.9521 8.13125 14.3896 7.6 14.3896H6.6C6.0375 14.3896 5.6 13.9521 5.6 13.3896V8.88965H1.1C0.5375 8.88965 0.0999999 8.45215 0.0999999 7.88965V6.88965C0.0999999 6.3584 0.5375 5.88965 1.1 5.88965H5.6V1.38965C5.6 0.858398 6.0375 0.389648 6.6 0.389648H7.6C8.13125 0.389648 8.6 0.858398 8.6 1.38965V5.88965H13.1Z" fill="#2F2F2F" />
                  </svg></Div7>
                </Heading10>
              </Div5>
            </DivelementorWidgetWrap8>
          </DivelementorSection2>
          <Section5 id="pricing">
            <DivelementorWidgetWrap9>
              <Heading3EssentialParent>
                <Heading31>Standard</Heading31>
                <Heading32>$59</Heading32>
              </Heading3EssentialParent>
              <Database>1 Database</Database>
              <List1>
                <Item3>
                  <DatabaseQueryingOf>
                    1 database querying of your choice
                  </DatabaseQueryingOf>
                  <Div15><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                  </svg></Div15>
                </Item3>
                <Item4>
                  <UnlimitedQuerying>Unlimited Querying</UnlimitedQuerying>
                  <Div15><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                  </svg></Div15>
                </Item4>
                <Item5>
                  <UnlimitedQuerying>Unlimited Support</UnlimitedQuerying>
                  <Div15><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125ZM7.53711 13.5078L13.6465 7.39844C13.8457 7.19922 13.8457 6.83398 13.6465 6.63477L12.8828 5.9043C12.6836 5.67188 12.3516 5.67188 12.1523 5.9043L7.17188 10.8848L4.81445 8.56055C4.61523 8.32812 4.2832 8.32812 4.08398 8.56055L3.32031 9.29102C3.12109 9.49023 3.12109 9.85547 3.32031 10.0547L6.77344 13.5078C6.97266 13.707 7.33789 13.707 7.53711 13.5078Z" fill="#2F2F2F" />
                  </svg></Div15>
                </Item5>
                <Item6>
                  <DaysFreeTrial>15 Days Free Trial</DaysFreeTrial>
                  <Div15><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                  </svg></Div15>
                </Item6>
                <Item7>
                  <UnlimitedUser>Unlimited user</UnlimitedUser>
                  <Div15><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 2.48438C4.81445 2.48438 1.85938 5.47266 1.85938 9.125C1.85938 12.8105 4.81445 15.7656 8.5 15.7656C12.1523 15.7656 15.1406 12.8105 15.1406 9.125C15.1406 5.47266 12.1523 2.48438 8.5 2.48438ZM8.5 0.890625C13.0156 0.890625 16.7344 4.60938 16.7344 9.125C16.7344 13.6738 13.0156 17.3594 8.5 17.3594C3.95117 17.3594 0.265625 13.6738 0.265625 9.125C0.265625 4.60938 3.95117 0.890625 8.5 0.890625ZM8.5 6.46875C9.96094 6.46875 11.1562 7.66406 11.1562 9.125C11.1562 10.6191 9.96094 11.7812 8.5 11.7812C7.00586 11.7812 5.84375 10.6191 5.84375 9.125C5.84375 7.66406 7.00586 6.46875 8.5 6.46875Z" fill="#2F2F2F" />
                  </svg></Div15>
                </Item7>
                <Item8 />
              </List1>
              <Button3 onClick={onButtonContainer3Click}>
                <ChoosePlan>Choose plan</ChoosePlan>
              </Button3>
            </DivelementorWidgetWrap9>
          </Section5>
          <DivelementorWidgetWrap10>
            <Heading3StandardParent>
              <Heading33>Advanced</Heading33>
              <Heading34>$89</Heading34>
            </Heading3StandardParent>
            <Database1>2 Database</Database1>
            <List2>
              <Item9>
                <DatabasesOfYour>2 Databases of your Choice</DatabasesOfYour>
                <Div20><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                </svg></Div20>
              </Item9>
              <Item4>
                <UnlimitedQuerying1>Unlimited Querying</UnlimitedQuerying1>
                <Div20><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                </svg></Div20>
              </Item4>
              <Item5>
                <DatabasesOfYour>Unlimited Support</DatabasesOfYour>
                <Div20><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465ZM7.53711 12.8975L13.6465 6.78809C13.8457 6.58887 13.8457 6.22363 13.6465 6.02441L12.8828 5.29395C12.6836 5.06152 12.3516 5.06152 12.1523 5.29395L7.17188 10.2744L4.81445 7.9502C4.61523 7.71777 4.2832 7.71777 4.08398 7.9502L3.32031 8.68066C3.12109 8.87988 3.12109 9.24512 3.32031 9.44434L6.77344 12.8975C6.97266 13.0967 7.33789 13.0967 7.53711 12.8975Z" fill="white" />
                </svg></Div20>
              </Item5>
              <Item6>
                <UnlimitedQuerying1>15 Days Free Trial</UnlimitedQuerying1>
                <Div20><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                </svg></Div20>
              </Item6>
              <Item7>
                <DatabasesOfYour>Unlimited user</DatabasesOfYour>
                <Div20><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 1.87402C4.81445 1.87402 1.85938 4.8623 1.85938 8.51465C1.85938 12.2002 4.81445 15.1553 8.5 15.1553C12.1523 15.1553 15.1406 12.2002 15.1406 8.51465C15.1406 4.8623 12.1523 1.87402 8.5 1.87402ZM8.5 0.280273C13.0156 0.280273 16.7344 3.99902 16.7344 8.51465C16.7344 13.0635 13.0156 16.749 8.5 16.749C3.95117 16.749 0.265625 13.0635 0.265625 8.51465C0.265625 3.99902 3.95117 0.280273 8.5 0.280273ZM8.5 5.8584C9.96094 5.8584 11.1562 7.05371 11.1562 8.51465C11.1562 10.0088 9.96094 11.1709 8.5 11.1709C7.00586 11.1709 5.84375 10.0088 5.84375 8.51465C5.84375 7.05371 7.00586 5.8584 8.5 5.8584Z" fill="white" />
                </svg></Div20>
              </Item7>
              <Item14 />
            </List2>
            <Button4 onClick={onButtonContainer4Click}>
              <ChoosePlan1>Choose plan</ChoosePlan1>
            </Button4>
          </DivelementorWidgetWrap10>
        </DivelementorSection1>
        <Section6>
          <DivelementorWidgetWrap11>
            <Heading29>
              <ExploreOurCuttingEdge>
                Explore our cutting-edge API today and elevate your data
                experience.
              </ExploreOurCuttingEdge>
            </Heading29>
            <P8>
              <ProvideYourEmail>
                Provide your email address to receive a link to access the API
                subscription form.
              </ProvideYourEmail>
            </P8>
            <DivelementorWidgetContainer1>
              <Form>
                <Input>
                  <EnterYourMail>Enter your mail address</EnterYourMail>
                </Input>
                <Button5>
                  <GetFreeTrial>Get Free Trial</GetFreeTrial>
                </Button5>
              </Form>
            </DivelementorWidgetContainer1>
          </DivelementorWidgetWrap11>
        </Section6>
        <Footer id="aboutus">
          <DivelementorSection3>
            <FrameParent>
              <DivelementorWidgetWrapParent>
                <DivelementorWidgetWrap12>
                  <Logo1RemovebgPreview1Parent>
                    <Logo1RemovebgPreview1Icon1
                      alt=""
                      src="/logo1removebgpreview-12@2x.png"
                    />
                    <Magixdb1>MagixDB</Magixdb1>
                  </Logo1RemovebgPreview1Parent>
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
              </DivelementorWidgetWrapParent>
              <DivelementorWidgetWrapGroup>
                <DivelementorWidgetWrap14>
                  <Heading49>Features</Heading49>
                  <List5>
                    <ItemLink6>Data Analytics</ItemLink6>
                    <ItemLink7>User Reporting</ItemLink7>
                    <ItemLink8>Data Insights</ItemLink8>
                  </List5>
                </DivelementorWidgetWrap14>
                <DivelementorWidgetWrap15>
                  <Heading410>Help</Heading410>
                  <List6>
                    <ItemLink9>Help Center</ItemLink9>
                    <ItemLink10>Information</ItemLink10>
                    <ItemLink11>FAQ</ItemLink11>
                    <ItemLink12>Contact</ItemLink12>
                  </List6>
                </DivelementorWidgetWrap15>
              </DivelementorWidgetWrapGroup>
            </FrameParent>
            <DivelementorSection4>
              <P10>
                <Copyright2023>
                  Copyright: © 2023 MagixDB. All Rights Reserved.
                </Copyright2023>
              </P10>
            </DivelementorSection4>
          </DivelementorSection3>
        </Footer>
      </MagixdbVersion1FinalllllPhRoot>
      {isFrame4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame4}
        >
          <Frame onClose={closeFrame4} change={closeFrame4}/>
        </PortalPopup>
      )}
    </>
  );
};

export default MagixDBMobile;
