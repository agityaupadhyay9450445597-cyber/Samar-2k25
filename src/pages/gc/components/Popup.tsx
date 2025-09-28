// Popup.tsx

import React from "react";
import { GameType } from "../data/schema";

interface PopupProps {
  game: GameType | null;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ game, onClose }) => {
  if (!game) return null;

  const sortedMatches = [...game.data.matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-5 flex items-center justify-center z-50">
      <div className="p-4 rounded-2xl w-11/12 sm:w-3/4 md:w-2/3 lg:w-[90vw] mx-auto h-[90vh] shadow-md shadow-emerald-300/15 relative animate-popOpen" style={{ backgroundImage: `url(${game.image})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-5 text-gray-700 hover:text-black "
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">{game.title} Matches</h2>

        <div className="space-y-3 max-h-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 pr-2">
          {sortedMatches.map((match, index) => (
            <div
              key={index}
              className="p-3 border rounded-md bg-gray-50 break-words whitespace-normal"
            >
              <p>Date: {match.date}</p>
              {match.team2 ? (
                <>
                  <p>{match.team1} VS {match.team2}</p>
                  <p>
                    Winner: {(match.winner === 2) ? match.team2 : match.team1} ({match.points})
                  </p>
                </>
              ) : (
                <p>Winner: {match.team1} </p>
              )}

              {match.bestBatsman && <p>Best Batsman: {match.bestBatsman}</p>}
              {match.bestBowler && <p>Best Bowler: {match.bestBowler}</p>}
              {match.bestRunner && <p>Best Runner: {match.bestRunner}</p>}
              {match.secondRunner && <p>Second Runner: {match.secondRunner}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;