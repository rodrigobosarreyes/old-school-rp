import { json } from '@sveltejs/kit';
import type { Streamer } from '../../streamers/streamer';

export async function GET() {
  const token = 'yqoxpq99zlu4qqajm02jcmacsrvmbe'
  const streamersList = {
    streamers: [
      {username: 'Kotercillo', character: 'Bob Harris', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/Kotercillo'}, banda: 'Paletos'},
      {username: 'chusoO', character: 'Enzo Bonelli', role: 'Mafia', status: false, social: {twitter: 'https://twitter.com/xchusoO'}},
      {username: 'JustTeer', character: 'Jahzira Wayne', role: 'Banda', status: false, social: {instagram: 'https://www.instagram.com/justteer'}},
      {username: 'destrucjr', character: 'Axel Anderson', role: 'Banda', status: false, social: {instagram: 'https://www.instagram.com/destructor4.2.0', twitter: 'https://twitter.com/2_tor4'}},
      {username: 'orsson', character: 'Elwood Oneil', role: 'Banda', status: false},
      {username: 'Rian_Kyou', character: 'Ema Bonelli', role: 'Mafia', status: false, social: {twitter: 'https://twitter.com/Rian_Kyou'}},
      {username: 'Beikka', character: 'Sidney Moore', role: 'Policía', status: false, social: {twitter: 'https://twitter.com/BeikkaG', instagram: 'https://www.instagram.com/beikkagameplay/', youtube: 'https://www.youtube.com/channel/UC25DLrHXzYZLo3NfEyu5lxw'}},
      {username: 'auma_93', character: 'Michelle McKenzie', role: 'Policía', status: false, social: {instagram: 'https://www.instagram.com/__marta.lopez', twitter: 'https://twitter.com/MartaLo_', }},
      {username: 'lilxandrago', character: 'Isabella Jaramillo', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/Lilxandrago', instagram: 'https://www.instagram.com/lilxandrago', tiktok: 'https://www.tiktok.com/@lilxandrago_'}},
      {username: 'jjsempere123', character: 'Carlberg', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/juanjo_sp_07_', tiktok: 'https://www.tiktok.com/@jjsempere123'}},
      {username: 'MeTocasLos', character: 'Patrik', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/MeToCasLos_', tiktok: 'https://www.tiktok.com/@metocaslos', instagram: 'https://www.instagram.com/metocaslos/'}},
      {username: 'Lryn9', character: 'Guzmán', role: 'Policía', status: false, social: {twitter: 'https://twitter.com/Lryn999'}},
      {username: 'destructorhell', character: 'Michael Sallow', role: 'Civil', status: false, social: {tiktok: 'https://www.tiktok.com/@destructorhell'}},
      {username: 'Mamenna', character: 'Nahia Belfort', role: 'Civil', status: false, social: { instagram: 'https://www.instagram.com/mamennaway/'}},
      {username: 'zeusdelizzia', character: 'Leonardo Russo', role: 'Policía', status: false, social: { instagram: 'https://www.instagram.com/zeusdelizzia/', twitter: 'https://twitter.com/ZeusValenciano'}},
      {username: 'J0S3R0X', character: 'Mason King', role: 'Policía', status: false},
      {username: 'Yuniooor19', character: '??', role: 'Policía', status: false},
      {username: 'Engeekiados', character: 'Niccolo Colleoni', role: 'Civil', status: false},
      {username: 'Pereziita', character: 'Xia Li', role: 'Civil', status: false},
      {username: 'Monst3r0LD', character: 'Saturnino Turner', role: 'Banda', status: false, banda: 'Paletos'},
      {username: 'PauliGtv', character: 'La Yaya', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/paulig.tv', twitter: 'https://twitter.com/PauliGtv', youtube: 'https://www.youtube.com/channel/UCPIpJuoik7hIjwl_A7-PiNg', tiktok: 'https://www.tiktok.com/@pauligtv'}},
      {username: 'lichimalvado', character: 'Dessi López', role: 'Policía', status: false},
      {username: 'mailman_grumpy', character: 'Claus Kirby', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/mailman_grumpy/'}},

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
