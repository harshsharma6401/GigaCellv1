import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../components/Authentication/Login'
import SignUp from '../components/Authentication/SignUp'

//https://api.cloudinary.com/v1_1/dnknbdcyy/image/upload

const Homepage = () => {
 
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
  
    if (user) navigate("/chats");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);
  
  return (
    //Container helps in responsiveness
    <Container maxW='xl' centerContent>

      <Box
        display='flex'
        justifyContent='center'
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize='4xl' fontFamily="work sans" color="black"> GigaCell</Text>
      </Box>

      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color ='black'>

        <Tabs variant='soft-rounded' > 
          {/* colorScheme='green' */}
          <TabList>
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <SignUp/>
            </TabPanel>
          </TabPanels>
        </Tabs>

      </Box>
    </Container>
  )
}

export default Homepage