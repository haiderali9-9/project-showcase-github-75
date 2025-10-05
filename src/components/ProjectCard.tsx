import * as React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

// Get contextual emoji based on project keywords
const getProjectEmoji = (title: string, description: string) => {
  const text = (title + " " + description).toLowerCase();
  
  if (text.includes('kubernetes') || text.includes('k8s') || text.includes('docker')) return '🐳';
  if (text.includes('security') || text.includes('monitoring')) return '🔒';
  if (text.includes('aws') || text.includes('cloud')) return '☁️';
  if (text.includes('gitops') || text.includes('argo') || text.includes('git')) return '🔄';
  if (text.includes('pokemon')) return '⚡';
  if (text.includes('monster')) return '👾';
  if (text.includes('meal') || text.includes('food')) return '🍽️';
  if (text.includes('carpool') || text.includes('ride')) return '🚗';
  if (text.includes('react') || text.includes('frontend')) return '⚛️';
  
  return '💼';
};

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  const emoji = getProjectEmoji(title, description);
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Card 
      className="card-hover card-gradient-border cursor-pointer group relative overflow-visible" 
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contextual emoji indicator */}
      <div className={`absolute -top-3 -right-3 text-4xl transition-all duration-500 z-10 ${isHovered ? 'scale-125 -rotate-12 drop-shadow-2xl' : 'scale-100'}`}>
        <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>
          {emoji}
        </span>
      </div>
      
      {/* Glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-start)_/_0.1)] to-[hsl(var(--gradient-end)_/_0.1)] rounded-lg -z-10 blur-xl scale-105 transition-all duration-300" />
      )}
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent pr-8">
          <span className="flex-1">{title}</span>
          <ExternalLink className="h-6 w-6 text-primary shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </CardTitle>
        <CardDescription className="text-base mt-3 leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
