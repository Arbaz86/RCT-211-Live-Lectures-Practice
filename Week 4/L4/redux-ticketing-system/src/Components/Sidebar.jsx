import { Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const Sidebar = () => {
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <Box border="1px solid red" w="250px" h="100vh">
      <Stack direction="column">
        <Box border="1px solid red" h="15vh">
          {/* {user profile} */}
        </Box>
        <Box border="1px solid blue" h="70vh">
          <Flex direction="column">
            <Box border="1px solid blue">
              <Flex justify="space-between" p="0px 20px">
                <Text>All</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex justify="space-between" p="0px 20px">
                <Text>All</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex justify="space-between" p="0px 20px">
                <Text>All</Text>
                <Text>4</Text>
              </Flex>
            </Box>
            <Box border="1px solid blue">
              <Flex justify="space-between" p="0px 20px">
                <Text>All</Text>
                <Text>4</Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box border="1px solid red" h="10vh">
          <Button w="100%"> {isAuth && "LOGOUT"}</Button>
        </Box>
      </Stack>
    </Box>
  );
};
