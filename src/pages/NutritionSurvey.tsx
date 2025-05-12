
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, ListChecks } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type NutritionSurveyForm = {
  fruitVeggies: string;
  protein: string;
  water: string;
  processed: string;
  exercise: string;
  sleep: string;
  stress: string;
  goals: string;
};

const NutritionSurvey = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [results, setResults] = useState<{
    score: number;
    category: string;
    recommendations: string[];
    foodsToAdd: string[];
    foodsToReduce: string[];
  } | null>(null);

  const form = useForm<NutritionSurveyForm>({
    defaultValues: {
      fruitVeggies: "",
      protein: "",
      water: "",
      processed: "",
      exercise: "",
      sleep: "",
      stress: "",
      goals: "",
    },
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateResults = (data: NutritionSurveyForm) => {
    // Simple scoring system
    let score = 0;
    
    // Diet scoring
    if (data.fruitVeggies === "often") score += 10;
    else if (data.fruitVeggies === "sometimes") score += 5;
    
    if (data.protein === "often") score += 10;
    else if (data.protein === "sometimes") score += 5;
    
    if (data.water === "often") score += 10;
    else if (data.water === "sometimes") score += 5;
    
    if (data.processed === "rarely") score += 10;
    else if (data.processed === "sometimes") score += 5;
    
    // Lifestyle scoring
    if (data.exercise === "often") score += 10;
    else if (data.exercise === "sometimes") score += 5;
    
    if (data.sleep === "often") score += 10;
    else if (data.sleep === "sometimes") score += 5;
    
    if (data.stress === "rarely") score += 10;
    else if (data.stress === "sometimes") score += 5;
    
    // Calculate category based on score
    let category: string;
    let recommendations: string[] = [];
    let foodsToAdd: string[] = [];
    let foodsToReduce: string[] = [];
    
    if (score >= 60) {
      category = "Excellent";
      recommendations = [
        "Keep up your great habits!",
        "Consider adding more variety to your diet",
        "Share your healthy habits with others"
      ];
      foodsToAdd = ["Superfoods like blueberries and kale", "Fermented foods for gut health"];
      foodsToReduce = ["Occasional treats are fine with your balanced approach"];
    } else if (score >= 40) {
      category = "Good";
      recommendations = [
        "You're on the right track!",
        "Try to increase your fruit and vegetable intake",
        "Consider a regular exercise routine"
      ];
      foodsToAdd = ["More colorful vegetables", "Lean proteins", "Healthy fats like avocados and nuts"];
      foodsToReduce = ["Processed snacks", "Added sugars"];
    } else {
      category = "Needs Improvement";
      recommendations = [
        "Start with small, sustainable changes",
        "Add one serving of vegetables to each meal",
        "Reduce processed food intake gradually",
        "Begin a simple exercise routine like walking"
      ];
      foodsToAdd = ["Fresh fruits and vegetables", "Whole grains", "Water instead of sugary drinks"];
      foodsToReduce = ["Fast food", "Sugary snacks and beverages", "Highly processed foods"];
    }
    
    // Customize based on specific answers
    if (data.fruitVeggies === "rarely") {
      recommendations.push("Gradually increase your fruit and vegetable intake");
      foodsToAdd.push("Leafy greens", "Berries", "Citrus fruits");
    }
    
    if (data.water === "rarely") {
      recommendations.push("Increase your water intake to stay hydrated");
      foodsToAdd.push("Herbal teas", "Infused water with fruits");
    }
    
    if (data.processed === "often") {
      recommendations.push("Work on reducing processed food consumption");
      foodsToReduce.push("Pre-packaged meals", "Foods with artificial ingredients");
    }
    
    if (data.exercise === "rarely") {
      recommendations.push("Find physical activities you enjoy and start slowly");
    }
    
    if (data.stress === "often") {
      recommendations.push("Consider adding stress-reduction techniques to your routine");
      foodsToAdd.push("Foods rich in magnesium like nuts and seeds", "Calming herbal teas");
    }
    
    return {
      score,
      category,
      recommendations,
      foodsToAdd,
      foodsToReduce
    };
  };

  const onSubmit = (data: NutritionSurveyForm) => {
    const calculatedResults = calculateResults(data);
    setResults(calculatedResults);
    setShowResults(true);
    toast({
      title: "Survey Complete!",
      description: "Your personalized recommendations are ready.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
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
              <span className="gradient-text">Nutrition</span> Assessment
            </h1>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 px-4 md:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <Card className="border-none shadow-md">
            {!showResults ? (
              <>
                <CardHeader className="bg-gradient-to-r from-purelife-green/10 to-transparent">
                  <CardTitle className="text-purelife-brown">Personalized Nutrition Survey</CardTitle>
                  <CardDescription>
                    Complete this survey to get tailored health recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex justify-between mb-6">
                    {Array.from({ length: totalSteps }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-2 mx-1 rounded-full ${
                          i + 1 <= currentStep ? "bg-purelife-green" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {currentStep === 1 && (
                        <div className="space-y-6 animate-fade-in">
                          <h2 className="text-xl font-medium text-purelife-brown">Your Diet</h2>

                          <FormField
                            control={form.control}
                            name="fruitVeggies"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you eat fruits and vegetables?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (5+ servings daily)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (2-4 servings daily)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (0-1 servings daily)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="protein"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you consume adequate protein?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (With most meals)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (With some meals)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (Minimal protein)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="water"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you drink water?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (8+ glasses daily)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (4-7 glasses daily)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (0-3 glasses daily)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {currentStep === 2 && (
                        <div className="space-y-6 animate-fade-in">
                          <h2 className="text-xl font-medium text-purelife-brown">Your Lifestyle</h2>

                          <FormField
                            control={form.control}
                            name="processed"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you eat processed foods?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (Multiple times daily)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (A few times weekly)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (Minimal processed foods)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="exercise"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you exercise?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (4+ times weekly)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (1-3 times weekly)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (Less than weekly)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="sleep"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you get adequate sleep (7-9 hours)?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (Most nights)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (A few nights weekly)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (Seldom get enough sleep)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}

                      {currentStep === 3 && (
                        <div className="space-y-6 animate-fade-in">
                          <h2 className="text-xl font-medium text-purelife-brown">Your Wellbeing</h2>

                          <FormField
                            control={form.control}
                            name="stress"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>How often do you feel stressed?</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="often" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Often (Daily stress)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="sometimes" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Sometimes (Occasional stress)
                                      </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                      <FormControl>
                                        <RadioGroupItem value="rarely" />
                                      </FormControl>
                                      <FormLabel className="font-normal">
                                        Rarely (Minimal stress)
                                      </FormLabel>
                                    </FormItem>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="goals"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>What are your main health goals?</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="I want to improve my energy levels, sleep better, etc."
                                    className="resize-none"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      )}
                    </form>
                  </Form>
                </CardContent>

                <CardFooter className="flex justify-between">
                  {currentStep > 1 && (
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                      className="border-purelife-green text-purelife-green hover:bg-purelife-green/10"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                  )}
                  
                  {currentStep < totalSteps ? (
                    <Button 
                      onClick={nextStep}
                      className="ml-auto bg-purelife-green hover:bg-purelife-green-dark"
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={form.handleSubmit(onSubmit)}
                      className="ml-auto bg-purelife-green hover:bg-purelife-green-dark"
                    >
                      Complete <Check className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </CardFooter>
              </>
            ) : (
              <>
                <CardHeader className="bg-gradient-to-r from-purelife-green/10 to-transparent">
                  <CardTitle className="text-purelife-brown">Your Personalized Results</CardTitle>
                  <CardDescription>
                    Based on your answers, we've prepared the following recommendations
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-6">
                  <div className="mb-8">
                    <div className="p-6 bg-purelife-beige/50 rounded-xl text-center">
                      <h3 className="text-lg font-medium mb-2">Your Wellness Score</h3>
                      <div className="text-4xl font-bold text-purelife-green mb-1">
                        {results?.score} / 70
                      </div>
                      <div className="text-purelife-brown font-medium">
                        {results?.category} Category
                      </div>
                    </div>
                  </div>

                  <Tabs defaultValue="recommendations" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6">
                      <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                      <TabsTrigger value="add">Foods to Add</TabsTrigger>
                      <TabsTrigger value="reduce">Foods to Reduce</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="recommendations" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium mb-4 flex items-center">
                          <ListChecks className="mr-2 h-5 w-5 text-purelife-green" />
                          Your Personalized Plan
                        </h3>
                        <ul className="space-y-2">
                          {results?.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-purelife-green flex-shrink-0 mt-0.5" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="add" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium mb-4">Foods to Add to Your Shopping List</h3>
                        <ul className="space-y-2">
                          {results?.foodsToAdd.map((food, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-purelife-green flex-shrink-0 mt-0.5" />
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="reduce" className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="text-lg font-medium mb-4">Foods to Reduce</h3>
                        <ul className="space-y-2">
                          {results?.foodsToReduce.map((food, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="mr-2 h-5 w-5 text-purelife-orange flex-shrink-0 mt-0.5" />
                              <span>{food}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowResults(false)}
                    className="border-purelife-green text-purelife-green hover:bg-purelife-green/10"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Edit Responses
                  </Button>
                  
                  <Link to="/nutrition">
                    <Button 
                      className="bg-purelife-green hover:bg-purelife-green-dark"
                    >
                      Continue to Nutrition <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </>
            )}
          </Card>
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

export default NutritionSurvey;
