import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect2x3Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={2 / 3} {...props} />;
};

export default Aspect2x3Ratio;
