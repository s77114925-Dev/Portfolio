import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Excel Financial Reporting Suite",
    description: "A fully automated end-to-end reporting suite built in VBA and Power Query that consolidates data from 5 different ERP systems into a clean, interactive dashboard.",
    tags: ["Excel", "VBA", "Power Query", "Finance"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80", // spreadsheet graph abstract
    metric: "Saved 40 hrs/month"
  },
  {
    title: "Python E-Commerce Scraper Pipeline",
    description: "Automated daily web scraping script to monitor competitor pricing, analyze trends using Pandas, and send alert emails for price drops.",
    tags: ["Python", "Selenium", "Pandas", "SMTP"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", // code on screen
    metric: "10k+ rows processed daily"
  },
  {
    title: "AI Customer Support Classifier",
    description: "Integrated OpenAI's API into an existing Zendesk workflow to automatically tag, prioritize, and draft initial responses for incoming support tickets.",
    tags: ["Python", "OpenAI API", "Zendesk", "NLP"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // AI tech aesthetic
    metric: "Reduced response time by 60%"
  },
  {
    title: "Interactive Sales Dashboard",
    description: "Built a dynamic PowerBI dashboard directly connected to a live SQL database, featuring real-time drill-downs, predictive forecasting, and automated PDF exports.",
    tags: ["PowerBI", "SQL", "DAX", "Data Viz"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", // data visualization screens
    metric: "$2M revenue unlocked"
  }
];

export default function ProjectsSection() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Real-world solutions that solved real-world problems.
          </p>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full flex flex-col overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-background/80 backdrop-blur text-foreground border-border">{project.metric}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              
              <CardFooter className="border-t border-border/50 pt-6 mt-auto">
                <div className="flex gap-4 w-full">
                  <Button variant="outline" className="flex-1" onClick={() => console.log("View Details", project.title)}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => console.log("View Source", project.title)}>
                    <Github className="w-5 h-5" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
