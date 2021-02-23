import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect3x2Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={3 / 2} {...props} />;
};

export default Aspect3x2Ratio;
