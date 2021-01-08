import { TalentTab } from './TalentTab';

export interface Class {
    name: string;
    familyBonusText: string[];
    familyBonusFormulae: string[];
    talentTabs: TalentTab[];
}