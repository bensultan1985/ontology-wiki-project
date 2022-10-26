// eslint-disable-file no-use-before-define

import { ConceptLink } from "./ConceptLink";

export function RootConceptLink(props) {
  const { concept } = props;
  return <ConceptLink concept={concept}></ConceptLink>;
}
