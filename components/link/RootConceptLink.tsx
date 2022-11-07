import { ConceptLink } from "./ConceptLink";

export function RootConceptLink(props: any) {
  const { concept } = props;
  return <ConceptLink concept={concept}></ConceptLink>;
}
