// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from "../../../../mockData";

type Data = {
  name: string;
};
export default handler;

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
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export function filterByConceptIds(data: any, ids: String[] | number[]) {
  let concepts = [];
  data.forEach((concept) => {
    ids.forEach((id) => {
      if (concept.conceptId == id) concepts.push(concept);
    });
  });
  return concepts;
}

function filterByParentId(
  data: [
    { conceptId: number; displayName: string; parentIds: []; childIds: [] }
  ],
  parentId: number | null | ""
) {
  let results: [] = [];
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
