import { ISkill } from "./ISkill";

export interface IProject {
  title: string;
  slug: string;
  role: string;
  url?: string;
  skills: ISkill[];
  images: string[];
}
