import { Box, Button, Heading, Input, Link, Flex } from "@chakra-ui/react";
import { BsCode } from "react-icons/bs";
import React from "react";
import { TbFilter } from "react-icons/tb";
import { AiOutlineRise } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";

export const InputBox = () => {
  return (
    <Box p="80px 0px 50px">
      <Box textAlign="center">
        <Heading fontSize="60px">Find The Right</Heading>
        <Heading fontSize="60px">
          <span className="heading-textGradian">Four-Day </span>
          Week Job
        </Heading>
      </Box>
      <Box align="center" mt="43px">
        <Input
          color="#4a5568"
          placeholder="Type job title or keyword"
          size="md"
          w="425px"
          p="23px"
          boxShadow="lg"
          rounded="xl"
          bg="white"
        />
        <Button
          ml="12px"
          p="0px 16px"
          h="50px"
          w="48px"
          rounded="xl"
          fontSize="16px"
        >
          <Icon as={TbFilter} fontSize="21px" color="#a0aec0" />
        </Button>
      </Box>
      <Box mt="12px">
        <Flex
          gap="10px"
          textAlign="center"
          color="#e2e8f0"
          justifyContent="center"
        >
          <Link
            _hover={false}
            fontWeight="600"
            h="40px"
            w="154px"
            p="8px"
            bg="#805ad5"
            rounded="lg"
            _active={{ backgroundColor: "#53329ae1" }}
          >
            🌍 Remote
          </Link>
          <Link
            h="40px"
            w="154px"
            p="8px"
            bg="#805ad5"
            rounded="lg"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="5px"
            _hover={false}
            fontWeight="600"
            _active={{ backgroundColor: "#53329ae1" }}
          >
            <BsCode fontSize="22px" /> Tech
          </Link>
          <Link
            _hover={false}
            fontWeight="600"
            h="40px"
            w="154px"
            p="8px"
            bg="#805ad5"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="3px"
            rounded="lg"
            _active={{ backgroundColor: "#53329ae1" }}
          >
            <AiOutlineRise fontSize="22px" color="#ed8936" />
            Marketing
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};
