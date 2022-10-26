// eslint-disable-file no-use-before-define

import { mockData } from "../../../../mockData";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      //TODO: cleanup verifying null
      const parentId = req.query.id[0] == "null" ? null : req.query.id[0];
      const data = filterByParentId(mockData, parentId);
      res.send(data);
    case "POST":
      return res.status(500);

    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}

function filterByParentId(
  data: {
    conceptId: number;
    displayName: string;
    description: string;
    parentIds: number[];
    childIds: number[];
    alternateNames: string[];
  }[],
  parentId: number | null | ""
) {
  let results: any[] = [];
  data.forEach((concept) => {
    if (concept.parentIds && parentId) {
      concept.parentIds.forEach((conceptParentId) => {
        if (conceptParentId == parentId) results.push(concept);
      });
    } else if (!concept.parentIds && !parentId) {
      results.push(concept);
    }
  });
  return results;
}

export default handler;
