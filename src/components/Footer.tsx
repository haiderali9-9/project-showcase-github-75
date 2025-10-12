import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a 
                href="https://github.com/haiderali9-9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>github.com/haiderali9-9</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/hyderali99/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>linkedin.com/in/hyderali99</span>
              </a>
              
              <a 
                href="mailto:haidersarfraz0323@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>haidersarfraz0323@gmail.com</span>
              </a>
              
              <a 
                href="mailto:haider.allee.99@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>haider.allee.99@gmail.com</span>
              </a>
              
              <a 
                href="tel:+923059903170"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>+92 305 990 3170</span>
              </a>
            </div>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">About</h3>
              <p className="text-muted-foreground">
                DevOps Engineer & Cloud Architect specializing in Kubernetes, AWS, and cloud-native technologies.
              </p>
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
