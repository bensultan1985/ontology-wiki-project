import { NextPage } from "next";
import ConceptTable from "../../components/admin/conceptTable";
import styles from "../../styles/Home.module.css";

const Admin: NextPage = (props) => {
  return (
    <>
      <main className={styles.main}>
        {/* <div>admin</div> */}
        <ConceptTable></ConceptTable>
      </main>
    </>
  );
};

export default Admin;
