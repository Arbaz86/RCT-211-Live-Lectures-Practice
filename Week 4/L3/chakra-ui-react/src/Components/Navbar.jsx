import {
  Box,
  Flex,
  Button,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export function Navbar() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent={"space-between"}
      >
        <Flex>
          <Image
            boxSize="32px"
            objectFit="cover"
            src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
            alt="Dan Abramov"
          />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={2}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant="ghost"
            cursor={"pointer"}
          >
            Sign In
          </Button>
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant="outline"
            cursor={"pointer"}
            color="#6B46C1"
            colorScheme="#6B46C1"
            _hover={{ bg: "#b79cf61c" }}
            _active={{ bg: "#ab88fc5e" }}
          >
            Sign Up
          </Button>
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            backgroundImage={
              "linear-gradient(to right, var(--chakra-colors-purple-500), var(--chakra-colors-blue-500));"
            }
            href={"#"}
            _hover={false}
            _active={false}
          >
            Post a Job 🚀
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
