import { ISkill } from '../../models/interfaces/ISkill';
import skills from '../../data/skills';

export const getSkillObjectsFromArray = (skillNames: string[]): ISkill[] => {
  try {
    return skillNames.map((skillName: string): ISkill => {
      return skills[skillName.toLowerCase()] || { name: skillName, img: null }
    });
  } catch (error) {
    console.log(error);
    return [];
  }
}
