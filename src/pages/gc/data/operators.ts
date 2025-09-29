import { teams } from "./data";
import { MatchType, TeamId } from "./schema";

export function validateWinner(match: MatchType): boolean {
    const teams = [match.team1Id, match.team2Id].filter(Boolean); // Remove undefined
    return teams.includes(match.winner);
}

export function getTeamName(teamId: TeamId): string {
    const team = teams.find(t => t.teamId === teamId);
    return team?.name ?? teamId;
}