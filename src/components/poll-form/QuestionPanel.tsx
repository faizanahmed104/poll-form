import { Box, Typography, Button } from '@mui/material';
import { STEPS } from './constants';
import { QuestionPanel as QuestionPanelProps } from './types';

const QuestionPanel = ({
  currentQuestion,
  isAnimating,
  handleQuestionChange,
}: QuestionPanelProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: 'purple',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: 'white',
          textAlign: 'center',
          position: 'absolute',
          width: '85%',
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          transform: isAnimating ? 'translateY(-20px)' : 'translateY(0)',
          opacity: isAnimating ? 0 : 1,
        }}
      >
        {STEPS[currentQuestion].title}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        {STEPS.map((_, index) => (
          <Button
            key={index}
            onClick={() => handleQuestionChange(index)}
            sx={{
              width: '20px',
              height: '20px',
              minWidth: 'unset',
              borderRadius: '50%',
              border: '2px solid white',
              backgroundColor:
                index === currentQuestion ? 'transparent' : 'white',
              '&:hover': {
                backgroundColor:
                  index === currentQuestion ? 'transparent' : 'white',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default QuestionPanel;
