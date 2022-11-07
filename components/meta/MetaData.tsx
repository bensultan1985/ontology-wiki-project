import Head from "next/head";

export default function AppHeader() {
  return (
    <Head>
      <title>OntoInfo</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <meta
        name="description"
        content="A wiki dashboard for clinical ontology."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
