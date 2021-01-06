import { Item } from './Item';
import { Talent } from './Talent';
import { SkillInfo } from './SkillInfo';

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
    talents: {
        pointsMax: number;
        pointsRemaining: number;
        owned: Talent[];
    }
}