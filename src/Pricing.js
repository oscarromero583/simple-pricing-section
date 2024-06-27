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
import CheckIcon from "./icon"; 


export const ListItem = (props) => { 
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest}>
      <Icon as={CheckIcon} w="22" h="22px" />
      <Text>{children}</Text> 
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box maxW={'994px'} margin={'auto'} mt={'-206'} rounded={'40px'} overflow={'hidden'} boxShadow={' 0 16px 16px rgba(0, 0, 0, 0.1)'}>
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
        <Box p={'30px'} fontSize={'180x'} bg={'white'}>
          <Text>
          Access these features when you get the pricing for your business
          </Text>
          <Stack as={'ul'} spacing={'1px'} pt={'15px'}>
              <ListItem>International calling and messain API</ListItem>
              <ListItem>Lorem ipsum dolor, sit amet consectetu</ListItem>
              <ListItem>Lorem, Simbi ipsum dolor sit amet consectetur </ListItem>
              <ListItem>Lorem ipsum dolor sit janito amet consectetur. jith</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};


export default Pricing;
