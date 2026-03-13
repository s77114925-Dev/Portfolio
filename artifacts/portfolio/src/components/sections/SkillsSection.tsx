import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, BarChart2, Wrench, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Operations & Process Management",
    icon: ClipboardList,
    color: "text-primary",
    skills: [
      "Process Tracking",
      "Workflow Optimization",
      "SOP Documentation",
      "Service Coordination",
      "Escalation Handling",
      "Quality Assurance",
    ],
  },
  {
    title: "Data Analysis & MIS Reporting",
    icon: BarChart2,
    color: "text-accent",
    skills: [
      "MIS Reporting",
      "KPI Monitoring",
      "Data Validation",
      "Data Analysis",
      "Reporting & Dashboards",
      "Trend Analysis",
      "Operational Data Tracking",
    ],
  },
  {
    title: "Technical Tools",
    icon: Wrench,
    color: "text-primary",
    skills: [
      "Excel",
      "Google Sheets",
      "Power BI",
      "SQL",
      "Python",
      "Business Intelligence Tools",
    ],
  },
  {
    title: "Systems & Platforms",
    icon: Monitor,
    color: "text-accent",
    skills: [
      "CRM Systems",
      "Zoho Projects",
      "Ticketing Platforms",
      "HIS / EMR Systems",
      "Healthcare Data Systems",
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
          A structured overview of my skills across operations, data analysis, technical tools, and the platforms I work with.
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
