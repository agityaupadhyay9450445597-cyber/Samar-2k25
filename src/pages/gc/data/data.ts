import cricketWebp from "../../../assets/gc/cricket.webp";
import cricketJpg from "../../../assets/gc/cricket.jpg";
import basketballWebp from "../../../assets/gc/basketball.webp";
import basketballJpg from "../../../assets/gc/basketball.jpg";
import tabletennisWebp from "../../../assets/gc/tabletennis.webp";
import tabletennisJpg from "../../../assets/gc/tabletennis.jpg";
import badmintonWebp from "../../../assets/gc/badminton.webp";
import badmintonJpg from "../../../assets/gc/badminton.jpg";
import footballWebp from "../../../assets/gc/football.webp";
import footballJpg from "../../../assets/gc/football.jpg";


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
        webp: cricketWebp,
        image: cricketJpg,
        description: "Exciting matches and tournaments for all cricket lovers.",
    },
    {
        id: "basketball",
        title: "Basketball",
        webp: basketballWebp,
        image: basketballJpg,
        description: "Singles and doubles tournaments for all skill levels.",
    },
    {
        id: "table-tennis",
        title: "Table Tennis",
        webp: tabletennisWebp,
        image: tabletennisJpg,
        description: "Fast-paced fun on the table every evening.",
    },
    {
        id: "badminton",
        title: "Badminton",
        webp: badmintonWebp,
        image: badmintonJpg,
        description: "Singles and doubles tournaments for all skill levels.",
    },
    {
        id: "football",
        title: "Football",
        webp: footballWebp,
        image: footballJpg,
        description: "Join our football community with weekly matches.",
    },
];