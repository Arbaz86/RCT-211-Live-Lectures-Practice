import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { BsFacebook } from "react-icons/bs";
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
          <Flex gap="10px" pl="30px" fontSize="22px">
            <Icon as={BsFacebook} />
            <Icon as={BsFacebook} />
            <Icon as={BsFacebook} />
            <Icon as={BsFacebook} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};
