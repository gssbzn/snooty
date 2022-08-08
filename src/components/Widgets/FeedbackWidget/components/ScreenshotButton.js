import React from 'react';
import { palette } from '@leafygreen-ui/palette';
import styled from '@emotion/styled';
import useScreenshot from '../hooks/useScreenshot';
import { withPrefix } from 'gatsby';

//styling for entire screenshot icon selector
const ScreenshotSelect = styled('span')`
  margin-top: 155px;
  margin-right: 153px;
  height: 22px;
  position: fixed;
  background: ${palette.white};
  z-index: 5;
`;

const StyledArrow = styled('div')`
  margin-left: 12px !important;
  margin-top: -20px;
`;

const ArrowIcon = styled.img``;

const ScreenshotIcon = styled.img``;

export default function ScreenshotButton() {
  const { takeScreenshot } = useScreenshot();
  return (
    <ScreenshotSelect id="screenshot-button" onClick={takeScreenshot}>
      <ScreenshotIcon src={withPrefix('assets/dashedbox.svg')} />
      <StyledArrow>
        <ArrowIcon src={withPrefix('assets/arrowicon.svg')} />
      </StyledArrow>
    </ScreenshotSelect>
  );
}
