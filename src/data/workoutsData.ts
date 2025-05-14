
import React from 'react';
import { Activity, Timer, Dumbbell } from "lucide-react";

export const workouts = [
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

export const benefitsList = [
  "Improved mood and mental clarity",
  "Enhanced energy and reduced fatigue",
  "Better sleep quality", 
  "Reduced risk of chronic diseases",
  "Stronger muscles and bones"
];
