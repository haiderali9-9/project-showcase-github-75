import * as React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const cardEmojis = ['🚀', '💻', '⚡', '🎯', '🌟', '✨'];

const getRandomEmoji = () => cardEmojis[Math.floor(Math.random() * cardEmojis.length)];

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  const [emoji] = React.useState(getRandomEmoji());
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <Card 
      className="card-hover card-gradient-border cursor-pointer group relative" 
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fun floating emoji */}
      <div className={`absolute -top-4 -right-4 text-4xl transition-all duration-300 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`}>
        {emoji}
      </div>
      
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3 bg-gradient-to-r from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-mid))] to-[hsl(var(--gradient-end))] bg-clip-text text-transparent">
          <span className="flex-1">{title}</span>
          <ExternalLink className="h-6 w-6 text-primary shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-12" />
        </CardTitle>
        <CardDescription className="text-base mt-3">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default ProjectCard;
