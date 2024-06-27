import React   from "react";
import {
HStack,
Icon,
StackProps,
Text
} from '@chakra-ui/react'
import { StarTriangleIcon, StarredTriangleIcon, CircularArrowIcon } from './icon'

interface FeatureProps extends StackProps {
    icon:ElementType;
}

function Feature({ icon, children, ...rest }: FeatureProps) {  
    return (
      <HStack {...rest} spacing={'24px'}>
        <Icon as={icon} boxSize={'48px'} />
        <Text
          fontSize={'18px'}
          fontWeight={'700'}>
          {children}
        </Text>
      </HStack>
    );
  }

  export function Features() {
    return (
      <HStack>
        <Feature icon={StarTriangleIcon}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum?

        </Feature>
        <Feature icon={StarredTriangleIcon}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Feature>
        <Feature icon={CircularArrowIcon}>
          Yet another feature feature here.
        </Feature>
      </HStack>
    );
  }