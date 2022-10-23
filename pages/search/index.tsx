import { Container, Title, UnstyledButton } from "@mantine/core";
import Link from "next/link";
import router from "next/router";
import Router from "next/router";
import { useEffect, useState } from "react";
import SearchPanel from "../../components/SearchPanel";
import { getConceptsByIds } from "../../services/services";
import styles from "../../styles/Home.module.css";

export default function Search() {
  const [sorted, setSorted] = useState();
  const [concepts, setConcepts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();
  async function getConcepts() {
    const data = await getConceptsByIds(sorted);
    const queryObj = {};
    data.forEach((concept) => {
      queryObj[concept.conceptId] = concept;
    });
    const sortedData = sorted.map((element) => queryObj[element]);
    setConcepts(sortedData);
  }

  useEffect(() => {
    if (query != router.query) {
      setSorted(null);
      setQuery(router.query);
    } else {
      if (!sorted) {
        let queryKeys = Object.keys(router.query);
        let queryArr = queryKeys.map((key) => ({
          id: key,
          matches: router.query[key],
        }));
        let sortedArr = queryArr.sort((a, b) => {
          if (parseInt(a.matches) > parseInt(b.matches)) return -1;
          return true;
        });
        let sortedIdsArr = sortedArr.map((query) => query.id);
        setSorted(sortedIdsArr);
      }
      if (!concepts && sorted) {
        getConcepts();
      }
      if (concepts && sorted) setIsLoading(false);
    }
  }, [sorted, concepts, query]);

  return (
    <main className={styles.main}>
      <div>Results</div>
      <SearchPanel></SearchPanel>
      <Container>
        {concepts &&
          concepts.map((concept, i) => (
            <div key={i}>
              <Container>
                <Link
                  href={{
                    pathname: "/concept/" + concept.conceptId,
                  }}
                >
                  <UnstyledButton
                    mb={"sm"}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.backgroundColor = "whitesmoke")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.backgroundColor = "white")
                    }
                    key={i}
                  >
                    <Title order={6}>{concept.displayName}</Title>
                    <Container px={0} mb={"lg"}>
                      {concept.description.substring(0, 100)}
                      {concept.description.length > 100 ? "..." : ""}
                    </Container>
                  </UnstyledButton>
                </Link>
              </Container>
            </div>
          ))}
      </Container>
    </main>
  );
}

Search.getInitialProps = (c) => {
  return {
    id: String(c.query.id),
    key: String(c.query.id),
  };
};
