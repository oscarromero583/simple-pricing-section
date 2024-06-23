import React from 'react'
import { 
Box,
Heading,
Text,

  } from '@chakra-ui/react'


const Header = () => {
    return (
        <Box 
        as='section'
        color={'#F7FAFC'} 
        bg={'#6B46C1'} 
        pt={'50px'} 
        pb={'130px'} 
        justifyContent={'center'} 
        textAlign={'center'}
        >
            <Heading fontWeight={'800'} fontSize={'48px'} px={'32px'}>
                Simple Pricing for your Business
            </Heading>
            <Text fontWeight={'500'} fontSize={'24px'}>
                Plans that are carefully crafted to suit your business
            </Text>

        </Box>
       
    );
};

export default Header;