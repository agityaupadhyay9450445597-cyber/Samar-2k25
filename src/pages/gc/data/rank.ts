import { teams, games } from './data';

// For the overall rank table
interface TeamRankedType {
    rank: number;
    teamName: string;
    overallPoints: number;
    distributedPoints: {
        sportName: string;
        points: number;
    }[];
}

export function getRankings(): TeamRankedType[] {
    const ranking: TeamRankedType[] = [];

    // Calculate the overall points for each team
    teams.forEach(team => {
        const teamId = team.teamId;
        const teamRanked: TeamRankedType = {
            rank: -1,
            teamName: team.name,
            overallPoints: 0,
            distributedPoints: [],
        };
        games.forEach(game => {
            let totalGamePoints = 0;
            game.matches.forEach(match => {
                if (match.winner === teamId) {
                    totalGamePoints += match.points || 0;
                }
            })
            teamRanked.overallPoints += totalGamePoints;
            teamRanked.distributedPoints.push({
                sportName: game.title,
                points: totalGamePoints,
            })
        })
        ranking.push(teamRanked);
    })

    // Sort the teams by overall points
    ranking.sort((a, b) => (b.overallPoints || 0) - (a.overallPoints || 0));

    // Assign ranks based on the sorted order
    ranking.forEach((teamRanked, index) => {
        teamRanked.rank = index + 1;
    })

    return ranking;
}