import { mockData } from "../../mockData";

export default handler;

function handler(req: any, res: any) {
  console.log(req);
  switch (req.method) {
    case "GET":
      return res.status(500);
    case "POST": {
      console.log("verified");
      console.log(req.body);
      // mockData.push(req.body);
      return res.status(200).send("created concept");
    }
    default:
      console.log(req.method, "method");
      return res.end(`Method ${req.method} Not Allowed`);
  }
}
