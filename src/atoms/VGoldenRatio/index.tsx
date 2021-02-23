import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const VGoldenRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1 / 1.618} {...props} />;
};

export default VGoldenRatio;
