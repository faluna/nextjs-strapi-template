import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const HPlatinumRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1.732 / 1} {...props} />;
};

export default HPlatinumRatio;
