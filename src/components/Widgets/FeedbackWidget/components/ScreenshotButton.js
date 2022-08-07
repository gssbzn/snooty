import React, { useState } from 'react';
import { palette } from '@leafygreen-ui/palette';
import styled from '@emotion/styled';
import useScreenshot from '../hooks/useScreenshot';
import { ScreenshotIcon, ArrowIcon } from '../components/ScreenshotIcon';

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
  const [setIsHovered] = useState(false);
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
