import { Button, Container, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { getSearchResults } from "../../services/services";

export default function SearchBar() {
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
    <Container mt={3} style={{ display: "inline-block" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          search();
        }}
      >
        <TextInput
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          size="xs"
          placeholder="search term..."
          style={{ display: "inline-block", width: "140px" }}
        ></TextInput>
        <Button
          onClick={() => search()}
          size="sm"
          color="gray"
          variant="subtle"
        >
          search
        </Button>
      </form>
    </Container>
  );
}
