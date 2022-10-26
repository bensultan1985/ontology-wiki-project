// eslint-disable-file no-use-before-define

import { mockData } from "../../mockData";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return res.status(500);
    case "POST": {
      mockData.push(req.body);
      return res.status(200).send({ message: "success" });
    }
  }
}
export default handler;
