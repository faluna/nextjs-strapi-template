import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const Aspect16x9Ratio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={16 / 9} {...props} />;
};

export default Aspect16x9Ratio;
