
import React from 'react';
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
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
  );
};
