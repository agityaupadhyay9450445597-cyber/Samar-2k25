export interface GameType {
    title: string;
    webp: string;
    image: string;
    data: GameDataType;
}

export interface GameDataType {
    description: string;
    matches: MatchType[];
}

// 1. If only one team is mentioned, it means the value of the winner should be 1 by default. 
export interface MatchType {
    date: string;
    team1: string;
    team1Points?: string;
    team2?: string;
    team2Points?: string;
    winner: number;
    points: string;
    bestPlayer?: string;
    bestBatsman?: string;
    bestBowler?: string;
    bestRunner?: string;
    secondRunner?: string;
}
