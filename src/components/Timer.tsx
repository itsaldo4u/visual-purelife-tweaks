
import React, { useState } from 'react';
import { useTimer } from '@/hooks/use-timer';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, Square as Stop } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface TimerProps {
  duration: number;
  onComplete?: () => void;
  exerciseName?: string;
}

export const Timer: React.FC<TimerProps> = ({ 
  duration, 
  onComplete,
  exerciseName = "Exercise"
}) => {
  const { toast } = useToast();
  const [currentExercise, setCurrentExercise] = useState(exerciseName);
  
  const {
    time,
    isRunning,
    isPaused,
    start,
    pause,
    resume,
    stop,
    formatTime,
  } = useTimer({
    initialTime: duration,
    autoStart: false,
  });

  // Calculate progress percentage
  const progress = ((duration - time) / duration) * 100;

  // Handle timer completion
  React.useEffect(() => {
    if (isRunning && time === 0) {
      toast({
        title: "Time's up!",
        description: `${currentExercise} completed.`,
      });
      if (onComplete) {
        onComplete();
      }
    }
  }, [time, isRunning, onComplete, toast, currentExercise]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-4">
      <h3 className="text-xl font-bold text-center text-purelife-brown">
        {currentExercise}
      </h3>
      
      <div className="text-4xl font-bold text-center text-purelife-green">
        {formatTime(time)}
      </div>
      
      <Progress value={progress} className="h-2 bg-gray-200" />
      
      <div className="flex justify-center space-x-4">
        {!isRunning && !isPaused && (
          <Button
            onClick={start}
            className="bg-purelife-green hover:bg-purelife-green-dark"
          >
            <Play className="mr-2 h-4 w-4" />
            Start
          </Button>
        )}
        
        {isRunning && !isPaused && (
          <Button
            onClick={pause}
            variant="outline"
            className="border-purelife-orange text-purelife-orange hover:bg-purelife-orange/10"
          >
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
        )}
        
        {isPaused && (
          <Button
            onClick={resume}
            className="bg-purelife-green hover:bg-purelife-green-dark"
          >
            <Play className="mr-2 h-4 w-4" />
            Resume
          </Button>
        )}
        
        {(isRunning || isPaused) && (
          <Button
            onClick={stop}
            variant="destructive"
          >
            <Stop className="mr-2 h-4 w-4" />
            Stop
          </Button>
        )}
      </div>
    </div>
  );
};
