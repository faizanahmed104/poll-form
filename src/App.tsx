import { Routes, Route } from 'react-router-dom';
import PollForm from './components/poll-form';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box className='App'>
      <Routes>
        <Route path='/' element={<PollForm />} />
      </Routes>
    </Box>
  );
};

export default App;
