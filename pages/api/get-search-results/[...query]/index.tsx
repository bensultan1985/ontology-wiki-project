import { mockData } from "../../../../mockData";
import { Matches } from "../../../../types";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      //TODO: cleanup verifying null - may not be needed
      if (!req.query.query) res.status(500);
      const query = req.query.query;
      const data = searchFor(mockData, query);
      res.send(data);
    case "POST":
      return res.status(500);

    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}

export function searchFor(mockData: any[], query: any) {
  //NOTE - rough mockup of funtionality of SQL's CHARINDEX() function - I am aware that this would need to be refined, as there are many exceptions at the moment
  const matches: Matches[] = [];
  mockData.forEach((concept) => {
    let matchArr: string[] = [];
    const str =
      concept.description +
      " " +
      concept.displayName +
      " " +
      (concept.alternateNames ? concept.alternateNames.join(", ") : "");
    query.forEach((q: any) => {
      let arr = str.split(" ");
      arr.forEach((word) => {
        if (word == q) matchArr.push(word);
      });
    });
    if (matchArr.length >= 1)
      matches.push({ id: concept.conceptId, matches: matchArr.length });
  });
  return matches;
}

export default handler;
