import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Anchor, Container, Text, Title, Image } from "@mantine/core";
import { UserConsole } from "../components/UserConsole";
// import { useSession } from "next-auth/react";
import Link from "next/link";
import { SessionProvider } from "../context/sessionContext";
import { useContext } from "react";

const Home: NextPage = (props) => {
  // const { data: session } = useSession();
  const { data: session } = useContext(SessionProvider);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {!session?.user?.name ? (
          <Container>
            <UserConsole user={session?.user?.name}></UserConsole>
          </Container>
        ) : (
          <Container>
            <Title>Welcome</Title>
            <Image
              my="xl"
              src="http://localhost:3000/images/logos/heroimage.jpeg"
              height={200}
            ></Image>
            <Text my="xl">
              CheckLyst is a free, lightweight, and addictive to-do list
              application. To unlock the power of CheckLyst,{" "}
              <Link href="/Register">
                <Anchor variant="gradient">Sign up</Anchor>
              </Link>{" "}
              today!
            </Text>
          </Container>
        )}
      </main>
    </div>
  );
};

export default Home;
