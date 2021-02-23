import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect9x16Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={9 / 16} {...props} />;
};

export default Aspect9x16Ratio;
