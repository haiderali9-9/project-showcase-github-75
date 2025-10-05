
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Card className="card-hover cursor-pointer" onClick={() => window.open(link, "_blank")}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <ExternalLink className="h-6 w-6 text-muted-foreground shrink-0" />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Maybe add tags or other metadata here in the future */}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
