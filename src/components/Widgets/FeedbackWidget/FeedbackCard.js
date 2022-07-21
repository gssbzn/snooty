import React from 'react';
import LeafygreenCard from '@leafygreen-ui/card';
import styled from '@emotion/styled';
import ProgressBar from './components/PageIndicators';

import CloseButton from './components/CloseButton';
import { useFeedbackState } from './context';

export default function FeedbackCard({ isOpen, children }) {
  const { abandon } = useFeedbackState();

  return (
    isOpen && (
      <Floating>
        <Card>
          <CardHeader>
            <ProgressBar />
            <CloseButton onClick={() => abandon()} />
          </CardHeader>
          <Content>{children}</Content>
        </Card>
      </Floating>
    )
  );
}

const Floating = styled.div`
  position: fixed;
  bottom: 40px;
  right: 10px;
  z-index: 10;
`;
const Card = styled(LeafygreenCard)`
  width: 235px;
  height: 280px;
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3px;
  margin-right: 10px;
`;
const Content = styled.div`
  margin: 0px 24px;
`;
