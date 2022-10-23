// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { mockData } from "../../mockData";

type Data = {
  name: string;
};
export default handler;

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return res.send(mockData);
    //   return getUser();
    case "POST":
      return res.status(500);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
