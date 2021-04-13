import { withNextRouter } from 'storybook-addon-next-router';
import { ChakraProvider } from '@chakra-ui/react';

import './__mock/NextImage';
import theme from '../src/utils/theme';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
  withNextRouter({
    path: '/',
    asPath: '/',
    query: {},
    push() {},
  }),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
