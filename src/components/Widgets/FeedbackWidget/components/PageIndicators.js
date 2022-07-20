import React from 'react';
import styled from '@emotion/styled';
import { uiColors } from '@leafygreen-ui/palette';
import { useFeedbackState } from '../context';

const Dot = styled('span')`
  height: 5px;
  width: 5px;
  background-color: ${(props) => (props.isActive ? `${uiColors.green.base}` : `${uiColors.gray.light2}`)};
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

const DotSpan = styled('span')`
  padding-right: 102px;
`;

const StyledBar = styled('div')`
  text-align: center !important;
`;

const ProgressBar = () => {
  const { progress } = useFeedbackState();
  return (
    <StyledBar>
      <DotSpan>
        {progress.map((value) => (
          <Dot isActive={value} />
        ))}
      </DotSpan>
    </StyledBar>
  );
};

export default ProgressBar;
