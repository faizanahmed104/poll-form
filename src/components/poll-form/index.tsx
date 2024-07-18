import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { STEPS } from './constants';
import OptionPanel from './OptionPanel';
import QuestionPanel from './QuestionPanel';
import ResultPanel from './ResultPanel';

const PollForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [answers, setAnswers] = useState(Array(STEPS.length).fill(null));
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [revealResults, setRevealResults] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const submitResults = async () => {
    setIsSubmitting(true);
    setSubmitError(null);

    const resultsData = STEPS.map((question, index) => ({
      question: question.title,
      answer:
        answers[index] !== null
          ? question.options[answers[index]].label
          : 'Not answered',
    }));
    console.log('Submission successful:', resultsData);

    try {
      const response = await fetch('https://api.example.com/submit-poll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resultsData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit results');
      }

      const data = await response.json();
      console.log('Submission successful:', data);
    } catch (error) {
      console.error('Error submitting results:', error);
      setSubmitError('Failed to submit results. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuestionChange = (index: number) => {
    if (index !== currentQuestion) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentQuestion(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = optionIndex;
    setAnswers(newAnswers);

    if (currentQuestion < STEPS.length - 1) {
      handleQuestionChange(currentQuestion + 1);
    } else {
      setIsComplete(true);
    }
  };

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => setRevealResults(true), 100);
    }
  }, [isComplete]);

  return (
    <Box
      role='poll-form'
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      {isComplete ? (
        <ResultPanel
          answers={answers}
          submitError={submitError}
          revealResults={revealResults}
          isSubmitting={isSubmitting}
          submitResults={submitResults}
        />
      ) : (
        <>
          <QuestionPanel
            currentQuestion={currentQuestion}
            isAnimating={isAnimating}
            handleQuestionChange={handleQuestionChange}
          />
          <OptionPanel
            currentQuestion={currentQuestion}
            answers={answers}
            handleOptionSelect={handleOptionSelect}
          />
        </>
      )}
    </Box>
  );
};

export default PollForm;
