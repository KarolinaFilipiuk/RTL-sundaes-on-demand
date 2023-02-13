import { render, screen } from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

describe('Checkbox and button in SummaryForm', () => {
  test('initials conditions', () => {
    render(<SummaryForm />);
    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', { name: /confirm order/i });

    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
  });

  test('Checkbox disabled button on first click and enables on second click', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    const button = screen.getByRole('button', { name: /confirm order/i });

    await user.click(checkbox);
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
  });
});

describe('Popover in SummaryForm', () => {
  test('Popover responds to hover', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    const termsAndConditions = screen.getByText(/terms and conditions/i);

    expect(nullPopover).not.toBeInTheDocument();

    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
