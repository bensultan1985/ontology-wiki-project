import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getConceptsByParentId } from "../services/services";
import { RootConceptLink } from "./RootConceptLink";
import SearchPanel from "./SearchPanel";

export function UserConsole() {
  const [concepts, setConcepts] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getConcepts();
    } else {
      if (concepts.length == 1) {
      }
    }
  }, [concepts]);

  async function getConcepts() {
    try {
      const data = await getConceptsByParentId(null);
      setConcepts(data);
      setIsLoading(false);
    } catch (e) {}
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
