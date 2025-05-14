
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WorkoutHero } from "@/components/exercise/WorkoutHero";
import { WorkoutCard } from "@/components/exercise/WorkoutCard";
import { WorkoutDetail } from "@/components/exercise/WorkoutDetail";
import { WorkoutTimer } from "@/components/exercise/WorkoutTimer";
import { workouts, benefitsList } from "@/data/workoutsData";

const Exercise = () => {
  const { toast } = useToast();
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showRoutines, setShowRoutines] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [currentRoutineIndex, setCurrentRoutineIndex] = useState(0);

  const handleStartWorkout = (workout) => {
    setSelectedWorkout(workout);
    setShowRoutines(true);
    setShowTimer(false);
    setCurrentRoutineIndex(0);
    toast({
      title: "Workout Selected",
      description: `You selected: ${workout.title}. Let's get started!`,
    });
  };

  const handleBackToWorkouts = () => {
    setShowRoutines(false);
    setSelectedWorkout(null);
    setShowTimer(false);
  };

  const handleStartTimer = () => {
    setShowTimer(true);
  };

  const handleTimerComplete = () => {
    if (selectedWorkout && currentRoutineIndex < selectedWorkout.routines.length - 1) {
      // Move to next exercise
      setCurrentRoutineIndex(prevIndex => prevIndex + 1);
      toast({
        title: "Next Exercise",
        description: `Get ready for ${selectedWorkout.routines[currentRoutineIndex + 1].name}!`,
      });
    } else {
      // Workout complete
      toast({
        title: "Workout Complete!",
        description: "Great job completing your workout!",
      });
      setShowTimer(false);
    }
  };

  // Parse duration string to seconds (e.g. "30 seconds" -> 30, "45 seconds" -> 45)
  const parseDuration = (durationStr) => {
    const match = durationStr.match(/(\d+)/);
    if (match && match[1]) {
      return parseInt(match[1], 10);
    }
    return 30; // default duration
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Regular Exercise" />

      <main className="flex-1 py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {!showRoutines ? (
            <>
              <WorkoutHero 
                title="Move Your Body"
                description="Regular physical activity is essential for both physical and mental wellbeing. Our approach focuses on finding enjoyable ways to move your body that you can sustain for the long term."
                imageSrc="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                benefits={benefitsList}
              />

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-10 text-purelife-brown">Featured Workouts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {workouts.map((workout, index) => (
                    <WorkoutCard 
                      key={index}
                      workout={workout}
                      onStartWorkout={() => handleStartWorkout(workout)}
                    />
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="mb-16">
              {showTimer ? (
                <WorkoutTimer
                  selectedWorkout={selectedWorkout}
                  currentRoutineIndex={currentRoutineIndex}
                  handleTimerComplete={handleTimerComplete}
                  parseDuration={parseDuration}
                />
              ) : (
                <WorkoutDetail 
                  workout={selectedWorkout}
                  onBackToWorkouts={handleBackToWorkouts}
                  onStartTimer={handleStartTimer}
                />
              )}
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Exercise;
