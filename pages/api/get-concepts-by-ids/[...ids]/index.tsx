// eslint-disable-file no-use-before-define

import { mockData } from "../../../../mockData";
import { Concept } from "../../../../types";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      //TODO do we need ids.split() or can we send an array in the query?
      const ids = req.query.ids[0] == "null" ? [] : req.query.ids[0];
      const idArr = ids.split(",");
      const data = filterByConceptIds(mockData, idArr);
      res.send(data);
    case "POST":
      return res.status(500);
    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}

export function filterByConceptIds(data: any, ids: String[] | number[]) {
  let concepts: Concept[] = [];
  data.forEach((concept: Concept) => {
    ids.forEach((id) => {
      if (concept.conceptId == id) concepts.push(concept);
    });
  });
  return concepts;
}

export default handler;
