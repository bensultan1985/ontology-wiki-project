import { Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAllConcepts, getConceptsByParentId } from "../services/services";
import BrowseTree from "./BrowseTree";
import { CollapseLink } from "./collapseLink";
import { RootConceptLink } from "./RootConceptLink";
import SearchPanel from "./SearchPanel";

export function UserConsole() {
  const [concepts, setConcepts] = useState(null);
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
      // const data = await getConceptsByParentId(null);
      const data = await getAllConcepts();
      setConcepts(data);
      setIsLoading(false);
    } catch (e) {}
  }

  return (
    <>
      <center>
        <Title>Ontology Wiki</Title>
        <SearchPanel></SearchPanel>
      </center>
      {/* <Title order={5}>Browse:</Title> */}
      {/* {concepts &&
        concepts.map((concept, i) => (
          <RootConceptLink concept={concept} key={i}></RootConceptLink>
        ))} */}
      {concepts && <BrowseTree concepts={concepts}></BrowseTree>}
    </>
  );
}
