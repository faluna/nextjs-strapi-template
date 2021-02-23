import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect3x4Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={3 / 4} {...props} />;
};

export default Aspect3x4Ratio;
