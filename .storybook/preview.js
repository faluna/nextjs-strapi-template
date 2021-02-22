import { addDecorator } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';

addDecorator((story) => <ChakraProvider>{story()}</ChakraProvider>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

