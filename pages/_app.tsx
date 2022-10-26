// eslint-disable-file no-use-before-define

import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import {
  AppShell,
  Container,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { UserProvider } from "../context/UserProvider";
export default function App({
  Component,
  pageProps: { theme, ...pageProps },
}: AppProps<{ theme: MantineThemeOverride }>) {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="description" content="this is a website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <AppShell
            fixed={true}
            style={{ background: "#f6f4ee" }}
            header={<AppHeader></AppHeader>}
            footer={<AppFooter></AppFooter>}
          >
            <Container style={{ background: "white", height: "100%" }}>
              <Component {...pageProps} />
            </Container>
          </AppShell>
        </MantineProvider>
      </UserProvider>
    </>
  );
}
