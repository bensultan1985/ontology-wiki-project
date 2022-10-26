import { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";
import { getConceptById, getConceptsByIds } from "../../../services/services";
import { useEffect, useState } from "react";
import { Container, Modal, SimpleGrid, Title } from "@mantine/core";
import { ConceptLink } from "../../../components/ConceptLink";
import { EditConceptModal } from "../../../components/EditConceptModal";
import { useUser } from "../../../context/UserProvider";
const Concept: NextPage = (props) => {
  const [concept, setConcept] = useState<any>();
  const [conceptParents, setConceptParents] = useState([]);
  const [conceptChildren, setConceptChildren] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [conceptId, setConceptId] = useState(null);

  const { user } = useUser();

  const router = useRouter();
  async function getQueryParams() {
    if (router.query.id) setConceptId(router.query.id[0]);

    return;
  }

  useEffect(() => {
    if (conceptId) {
      if (!concept) {
        getConcept();
      } else {
        if (concept) {
          getParentConcepts();
          getChildConcepts();
        }
      }
    } else {
      getQueryParams();
    }
  }, [conceptId, concept]);

  async function getConcept() {
    try {
      const data = await getConceptById(conceptId);
      setConcept(data);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  async function getParentConcepts() {
    if (concept?.parentIds) {
      try {
        const data = await getConceptsByIds(concept.parentIds);
        setConceptParents(data);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function getChildConcepts() {
    if (concept?.childIds) {
      try {
        const data = await getConceptsByIds(concept.childIds);
        setConceptChildren(data);
      } catch (e) {
        console.log(e);
      }
    }
  }

  function openEditModal() {
    setOpenModal(true);
  }
  return (
    <main
      className={styles.main}
      style={{ background: "white", height: "100%" }}
    >
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Edit"
        closeButtonLabel="test"
      >
        <EditConceptModal
          concept={concept}
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></EditConceptModal>
      </Modal>
      <SimpleGrid cols={1} style={{ height: "100%", width: "100%" }}>
        <div>
          <div>
            <div
              style={{
                background: "white",
                borderBottom: "solid",
                borderColor: "navy",
                margin: "0px 20px",
              }}
            >
              {user && user.role == "admin" && (
                <div
                  onClick={() => {
                    openEditModal();
                  }}
                  style={{ textAlign: "right", cursor: "pointer" }}
                >
                  [edit]
                </div>
              )}

              <Title m="sm" p="sm">
                {concept && concept.displayName}
              </Title>
            </div>
            <Container
              style={{
                width: "100%",
                background: "white",
                height: "100%",
              }}
            >
              <Container>
                <Container p="xl" mx="xl">
                  <p>{concept && concept.description}</p>
                </Container>
              </Container>
            </Container>
          </div>
          <div style={{ position: "relative" }}>
            <Container px="xl" mx="xl">
              <Container mb={60}>
                {conceptChildren && conceptChildren.length > 0 && (
                  <Container pb={"lg"}>
                    <Title order={5}>learn more:</Title>
                    {conceptChildren.map((concept, i) => (
                      <ConceptLink concept={concept} key={i}></ConceptLink>
                    ))}
                  </Container>
                )}
                {conceptParents && conceptParents.length > 0 && (
                  <Container>
                    <Title order={5}>related topics:</Title>
                    {conceptParents &&
                      conceptParents.map((concept, i) => (
                        <ConceptLink concept={concept} key={i}></ConceptLink>
                      ))}
                  </Container>
                )}
              </Container>
            </Container>
          </div>
        </div>
      </SimpleGrid>
    </main>
  );
};

Concept.getInitialProps = (c) => {
  return {
    id: String(c.query.id),
    key: String(c.query.id),
  };
};

export default Concept;
