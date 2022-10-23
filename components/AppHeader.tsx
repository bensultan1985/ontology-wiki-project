import {
  Anchor,
  Button,
  Container,
  Grid,
  Header,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import LoginSection from "./LoginSection";

export function AppHeader() {
  return (
    <Anchor>
      <Header
        height="auto"
        fixed
        pl="xl"
        pr="xs"
        sx={(theme) => ({})}
        // style={{ background: "#b0a370" }}
        style={{ background: "lightgray", borderRadius: "0 0px 0px 25px" }}
      >
        <Grid>
          <Grid.Col span={3}>
            <Link href={"/"}>
              <Title style={{ display: "inline-block" }}>
                Ont<span style={{ color: "navy" }}>info</span>
              </Title>
            </Link>
          </Grid.Col>

          <Grid.Col span={9}>
            <div style={{ textAlign: "right" }}>
              <Container mt={3} style={{ display: "inline-block" }}>
                <TextInput
                  size="xs"
                  placeholder="search term..."
                  style={{ display: "inline-block", width: "140px" }}
                ></TextInput>
                <Button size="sm" color="gray" variant="subtle">
                  search
                </Button>
              </Container>
              <span style={{ display: "inline-block" }}>
                <LoginSection></LoginSection>
              </span>
            </div>
          </Grid.Col>
        </Grid>
      </Header>
    </Anchor>
  );
}
