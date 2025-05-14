
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
  supplements: string;
};

const NutritionSurvey = () => {
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
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
      supplements: "",
    },
  });

  const questions = [
    {
      name: "fruitVeggies",
      label: "How often do you eat fruits and vegetables?",
      options: [
        { value: "often", label: "Often (5+ servings daily)" },
        { value: "sometimes", label: "Sometimes (2-4 servings daily)" },
        { value: "rarely", label: "Rarely (0-1 servings daily)" }
      ]
    },
    {
      name: "protein",
      label: "How often do you consume adequate protein?",
      options: [
        { value: "often", label: "Often (With most meals)" },
        { value: "sometimes", label: "Sometimes (With some meals)" },
        { value: "rarely", label: "Rarely (Minimal protein)" }
      ]
    },
    {
      name: "water",
      label: "How often do you drink water?",
      options: [
        { value: "often", label: "Often (8+ glasses daily)" },
        { value: "sometimes", label: "Sometimes (4-7 glasses daily)" },
        { value: "rarely", label: "Rarely (0-3 glasses daily)" }
      ]
    },
    {
      name: "processed",
      label: "How often do you eat processed foods?",
      options: [
        { value: "often", label: "Often (Multiple times daily)" },
        { value: "sometimes", label: "Sometimes (A few times weekly)" },
        { value: "rarely", label: "Rarely (Minimal processed foods)" }
      ]
    },
    {
      name: "exercise",
      label: "How often do you exercise?",
      options: [
        { value: "often", label: "Often (4+ times weekly)" },
        { value: "sometimes", label: "Sometimes (1-3 times weekly)" },
        { value: "rarely", label: "Rarely (Less than weekly)" }
      ]
    },
    {
      name: "sleep",
      label: "How often do you get adequate sleep (7-9 hours)?",
      options: [
        { value: "often", label: "Often (Most nights)" },
        { value: "sometimes", label: "Sometimes (A few nights weekly)" },
        { value: "rarely", label: "Rarely (Seldom get enough sleep)" }
      ]
    },
    {
      name: "stress",
      label: "How often do you feel stressed?",
      options: [
        { value: "often", label: "Often (Daily stress)" },
        { value: "sometimes", label: "Sometimes (Occasional stress)" },
        { value: "rarely", label: "Rarely (Minimal stress)" }
      ]
    },
    {
      name: "supplements",
      label: "Do you take any nutritional supplements?",
      options: [
        { value: "often", label: "Yes, regularly" },
        { value: "sometimes", label: "Sometimes" },
        { value: "rarely", label: "No, never" }
      ]
    },
    {
      name: "goals",
      label: "What are your main health goals?",
      isTextarea: true
    }
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
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
    
    // Supplements scoring
    if (data.supplements === "often") score += 5;
    else if (data.supplements === "sometimes") score += 3;
    
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

    if (data.supplements === "rarely") {
      recommendations.push("Consider discussing supplements with a healthcare provider");
      foodsToAdd.push("Foods rich in essential nutrients your diet may be missing");
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

  const currentQuestionData = questions[currentQuestion];
  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

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
                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-purelife-green h-2.5 rounded-full transition-all duration-300 ease-out" 
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-purelife-gray">
                      <span>Question {currentQuestion + 1} of {questions.length}</span>
                      <span>{Math.round(progressPercentage)}% Complete</span>
                    </div>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="animate-fade-in">
                        {!currentQuestionData.isTextarea ? (
                          <FormField
                            control={form.control}
                            name={currentQuestionData.name as keyof NutritionSurveyForm}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-medium text-purelife-brown">
                                  {currentQuestionData.label}
                                </FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="flex flex-col space-y-3 mt-4"
                                  >
                                    {currentQuestionData.options?.map((option, i) => (
                                      <FormItem key={i} className="flex items-center space-x-3 space-y-0 rounded-lg border p-4 hover:bg-purelife-beige/10 transition-colors">
                                        <FormControl>
                                          <RadioGroupItem value={option.value} />
                                        </FormControl>
                                        <FormLabel className="font-normal text-base cursor-pointer flex-1">
                                          {option.label}
                                        </FormLabel>
                                      </FormItem>
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        ) : (
                          <FormField
                            control={form.control}
                            name={currentQuestionData.name as keyof NutritionSurveyForm}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-lg font-medium text-purelife-brown">
                                  {currentQuestionData.label}
                                </FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="I want to improve my energy levels, sleep better, etc."
                                    className="resize-none h-32 mt-4"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        )}
                      </div>
                    </form>
                  </Form>
                </CardContent>

                <CardFooter className="flex justify-between">
                  {currentQuestion > 0 && (
                    <Button 
                      variant="outline" 
                      onClick={prevQuestion}
                      className="border-purelife-green text-purelife-green hover:bg-purelife-green/10"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                    </Button>
                  )}
                  
                  {currentQuestion < questions.length - 1 ? (
                    <Button 
                      onClick={nextQuestion}
                      className={`${currentQuestion === 0 ? 'w-full' : 'ml-auto'} bg-purelife-green hover:bg-purelife-green-dark`}
                      disabled={!form.getValues()[questions[currentQuestion].name as keyof NutritionSurveyForm]}
                    >
                      Next <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    <Button 
                      onClick={form.handleSubmit(onSubmit)}
                      className="ml-auto bg-purelife-green hover:bg-purelife-green-dark"
                      disabled={!form.getValues()[questions[currentQuestion].name as keyof NutritionSurveyForm]}
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
                        {results?.score} / 75
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
