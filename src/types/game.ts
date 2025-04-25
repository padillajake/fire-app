export type Choice = {
  id: string;
  text: string;
  description: string;
  isCorrect: boolean;
  feedback: string;
};

export type Scenario = {
  id: string;
  title: string;
  description: string;
  location: string;
  choices: Choice[];
  nextScenarioId?: string;
};

export type Player = {
  id: string;
  name: string;
  score: number;
  avatar: string;
};

export type GameState = {
  currentScenarioId: string;
  players: Player[];
  gameStarted: boolean;
  showFeedback: boolean;
  lastChoice?: Choice;
  gameComplete?: boolean;
}; 