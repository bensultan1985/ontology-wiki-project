export async function getConceptById(id: string | number) {
  const response = await fetch("/api/get-concept-by-id/" + id, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getConceptsByParentId(parentId: string) {
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
  const response = await fetch("/api/get-all-concepts", {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function getSearchResults(queries: string) {
  const response = await fetch("/api/get-search-results/" + queries, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function createConcept(data) {
  const response = await fetch("/create-concept", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function updateConcept(data) {
  try {
    const response = await fetch("/update-concept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.log(e);
  }
}
