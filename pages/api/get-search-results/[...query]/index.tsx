import { mockData } from "../../../../mockData";

function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      //TODO: cleanup verifying null
      //may not be needed here
      if (!req.query.query) res.status(401);
      const query = req.query.query;
      const data = searchFor(mockData, query);
      res.send(data);
    case "POST":
      return res.status(500);

    default:
      return res.end(`Method ${req.method} Not Allowed`);
  }
}

export function searchFor(mockData, query: string) {
  //NOTE - rough mockup of funtionality of SQL's CHARINDEX() function - I am aware that this would need to be refined, as there are many exceptions at the moment
  const matches = [];
  mockData.forEach((concept) => {
    let matchArr: [] = [];
    const str =
      concept.description +
      " " +
      concept.displayName +
      " " +
      (concept.alternateNames ? concept.alternateNames.join(", ") : "");
    query.forEach((q) => {
      //   var regex = new RegExp("w*" + q, "g");
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
