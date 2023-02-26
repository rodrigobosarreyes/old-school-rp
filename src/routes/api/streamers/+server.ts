import { json } from '@sveltejs/kit';
import type { Streamer } from '../../streamers/streamer';

export async function GET() {
  const token = 'uop5bbsdxtkml8nyxmbfcnhzzc35uk'
  const streamersList = {
    streamers: [
      {username: 'el_alemanrp', character: 'Billy Barty', role: 'Civil', status: false},
      {username: 'Albiinya', character: 'África López', role: 'Civil', status: false},
      {username: 'Kotercillo', character: 'Bob Harris', role: 'Banda', status: false},
      {username: 'bytraap', character: 'John Park', role: 'Policía', status: false},
      {username: 'agoweno23', character: 'Joker', role: 'Civil', status: false},
      {username: 'chusoO', character: 'Enzo Bonelli', role: 'Banda', status: false},
      {username: 'minibaeee', character: 'Cora Fernández', role: 'Civil', status: false},
      {username: 'JustTeer', character: 'Ygritte Scott', role: 'Banda', status: false},
      {username: 'destrucjr', character: 'Jim Jhonson', role: 'Banda', status: false},
      {username: 'sir_ragot', character: 'Santiago Bedoya', role: 'Civil', status: false},
      {username: 'ExcoJM', character: 'Samuel Fernández', role: 'Civil', status: false},
      {username: 'TomateKing', character: 'Yeray Fernández', role: 'Civil', status: false},
      {username: 'ElAguaLimon', character: 'Wang Zhao', role: 'Banda', status: false},
      {username: 'LoreenLynx', character: 'Anya Watson', role: 'Civil', status: false},
      {username: 'Clottay', character: 'Thalía Fernández', role: 'Civil', status: false},
      {username: 'CarmelaCruz1997', character: 'Shui Liu', role: 'Banda', status: false},
      {username: 'Superchincheta', character: 'Kun Li', role: 'Banda', status: false},
      {username: 'orsson', character: 'Oniel', role: 'Banda', status: false},
      {username: 'Rian_Kyou', character: 'Ema', role: 'Mafia', status: false},
      {username: 'CamareroRp', character: 'Big Jeff', role: 'Banda', status: false},
      {username: 'Beikka', character: 'Sidney Moore', role: 'Policía', status: false},
      {username: 'ivanjoyitas_', character: 'Iván Joyitas', role: 'Civil', status: false},
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
    const s = streamersList.streamers.find(f => f.username.toLowerCase() === element.user_login.toLowerCase());
    if (s) {
      s.status = true;
      s.category = element.game_name;
    }
  });

  streamersList.streamers.sort((a: Streamer, b: Streamer) => {
    if (a.status === b.status) {
      return 0;
    }
    if (a.status) {
      return -1;
    }
    if (b.status) {
      return 1;
    }
    return 0;
  });

  return json(streamersList);
}
