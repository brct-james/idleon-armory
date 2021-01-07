import { Talent } from './Talent';

export interface TalentTab {
    name: string;
    pointsMax: number;
    pointsRemaining: number;
    owned: Talent[];
}