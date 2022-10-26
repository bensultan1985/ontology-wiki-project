import { Footer, Text, Anchor } from "@mantine/core";

export function AppFooter() {
  return (
    <Footer style={{ background: "lightgray" }} height="auto" fixed>
      <Text m={4} mx={20} align="center">
        <span style={{ marginRight: "20px" }}>Copyright 2022</span>
      </Text>
    </Footer>
  );
}
