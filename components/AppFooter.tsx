import { Footer, Text, Anchor } from "@mantine/core";

export function AppFooter() {
  return (
    <Footer
      sx={(theme) => ({})}
      style={{ background: "lightgray" }}
      height="auto"
      fixed
      children={
        <Text m={4} mx={20} align="center">
          <span style={{ marginRight: "20px" }}>Copyright 2022</span>
        </Text>
      }
    ></Footer>
  );
}
