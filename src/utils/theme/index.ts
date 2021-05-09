import { extendTheme } from '@chakra-ui/react';

import textStyles from './textStyles';
import foundations from './foundations';
import styles from './styles';

const overrides = {
  styles,
  textStyles,
  ...foundations,
};

export default extendTheme(overrides);
