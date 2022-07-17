import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const Homepage = () => {
  return (
    <Box width="100%">
      <Flex justifyContent="space-around">
        <Box border="1px solid black" w="250px" h="95vh">
          {/* Todo */}
        </Box>
        <Box border="1px solid black" w="250px" h="95vh">
          {/* In-progress */}
        </Box>
        <Box border="1px solid black" w="250px" h="95vh">
          {/* Done */}
        </Box>
      </Flex>
    </Box>
  );
};
