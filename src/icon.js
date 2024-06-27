import React from 'react';
import { createIcon } from '@chakra-ui/react';

const CheckIcon = createIcon({
  displayName: 'CheckIcon',
  viewBox: '0 0 100 100',
  path: (
    <g>
      <circle cx="50" cy="50" r="45" fill="purple" />
      <polyline points="30,50 45,65 70,35" stroke="white" strokeWidth="10" fill="none" />
    </g>
  ),
});

export default CheckIcon;


export function StarTriangleIcon({ ...props }) {
  return createIcon({
    displayName: 'StarTriangleIcon',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <rect width="100" height="100" fill="white" />
        <polygon points="50,10 90,90 10,90" fill="purple" />
        <polygon points="50,25 60,75 40,75" fill="white" />
        <polygon points="50,35 55,65 45,65" fill="purple" />
      </g>
    ),
  })(props);
}


export function StarredTriangleIcon({ ...props }) {
  return createIcon({
    displayName: 'StarredTriangleIcon',
    viewBox: '0 0 100 100',
    path: (
      <g transform="rotate(30 50 50)">
        <rect width="100" height="100" fill="none" />
        <polygon points="50,20 80,80 20,80" fill="purple" rx="15" ry="15" />
        <polygon points="45,50 50,65 40,65" fill="white" />
        <polygon points="55,40 60,50 50,50" fill="white" />
      </g>
    ),
  })(props);
}



export function CircularArrowIcon({ ...props }) {
  return createIcon({
    displayName: 'CircularArrowIcon',
    viewBox: '0 0 100 100',
    path: (
      <g>
        <path
          d="M50 10
             A40 40 0 1 1 49.99 10
             M50 10
             L45 20
             L55 20
             Z"
          fill="purple"
        /> <path
        d="M50 10
           A40 40 0 1 0 90 50
           M90 50
           L85 60
           L95 60
           Z"
        fill="gray"
      />
    </g>
  ),
})(props);
}



