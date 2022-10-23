import {
  Box,
  Button,
  Group,
  Modal,
  MultiSelect,
  Textarea,
  TextInput,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import { getAllConcepts } from "../services/services";
import router, { Router } from "next/router";

export function EditConceptModal(props) {
  const { openModal, setOpenModal, concept } = props;
  const [data, setData] = useState([]);
  const [alternateNamesSelect, setAlternateNamesSelect] = useState([]);
  const [allConcepts, setAllConcepts] = useState();

  async function getConcepts() {
    const response = await getAllConcepts();

    function mapConceptIds(currentConcept) {
      if (currentConcept.conceptId != concept.conceptId)
        return {
          label: currentConcept.conceptId,
          value: currentConcept.conceptId,
        };
    }
    //removes concept from list of possible parent concepts and child concepts
    function filterConceptIds(currentConcept) {
      return currentConcept.conceptId != concept.conceptId;
    }
    const filteredArr = response.filter(filterConceptIds);
    setAllConcepts(filteredArr.map(mapConceptIds));
  }
  useEffect(() => {
    if (!allConcepts) getConcepts();
  }, [allConcepts]);

  const form = useForm({
    initialValues: {
      displayName: concept.displayName ? concept.displayName : "",
      alternateNames: concept.alternateNames ? concept.alternateNames : [],
      parentIds: concept.parentIds ? concept.parentIds : [],
      childIds: concept.childIds ? concept.childIds : [],
      description: concept.description ? concept.description : "",
      //TODO: if id is null, this will signal post instead of update in the backend
      id: concept.conceptId ? concept.conceptId : "none",
    },
    validate: {
      //TODO
      // email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Box mx="auto">
        {allConcepts && (
          <form
            onSubmit={form.onSubmit((values) => {
              console.log("submit values", values);
              //TODO: uncomment for rerender after form is submitted - updating the current concept page
              // router.push(
              //   "/concept/" +
              //     concept.conceptId +
              //     "/" +
              //     encodeURIComponent("refresh")
              // );
              setOpenModal(false);
            })}
          >
            <TextInput
              mb={"md"}
              label="concept name"
              {...form.getInputProps("displayName")}
            ></TextInput>
            <Textarea
              mb={"md"}
              label="description"
              {...form.getInputProps("description")}
            ></Textarea>
            <MultiSelect
              mb={"md"}
              label="linked from"
              description="links a concept to this concept"
              data={allConcepts ? allConcepts : []}
              {...form.getInputProps("parentIds")}
            ></MultiSelect>
            <MultiSelect
              mb={"md"}
              description="links this concept to a concept"
              label="linked to"
              data={allConcepts ? allConcepts : []}
              {...form.getInputProps("childIds")}
            ></MultiSelect>
            <MultiSelect
              mb={"md"}
              data={concept.alternateNames ? concept.alternateNames : []}
              label={"alternate names"}
              description={
                "improve search results by providing alternate names for this concept"
              }
              placeholder="alternate names"
              searchable
              creatable
              getCreateLabel={(query) => `+ Create ${query}`}
              onCreate={(query) => {
                const item = { value: query, label: query };
                setData((current) => [...current, item]);
                return item;
              }}
              {...form.getInputProps("alternateNames")}
            ></MultiSelect>
            <Group position="right" mt="md">
              <Button aria-label="test" type="submit">
                Submit
              </Button>
            </Group>
          </form>
        )}
      </Box>
    </>
  );
}
