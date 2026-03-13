import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink, X, Database, Download, Cpu, BarChart2,
  ClipboardList, ShieldCheck, Zap, FileCheck,
  Layers, Filter, PieChart, TrendingUp,
  HardDrive, Terminal, CheckCircle2, Package,
  ArrowRight
} from "lucide-react";

/* ─── Types ─────────────────────────────────────────────── */
interface WorkflowStep {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  metric: string;
  features: string[];
  impact: string;
  workflow: WorkflowStep[];
}

/* ─── Data ───────────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "Automated Data Extraction & Processing Pipeline",
    description:
      "Developed an automated workflow to extract operational data from a vendor management portal and structure it for reporting and analysis. The automation reduced manual data collection effort and improved data availability for operational reporting.",
    tags: ["Python", "Data Extraction", "Automation"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    metric: "Automated data collection workflow",
    features: [
      "Automated end-to-end data extraction from portal",
      "Structured output ready for analysis",
      "Reduced manual data collection effort",
      "Improved data availability for operations",
    ],
    impact:
      "Eliminated manual data collection steps, making operational data available faster and with greater consistency for reporting teams.",
    workflow: [
      { icon: Database,    title: "Data Source",       description: "Vendor management portal containing operational data." },
      { icon: Download,    title: "Automated Extraction", description: "Python scripts collect and extract the required records." },
      { icon: Cpu,         title: "Data Processing",   description: "Extracted data is structured and validated for reporting." },
      { icon: BarChart2,   title: "Reporting Output",  description: "Processed datasets are used for analysis and operational reports." },
    ],
  },
  {
    title: "Excel Workflow Automation System",
    description:
      "Designed an Excel-based automation workflow to streamline internal transfer processing tasks. Implemented VBA logic to validate records, organize data, and reduce repetitive manual operations.",
    tags: ["Excel", "VBA", "Process Automation"],
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
    metric: "Reduced manual processing effort",
    features: [
      "VBA-driven validation and data integrity checks",
      "Automated organization of transfer records",
      "Reduction in repetitive manual steps",
      "Structured output ready for operations",
    ],
    impact:
      "Streamlined the transfer processing cycle, reducing manual effort and minimizing errors through automated validation logic.",
    workflow: [
      { icon: ClipboardList, title: "Input Records",       description: "Operational transfer records entered into Excel." },
      { icon: ShieldCheck,   title: "Validation Logic",    description: "VBA logic checks data integrity and validates records." },
      { icon: Zap,           title: "Automation Workflow", description: "Automated macros organize and process the data." },
      { icon: FileCheck,     title: "Processed Output",    description: "Validated records prepared for reporting and operations." },
    ],
  },
  {
    title: "Operational Reporting Automation",
    description:
      "Built structured reporting workflows for operational datasets, enabling faster preparation of MIS reports and improving visibility into key operational metrics.",
    tags: ["Excel", "Data Analysis", "MIS Reporting"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    metric: "Improved reporting efficiency",
    features: [
      "Structured MIS reporting templates",
      "Faster report preparation cycles",
      "Improved visibility into operational KPIs",
      "Data validation built into reporting workflow",
    ],
    impact:
      "Enabled the operations team to generate structured MIS reports significantly faster, with improved consistency and KPI visibility.",
    workflow: [
      { icon: Layers,    title: "Data Collection",    description: "Operational datasets gathered from multiple sources." },
      { icon: Filter,    title: "Data Cleaning",      description: "Data validation and formatting for accuracy." },
      { icon: PieChart,  title: "MIS Reporting",      description: "Automated reporting templates generate structured reports." },
      { icon: TrendingUp,title: "Operational Insights",description: "Reports support monitoring of KPIs and operational performance." },
    ],
  },
  {
    title: "Automated Data Processing Scripts",
    description:
      "Developed Python scripts to process large operational datasets, perform validation checks, and generate structured outputs used for internal reporting and analytics.",
    tags: ["Python", "Data Processing", "Automation"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    metric: "Handled high-volume operational data",
    features: [
      "High-volume dataset processing via Python",
      "Automated validation and quality checks",
      "Structured outputs for reporting and analytics",
      "Repeatable and scalable script design",
    ],
    impact:
      "Enabled consistent processing of large operational datasets with automated validation, reducing manual effort and supporting reliable analytics.",
    workflow: [
      { icon: HardDrive,     title: "Raw Dataset",        description: "Large operational datasets received for processing." },
      { icon: Terminal,      title: "Script Execution",   description: "Python scripts process and transform the data." },
      { icon: CheckCircle2,  title: "Validation Checks",  description: "Automated validation ensures accuracy." },
      { icon: Package,       title: "Structured Output",  description: "Clean datasets prepared for analysis and reporting." },
    ],
  },
];

/* ─── Workflow Step Component ────────────────────────────── */
function WorkflowDiagram({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-3">
      {steps.map((step, i) => {
        const Icon = step.icon;
        return (
          <div key={step.title} className="flex flex-col md:flex-row items-center flex-1 min-w-0">
            {/* Step card */}
            <div className="flex-1 w-full bg-card border border-border/60 rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <p className="font-semibold text-sm text-foreground leading-tight">{step.title}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
            {/* Arrow connector (not after last step) */}
            {i < steps.length - 1 && (
              <div className="shrink-0 flex items-center justify-center px-1 py-2 md:py-0">
                <ArrowRight className="w-4 h-4 text-primary/50 rotate-90 md:rotate-0" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ─── Project Detail Modal ───────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Modal panel */}
        <motion.div
          className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border/60 rounded-3xl shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Hero image */}
          <div className="relative h-48 overflow-hidden rounded-t-3xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center hover:bg-background transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="absolute bottom-4 left-6">
              <Badge className="bg-background/80 backdrop-blur text-foreground border-border text-xs">
                {project.metric}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Title + tags */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">{project.description}</p>

            {/* Key Features */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
                Key Features
              </h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Workflow Overview */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 rounded-full bg-primary inline-block" />
                Workflow Overview
              </h4>
              <WorkflowDiagram steps={project.workflow} />
            </div>

            {/* Impact */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
              <h4 className="text-base font-bold text-primary mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Impact
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex justify-between items-end"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Operational Data &amp; <span className="text-primary">Automation Work</span>
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-4" />
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
                  <Badge className="bg-background/80 backdrop-blur text-foreground border-border">
                    {project.metric}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary/50 text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-grow">
                <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
              </CardContent>

              <CardFooter className="border-t border-border/50 pt-6 mt-auto">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setSelectedProject(project)}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}
