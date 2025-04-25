import { Player } from '../types/game';
import { scenarios } from '../data/scenarios';

interface ResultsScreenProps {
  players: Player[];
  onPlayAgain: () => void;
}

export default function ResultsScreen({ players, onPlayAgain }: ResultsScreenProps) {
  const totalScore = players.reduce((sum, player) => sum + player.score, 0);
  const maxScore = scenarios.length * 10; // 10 points per correct answer
  const percentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Game Complete!</h2>
      
      <div className="mb-8">
        <div className="text-5xl font-bold text-red-500 mb-2">{percentage}%</div>
        <p className="text-gray-600">Total Score: {totalScore}/{maxScore}</p>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        {players.map((player) => (
          <div key={player.id} className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800">{player.name}</h3>
            <p className="text-2xl font-bold text-red-500">{player.score}</p>
            <p className="text-sm text-gray-600">points</p>
          </div>
        ))}
      </div>

      <button
        onClick={onPlayAgain}
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
      >
        Play Again
      </button>
    </div>
  );
} 