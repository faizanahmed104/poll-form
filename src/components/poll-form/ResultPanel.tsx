import { Box, Typography, Button } from '@mui/material';
import { STEPS } from './constants';
import { ResultPanel as ResultPanelProps } from './types';

const ResultPanel = ({
  answers,
  submitResults,
  submitError,
  revealResults,
  isSubmitting,
}: ResultPanelProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        overflowY: 'auto',
        transform: revealResults ? 'translateX(0)' : 'translateX(-100%)',
        opacity: revealResults ? 1 : 0,
        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
      }}
    >
      <Typography variant='h4' gutterBottom>
        Results
      </Typography>
      {STEPS.map((question, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: 2,
            textAlign: 'center',
            transform: revealResults ? 'translateX(0)' : 'translateX(-50px)',
            opacity: revealResults ? 1 : 0,
            transition: `transform 0.5s ease-out ${
              index * 0.1
            }s, opacity 0.5s ease-out ${index * 0.1}s`,
          }}
        >
          <Typography variant='h6'>{question.title}</Typography>
          <Typography>
            {answers[index] !== null
              ? `${question.options[answers[index]].icon} ${
                  question.options[answers[index]].label
                }`
              : 'Not answered'}
          </Typography>
        </Box>
      ))}
      <Button
        variant='contained'
        color='primary'
        onClick={submitResults}
        disabled={isSubmitting}
        sx={{ marginTop: 2 }}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Results'}
      </Button>
      {submitError && (
        <Typography color='error' sx={{ marginTop: 1 }}>
          {submitError}
        </Typography>
      )}
    </Box>
  );
};

export default ResultPanel;
