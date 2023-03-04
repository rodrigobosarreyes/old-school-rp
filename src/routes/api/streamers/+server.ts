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
      {username: 'chusoO', character: 'Enzo Bonelli', role: 'Mafia', status: false},
      {username: 'minibaeee', character: 'Alina Atayan', role: 'Civil', status: false},
      {username: 'JustTeer', character: 'Jahzira Wayne', role: 'Banda', status: false},
      {username: 'destrucjr', character: 'Axel Anderson', role: 'Banda', status: false},
      {username: 'sir_ragot', character: 'Santiago Bedoya', role: 'Civil', status: false},
      {username: 'ExcoJM', character: 'Samuel Fernández', role: 'Civil', status: false},
      {username: 'TomateKing', character: 'Rafael Atayan', role: 'Civil', status: false},
      {username: 'ElAguaLimon', character: 'Wang Zhao', role: 'Banda', status: false},
      {username: 'LoreenLynx', character: 'Anya Watson', role: 'Civil', status: false},
      {username: 'Clottay', character: 'Thalía Fernández', role: 'Civil', status: false},
      {username: 'CarmelaCruz1997', character: 'Paca', role: 'Banda', status: false},
      {username: 'Superchincheta', character: 'Kun Li', role: 'Banda', status: false},
      {username: 'orsson', character: 'Oniel', role: 'Banda', status: false},
      {username: 'Rian_Kyou', character: 'Ema Bonelli', role: 'Mafia', status: false},
      {username: 'CamareroRp', character: 'Big Jeff', role: 'Banda', status: false},
      {username: 'Beikka', character: 'Sidney Moore', role: 'Policía', status: false},
      {username: 'ivanjoyitas_', character: 'Iván Joyitas', role: 'Civil', status: false},
      {username: 'auma_93', character: 'Michelle', role: 'Policía', status: false},
      {username: 'Hacdcenar', character: 'Nadia Atayan', role: 'Civil', status: false},
      {username: 'bichadelcampo', character: 'Lola Atayan', role: 'Civil', status: false},
      {username: 'anitalobita', character: 'Lumi', role: 'Civil', status: false},
      {username: 'merchita15', character: 'Tanushka', role: 'Civil', status: false},
      {username: 'lilxandrago', character: 'Isabella Jaramillo', role: 'Civil', status: false},
      {username: 'jjsempere123', character: 'Carlberg', role: 'Civil', status: false},
      {username: 'MeTocasLos', character: 'Patrik', role: 'Civil', status: false},
      {username: 'Lryn9', character: 'Guzmán', role: 'Policía', status: false},
      {username: '3LMoha', character: 'Huang Lee', role: 'Banda', status: false},
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
    return a.username.localeCompare(b.username);
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
