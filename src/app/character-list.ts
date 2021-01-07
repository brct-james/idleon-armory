import { Character } from './Character';

export const CHARACTERS: Character[] = [
    {
        id: 1,
        name: "AlphaUser",
        level: 20,
        class: "Archer",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talentTabs: [{
            name: "Beginner",
            pointsMax: 100,
            pointsRemaining: 100,
            owned: []
        }, {
            name: "Beginner2",
            pointsMax: 100,
            pointsRemaining: 100,
            owned: []
        }]
    },
    {
        id: 2,
        name: "BetaUser",
        level: 9,
        class: "Beginner",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talentTabs: [{
            name: "Beginner",
            pointsMax: 100,
            pointsRemaining: 100,
            owned: []
        }]
    },
    {
        id: 3,
        name: "GammaUser",
        level: 1,
        class: "Beginner",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talentTabs: [{
            name: "Beginner",
            pointsMax: 100,
            pointsRemaining: 100,
            owned: []
        }]
    },
    {
        id: 4,
        name: "NewUser",
        level: 1,
        class: "Beginner",
        inventory: {
            unlockedSlots: 16,
            contents: []
        },
        skills: [],
        talentTabs: [{
            name: "Beginner",
            pointsMax: 100,
            pointsRemaining: 100,
            owned: []
        }]
    }
];