import { useState } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const projects = [
    {
      title: "Security Monitoring System on AWS",
      description: "A guide on building a comprehensive security monitoring system using AWS CloudTrail, CloudWatch, and SNS for enhanced cloud infrastructure security.",
      link: "https://medium.com/@haidersarfraz0323/build-a-security-monitoring-system-on-aws-cloudtrail-cloudwatch-sns-079e47494556",
    },
    {
      title: "Monster Rolodex",
      description: "A React application that displays a collection of monsters with search functionality and responsive design.",
      link: "https://github.com/haiderali9-9/-monster-rolodox",
    },
    {
      title: "Meal Search",
      description: "An application to search for meals and recipes with detailed information and instructions.",
      link: "https://github.com/haiderali9-9/mealsearch",
    },
    {
      title: "Find Pokemon",
      description: "A Pokemon search application built with modern web technologies to explore and discover Pokemon.",
      link: "https://github.com/haiderali9-9/FindPokemon",
    },
    {
      title: "Carpool",
      description: "A carpooling platform to connect drivers and passengers for shared rides and sustainable transportation.",
      link: "https://github.com/haiderali9-9/Carpool",
    },
  ];

  const filteredProjects = projects.filter((project) => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg text-muted-foreground">No projects found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
