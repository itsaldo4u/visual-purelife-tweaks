
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Timer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface WorkoutDetailProps {
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
  onBackToWorkouts: () => void;
  onStartTimer: () => void;
}

export const WorkoutDetail: React.FC<WorkoutDetailProps> = ({ workout, onBackToWorkouts, onStartTimer }) => {
  return (
    <>
      <div className="flex items-center mb-6">
        <Button 
          variant="outline"
          onClick={onBackToWorkouts}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Workouts
        </Button>
        <h2 className="text-3xl font-semibold text-purelife-brown">{workout?.title}</h2>
      </div>
      
      <div className="bg-purelife-beige/20 rounded-xl p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img 
            src={workout?.image} 
            alt={workout?.title} 
            className="w-full md:w-1/3 rounded-lg object-cover h-60"
          />
          <div>
            <h3 className="text-xl font-medium mb-2 text-purelife-brown">Workout Details</h3>
            <p className="text-purelife-gray mb-4">{workout?.description}</p>
            <div className="bg-white rounded-lg p-4 inline-block">
              <span className="text-purelife-brown font-medium">Level: </span>
              <span className="text-purelife-green font-medium">{workout?.level}</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-medium mb-6 text-purelife-brown">Exercise Routine</h3>
      <div className="space-y-4">
        {workout?.routines.map((routine, index) => (
          <Card key={index} className="border-none shadow-sm overflow-hidden">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="bg-purelife-green/10 p-3 rounded-full mr-4">
                  {routine.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-lg font-medium text-purelife-brown">{routine.name}</h4>
                    <span className="bg-purelife-green text-white px-3 py-1 rounded-full text-sm">
                      {routine.duration}
                    </span>
                  </div>
                  <p className="text-purelife-gray">{routine.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Button 
          className="bg-purelife-green hover:bg-purelife-green-dark text-white btn-hover"
          onClick={onStartTimer}
        >
          Start Timer <Timer className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </>
  );
};
