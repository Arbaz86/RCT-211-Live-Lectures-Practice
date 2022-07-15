import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { AiTwotoneFire, AiFillPushpin } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import React from "react";

export const JobCover = (props) => {
  return (
    <Box
      p="15px"
      margin="16px 5px"
      bg="white"
      h="96px"
      rounded="xl"
      border="2px solid #6b46c1"
      _hover={{ boxShadow: "lg" }}
      cursor="pointer"
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
        <Box w="164px" ml="10px">
          <Flex columnGap="10px" justifyContent="flex-end">
            {props.hotIcon == "AiTwotoneFire" ? (
              <abbr title="Hot">
                <Icon as={AiTwotoneFire} color="#f56565" fontSize="19px" />
              </abbr>
            ) : (
              ""
            )}
            {props.earthIcon === "IoEarthSharp" ? (
              <abbr title="Remote">
                <Icon as={IoEarthSharp} color="#119478" fontSize="19px" />
              </abbr>
            ) : (
              ""
            )}
            {props.pinIcon === "AiFillPushpin" ? (
              <abbr title="Pinned">
                <Icon as={AiFillPushpin} color="#4299e1" fontSize="19px" />
              </abbr>
            ) : (
              ""
            )}
            {props.bookmarkIcon === "BsFillBookmarkFill" ? (
              <abbr title="Bookmark">
                <Icon
                  as={BsFillBookmarkFill}
                  color="#718096"
                  _hover={{ color: "#f687b3" }}
                  fontSize="19px"
                />
              </abbr>
            ) : (
              ""
            )}
          </Flex>
          <Flex justifyContent="flex-end" mt="25px">
            <Text fontSize="14px" color="#4a5568">
              {props.jobTime}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
