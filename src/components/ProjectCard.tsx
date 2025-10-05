
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Card className="card-hover card-gradient-border cursor-pointer group" onClick={() => window.open(link, "_blank")}>
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
