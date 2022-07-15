import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import React from "react";

export const Footer = () => {
  return (
    <Box h="169px" w="100%" bg="#f7fafc">
      <Container maxW="container.xl">
        <Flex gap="9%" p="40px" ml="30px">
          <Link>Contact Us</Link>
          <Link>Legal</Link>
        </Flex>
      </Container>
      <hr />
      <Container maxW="container.xl">
        <Flex gap="9%" p="20px 40px" ml="30px" justifyContent="space-between">
          <Text>&copy; 2022 WeWork4Days. All rights reserved</Text>
          <Flex
            gap="22px"
            pl="30px"
            fontSize="16px"
            mr="30px"
            alignItems="center"
          >
            <Box p="5px 8px 0px" rounded="50%" bg="#0000000F">
              <Icon as={BsFacebook} />
            </Box>
            <Box p="5px 8px 0px" rounded="50%" bg="#0000000F">
              <Icon as={BsTwitter} />
            </Box>
            <Box p="5px 8px 0px" rounded="50%" bg="#0000000F">
              <Icon as={BsInstagram} />
            </Box>
            <Box p="5px 8px 0px" rounded="50%" bg="#0000000F">
              <Icon as={BsLinkedin} />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
