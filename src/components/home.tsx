import {
  Box,
  Heading,
  Wrap,
  Flex,
  Text,
  Button,
  Container,
} from "@chakra-ui/react";
const features = [
  {
    icon: "\u{1F600}", // 😀
    title: "Feature One",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "\u{1F603}", // 😃
    title: "Feature Two",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: "\u{1F604}", // 😄
    title: "Feature Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: "\u{1F609}", // 😉
    title: "Feature Four",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },

  {
    icon: "\u{1F604}", // 😄
    title: "Feature Three",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    icon: "\u{1F609}", // 😉
    title: "Feature Four",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Home() {
  return (
    <Box padding={"60px"}>
      <Box display={"flex"} flexDirection={"column"} p={"10px"} gap={"90px"}>
        <Box
          gap={"35px"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <div className="mask"></div>
          <Heading
            textAlign={{ base: "center", md: "unset" }}
            fontSize={"3.75rem"}
          >
            Home Page Title
          </Heading>
          <Text textAlign={{ base: "center", md: "unset" }} fontSize={"1.5rem"}>
            The description text/subtitle text for more description
          </Text>
          <Flex gap={"10px"}>
            <Button
              border={"none"}
              rounded={34}
              p={"14px"}
              minW={"143px"}
              fontWeight={"700"}
            >
              Button
            </Button>

            <Button
              border={"none"}
              rounded={34}
              p={"14px"}
              minW={"143px"}
              fontWeight={"700"}
            >
              Button
            </Button>
          </Flex>
        </Box>

        <Wrap justify="center" align="center" spacing="30px" display={"flex"}>
          {features.map((value, index) => {
            return (
              <Box
                _hover={{
                  outline: "1px solid #2360c2",
                  bg: "#454647",
                }}
                p={"15px"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                borderRadius={"10px"}
                bg={"#363738"}
                gap={"8px"}
                w={"340px"}
                minH={"204px"}
                key={index}
              >
                <Text fontSize={"24px"}>{value.icon}</Text>
                <Text fontSize={"20px"} fontWeight={"600"}>
                  {value.title}
                </Text>
                <Text textAlign={"center"}>{value.description}</Text>
              </Box>
            );
          })}
        </Wrap>
      </Box>
    </Box>
  );
}
