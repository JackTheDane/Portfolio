export interface IProject {
  title: string;
  slug: string;
  role: string;
  url?: string;
  github?: string;
  skills: string[];
  images: string[];
  order?: number;
}
