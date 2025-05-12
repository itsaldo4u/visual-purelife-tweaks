
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Mindfulness = () => {
  const { toast } = useToast();

  const handleStartMeditation = (duration: string) => {
    toast({
      title: "Meditation Timer",
      description: `${duration} meditation timer will start when this feature is implemented.`,
    });
  };

  const practices = [
    {
      title: "Mindful Breathing",
      description: "Focus on your breath to anchor yourself in the present moment and reduce stress.",
      instructions: "Find a comfortable position, close your eyes, and bring your attention to the sensation of breathing. Notice the inhale and exhale without trying to change it."
    },
    {
      title: "Body Scan",
      description: "Systematically bring awareness to different parts of your body to release tension.",
      instructions: "Starting at your feet, slowly move your attention upward through your body, noticing sensations without judgment."
    },
    {
      title: "Loving-Kindness",
      description: "Cultivate feelings of compassion for yourself and others through directed well-wishes.",
      instructions: "Repeat phrases like 'May I be happy, may I be healthy, may I be safe, may I live with ease' first for yourself, then for loved ones."
    },
    {
      title: "Mindful Walking",
      description: "Transform a simple walk into a meditation by bringing full awareness to each step.",
      instructions: "Walk slowly and deliberately, noticing the lifting, moving, and placing of each foot. Feel the contact with the ground."
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
              <span className="gradient-text">Mindfulness</span> Practice
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-purelife-brown">Cultivate Presence</h2>
            <p className="text-lg text-purelife-gray max-w-3xl mb-8">
              Mindfulness is the practice of bringing your attention to the present moment with openness, 
              curiosity, and acceptance. Regular mindfulness practice can reduce stress, improve focus, 
              and enhance overall wellbeing.
            </p>
            
            <div className="bg-purelife-blue/10 p-8 rounded-xl mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-medium mb-4 text-purelife-brown">Begin Your Practice</h3>
                  <p className="text-purelife-gray mb-6">
                    New to mindfulness? Start with just a few minutes each day. Find a quiet space, 
                    sit comfortably, and focus on your breath. When your mind wanders (which is natural), 
                    gently bring your attention back to your breathing.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      onClick={() => handleStartMeditation("5 minute")} 
                      className="bg-purelife-green hover:bg-purelife-green-dark text-white btn-hover"
                    >
                      5 Min Meditation
                    </Button>
                    <Button 
                      onClick={() => handleStartMeditation("10 minute")} 
                      variant="outline" 
                      className="border-purelife-green text-purelife-green hover:bg-purelife-green hover:text-white btn-hover"
                    >
                      10 Min Meditation
                    </Button>
                    <Button 
                      onClick={() => handleStartMeditation("20 minute")} 
                      variant="outline" 
                      className="border-purelife-green text-purelife-green hover:bg-purelife-green hover:text-white btn-hover"
                    >
                      20 Min Meditation
                    </Button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80" 
                    alt="Mindfulness meditation" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-10 text-purelife-brown">Mindfulness Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {practices.map((practice, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
                  <CardHeader className="bg-gradient-to-r from-purelife-blue/10 to-transparent pb-2">
                    <h3 className="text-xl font-medium text-purelife-brown">{practice.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-purelife-gray mb-4">{practice.description}</p>
                    <div className="bg-purelife-beige/50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-purelife-brown mb-2">How to Practice:</h4>
                      <p className="text-purelife-gray text-sm">{practice.instructions}</p>
                    </div>
                    <Button 
                      variant="link" 
                      className="text-purelife-green hover:text-purelife-green-dark p-0"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
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

export default Mindfulness;
