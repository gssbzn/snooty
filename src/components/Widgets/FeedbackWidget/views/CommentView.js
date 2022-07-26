import React from 'react';
import TextArea from '@leafygreen-ui/text-area';
//import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Button from '@leafygreen-ui/button';
import { Layout, CommentHeader, Footer } from '../components/view-components';
import { useFeedbackState } from '../context';
//import { uiColors } from '@leafygreen-ui/palette';
import validateEmail from '../../../../utils/validate-email';
// import ScreenshotButton from '../components/ScreenshotButton';
import Loadable from '@loadable/component';
import TextInput from '@leafygreen-ui/text-input';
const ScreenshotButton = Loadable(() => import('../components/ScreenshotButton'));

function useValidation(inputValue, validator) {
  const [isValid, setIsValid] = React.useState(null);
  React.useEffect(() => {
    setIsValid(validator(inputValue));
  }, [inputValue, validator]);

  return isValid;
}

export default function CommentView({ ...props }) {
  const { selectedSentiment, submitComment, submitAllFeedback } = useFeedbackState();
  const placeholderText =
    selectedSentiment === 'positive'
      ? 'How did this page help you?'
      : selectedSentiment === 'negative'
      ? 'How could this page be more helpful?'
      : 'What change would you like to see?';

  const [comment, setComment] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [hasEmailError, setHasEmailError] = React.useState(false);
  const isValidEmail = useValidation(email, validateEmail);

  const handleSubmit = async () => {
    if (isValidEmail) {
      await submitComment({ comment, email });
      await submitAllFeedback();
    } else {
      setHasEmailError(true);
    }
  };

  return (
    <Layout>
      <CommentHeader />
      <TextArea
        id="feedback-comment"
        placeholder={placeholderText}
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <TextInput
        id="feedback-email"
        placeholder="email@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {hasEmailError && <InputErrorLabel htmlFor="feedback-email">Please enter a valid email address.</InputErrorLabel>}
      <Footer>
        <SubmitButton onClick={() => handleSubmit()}>{'Send'}</SubmitButton>
        <ScreenshotButton />
      </Footer>
    </Layout>
  );
}

const SubmitButton = styled(Button)``;
/**
const InputStyle = css`
  padding: 14px;
  border: 0.5px solid ${uiColors.black.base};
  border-radius: 2px;
  flex-grow: 3;
  line-height: 24px;
  font-size: 16px;
  max-height: 100%;
  width: 100%;
  margin-bottom: 16px;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;


const CommentTextArea = styled.textarea`
  ${InputStyle}
`;
const EmailInput = styled.input`
  ${InputStyle}
`;
*/
const InputLabel = styled.label`
  width: 100%;
  text-align: left;
`;
const InputErrorLabel = styled(InputLabel)`
  color: red;
  margin-top: -16px;
  margin-bottom: 16px;
`;
