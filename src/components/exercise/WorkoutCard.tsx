
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface WorkoutCardProps {
  workout: {
    title: string;
    description: string;
    level: string;
    image: string;
    routines: Array<{
      name: string;
      duration: string;
      description: string;
      icon: React.ReactNode;
    }>;
  };
  onStartWorkout: (workout: any) => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onStartWorkout }) => {
  return (
    <Card className="border-none shadow-md overflow-hidden card-hover">
      <CardHeader className="p-0">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={workout.image} 
            alt={workout.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm text-purelife-brown px-3 py-1 rounded-full text-sm font-medium">
            {workout.level}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium mb-2 text-purelife-brown">{workout.title}</h3>
        <p className="text-purelife-gray mb-4">{workout.description}</p>
        <Button 
          onClick={() => onStartWorkout(workout)} 
          className="bg-purelife-green hover:bg-purelife-green-dark text-white btn-hover"
        >
          Start Workout
        </Button>
      </CardContent>
    </Card>
  );
};
