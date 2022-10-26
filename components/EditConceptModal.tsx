// eslint-disable-file no-use-before-define

import {
  Box,
  Button,
  Group,
  MultiSelect,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import {
  createConcept,
  getAllConcepts,
  updateConcept,
} from "../services/services";

export function EditConceptModal(props) {
  const { openModal, setOpenModal, concept } = props;
  const [alternateNamesSelect, setAlternateNamesSelect] = useState([]);
  const [allConcepts, setAllConcepts] = useState();

  //removes concept from list of possible parent concepts and child concepts
  function filterConceptIds(currentConcept) {
    return currentConcept.conceptId != concept.conceptId;
  }

  function mapConceptIds(currentConcept) {
    if (currentConcept.conceptId != concept.conceptId)
      return {
        label: currentConcept.conceptId,
        value: currentConcept.conceptId,
      };
  }

  async function getConcepts() {
    try {
      const response = await getAllConcepts();
      const filteredArr = response.filter(filterConceptIds);
      setAllConcepts(filteredArr.map(mapConceptIds));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (!allConcepts) getConcepts();
    if (allConcepts) setAlternateNamesSelect(concept.alternateNames);
  }, [allConcepts]);

  const form = useForm({
    initialValues: {
      displayName: concept.displayName ? concept.displayName : "",
      alternateNames: concept.alternateNames ? concept.alternateNames : [],
      parentIds: concept.parentIds ? concept.parentIds : [],
      childIds: concept.childIds ? concept.childIds : [],
      description: concept.description ? concept.description : "",
      //TODO: if id is null, this should signal post instead of update in the backend
      id: concept.conceptId ? concept.conceptId : "none",
    },
    validate: {
      //TODO
    },
  });

  return (
    <>
      <Box mx="auto">
        {allConcepts && (
          <form
            onSubmit={form.onSubmit(async (values) => {
              if (values.id == "none") {
                const response = await createConcept(values);
                console.log(response);
              } else {
                const response = await updateConcept(values);
                console.log(response);
              }
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
              data={alternateNamesSelect ? alternateNamesSelect : []}
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
                setAlternateNamesSelect((current) => [...current, item]);
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
