
import React from 'react';

interface WorkoutHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  benefits: string[];
}

export const WorkoutHero: React.FC<WorkoutHeroProps> = ({ title, description, imageSrc, benefits }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-6 text-purelife-brown">{title}</h2>
      <p className="text-lg text-purelife-gray max-w-3xl mb-8">
        {description}
      </p>
      
      <div className="relative rounded-2xl overflow-hidden mb-12">
        <img 
          src={imageSrc} 
          alt="Exercise for wellbeing" 
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purelife-green/80 to-transparent flex items-center">
          <div className="px-8 md:px-12 max-w-lg">
            <h3 className="text-2xl font-medium mb-4 text-white">Benefits of Regular Exercise</h3>
            <ul className="text-white space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index}>• {benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
