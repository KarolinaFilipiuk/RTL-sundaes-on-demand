import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDatails';

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: OrderDetailsProvider, ...options });

// re0export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
