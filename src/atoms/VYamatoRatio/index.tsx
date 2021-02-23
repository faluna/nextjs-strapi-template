import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const VYamatoRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1 / 1.414} {...props} />;
};

export default VYamatoRatio;
