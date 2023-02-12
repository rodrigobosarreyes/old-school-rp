import { json } from '@sveltejs/kit';

export async function GET() {
  const streamersList = {
    streamers: [
      {username: 'el_alemanrp', personaje: 'Billy Barty', rol: 'Civil'},
      {username: 'Albiinya', personaje: 'África López', rol: 'Civil'}
    ]
  };
  return json(streamersList);
}
