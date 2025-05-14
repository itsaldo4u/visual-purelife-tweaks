
import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  backUrl?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, backUrl = "/" }) => {
  return (
    <header className="bg-purelife-beige py-4 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center">
          <Link to={backUrl}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold ml-4">
            <span className="gradient-text">{title}</span>
          </h1>
        </div>
      </div>
    </header>
  );
};
