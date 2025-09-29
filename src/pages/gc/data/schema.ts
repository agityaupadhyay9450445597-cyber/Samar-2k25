import { teams } from "./data";

export interface TeamType {
    teamId: string;
    name: string;
    image: string;
}



interface SportType {
    title: string;
    webp: string;
    image: string;
    description: string;
}
type TeamId = typeof teams[number]["teamId"];
export interface SportsRecordType extends SportType {
    matches: {
        date: string;
        team1Id: TeamId;
        team1Points?: number;
        team2Id?: TeamId;
        team2Points?: number;
        winner: TeamId;
        points: number;
        bestPlayers?: {
            name: string;
            title: string;
            image: string;
        }[];
    }[];
}

// export interface GameType {
//     title: string;
//     webp: string;
//     image: string;
//     data: GameDataType;
// }

// export interface GameDataType {
//     description: string;
//     matches: MatchType[];
// }

// // Extract all possible team IDs for strong typing
// export type TeamId = typeof teams[number]["teamId"];


// interface BestPlayerType {
//     name: string;
//     title: string;
//     image: string;
// }

// // 1. If only one team is mentioned, it means the value of the winner should be 1 by default.
// export interface MatchType {
//     date: string;
//     team1Id: TeamId;
//     team1Points?: number;
//     team2Id?: TeamId;
//     team2Points?: number;
//     winner: TeamId;
//     points: number;
//     bestPlayers?: BestPlayerType[];
// }
