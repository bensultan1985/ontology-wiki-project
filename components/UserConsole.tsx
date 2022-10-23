import { Title, Button } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getConceptsByParentId } from "../services/services";
import { RootConceptLink } from "./RootConceptLink";
import SearchPanel from "./SearchPanel";

export function UserConsole() {
  const [concepts, setConcepts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      getConcepts();
    } else {
      if (concepts.length == 1) {
      }
      // router.push("/concept/" + concepts[0].conceptId);
    }
  }, [concepts]);

  async function getConcepts() {
    const data = await getConceptsByParentId(null);
    setConcepts(data);
    setIsLoading(false);
  }

  return (
    <>
      <Title>Ontology Wiki</Title>
      <SearchPanel></SearchPanel>
      <Title order={5}>Browse:</Title>
      {concepts &&
        concepts.map((concept, i) => (
          <RootConceptLink concept={concept} key={i}></RootConceptLink>
        ))}
    </>
  );
}
