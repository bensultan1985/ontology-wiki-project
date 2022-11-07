import { Divider, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import textConfig from "../configuration";
import { getAllConcepts } from "../services/services";
import BrowseTree from "./BrowseTree";
import SearchPanel from "./search/SearchPanel";

export function UserConsole() {
  const [concepts, setConcepts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getConcepts();
    }
  }, [concepts]);

  async function getConcepts() {
    try {
      const data = await getAllConcepts();
      setConcepts(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <Title>{textConfig.siteName}</Title>
        <div style={{ width: "100%" }}>
          <SearchPanel></SearchPanel>
          <Divider mb="xl"></Divider>
        </div>
      </div>
      {concepts && <BrowseTree concepts={concepts}></BrowseTree>}
    </div>
  );
}
