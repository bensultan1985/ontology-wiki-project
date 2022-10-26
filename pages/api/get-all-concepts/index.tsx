// eslint-disable-file no-use-before-define

import { mockData } from "../../../mockData";
export default handler;

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return res.send(mockData);
    case "POST":
      return res.status(500);
    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}
