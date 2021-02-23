import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect4x3Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={4 / 3} {...props} />;
};

export default Aspect4x3Ratio;
