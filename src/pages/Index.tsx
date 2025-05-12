
import { ArrowRight, Heart, Leaf, Smile, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome to PureLife!",
      description: "Your journey to a healthier lifestyle begins now.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-purelife-beige to-white pt-20 pb-32 px-4 md:px-8">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzRThBMzUiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnYtNmgtNnY2aDZ6bS02IDB2NmgtNnYtNmg2em0xMiAwdjZoNnYtNmgtNnoiLz48cGF0aCBkPSJNMzAgMjR2NmgtNnYtNmg2em0xMiAwdjZoLTZ2LTZoNnptLTYgNnY2aC02di02aDZ6bS02IDB2LTZoLTZ2Nmg2em0tNiAwdjZoLTZ2LTZoNnptMjQgMHY2aC02di02aDZ6Ii8+PHBhdGggZD0iTTM2IDI0VjBoNnYyNGgtNnptNiAwVjBoNnYyNGgtNnptLTYtMTJWMGgtNnYxMmg2em0tNiAwVjBoLTZ2MTJoNnptMTIgMFYwaDZ2MTJoLTZ6Ii8+PHBhdGggZD0iTTMwIDEyVjBoLTZ2MTJoNnptMTIgMFYwaC02djEyaDZ6bS02IDEydi0xMmgtNnYxMmg2em0tNiAwdi0xMmgtNnYxMmg2em0tNiAwdi0xMmgtNnYxMmg2em0yNCAwdi0xMmgtNnYxMmg2eiIvPjxwYXRoIGQ9Ik0zMCAwaDZ2NmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40 mix-blend-soft-light"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left animate-fade-in">
              <h1 className="font-bold mb-6">
                <span className="gradient-text">Pure</span>
                <span className="text-purelife-brown">Life</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-purelife-gray max-w-xl">
                Embrace a healthier lifestyle with our holistic approach to wellness, nutrition, and mindfulness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button onClick={handleGetStarted} size="lg" className="bg-purelife-green hover:bg-purelife-green-dark btn-hover">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-purelife-green text-purelife-green hover:text-purelife-green-dark hover:border-purelife-green-dark btn-hover">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1 relative max-w-md">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purelife-green/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purelife-orange/10 rounded-full animate-pulse-slow delay-150"></div>
              <div className="bg-white rounded-2xl shadow-xl p-6 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1611222565457-818dd10d28d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Wellness lifestyle" 
                  className="w-full h-auto rounded-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "10K+", label: "Happy Users", icon: Smile },
              { value: "50+", label: "Wellness Experts", icon: Heart },
              { value: "200+", label: "Natural Recipes", icon: Leaf },
              { value: "365", label: "Days of Wellness", icon: Sun },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purelife-green/10 mb-4">
                  <stat.icon className="h-6 w-6 text-purelife-green" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-purelife-brown">{stat.value}</div>
                <div className="text-sm text-purelife-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 gradient-text">Our Approach to Wellness</h2>
            <p className="text-purelife-gray max-w-2xl mx-auto">
              We believe in a holistic approach to health that nurtures your mind, body, and spirit for a balanced life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mindful Nutrition",
                description: "Discover wholesome, nutrient-rich foods that fuel your body and support overall health.",
                image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80"
              },
              {
                title: "Regular Exercise",
                description: "Find activities you enjoy that keep you moving and help maintain physical strength and flexibility.",
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              },
              {
                title: "Mindfulness Practice",
                description: "Cultivate awareness and presence through meditation and mindfulness techniques.",
                image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
                <CardHeader className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-medium mb-2 text-purelife-brown">{feature.title}</h3>
                  <p className="text-purelife-gray">{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-purelife-green hover:text-purelife-green-dark p-0">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-purelife-green-light/20 to-purelife-blue/20 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="mb-4 text-purelife-brown">Start Your Wellness Journey Today</h2>
                <p className="text-purelife-gray max-w-md">
                  Join thousands of people who have transformed their lives with our holistic approach to health and wellness.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleGetStarted} size="lg" className="bg-purelife-green hover:bg-purelife-green-dark btn-hover">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-purelife-green text-purelife-green hover:text-purelife-green-dark hover:border-purelife-green-dark btn-hover">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purelife-beige py-12 px-4 md:px-8 mt-auto">
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
              <a href="#" className="text-purelife-brown hover:text-purelife-green">Home</a>
              <a href="#" className="text-purelife-brown hover:text-purelife-green">About</a>
              <a href="#" className="text-purelife-brown hover:text-purelife-green">Services</a>
              <a href="#" className="text-purelife-brown hover:text-purelife-green">Blog</a>
              <a href="#" className="text-purelife-brown hover:text-purelife-green">Contact</a>
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

export default Index;
