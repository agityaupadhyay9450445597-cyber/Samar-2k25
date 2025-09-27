export interface GameCardProps {
    title: string;
    webp: string;
    image: string;
    description: string;
};

export interface GameDetails extends GameCardProps {
    id: string;
};

export const games: GameDetails[] = [
    {
        id: "cricket",
        title: "Cricket",
        webp: "/assets/sports/cricket/cricket_2.webp",
        image: "/assets/sports/cricket/cricket_2.jpg",
        description: "Exciting matches and tournaments for all cricket lovers.",
    },
    {
        id: "basketball",
        title: "Basketball",
        webp: "/assets/sports/basketball/basketball_2.webp",
        image: "/assets/sports/basketball/basketball_2.jpg",
        description: "Singles and doubles tournaments for all skill levels.",
    },
    {
        id: "table-tennis",
        title: "Table Tennis",
        webp: "/assets/sports/tabletennis/tabletennis_2.webp",
        image: "/assets/sports/tabletennis/tabletennis_2.jpg",
        description: "Fast-paced fun on the table every evening.",
    },
    {
        id: "badminton",
        title: "Badminton",
        webp: "/assets/sports/badminton/badminton_2.webp",
        image: "/assets/sports/badminton/badminton_2.jpg",
        description: "Singles and doubles tournaments for all skill levels.",
    },
    {
        id: "football",
        title: "Football",
        webp: "/assets/sports/football/football_2.webp",
        image: "/assets/sports/football/football_2.jpg",
        description: "Join our football community with weekly matches.",
    },
];