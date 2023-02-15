export interface SocialMedia {
  twitch: string;
  twitter: string;
}

export interface Streamer {
  username: string;
  character: string;
  role: string;
  social?: SocialMedia;
  status?: boolean;
  category?: string;
}
