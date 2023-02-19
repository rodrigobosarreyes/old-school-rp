import { json } from '@sveltejs/kit';
import type { Streamer } from '../../streamers/streamer';

export async function GET() {
  const token = 'uop5bbsdxtkml8nyxmbfcnhzzc35uk'
  const streamersList = {
    streamers: [
      {username: 'el_alemanrp', character: 'Billy Barty', role: 'Civil'},
      {username: 'Albiinya', character: 'África López', role: 'Civil'},
      {username: 'Kotercillo', character: '??', role: 'Banda'},
      {username: 'bytraap', character: 'John Park', role: 'Policía'},
      {username: 'agoweno23', character: 'Joker', role: 'Civil'},
      {username: 'chusoO', character: 'Enzo Bonelli', role: 'Banda'},
      {username: 'minibaeee', character: 'Cora Fernández', role: 'Civil'},
      {username: 'JustTeer', character: 'Ygritte Scott', role: 'Banda'},
      {username: 'destrucjr', character: 'Jim Jhonson', role: 'Banda'},
      {username: 'sir_ragot', character: 'Santiago Bedoya', role: 'Civil'},
      {username: 'ExcoJM', character: 'Samuel Fernández', role: 'Civil'},
      {username: 'TomateKing', character: 'Yeray Fernández', role: 'Civil'},
      {username: 'ElAguaLimon', character: 'Wang Zhao', role: 'Banda'},
      {username: 'LoreenLynx', character: 'Anya Watson', role: 'Civil'},
      {username: 'Clottay', character: 'Thalía Fernández', role: 'Civil'},
      {username: 'CarmelaCruz1997', character: 'Shui Liu', role: 'Banda'},
      {username: 'Superchincheta', character: 'Kun Li', role: 'Banda'},
      {username: 'orsson', character: 'Oniel', role: 'Banda'},
    ] as Streamer[]
  };

  const query = streamersList.streamers.map(s => `user_login=${s.username}`).join('&');

  const response = await fetch('https://api.twitch.tv/helix/streams?' + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Client-Id': 'vs20f09yzb2rm7dgcarhqxui43v2x9',
      Authorization: `Bearer ${token}`
    }
  });
  
  const { data } = await response.json();

  data.forEach((element: any) => {
    const s = streamersList.streamers.find(f => f.username === element.user_name);
    if (s) {
      s.status = true;
      s.category = element.game_name;
    }
  });

  return json(streamersList);
}
