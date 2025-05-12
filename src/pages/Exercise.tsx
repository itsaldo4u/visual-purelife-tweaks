
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Exercise = () => {
  const { toast } = useToast();

  const handleStartWorkout = (workout: string) => {
    toast({
      title: "Workout Selected",
      description: `You selected: ${workout}. This feature will guide you through the routine.`,
    });
  };

  const workouts = [
    {
      title: "Morning Energizer",
      description: "A quick 15-minute routine to kickstart your day with energy and focus.",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1599447292180-45d51e69be83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Strength Builder",
      description: "Focus on building functional strength with this 30-minute full-body workout.",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"
    },
    {
      title: "Flexibility Flow",
      description: "Improve your range of motion and relieve tension with this gentle routine.",
      level: "All Levels",
      image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Cardio Blast",
      description: "Boost your heart rate and burn calories with this high-energy workout.",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
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
                      onClick={() => handleStartWorkout(workout.title)} 
                      className="bg-purelife-green hover:bg-purelife-green-dark text-white btn-hover"
                    >
                      Start Workout
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
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
