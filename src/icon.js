import React from 'react';
import { createIcon } from '@chakra-ui/react';

const CheckIcon = createIcon({
  displayName: 'CheckIcon',
  viewBox: '0 0 100 100',
  path: (
    <g>
      {/* Purple Circle */}
      <circle cx="50" cy="50" r="45" fill="purple" />
      {/* White Checkmark */}
      <polyline points="30,50 45,65 70,35" stroke="white" strokeWidth="10" fill="none" />
    </g>
  ),
});

export default CheckIcon;
