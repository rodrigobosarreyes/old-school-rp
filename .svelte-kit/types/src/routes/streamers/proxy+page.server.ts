// @ts-nocheck
import type { PageServerLoad } from "./$types";

export const load = async ({url}: Parameters<PageServerLoad>[0]) => {
  const response = await fetch(url.origin + '/api/streamers');
  const data = await response.json();
  return data;
};
