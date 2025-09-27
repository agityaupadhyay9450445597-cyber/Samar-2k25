import GameCard from "./components/GameCard";

import { games } from "./data/data";

function GC() {
	return (
		<>
			<div
				className="relative min-h-screen bg-gradient-to-tr from-[#fcf0fd] to-[#c7eae6]
"
			>
				<div className="grid gap-7 grid-cols-2 smd:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-7">
					{games.map((game, index) => (
						<GameCard
							key={index}
							title={game.title}
							webp={game.webp}
							image={game.image}
							description={game.description}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default GC;
