
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Nutrition = () => {
  const { toast } = useToast();

  const handleTipClick = (tip: string) => {
    toast({
      title: "Nutrition Tip",
      description: tip,
    });
  };

  const nutritionTips = [
    {
      title: "Plant-Based Power",
      description: "Incorporate more plant-based foods into your diet for increased fiber, vitamins, and minerals.",
      tip: "Try adding one new vegetable to your meals each week!"
    },
    {
      title: "Hydration Habits",
      description: "Drink at least 8 glasses of water daily to stay hydrated and support all bodily functions.",
      tip: "Carry a reusable water bottle and set reminders to drink throughout the day."
    },
    {
      title: "Mindful Eating",
      description: "Pay attention to hunger cues and eat slowly to enjoy your food and prevent overeating.",
      tip: "Put down your utensils between bites and chew thoroughly."
    },
    {
      title: "Meal Preparation",
      description: "Planning and preparing meals in advance helps maintain healthy eating patterns.",
      tip: "Dedicate 2 hours each weekend to prep ingredients for the week ahead."
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
              <span className="gradient-text">Mindful</span> Nutrition
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-purelife-brown">Nourish Your Body</h2>
            <p className="text-lg text-purelife-gray max-w-3xl mb-8">
              Proper nutrition is the foundation of good health. Discover how whole foods, balanced meals, 
              and mindful eating practices can transform your wellbeing and energy levels.
            </p>
            
            <div className="bg-purelife-green/10 p-8 rounded-xl mb-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/3">
                  <div className="rounded-full bg-purelife-green/20 p-6 inline-flex">
                    <Leaf className="h-12 w-12 text-purelife-green" />
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-medium mb-4 text-purelife-brown">Our Philosophy</h3>
                  <p className="text-purelife-gray mb-4">
                    At PureLife, we believe nutrition should be personalized, enjoyable, and sustainable. 
                    Our approach focuses on nutrient-dense whole foods that provide your body with the 
                    building blocks it needs to thrive.
                  </p>
                  <p className="text-purelife-gray">
                    We don't advocate for restrictive diets or quick fixes. Instead, we encourage mindful 
                    eating, balanced meals, and a positive relationship with food.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-10 text-purelife-brown">Nutrition Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {nutritionTips.map((item, index) => (
                <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
                  <CardHeader className="bg-gradient-to-r from-purelife-green/10 to-transparent pb-2">
                    <h3 className="text-xl font-medium text-purelife-brown">{item.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-purelife-gray mb-4">{item.description}</p>
                    <Button 
                      onClick={() => handleTipClick(item.tip)} 
                      variant="outline" 
                      className="border-purelife-green text-purelife-green hover:bg-purelife-green hover:text-white btn-hover"
                    >
                      View Tip
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

export default Nutrition;
