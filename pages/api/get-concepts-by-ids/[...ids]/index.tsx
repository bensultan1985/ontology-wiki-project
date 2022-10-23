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
      //TODO do we need ids.split or can we send a true array in the request?
      const ids = req.query.ids[0] == "null" ? [] : req.query.ids[0];
      const idArr = ids.split(",");
      const data = filterByConceptIds(mockData, idArr);
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
