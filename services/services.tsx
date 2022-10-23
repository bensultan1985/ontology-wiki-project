export async function getConceptById(id: string | number) {
  const response = await fetch("/api/get-concept-by-id/" + id, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getConceptsByParentId(parentId) {
  const response = await fetch("/api/get-concepts-by-parent-id/" + parentId, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getConceptsByIds(ids: String[] | number[]) {
  const response = await fetch("/api/get-concepts-by-ids/" + ids, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getAllConcepts() {
  const response = await fetch("/api/getallconcepts", {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getSearchResults(queries) {
  const response = await fetch("/api/get-search-results/" + queries, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

// (?:^|\W)rocket(?:$|\W) regex for match word
