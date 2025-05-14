
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Timer, Activity, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Exercise = () => {
  const { toast } = useToast();
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showRoutines, setShowRoutines] = useState(false);

  const handleStartWorkout = (workout) => {
    setSelectedWorkout(workout);
    setShowRoutines(true);
    toast({
      title: "Workout Selected",
      description: `You selected: ${workout.title}. Let's get started!`,
    });
  };

  const handleBackToWorkouts = () => {
    setShowRoutines(false);
    setSelectedWorkout(null);
  };

  const workouts = [
    {
      title: "Morning Energizer",
      description: "A quick 15-minute routine to kickstart your day with energy and focus.",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1599447292180-45d51e69be83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      routines: [
        {
          name: "Jumping Jacks",
          duration: "30 seconds",
          description: "Start with feet together and arms by your sides, then jump while spreading legs and raising arms.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Air Squats",
          duration: "45 seconds",
          description: "Stand with feet shoulder-width apart, lower your body until thighs are parallel to floor, then rise back up.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Push-ups",
          duration: "30 seconds",
          description: "Start in plank position, lower your body until chest nearly touches floor, then push back up.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Rest",
          duration: "15 seconds",
          description: "Take a short break before the next set.",
          icon: <Timer className="h-6 w-6" />
        },
        {
          name: "Mountain Climbers",
          duration: "30 seconds",
          description: "Start in plank position, alternate bringing knees to chest in a running motion.",
          icon: <Activity className="h-6 w-6" />
        }
      ]
    },
    {
      title: "Strength Builder",
      description: "Focus on building functional strength with this 30-minute full-body workout.",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
      routines: [
        {
          name: "Dumbbell Squats",
          duration: "45 seconds",
          description: "Hold dumbbells at shoulders, squat until thighs are parallel to ground, then stand back up.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Dumbbell Rows",
          duration: "45 seconds",
          description: "Bend at waist with dumbbell in hand, pull weight up to side of chest, then lower.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Rest",
          duration: "30 seconds",
          description: "Take a short break before the next exercise.",
          icon: <Timer className="h-6 w-6" />
        },
        {
          name: "Dumbbell Chest Press",
          duration: "45 seconds",
          description: "Lie on back with dumbbells at chest level, press weights up until arms extend, then lower.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Plank",
          duration: "45 seconds",
          description: "Hold a plank position with body in straight line from head to heels.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Rest",
          duration: "30 seconds",
          description: "Take a short break before the next set.",
          icon: <Timer className="h-6 w-6" />
        }
      ]
    },
    {
      title: "Flexibility Flow",
      description: "Improve your range of motion and relieve tension with this gentle routine.",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      routines: [
        {
          name: "Child's Pose",
          duration: "60 seconds",
          description: "Kneel and sit back on heels, extend arms forward and lower forehead to floor.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Cat-Cow Stretch",
          duration: "60 seconds",
          description: "On hands and knees, alternate between arching and rounding back.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Downward Dog",
          duration: "60 seconds",
          description: "Form an inverted V with body, hands and feet on floor, hips raised high.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Standing Forward Fold",
          duration: "60 seconds",
          description: "Stand and bend forward at hips, reaching toward ground.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Seated Twist",
          duration: "60 seconds (30 per side)",
          description: "Sit with legs extended, bend one knee and twist torso toward bent knee.",
          icon: <Activity className="h-6 w-6" />
        }
      ]
    },
    {
      title: "Cardio Blast",
      description: "Boost your heart rate and burn calories with this high-energy workout.",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      routines: [
        {
          name: "Burpees",
          duration: "45 seconds",
          description: "From standing, drop to push-up position, perform push-up, jump feet forward, then jump up with hands overhead.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "High Knees",
          duration: "45 seconds",
          description: "Run in place, lifting knees as high as possible.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Rest",
          duration: "30 seconds",
          description: "Take a short break before next exercise.",
          icon: <Timer className="h-6 w-6" />
        },
        {
          name: "Jump Squats",
          duration: "45 seconds",
          description: "Perform a squat, then explosively jump up, land softly and repeat.",
          icon: <Dumbbell className="h-6 w-6" />
        },
        {
          name: "Mountain Climbers",
          duration: "45 seconds",
          description: "In plank position, quickly alternate bringing knees to chest.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          name: "Rest",
          duration: "30 seconds",
          description: "Take a short break before the next set.",
          icon: <Timer className="h-6 w-6" />
        }
      ]
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-purelife-beige py-4 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold ml-4">
              <span className="gradient-text">Regular</span> Exercise
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          {!showRoutines ? (
            <>
              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-6 text-purelife-brown">Move Your Body</h2>
                <p className="text-lg text-purelife-gray max-w-3xl mb-8">
                  Regular physical activity is essential for both physical and mental wellbeing. 
                  Our approach focuses on finding enjoyable ways to move your body that you can 
                  sustain for the long term.
                </p>
                
                <div className="relative rounded-2xl overflow-hidden mb-12">
                  <img 
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Exercise for wellbeing" 
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purelife-green/80 to-transparent flex items-center">
                    <div className="px-8 md:px-12 max-w-lg">
                      <h3 className="text-2xl font-medium mb-4 text-white">Benefits of Regular Exercise</h3>
                      <ul className="text-white space-y-2">
                        <li>• Improved mood and mental clarity</li>
                        <li>• Enhanced energy and reduced fatigue</li>
                        <li>• Better sleep quality</li>
                        <li>• Reduced risk of chronic diseases</li>
                        <li>• Stronger muscles and bones</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-16">
                <h2 className="text-3xl font-semibold mb-10 text-purelife-brown">Featured Workouts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {workouts.map((workout, index) => (
                    <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
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
                          onClick={() => handleStartWorkout(workout)} 
                          className="bg-purelife-green hover:bg-purelife-green-dark text-white btn-hover"
                        >
                          Start Workout
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <section className="mb-16">
              <div className="flex items-center mb-6">
                <Button 
                  variant="outline"
                  onClick={handleBackToWorkouts}
                  className="mr-4"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Workouts
                </Button>
                <h2 className="text-3xl font-semibold text-purelife-brown">{selectedWorkout?.title}</h2>
              </div>
              
              <div className="bg-purelife-beige/20 rounded-xl p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={selectedWorkout?.image} 
                    alt={selectedWorkout?.title} 
                    className="w-full md:w-1/3 rounded-lg object-cover h-60"
                  />
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-purelife-brown">Workout Details</h3>
                    <p className="text-purelife-gray mb-4">{selectedWorkout?.description}</p>
                    <div className="bg-white rounded-lg p-4 inline-block">
                      <span className="text-purelife-brown font-medium">Level: </span>
                      <span className="text-purelife-green font-medium">{selectedWorkout?.level}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-medium mb-6 text-purelife-brown">Exercise Routine</h3>
              <div className="space-y-4">
                {selectedWorkout?.routines.map((routine, index) => (
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
                >
                  Start Timer <Timer className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-purelife-beige py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold">
                <span className="text-purelife-green">Pure</span>
                <span className="text-purelife-brown">Life</span>
              </h2>
              <p className="text-purelife-gray mt-2">Embrace a healthier lifestyle</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <Link to="/" className="text-purelife-brown hover:text-purelife-green">Home</Link>
              <Link to="/nutrition" className="text-purelife-brown hover:text-purelife-green">Nutrition</Link>
              <Link to="/exercise" className="text-purelife-brown hover:text-purelife-green">Exercise</Link>
              <Link to="/mindfulness" className="text-purelife-brown hover:text-purelife-green">Mindfulness</Link>
              <Link to="/" className="text-purelife-brown hover:text-purelife-green">Contact</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purelife-brown/10 text-center text-sm text-purelife-gray">
            &copy; {new Date().getFullYear()} PureLife. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Exercise;
