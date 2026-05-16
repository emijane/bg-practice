export async function getPlayerSummary(query: string) {
  const search = query.trim().replace("#", "-");

  const res = await fetch(
    `https://overfast-api.tekrop.fr/players/${encodeURIComponent(search)}/summary`
  );

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json();
}