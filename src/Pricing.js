import { 
Box,
Flex,
Text,
Heading  } from "@chakra-ui/react";
import React from "react";


const Pricing = () => {
    return (
        <Box>
            <Flex>
                <Box>
                    <Text fontSize={'24px'} fontWeight={'800'}> 
                        Pre mium Pro
                    </Text>
                    <Heading as='h3' fontSize='60px' mt={'8px'}> 
                        $369
                    </Heading>
                    <Text color={'#171923'}  fontSize={'16px'} fontWeight={'500'} mt={'4px'}>
                        Billed just once!
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Pricing;