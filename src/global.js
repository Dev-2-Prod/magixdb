import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-space-grotesk: 'Space Grotesk';
--font-font-awesome-5-free: 'Font Awesome 5 Free';
--font-inter: Inter;

/* font sizes */
--font-size-base: 16px;
--font-size-lg: 18px;
--font-size-4xl: 23px;
--font-size-5xl: 24px;
--font-size-28xl: 47px;
--font-size-29xl: 48px;
--font-size-mid: 17px;
--font-size-12xl: 31px;
--font-size-sm: 14px;

/* Colors */
--color-white: #fff;
--color-whitesmoke-100: #f5f8f3;
--color-whitesmoke-200: #f2f2f2;
--color-gray-100: #060606;
--color-darkslategray-100: #2f2f2f;
--color-darkslategray-200: #262b35;
--color-midnightblue: #00156a;
--color-dimgray: #555;
--color-black: #000;
--color-mediumslateblue: #3866ff;
--color-silver: #bac1ce;
--color-gainsboro: #d6dae2;

/* Gaps */
--gap-7xs: 6px;

/* Paddings */
--padding-12xs: 1px;
--padding-lg: 18px;
--padding-17xl: 36px;

/* Border radiuses */
--br-881xl: 900px;
--br-3xs: 10px;
--br-8xs: 5px;
--br-xl: 20px;
--br-7xs: 6px;
--br-5xs: 8px;

}
`;
