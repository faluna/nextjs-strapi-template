// import layer
import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

// type layer
export type ContainerProps = BoxProps & Record<string, unknown>;
export type Props = ContainerProps;

//DOM layer
export const Component: React.FC<Props> = ({ ...props }) => (
  <Box {...props}>
    <Box as="main"></Box>
  </Box>
);

// Container layer
export const Container: React.FC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} />;
};

export default Container;
