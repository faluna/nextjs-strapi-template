import { extendTheme } from '@chakra-ui/react';

import textStyles from './textStyles';
import foundations from './foundations';

const overrides = {
  textStyles,
  ...foundations,
};

export default extendTheme(overrides);
