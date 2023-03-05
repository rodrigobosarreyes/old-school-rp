export interface SocialMedia {
  instagram?: string;
  twitter?: string;
  youtube?: string;
  tiktok?: string;
}

export interface Streamer {
  username: string;
  character: string;
  role: string;
  social?: SocialMedia;
  status?: boolean;
  category?: string;
}
