// eslint-disable-file no-use-before-define

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

export async function getConceptsByIds(ids: any) {
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

export async function getSearchResults(queries: string[]) {
  const response = await fetch("/api/get-search-results/" + queries, {
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
}

export async function createConcept(req: any) {
  try {
    const response = await fetch("/api/create-concept", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function updateConcept(req: any) {
  try {
    const response = await fetch("/api/update-concept", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
}

export async function deleteConcept(req: any) {
  try {
    const response = await fetch("/api/delete-concept", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
}
