import { mockData } from "../../../mockData";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return res.status(500);
    case "POST": {
      return res.status(200).send({ message: "created concept" });
    }
  }
}
export default handler;
