import { Anchor, Grid, Header, MediaQuery, Title } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchBar from "../search/SearchBar";
import SignInMockUp from "../auth/SignInMockUp";
import NextAuthSignIn from "../auth/NextAuthSignIn";

export function AppHeader() {
  const router = useRouter();
  return (
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
                  <span style={{ color: "#1C82D6" }}>Ont</span>
                  <span style={{ color: "navy" }}>info</span>
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
                {/* <SignInMockUp></SignInMockUp> */}
                <NextAuthSignIn></NextAuthSignIn>
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
                {/* <SignInMockUp></SignInMockUp> */}
                <NextAuthSignIn></NextAuthSignIn>
              </span>
            </div>
          </Grid.Col>
        </MediaQuery>
      </Grid>
    </Header>
  );
}
