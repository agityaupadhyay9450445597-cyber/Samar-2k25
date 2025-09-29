import { TeamType, SportsRecordType } from "./schema";

// // // 1. All the teams in the GC // // //
export const teams: TeamType[] = [
  {
    teamId: "team-1",
    name: "Team A",
    image: "/assets/sports/cricket/cricket_2.jpg",
  },
  {
    teamId: "team-2",
    name: "Team B",
    image: "/assets/sports/cricket/cricket_3.jpg",
  },
  {
    teamId: "team-3",
    name: "Team C",
    image: "/assets/sports/cricket/cricket_4.jpg",
  }
] as const;


// // // 2. Game data // // //
export const games: SportsRecordType[] = [
  {
    title: "Cricket",
    webp: "/assets/sports/cricket/cricket_2.webp",
    image: "/assets/sports/cricket/cricket_2.jpg",
    description: "Exciting matches and tournaments for all cricket lovers.",
    matches: [
      {
        date: "2025-09-29",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
        bestPlayers: [
          {
            name: "Player 1",
            title: "Best Captain",
            image: "/assets/sports/cricket/player1.jpg",
          },
          {
            name: "Player 2",
            title: "Best Vice-Captain",
            image: "/assets/sports/cricket/player2.jpg",
          },
        ]
      },
      {
        date: "2025-09-28",
        team1Id: "team-1",
        team2Id: "team-2",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-3",
        team2Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    title: "Basketball",
    webp: "/assets/sports/basketball/basketball_2.webp",
    image: "/assets/sports/basketball/basketball_2.jpg",
    description: "Singles and doubles tournaments for all skill levels.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 8,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ]
  },
  {
    title: "Table Tennis",
    webp: "/assets/sports/tabletennis/tabletennis_2.webp",
    image: "/assets/sports/tabletennis/tabletennis_2.jpg",
    description: "Fast-paced fun on the table every evening.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 8,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    title: "Badminton",
    webp: "/assets/sports/badminton/badminton_2.webp",
    image: "/assets/sports/badminton/badminton_2.jpg",
    description: "Singles and doubles tournaments for all skill levels.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
  {
    title: "Football",
    webp: "/assets/sports/football/football_2.webp",
    image: "/assets/sports/football/football_2.jpg",
    description: "Join our football community with weekly matches.",
    matches: [
      {
        date: "2025-09-28",
        team1Id: "team-1",
        winner: "team-1",
        points: 5,
      },
      {
        date: "2025-09-27",
        team1Id: "team-2",
        winner: "team-2",
        points: 8,
      },
    ],
  },
];
