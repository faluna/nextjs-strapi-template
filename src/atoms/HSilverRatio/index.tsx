import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const HSilverRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={2.414 / 1} {...props} />;
};

export default HSilverRatio;
