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
      //may not be needed here
      const conceptId = req.query.id[0] == "null" ? null : req.query.id[0];
      const data = filterByConceptId(mockData, conceptId);
      res.send(data);
    case "POST":
      return res.status(500);

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export function filterByConceptId(data: any, id: string | number) {
  if (typeof id == "string") id = parseInt(id);
  return data.find((concept: any) => concept?.conceptId == id);
}
