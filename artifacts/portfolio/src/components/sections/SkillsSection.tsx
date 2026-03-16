import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, BarChart2, Wrench, Monitor, Bot } from "lucide-react";

const skillCategories = [
  {
    title: "Operations & Process Management",
    icon: ClipboardList,
    color: "text-primary",
    skills: [
      "Escalation Resolution",
      "Grievance Management",
      "Process Mapping",
      "Process Tracking",
      "Quality Assurance",
      "Claims Adjudication",
      "Service Coordination",
      "SOP Documentation",
      "SOP Development",
      "Service Delivery",
      "Workflow Optimisation",
      "Appointment Scheduling",
    ],
  },
  {
    title: "Data Analysis & MIS Reporting",
    icon: BarChart2,
    color: "text-accent",
    skills: [
      "Data Analysis with Python",
      "Data Tracking",
      "Data Testing",
      "Data Validation",
      "Data-driven Insights",
      "KPI Monitoring",
      "MIS Reporting",
      "Reporting & Dashboards",
      "Trend Analysis",
    ],
  },
  {
    title: "Technical Tools & Software",
    icon: Wrench,
    color: "text-primary",
    skills: [
      "Excel",
      "Google Sheets",
      "Power BI",
      "SQL",
      "Python",
      "CRM Systems",
      "Zoho Projects",
      "Zoho Ticketing Systems",
      "Ticketing Platforms",
      "Business Intelligence Software",
    ],
  },
  {
    title: "Healthcare Domain Expertise",
    icon: Monitor,
    color: "text-accent",
    skills: [
      "Cashless Authorisation",
      "Clinical Support Services",
      "HIS / EMR Systems",
      "Healthcare Operations",
      "Insurance Claims Processing",
      "Prescription & Lab Test Management",
      "Provider Network Coordination",
      "TPA Coordination",
    ],
  },
  {
    title: "AI Tools",
    icon: Bot,
    color: "text-primary",
    skills: [
      "ChatGPT",
      "GitHub Copilot",
      "AI Model Training & Validation",
      "AI Data Quality Assurance",
      "Prompt Engineering",
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="max-w-6xl mx-auto py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="w-20 h-1.5 bg-primary rounded-full mb-8"></div>
        <p className="text-muted-foreground max-w-2xl text-lg">
          A structured overview of my skills across operations, data analysis, technical tools, healthcare domain expertise, and AI tools.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                <Icon className={`w-5 h-5 shrink-0 ${category.color}`} />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-3 py-1.5 text-sm bg-card hover:bg-primary/10 hover:border-primary/40 transition-colors cursor-default border-border/50 rounded-lg"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
