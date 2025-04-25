'use client';

import { useState } from 'react';
import Image from "next/image";
import { scenarios } from '../data/scenarios';
import { GameState, Player, Choice } from '../types/game';
import ProgressTracker from '../components/ProgressTracker';
import ResultsScreen from '../components/ResultsScreen';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    currentScenarioId: 'hallway-smoke',
    players: [
      { id: '1', name: 'Player 1', score: 0, avatar: '/avatars/player1.png' },
      { id: '2', name: 'Player 2', score: 0, avatar: '/avatars/player2.png' }
    ],
    gameStarted: false,
    showFeedback: false,
    gameComplete: false
  });

  const currentScenario = scenarios.find(s => s.id === gameState.currentScenarioId);

  const handleChoice = (choice: Choice) => {
    setGameState(prev => ({
      ...prev,
      showFeedback: true,
      lastChoice: choice,
    }));

    // Play sound effect
    const audio = new Audio(choice.isCorrect ? '/sounds/correct.mp3' : '/sounds/incorrect.mp3');
    audio.play().catch(error => console.log('Audio playback failed:', error));

    // Update scores
    if (choice.isCorrect) {
      setGameState(prev => ({
        ...prev,
        players: prev.players.map(player => ({
          ...player,
          score: player.score + 10
        }))
      }));
    }

    // Move to next scenario after delay
    setTimeout(() => {
      if (currentScenario?.nextScenarioId) {
        setGameState(prev => ({
          ...prev,
          currentScenarioId: currentScenario.nextScenarioId!,
          showFeedback: false,
          lastChoice: undefined
        }));
      } else {
        setGameState(prev => ({
          ...prev,
          gameComplete: true
        }));
      }
    }, 3000);
  };

  const handlePlayAgain = () => {
    setGameState({
      currentScenarioId: 'hallway-smoke',
      players: [
        { id: '1', name: 'Player 1', score: 0, avatar: '/avatars/player1.png' },
        { id: '2', name: 'Player 2', score: 0, avatar: '/avatars/player2.png' }
      ],
      gameStarted: false,
      showFeedback: false,
      gameComplete: false
    });
  };

  if (gameState.gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100 p-8">
        <main className="max-w-4xl mx-auto">
          <ResultsScreen players={gameState.players} onPlayAgain={handlePlayAgain} />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-red-100 p-8">
      <main className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-2">BlazeBuddies</h1>
          <p className="text-lg text-gray-700">Learn Fire Safety Together!</p>
        </div>

        {/* Progress Tracker */}
        <ProgressTracker 
          scenarios={scenarios} 
          currentScenarioId={gameState.currentScenarioId} 
        />

        {/* Game Stage Display */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {currentScenario?.title}
          </h2>
          
          {/* Scenario Description */}
          <div className="mb-6">
            <p className="text-gray-700">
              {currentScenario?.description}
            </p>
          </div>

          {/* Feedback Display */}
          {gameState.showFeedback && gameState.lastChoice && (
            <div className={`p-4 mb-4 rounded-lg ${
              gameState.lastChoice.isCorrect ? 'bg-green-100' : 'bg-red-100'
            }`}>
              <p className="text-gray-800">{gameState.lastChoice.feedback}</p>
            </div>
          )}

          {/* Choice Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentScenario?.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoice(choice)}
                disabled={gameState.showFeedback}
                className={`p-4 rounded-lg transition-colors ${
                  gameState.showFeedback
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-opacity-80'
                } ${
                  choice.isCorrect ? 'bg-green-100 hover:bg-green-200' : 'bg-red-100 hover:bg-red-200'
                }`}
              >
                <h3 className="font-semibold text-gray-800">{choice.text}</h3>
                <p className="text-sm text-gray-600">{choice.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Buddy System Display */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Buddy Team</h2>
          <div className="flex items-center justify-center gap-4">
            {gameState.players.map((player) => (
              <div key={player.id} className="text-center">
                <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-2">
                  <Image
                    src={player.avatar}
                    alt={`${player.name}'s avatar`}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm font-medium">{player.name}</p>
                <p className="text-sm text-gray-600">Score: {player.score}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
