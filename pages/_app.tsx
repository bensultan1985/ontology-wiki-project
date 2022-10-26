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
import { NotificationsProvider } from "@mantine/notifications";

export default function App({
  Component,
  pageProps: { theme, ...pageProps },
}: AppProps<{ theme: MantineThemeOverride }>) {
  return (
    <>
      <Head>
        <title>OntoInfo</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="A wiki dashboard for clinical ontology."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
          <NotificationsProvider autoClose={4000}>
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
          </NotificationsProvider>
        </MantineProvider>
      </UserProvider>
    </>
  );
}
