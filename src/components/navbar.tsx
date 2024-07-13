import { Box, Text } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box
      w={"100%"}
      bg={"#13151a"}
      zIndex={99}
      position={"sticky"}
      top={"0"}
      left={"0"}
      boxShadow={"md"}
      height={"58px"}
      padding={"16px"}
      display={"flex"}
      color={"white"}
      alignItems={"center"}
    >
      <Text fontWeight={"600"} fontSize={"1.3rem"}>
        Navbar
      </Text>
    </Box>
  );
}
