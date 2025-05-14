
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Timer } from "@/components/Timer";

interface WorkoutTimerProps {
  selectedWorkout: {
    routines: Array<{
      name: string;
      duration: string;
      description: string;
      icon: React.ReactNode;
    }>;
  };
  currentRoutineIndex: number;
  handleTimerComplete: () => void;
  parseDuration: (durationStr: string) => number;
}

export const WorkoutTimer: React.FC<WorkoutTimerProps> = ({ 
  selectedWorkout, 
  currentRoutineIndex, 
  handleTimerComplete,
  parseDuration 
}) => {
  return (
    <div className="mt-8">
      {selectedWorkout && (
        <Timer 
          duration={parseDuration(selectedWorkout.routines[currentRoutineIndex].duration)}
          onComplete={handleTimerComplete}
          exerciseName={selectedWorkout.routines[currentRoutineIndex].name}
        />
      )}
      
      <div className="mt-6 mb-8">
        <h3 className="text-lg font-medium mb-2 text-purelife-brown">Current Exercise:</h3>
        <Card className="border-none shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="bg-purelife-green/10 p-3 rounded-full mr-4">
                {selectedWorkout?.routines[currentRoutineIndex].icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-medium text-purelife-brown">
                    {selectedWorkout?.routines[currentRoutineIndex].name}
                  </h4>
                  <span className="bg-purelife-green text-white px-3 py-1 rounded-full text-sm">
                    {selectedWorkout?.routines[currentRoutineIndex].duration}
                  </span>
                </div>
                <p className="text-purelife-gray">
                  {selectedWorkout?.routines[currentRoutineIndex].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-4">
        <h4 className="text-md font-medium mb-2 text-purelife-brown">Coming Up Next:</h4>
        {currentRoutineIndex < selectedWorkout?.routines.length - 1 ? (
          <div className="bg-purelife-beige/20 p-4 rounded-lg">
            <div className="flex items-center">
              <span className="text-purelife-brown font-medium">
                {selectedWorkout?.routines[currentRoutineIndex + 1].name}
              </span>
              <span className="ml-auto text-purelife-gray text-sm">
                {selectedWorkout?.routines[currentRoutineIndex + 1].duration}
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-purelife-beige/20 p-4 rounded-lg">
            <span className="text-purelife-brown font-medium">Workout Complete!</span>
          </div>
        )}
      </div>
    </div>
  );
};
