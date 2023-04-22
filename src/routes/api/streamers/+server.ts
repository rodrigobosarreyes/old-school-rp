import { json } from '@sveltejs/kit';
import type { Streamer } from '../../streamers/streamer';

export async function GET() {
  const token = 'uop5bbsdxtkml8nyxmbfcnhzzc35uk'
  const streamersList = {
    streamers: [
      {username: 'el_alemanrp', character: 'Billy Barty', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/ElAlemanRP', instagram: 'https://www.instagram.com/el_alemanrp'}, banda: 'Armenios'},
      {username: 'Albiinya', character: 'África López', role: 'Civil', status: false},
      {username: 'Kotercillo', character: 'Bob Harris', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/Kotercillo', }},
      {username: 'bytraap', character: 'Drake King', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/bytraap', instagram: 'https://www.instagram.com/bytraap'}},
      {username: 'agoweno23', character: 'Joker', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/agoweno23', tiktok: 'https://www.tiktok.com/@agoweno23'}},
      {username: 'chusoO', character: 'Enzo Bonelli', role: 'Mafia', status: false, social: {twitter: 'https://twitter.com/xchusoO'}},
      {username: 'minibaeee', character: 'La Kerry', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/minibaeee', tiktok: 'https://www.tiktok.com/@minibaeeee'}},
      {username: 'JustTeer', character: 'Jahzira Wayne', role: 'Banda', status: false, social: {instagram: 'https://www.instagram.com/justteer'}},
      {username: 'destrucjr', character: 'Axel Anderson', role: 'Banda', status: false, social: {instagram: 'https://www.instagram.com/destructor4.2.0', twitter: 'https://twitter.com/2_tor4'}},
      {username: 'sir_ragot', character: 'Gabriel Ángel', role: 'Banda', status: false, social: {instagram: 'https://www.instagram.com/rafagome.z/', twitter: 'https://twitter.com/SirRagot'}},
      {username: 'ExcoJM', character: 'Arturo Atayan', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/ExcoJm', tiktok: 'https://www.tiktok.com/@excojm', instagram: 'https://www.instagram.com/excojm'}},
      {username: 'TomateKing', character: 'Rafael Atayan', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/tomateking', twitter: 'https://twitter.com/srtomateking', youtube: 'https://www.youtube.com/channel/UCbRUQjHvH3IkHEa4sw6v01w', tiktok: 'https://www.tiktok.com/@tomatekingoficial'}},
      {username: 'ElAguaLimon', character: 'Polito', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/elagualimon', tiktok: 'https://www.tiktok.com/@elagualimon', twitter: 'https://twitter.com/elagualimon'}},
      {username: 'LoreenLynx', character: 'Anya Watson', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/loreenlynx', twitter: 'https://twitter.com/loreenlynx'}},
      {username: 'Clottay', character: 'Naroa Huang', role: 'Banda', status: false, social: {twitter: 'https://twitter.com/clottay', instagram: 'https://www.instagram.com/clottay_'}},
      {username: 'CarmelaCruz1997', character: 'Paca', role: 'Banda', status: false},
      {username: 'Superchincheta', character: 'Kun Li', role: 'Banda', status: false, social: {tiktok: 'https://www.tiktok.com/@superchincheta', twitter: 'https://twitter.com/ChinchetaSuper'}},
      {username: 'orsson', character: 'Elwood Oneil', role: 'Banda', status: false},
      {username: 'Rian_Kyou', character: 'Ema Bonelli', role: 'Mafia', status: false, social: {twitter: 'https://twitter.com/Rian_Kyou'}},
      {username: 'Beikka', character: 'Sidney Moore', role: 'Policía', status: false, social: {twitter: 'https://twitter.com/BeikkaG', instagram: 'https://www.instagram.com/beikkagameplay/', youtube: 'https://www.youtube.com/channel/UC25DLrHXzYZLo3NfEyu5lxw'}},
      {username: 'ivanjoyitas_', character: 'Iván Joyitas', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/ivanfernandezfernandez13', }},
      {username: 'auma_93', character: 'Michelle', role: 'Policía', status: false, social: {instagram: 'https://www.instagram.com/__marta.lopez', twitter: 'https://twitter.com/MartaLo_', }},
      {username: 'Hacdcenar', character: 'Nadia Atayan', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/hacdcenar', youtube: 'https://www.youtube.com/channel/UC5DHVlFGfvGujodRaPI9Q7A', twitter: 'https://twitter.com/hacdcenar', tiktok: 'https://vm.tiktok.com/ZM8QM9wkK'}},
      {username: 'bichadelcampo', character: 'Lola Atayan', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/nadia_navass'}},
      {username: 'anitalobita', character: 'Lumi', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/analobojuarez', twitter: 'https://twitter.com/analobojuarez', youtube: 'https://www.youtube.com/channel/UCM2PH1AiEr_KNOt47MvxMew', tiktok: 'https://www.tiktok.com/@anitalobita69'}},
      {username: 'merchita15', character: 'Tanushka', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/merchitaa15', tiktok: 'https://www.tiktok.com/@merchitaa15'}},
      {username: 'lilxandrago', character: 'Isabella Jaramillo', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/Lilxandrago', instagram: 'https://www.instagram.com/lilxandrago', tiktok: 'https://www.tiktok.com/@lilxandrago_'}},
      {username: 'jjsempere123', character: 'Carlberg', role: 'Civil', status: false, social: {instagram: 'https://www.instagram.com/juanjo_sp_07_', tiktok: 'https://www.tiktok.com/@jjsempere123'}},
      {username: 'MeTocasLos', character: 'Patrik', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/MeToCasLos_', tiktok: 'https://www.tiktok.com/@metocaslos', instagram: 'https://www.instagram.com/metocaslos/'}},
      {username: 'Lryn9', character: 'Guzmán', role: 'Policía', status: false, social: {twitter: 'https://twitter.com/Lryn999'}},
      {username: '3LMoha', character: 'Karim', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/3LM0HA', instagram: 'https://www.instagram.com/3lm0ha/', youtube: 'https://www.youtube.com/channel/UCWgmUQIUTgOkdhfOjPkLxsA', tiktok: 'https://www.tiktok.com/@3lmoha'}},
      {username: 'wachinanii', character: 'Ananias Atayan', role: 'Civil', status: false, social: {twitter: 'https://twitter.com/twitchwachinani', youtube: 'https://www.youtube.com/channel/UCCowwOx0s6RDZm6_k3dWidQ'}},
      {username: 'destructorhell', character: 'Michael Sallow', role: 'Civil', status: false, social: {tiktok: 'https://www.tiktok.com/@destructorhell'}},
      {username: 'Mon0nuke', character: 'Morgana', role: 'Civil', status: false},
      {username: 'Mamenna', character: 'Nahia Belfort', role: 'Civil', status: false, social: { instagram: 'https://www.instagram.com/mamennaway/'}},
      {username: 'lobo_roleplay', character: 'Monkey', role: 'Banda', status: false, social: { instagram: 'https://www.instagram.com/lobo_rolplay/', twitter: 'https://twitter.com/druidayt'}, banda: 'Hustler Crips'},
      {username: 'zeusdelizzia', character: 'Leonardo Russo', role: 'Policía', status: false, social: { instagram: 'https://www.instagram.com/zeusdelizzia/', twitter: 'https://twitter.com/ZeusValenciano'}},
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
