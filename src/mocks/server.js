import { setupSetver } from 'msw/node';
import { handlers } from './handlers';

export const server = setupSetver(...handlers);
