import { Github, Linkedin, Mail, Phone } from "lucide-react";
import rocket from "@/assets/rocket-new.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-primary/30 bg-gradient-to-b from-background via-background to-primary/5 backdrop-blur-sm overflow-hidden">
      {/* Sci-fi grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated glow lines */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="relative p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
            
            <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              CONTACT
            </h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/haiderali9-9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary before:transition-all before:duration-300 hover:before:h-full hover:translate-x-1"
              >
                <Github className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-mono text-sm">github.com/haiderali9-9</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/hyderali99/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary before:transition-all before:duration-300 hover:before:h-full hover:translate-x-1"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-mono text-sm">linkedin.com/in/hyderali99</span>
              </a>
              
              <a 
                href="mailto:haidersarfraz0323@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary before:transition-all before:duration-300 hover:before:h-full hover:translate-x-1"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-mono text-sm">haidersarfraz0323@gmail.com</span>
              </a>
              
              <a 
                href="mailto:haider.allee.99@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary before:transition-all before:duration-300 hover:before:h-full hover:translate-x-1"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-mono text-sm">haider.allee.99@gmail.com</span>
              </a>
              
              <a 
                href="tel:+923059903170"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-all duration-300 group relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-0 before:bg-primary before:transition-all before:duration-300 hover:before:h-full hover:translate-x-1"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(var(--primary))] transition-all duration-300" />
                <span className="font-mono text-sm">+92 305 990 3170</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="relative p-6 rounded-lg bg-gradient-to-br from-accent/5 to-primary/5 border border-accent/20 backdrop-blur-sm flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-accent" />
            
            <div>
              <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                INTRODUCTION
              </h3>
              <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                Senior DevOps Engineer & Cloud Solutions Architect with expertise in Kubernetes orchestration, AWS infrastructure, CI/CD automation, and cloud-native application deployment. Specialized in building scalable, highly available systems with infrastructure-as-code and GitOps methodologies.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-accent/20">
              <p className="text-sm text-muted-foreground font-mono flex items-center gap-2">
                <span className="text-accent">©</span>
                <span>{new Date().getFullYear()}</span>
                <span className="text-accent">|</span>
                <span>All rights reserved</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
      
      {/* Animated Rocket with Enhanced Effects */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 animate-rocket-launch pointer-events-none">
        {/* Enhanced Smoke Trail with Particles */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 w-16 h-40 opacity-70">
          <div className="absolute inset-0 bg-gradient-to-t from-orange-500/70 via-yellow-400/50 to-transparent blur-2xl animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-t from-red-400/50 via-orange-300/40 to-transparent blur-xl animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-gray-100/30 to-transparent blur-lg animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
        
        {/* Sparkles/Stars */}
        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-24 h-24">
          <div className="absolute top-2 left-0 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDuration: '1.5s' }} />
          <div className="absolute top-8 right-2 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <div className="absolute top-14 left-4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '1.8s', animationDelay: '0.3s' }} />
        </div>
        
        {/* Speed Lines */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 w-20 h-32 opacity-40">
          <div className="absolute top-0 left-1/4 w-0.5 h-4 bg-gradient-to-t from-primary to-transparent animate-pulse" />
          <div className="absolute top-2 right-1/4 w-0.5 h-6 bg-gradient-to-t from-primary to-transparent animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="absolute top-6 left-1/3 w-0.5 h-5 bg-gradient-to-t from-accent to-transparent animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        
        {/* Rocket with rotation */}
        <img 
          src={rocket} 
          alt="Rocket launching" 
          className="w-20 h-20 object-contain rotate-0 drop-shadow-[0_0_25px_rgba(255,165,0,0.8)]"
        />
        
        {/* Glow ring around rocket */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
      </div>
    </footer>
  );
};

export default Footer;
