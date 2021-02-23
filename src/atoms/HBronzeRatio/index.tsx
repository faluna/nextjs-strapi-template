import React from 'react';
import { AspectRatio, AspectRatioProps } from '@chakra-ui/react';

const VBronzeRatio: React.FC<AspectRatioProps> = ({ ...props }) => {
  return <AspectRatio ratio={3.303 / 1} {...props} />;
};

export default VBronzeRatio;
