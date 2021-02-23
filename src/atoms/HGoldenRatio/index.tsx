import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const HGoldenRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={1.618 / 1} {...props} />;
};

export default HGoldenRatio;
