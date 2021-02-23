import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const VSilverRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1 / 2.414} {...props} />;
};

export default VSilverRatio;
