// eslint-disable-file no-use-before-define

import { Box, Button, Container, TextInput } from "@mantine/core";
import { useState } from "react";
import { getSearchResults } from "../../services/services";
import { useRouter } from "next/router";
export default function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  async function search() {
    const data = await getSearchResults(searchTerm.split(" "));
    const queryObj = {};
    data.forEach((result: { id: number; matches: any[] }) => {
      queryObj[result.id] = result.matches;
    });

    router.push(
      {
        pathname: "/search/",

        query: queryObj,
      },
      undefined,
      { shallow: false }
    );
  }

  return (
    <>
      <div style={{ maxWidth: "359px", margin: "auto" }}>
        <Box>
          <Container
            my={"lg"}
            style={{
              border: "solid",
              borderColor: "lightgray",
              background: "whitesmoke",
              borderRadius: "5px",
            }}
          >
            {" "}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                search();
              }}
            >
              <TextInput
                placeholder="search term..."
                style={{ display: "inline-block" }}
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.currentTarget.value)}
              ></TextInput>
              <Button m={"lg"} mr={0} onClick={() => search()}>
                search
              </Button>
            </form>
          </Container>
        </Box>
      </div>
    </>
  );
}
