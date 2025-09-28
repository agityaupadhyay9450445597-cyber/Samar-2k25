import { GameType, MatchType } from "./schema";

export const games: GameType[] = [
  {
    title: "Cricket",
    webp: "/assets/sports/cricket/cricket_2.webp",
    image: "/assets/sports/cricket/cricket_2.jpg",
    data: {
      description: "Exciting matches and tournaments for all cricket lovers.",
      matches: [
        {
          date: "2025-09-29",
          team1: "Team A",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2",
        },
        {
          date: "2025-09-28",
          team1: "Team A",
          team2: "Team B",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2",
        },
        {
          date: "2025-09-27",
          team1: "Team C",
          team2: "Team B",
          winner: 2,
          points: "220/8",
          bestBatsman: "Player 3",
          bestBowler: "Player 4",
        },
      ],

    }
  },
  {
    title: "Basketball",
    webp: "/assets/sports/basketball/basketball_2.webp",
    image: "/assets/sports/basketball/basketball_2.jpg",
    data: {
      description: "Singles and doubles tournaments for all skill levels.",
      matches: [
        {
          date: "2025-09-28",
          team1: "Team A",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2fdfd ",
        },
        {
          date: "2025-09-27",
          team1: "Team B",
          winner: 1,
          points: "220/8",
          bestBatsman: "Player 3",
          bestBowler: "Player 4",
        },
      ]
    }
  },
  {
    title: "Table Tennis",
    webp: "/assets/sports/tabletennis/tabletennis_2.webp",
    image: "/assets/sports/tabletennis/tabletennis_2.jpg",
    data: {
      description: "Fast-paced fun on the table every evening.",
      matches: [
        {
          date: "2025-09-28",
          team1: "Team A",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2",
        },
        {
          date: "2025-09-27",
          team1: "Team B",
          winner: 1,
          points: "220/8",
          bestBatsman: "Player 3",
          bestBowler: "Player 4",
        },
      ],
    }
  },
  {
    title: "Badminton",
    webp: "/assets/sports/badminton/badminton_2.webp",
    image: "/assets/sports/badminton/badminton_2.jpg",
    data: {
      description: "Singles and doubles tournaments for all skill levels.",
      matches: [
        {
          date: "2025-09-28",
          team1: "Team A",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2",
        },
        {
          date: "2025-09-27",
          team1: "Team B",
          winner: 1,
          points: "220/8",
          bestBatsman: "Player 3",
          bestBowler: "Player 4",
        },
      ],
    }
  },
  {
    title: "Football",
    webp: "/assets/sports/football/football_2.webp",
    image: "/assets/sports/football/football_2.jpg",
    data: {
      description: "Join our football community with weekly matches.",
      matches: [
        {
          date: "2025-09-28",
          team1: "Team A",
          winner: 1,
          points: "250/5",
          bestBatsman: "Player 1",
          bestBowler: "Player 2",
        },
        {
          date: "2025-09-27",
          team1: "Team B",
          winner: 1,
          points: "220/8",
          bestBatsman: "Player 3",
          bestBowler: "Player 4",
        },
      ],
    }
  },
];
