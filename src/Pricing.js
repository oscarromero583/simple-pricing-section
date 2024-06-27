import { 
Box,
Flex, 
Text, 
Heading, 
HStack, 
Icon, 
Stack,
Button } from "@chakra-ui/react";
import React from "react";
import CheckIcon from "./icon"; // Correct path and default import

export const ListItem = (props) => { // Remove StackProps since it's not imported or needed
  const { children, ...rest } = props; // Fix typo: childern to children
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22" h="22px" />
      <Text>{children}</Text> {/* Fix typo: Children to children */}
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box maxW={'994px'} margin={'auto'}>
      <Flex>
        <Box 
        bg={'#F0EAFB'} 
        p={'60px'}
        justifyContent={'center'} 
        textAlign={'center'}>
          <Text fontSize="24px" fontWeight="800">
            Premium Pro
          </Text>
          <Heading as="h3" fontSize="60px" mt="-12px">
            $369
          </Heading>
          <Text
            color="#171923"
            fontSize="16px"
            fontWeight="500"
            mt="-52px"
          >
            Billed just once!
          </Text>
          <Button bg={'#6B46C1'} color={'#F7FAFC'}  size={'lg'} w={'282px'} rounded={'20px'} h={'30px'}>
            Get Started!
          </Button>
        </Box>
        <Box p={'30px'} fontSize={''}>
          <Text>
          Access these features when you get the pricing for your business
          </Text>
          <Stack as={'ul'} spacing={'1px'} pt={'15px'}>
              <ListItem>International calling and messain API</ListItem>
              <ListItem>International calling and messain API</ListItem>
              <ListItem>International calling and messain API</ListItem>
              <ListItem>International calling and messain API</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};


export default Pricing;
