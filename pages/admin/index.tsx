// eslint-disable-file no-use-before-define

import { Button, Container, Modal } from "@mantine/core";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import ConceptTable from "../../components/admin/ConceptTable";
import { EditConceptModal } from "../../components/EditConceptModal";
import styles from "../../styles/Home.module.css";
import { useUser } from "../../context/UserProvider";

const Admin: NextPage = (props) => {
  const { user, setUser } = useUser();
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [user, isLoading]);

  function openEditModal() {
    setOpenModal(true);
  }
  return (
    <>
      <Modal
        opened={openModal}
        onClose={() => setOpenModal(false)}
        title="Create"
        closeButtonLabel="test"
      >
        <EditConceptModal
          concept={{}}
          openModal={openModal}
          setOpenModal={setOpenModal}
        ></EditConceptModal>
        {/* Modal content */}
      </Modal>
      <main className={styles.main}>
        {/* <div>admin</div> */}
        {user?.role == "admin" ? (
          <div>
            <Container m={0} style={{ textAlign: "right", width: "100%" }}>
              <Button
                onClick={() => {
                  openEditModal();
                }}
                style={{ textAlign: "right", cursor: "pointer" }}
              >
                + Create Concept
              </Button>
            </Container>
            <ConceptTable></ConceptTable>
          </div>
        ) : (
          <Button
            onClick={() =>
              setUser({
                email: "admin@test.com",
                name: "admin",
                role: "admin",
              })
            }
          >
            sign in as admin
          </Button>
        )}
      </main>
    </>
  );
};

export default Admin;
