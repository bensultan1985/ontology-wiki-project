import { AppProps } from "next/app";
import React from "react";
import {
  AppShell,
  Container,
  MantineProvider,
  MantineThemeOverride,
} from "@mantine/core";
import { AppHeader } from "../components/layout/AppHeader";
import { AppFooter } from "../components/layout/AppFooter";
import { UserProvider } from "../context/UserProvider";
import { NotificationsProvider } from "@mantine/notifications";
import { SessionProvider } from "next-auth/react";
import { MetaData } from "../components/meta/MetaData";

export default function App({
  Component,
  pageProps: { theme, session, ...pageProps },
}: AppProps<{ theme: MantineThemeOverride; session }>) {
  return (
    <>
      <MetaData></MetaData>
      <SessionProvider session={session}>
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
      </SessionProvider>
    </>
  );
}
