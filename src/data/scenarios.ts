import { Scenario } from '../types/game';

export const scenarios: Scenario[] = [
  {
    id: 'hallway-smoke',
    title: 'Smoke in the Hallway',
    description: 'You and your buddy are in the school hallway. You notice smoke coming from under a door. The door feels warm to the touch.',
    location: 'School Hallway',
    choices: [
      {
        id: 'open-door',
        text: 'Open the door',
        description: 'Check what\'s on the other side',
        isCorrect: false,
        feedback: 'Never open a door that feels warm! This could lead to a backdraft and put you in danger.'
      },
      {
        id: 'find-alternative',
        text: 'Find another way',
        description: 'Look for an alternative exit',
        isCorrect: true,
        feedback: 'Great choice! Always avoid hot doors and find alternative exits. Remember to stay low to avoid smoke!'
      }
    ],
    nextScenarioId: 'classroom-exit'
  },
  {
    id: 'classroom-exit',
    title: 'Classroom Exit',
    description: 'You\'ve found a classroom with students inside. The fire alarm is ringing, but some students are panicking.',
    location: 'Classroom',
    choices: [
      {
        id: 'help-students',
        text: 'Help organize the students',
        description: 'Help calm and organize the students to exit safely',
        isCorrect: true,
        feedback: 'Excellent! Helping others stay calm during an emergency is important, but always prioritize your own safety first.'
      },
      {
        id: 'run-ahead',
        text: 'Run ahead alone',
        description: 'Leave the classroom and find your own way out',
        isCorrect: false,
        feedback: 'Remember: In a fire emergency, we should help others when it\'s safe to do so. Never leave your buddy!'
      }
    ],
    nextScenarioId: 'stairwell-choice'
  },
  {
    id: 'stairwell-choice',
    title: 'Stairwell Decision',
    description: 'You reach the stairwell. The main stairs are crowded, but you notice an elevator nearby.',
    location: 'Stairwell',
    choices: [
      {
        id: 'take-elevator',
        text: 'Take the elevator',
        description: 'Use the elevator to get down faster',
        isCorrect: false,
        feedback: 'Never use elevators during a fire! They can become stuck or open to dangerous conditions.'
      },
      {
        id: 'use-stairs',
        text: 'Use the stairs',
        description: 'Take the stairs with the crowd',
        isCorrect: true,
        feedback: 'Good choice! Always use stairs during a fire emergency. Stay to the right to allow emergency responders to pass.'
      }
    ],
    nextScenarioId: 'smoke-encounter'
  },
  {
    id: 'smoke-encounter',
    title: 'Smoke in the Stairwell',
    description: 'As you descend the stairs, you encounter thick smoke. Your buddy suggests taking off their jacket to cover their face.',
    location: 'Stairwell',
    choices: [
      {
        id: 'cover-face',
        text: 'Cover face with clothing',
        description: 'Use clothing to cover your nose and mouth',
        isCorrect: true,
        feedback: 'Smart thinking! Covering your face helps filter smoke. Remember to stay low where the air is cleaner.'
      },
      {
        id: 'run-through',
        text: 'Run through quickly',
        description: 'Try to run through the smoke as fast as possible',
        isCorrect: false,
        feedback: 'Running through smoke is dangerous! Stay low and move carefully to avoid inhaling too much smoke.'
      }
    ],
    nextScenarioId: 'final-exit'
  },
  {
    id: 'final-exit',
    title: 'Final Exit',
    description: 'You see the exit door, but there\'s a small fire blocking part of the path. Your buddy spots a fire extinguisher nearby.',
    location: 'Main Exit',
    choices: [
      {
        id: 'use-extinguisher',
        text: 'Use fire extinguisher',
        description: 'Try to put out the fire blocking the path',
        isCorrect: false,
        feedback: 'While fire extinguishers are useful, in this situation it\'s better to find another way out. Your safety comes first!'
      },
      {
        id: 'find-alternative',
        text: 'Find another exit',
        description: 'Look for another way around the fire',
        isCorrect: true,
        feedback: 'Perfect! Always prioritize finding a safe exit over trying to fight the fire yourself.'
      }
    ],
    nextScenarioId: 'game-complete'
  }
]; 