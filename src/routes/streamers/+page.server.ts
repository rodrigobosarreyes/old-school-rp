import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({url}) => {
  const response = await fetch(url.origin + '/api/streamers');
  const data = await response.json();
  return data;
};
