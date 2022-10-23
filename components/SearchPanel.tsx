import { Box, Button, Container, TextInput } from "@mantine/core";
import { useState } from "react";
import { getSearchResults } from "../services/services";
import { useRouter } from "next/router";
export default function SearchPanel() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  async function search() {
    const data = await getSearchResults(searchTerm.split(" "));
    const queryObj = {};
    data.forEach((result) => {
      queryObj[result.id] = result.matches;
    });
    console.log("search");
    // if (router.pathname == "/search") {
    //   router.replace(
    //     {
    //       pathname: "/search/",

    //       query: queryObj,
    //     },
    //     undefined,
    //     { shallow: false }
    //   );
    // } else {
    router.push(
      {
        pathname: "/search/",

        query: queryObj,
      },
      undefined,
      { shallow: false }
    );
    // }
    // if (router.pathname == "/search" router.reload(window.location.pathname);
  }

  return (
    <>
      <Box>
        <Container
          fluid
          //   py={"lg"}
          my={"lg"}
          style={{
            border: "solid",
            borderColor: "lightgray",
            background: "whitesmoke",
            borderRadius: "5px",
          }}
        >
          <TextInput
            placeholder="search term..."
            style={{ display: "inline-block" }}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
          ></TextInput>
          <Button m={"lg"} onClick={() => search()}>
            search
          </Button>
        </Container>
      </Box>
    </>
  );
}
