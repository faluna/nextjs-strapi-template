import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const VPlatinumRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1 / 1.732} {...props} />;
};

export default VPlatinumRatio;
