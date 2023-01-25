import { fireEvent, render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';

describe('SummaryForm', () => {
  test('initials conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test('Checkbox disabled button on first click and enables on second click', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', { name: /confirm order/i });

    fireEvent.click(checkbox);
    expect(button).toBeEnabled();

    fireEvent.click(checkbox);
    expect(button).toBeDisabled();
  });
});
