import { Character } from './Character';

export const CHARACTERS: Character[] = [
    {
        id: 0,
        name: "AlphaUser",
        level: 20,
        class: "Archer",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talents: {
            pointsMax: 60,
            pointsRemaining: 60,
            owned: []
        }
    },
    {
        id: 1,
        name: "BetaUser",
        level: 9,
        class: "Beginner",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talents: {
            pointsMax: 27,
            pointsRemaining: 27,
            owned: []
        }
    },
    {
        id: 2,
        name: "GammaUser",
        level: 1,
        class: "Beginner",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talents: {
            pointsMax: 3,
            pointsRemaining: 3,
            owned: []
        }
    }
];