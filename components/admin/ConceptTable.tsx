// eslint-disable-file no-use-before-define

import { Button, Modal, Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { getAllConcepts } from "../../services/services";
import { EditConceptModal } from "../EditConceptModal";

export default function ConceptTable(props) {
  const [concepts, setConcepts] = useState(null);
  const [rows, setRows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [editConcept, setEditConcept] = useState();

  async function getConcepts() {
    try {
      const response = await getAllConcepts();
      setLoading(false);
      setConcepts(response);
    } catch (e) {
      console.log(e);
    }
  }

  function openEditModal() {
    setOpenModal(true);
  }

  useEffect(() => {
    if (loading) getConcepts();
    if (concepts) {
      setRows(
        concepts?.map((concept) => (
          <tr key={concept.conceptId}>
            <td>{concept.conceptId}</td>
            <td>{concept.displayName}</td>
            <td>
              {concept.description.substring(0, 100)}
              {concept.description.length > 100 ? "..." : ""}
            </td>
            <td>{concept.parentIds ? concept.parentIds.join(", ") : ""}</td>
            <td>{concept.childIds ? concept.childIds.join(", ") : ""}</td>
            <td>
              {concept.alternateNames ? concept.alternateNames.join(", ") : ""}
            </td>
            <td>
              <div>
                <Button
                  variant="subtle"
                  onClick={() => {
                    setEditConcept(concept);
                    openEditModal();
                  }}
                >
                  edit
                </Button>
                <Button variant="subtle">delete</Button>
              </div>
            </td>
          </tr>
        ))
      );
    }
  }, [concepts]);

  const ths = (
    <tr>
      <th>id</th>
      <th>display name</th>
      <th>details</th>
      <th>parentIds</th>
      <th>childIds</th>
      <th>alternate names</th>
      <th></th>
    </tr>
  );

  return (
    <>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Edit"
      >
        <EditConceptModal
          concept={editConcept}
          setOpenModal={setOpenModal}
        ></EditConceptModal>
      </Modal>
      <Title>Concepts</Title>
      <Table captionSide="bottom">
        <caption>Admin Console</caption>
        <thead>{ths}</thead>
        <tbody>{rows && rows}</tbody>
      </Table>
    </>
  );
}
