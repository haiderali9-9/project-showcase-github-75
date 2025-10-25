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
  
  if (text.includes('windows') || text.includes('rdp') || text.includes('remote desktop')) return '🪟';
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
      className="cursor-pointer group relative overflow-hidden border border-primary/30 bg-gradient-to-br from-background via-background to-primary/5 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]" 
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sci-fi grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>
      
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:w-4 group-hover:h-4" />
      
      {/* Animated top glow line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
      
      {/* Scan line effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-scan pointer-events-none" />
      )}
      
      {/* Contextual emoji indicator with enhanced sci-fi styling */}
      <div className={`absolute -top-3 -right-3 text-4xl transition-all duration-500 z-20 ${isHovered ? 'scale-125 -rotate-12' : 'scale-100'}`}>
        <div className="relative">
          <span className="inline-block animate-bounce" style={{ animationDuration: '2s' }}>
            {emoji}
          </span>
          {isHovered && (
            <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
          )}
        </div>
      </div>
      
      {/* Enhanced glow effect on hover */}
      {isHovered && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--gradient-start)_/_0.15)] to-[hsl(var(--gradient-end)_/_0.15)] rounded-lg -z-10 blur-xl scale-105 transition-all duration-300" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        </>
      )}
      
      <CardHeader className="relative z-10">
        {/* Status indicator */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs font-mono text-primary/80 uppercase tracking-wider">Active Project</span>
        </div>
        
        <CardTitle className="flex items-center justify-between gap-3 text-foreground group-hover:text-primary transition-colors duration-300 pr-8">
          <span className="flex-1 font-mono font-bold tracking-tight">{title}</span>
          <div className="relative">
            <ExternalLink className="h-6 w-6 text-primary shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
            {isHovered && (
              <div className="absolute inset-0 bg-primary/50 blur-md animate-pulse" />
            )}
          </div>
        </CardTitle>
        <CardDescription className="text-base mt-3 leading-relaxed font-mono text-muted-foreground">
          {description}
        </CardDescription>
        
        {/* Bottom tech line */}
        <div className="mt-4 pt-4 border-t border-primary/20 flex items-center gap-2">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
          <span className="text-xs font-mono text-primary/60">SYSTEM ONLINE</span>
          <div className="flex-1 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
