import React from 'react';

import useScreenSize from '../../../hooks/useScreenSize';
import { useFeedbackState } from './context';

import FeedbackFullScreen from './FeedbackFullScreen';
import FloatingContainer from './FloatingContainer';
import FeedbackModal from './FeedbackModal';
import SentimentView from './views/SentimentView';
import SubmittedView from './views/SubmittedView';
import CommentView from './views/CommentView';

export function FeedbackContent({ view }) {
  const View = {
    sentiment: SentimentView,
    comment: CommentView,
    submitted: SubmittedView,
  }[view];
  return <View className={`view-${view}`} />;
}

export default function FeedbackForm(props) {
  const { isMobile, isTabletOrMobile } = useScreenSize();
  const { view } = useFeedbackState();
  const isOpen = view !== 'waiting';

  const displayAs = isMobile ? 'fullscreen' : isTabletOrMobile ? 'modal' : 'floating';
  const Container = {
    // If big screen, render a floating card
    floating: FloatingContainer,
    // If small screen, render a card in a modal
    modal: FeedbackModal,
    // If mini screen, render a full screen app
    fullscreen: FeedbackFullScreen,
  }[displayAs];

  return (
    isOpen && (
      <div className="feedback-form" hidden={!isOpen}>
        <Container isOpen={isOpen}>
          <FeedbackContent view={view} />
        </Container>
      </div>
    )
  );
}
