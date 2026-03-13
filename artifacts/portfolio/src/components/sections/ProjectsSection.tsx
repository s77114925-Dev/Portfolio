import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Vendor Portal Data Extraction Automation",
    description: "Developed an automated workflow to extract operational data from a vendor management portal and structure it for reporting and analysis. The automation reduced manual data collection effort and improved data availability for operational reporting.",
    tags: ["Python", "Data Extraction", "Automation"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    metric: "Automated data collection workflow"
  },
  {
    title: "Excel Workflow Automation for Transfer Processing",
    description: "Designed an Excel-based automation workflow to streamline internal transfer processing tasks. Implemented VBA logic to validate records, organize data, and reduce repetitive manual operations.",
    tags: ["Excel", "VBA", "Process Automation"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    metric: "Reduced manual processing effort"
  },
  {
    title: "Operational Data Reporting Automation",
    description: "Built structured reporting workflows for operational datasets, enabling faster preparation of MIS reports and improving visibility into key operational metrics.",
    tags: ["Excel", "Data Analysis", "MIS Reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    metric: "Improved reporting efficiency"
  },
  {
    title: "Automated Data Processing Scripts",
    description: "Developed Python scripts to process large operational datasets, perform validation checks, and generate structured outputs used for internal reporting and analytics.",
    tags: ["Python", "Data Processing", "Automation"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    metric: "Handled high-volume operational data"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Data &amp; <span className="text-primary">Automation Work</span></h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl text-lg">
            Practical automation and data workflow solutions built to improve operational efficiency and reporting.
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
