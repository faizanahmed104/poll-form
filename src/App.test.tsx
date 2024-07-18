import { render, screen } from '@testing-library/react';
import PollForm from './components/poll-form';

describe('PollForm', () => {
  it('renders PollForm correctly', async () => {
    render(<PollForm />);
    const element = screen.getByRole('poll-form');

    expect(element).toBeInTheDocument();
  });
});
