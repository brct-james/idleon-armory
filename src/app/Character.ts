import { Item } from './Item';
import { Talent } from './Talent';
import { SkillInfo } from './SkillInfo';
import { TalentTab } from './TalentTab';

export interface Character {
    id: number;
    name: string;
    level: number;
    class: string;
    inventory: {
        unlockedSlots: number;
        contents: Item[];
    }
    skills: SkillInfo[];
    talentTabs: TalentTab[];
}