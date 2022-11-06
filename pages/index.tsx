// eslint-disable-file no-use-before-define

import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Container } from "@mantine/core";
import { UserConsole } from "../components/UserConsole";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../context/UserProvider";

const Home: NextPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    setIsLoading(false);
  }, [user, isLoading]);
  if (user)
    return (
      <div className={styles.container}>
        <main className={styles.index}>
          <Container>
            <UserConsole></UserConsole>
          </Container>
        </main>
      </div>
    );
  return <div>no user found</div>;
};

export default Home;
