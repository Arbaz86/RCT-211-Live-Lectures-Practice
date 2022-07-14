import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiTwotoneFire } from "react-icons/ai";
import React from "react";

export const JobCover = (props) => {
  console.log(props.hotIcon == "AiTwotoneFire");
  return (
    <Box
      p="15px"
      margin="16px 5px"
      bg="white"
      h="96px"
      rounded="xl"
      border="2px solid #6b46c1"
    >
      <Flex>
        <Box>
          <Image
            boxSize="100px"
            objectFit="cover"
            src={props.companyLogo}
            alt={props.jobTitle}
            w="32px"
            h="32px"
          />
        </Box>
        <Box w="400px" ml="10px">
          <Text fontSize="14px" color="#4a5568" lineHeight="21px">
            {props.companyName}
          </Text>
          <Heading fontSize="18px" color="#1a202c" lineHeight="27px">
            {props.jobTitle}
          </Heading>
          <Text fontSize="14px" color="#4a5568" lineHeight="21px">
            {props.salary}
          </Text>
        </Box>
        <Box>
          <Flex>
            {props.hotIcon == "AiTwotoneFire" ? (
              <AiTwotoneFire color="#f56565" fontSize="16px" />
            ) : (
              ""
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
