import { mockData } from "../../../../mockData";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      const conceptId = req.query.id[0] == "null" ? null : req.query.id[0];
      const data = filterByConceptId(mockData, conceptId);
      res.send(data);
    case "POST":
      return res.status(500);

    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}

export function filterByConceptId(data: any, id: string | number) {
  if (typeof id == "string") id = parseInt(id);
  return data.find((concept: any) => concept?.conceptId == id);
}

export default handler;
