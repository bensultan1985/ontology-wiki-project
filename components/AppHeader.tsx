import { Anchor, Grid, Header, MediaQuery, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import SignInMockUp from "./SignInMockUp";

export function AppHeader() {
  const router = useRouter();
  return (
    <Anchor>
      <Header
        height="auto"
        fixed
        pl="xl"
        pr="xs"
        style={{ background: "lightgray", borderRadius: "0 0px 0px 25px" }}
      >
        <Grid>
          <MediaQuery query="(max-width: 650px)" styles={{ display: "none" }}>
            <Grid.Col span={3}>
              <Link href={"/"}>
                <Title style={{ display: "inline-block" }}>
                  <span>
                    Ont<span style={{ color: "navy" }}>info</span>
                  </span>
                </Title>
              </Link>
            </Grid.Col>
          </MediaQuery>

          <MediaQuery query="(max-width: 650px)" styles={{ display: "none" }}>
            <Grid.Col span={9}>
              <div style={{ textAlign: "right" }}>
                {router.pathname != "/" &&
                  router.pathname != "/search" &&
                  router.pathname != "/admin" && <SearchBar></SearchBar>}
                <span style={{ display: "inline-block" }}>
                  <SignInMockUp></SignInMockUp>
                </span>
              </div>
            </Grid.Col>
          </MediaQuery>

          <MediaQuery query="(min-width: 651px)" styles={{ display: "none" }}>
            <Grid.Col span={12}>
              <div style={{ textAlign: "right" }}>
                <div
                  style={{
                    textAlign: "left",
                    float: "left",
                    // width: "100%",
                    display: "inline-block",
                  }}
                >
                  <Link href={"/"}>
                    <Title
                      px={0}
                      mx={0}
                      my={"xs"}
                      order={5}
                      style={{ display: "inline-block" }}
                    >
                      <span>
                        O<span style={{ color: "navy" }}>i</span>
                      </span>
                    </Title>
                  </Link>
                </div>
                {router.pathname != "/" &&
                  router.pathname != "/search" &&
                  router.pathname != "/admin" && <SearchBar></SearchBar>}
                <span style={{ display: "inline-block" }}>
                  <SignInMockUp></SignInMockUp>
                </span>
              </div>
            </Grid.Col>
          </MediaQuery>
        </Grid>
      </Header>
    </Anchor>
  );
}
