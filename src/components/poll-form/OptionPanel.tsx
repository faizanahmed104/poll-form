import { useState } from 'react';
import { Box, Typography, IconButton, Zoom } from '@mui/material';
import { STEPS } from './constants';
import { OptionPanel as OptionPanelProps } from './types';

const OptionPanel = ({
  currentQuestion,
  handleOptionSelect,
  answers,
}: OptionPanelProps) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  return (
    <Box
      sx={{
        flex: 1,
        bgcolor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 3,
          padding: 2,
          maxWidth: '100%',
        }}
      >
        {STEPS[currentQuestion].options.map((option, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            onMouseEnter={() => setHoveredOption(index)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            <IconButton
              onClick={() => handleOptionSelect(index)}
              sx={{
                width: 80,
                height: 80,
                fontSize: '2rem',
                backgroundColor:
                  answers[currentQuestion] === index
                    ? 'rgba(0, 0, 0, 0.1)'
                    : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                },
              }}
            >
              {option.icon}
            </IconButton>
            <Zoom
              in={hoveredOption === index || answers[currentQuestion] === index}
            >
              <Typography
                sx={{
                  position: 'absolute',
                  bottom: -25,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  whiteSpace: 'nowrap',
                }}
              >
                {option.label}
              </Typography>
            </Zoom>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OptionPanel;
