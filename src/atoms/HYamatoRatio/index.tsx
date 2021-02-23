import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const HYamatoRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1.414 / 1} {...props} />;
};

export default HYamatoRatio;
