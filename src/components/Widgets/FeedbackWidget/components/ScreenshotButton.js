import React from 'react';
import { palette } from '@leafygreen-ui/palette';
import styled from '@emotion/styled';
import useScreenshot from '../hooks/useScreenshot';

//dashed box
const ScreenshotIcon = () => (
  <svg width="19" z-index="10" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="16.1788" height="16.9225" stroke="#5D6C74" stroke-width="2" stroke-dasharray="2 2" />
  </svg>
);

//arrow
const ArrowIcon = () => (
  <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.54156 11.7681L0.123047 0.424377L12.001 4.58509L8.42039 6.45628L13.2546 10.7953L11.842 12.5142L6.81489 7.99939L5.54156 11.7681Z"
      fill="#5D6C74"
    />
  </svg>
);

//styling for entire screenshot icon selector
const ScreenshotSelect = styled('span')`
  margin-top: 155px;
  margin-right: 153px;
  height: 22px;
  position: fixed;
  background: ${palette.white};
  z-index: 5;
`;

//Screenshot icon arrow
const StyledArrow = styled('div')`
  margin-left: 12px !important;
  margin-top: -20px;
`;

export default function ScreenshotButton() {
  const [setIsHovered] = React.useState(false);
  const { takeScreenshot } = useScreenshot();
  //const label = screenshot ? 'Screenshot Saved' : loading ? 'Taking Screenshot' : 'Take a Screenshot';
  return (
    <ScreenshotSelect
      id="screenshot-button"
      onClick={takeScreenshot}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ScreenshotIcon />
      <StyledArrow>
        <ArrowIcon />
      </StyledArrow>
    </ScreenshotSelect>
  );
}
