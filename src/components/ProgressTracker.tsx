import { Scenario } from '../types/game';

interface ProgressTrackerProps {
  scenarios: Scenario[];
  currentScenarioId: string;
}

export default function ProgressTracker({ scenarios, currentScenarioId }: ProgressTrackerProps) {
  const currentIndex = scenarios.findIndex(s => s.id === currentScenarioId);
  
  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center">
        {scenarios.map((scenario, index) => (
          <div key={scenario.id} className="flex flex-col items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${index === currentIndex ? 'bg-red-500 text-white' : 
                index < currentIndex ? 'bg-green-500 text-white' : 
                'bg-gray-200 text-gray-600'}
            `}>
              {index + 1}
            </div>
            <div className="text-xs mt-2 text-center max-w-[100px]">
              {scenario.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 