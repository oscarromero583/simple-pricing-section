import { 
Box,
Flex,
Text,
Heading,  
HStack} from "@chakra-ui/react";
import React from "react";
import { CheckboxIcon } from './Icon';

 
export const ListItem = (props: StackProps) => {
    
    return (
             <HStack>
             <Icons as={CheckIcon}  w={'22'} h={"22px"} {...rest}/>
             <Text>

             </Text>
             </HStack>
    );
};

const Pricing = () => {
    return (
        <Box>
            <Flex>
                <Box>
                    <Text fontSize={'24px'} fontWeight={'800'}> 
                        Pre mium Pro
                    </Text>
                    <Heading as='h3' fontSize='60px' mt={'-12px'}> 
                        $369
                    </Heading>
                    <Text color={'#171923'}  fontSize={'16px'} fontWeight={'500'} mt={'-52px'}>
                        Billed just once!
                    </Text>
                </Box>
                <Box>
                    
                </Box>
            </Flex>
        </Box>
    );
};

export default Pricing;