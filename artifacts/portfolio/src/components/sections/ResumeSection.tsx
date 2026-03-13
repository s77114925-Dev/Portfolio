import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Senior Data Operations Analyst",
    company: "TechFlow Logistics",
    period: "2021 - Present",
    description: "Lead the automation of supply chain reporting. Replaced manual daily reporting with automated Python pipelines. Managed a team of 2 junior analysts.",
    achievements: [
      "Reduced weekly reporting time from 25 hours to 2 hours using Python and SQL.",
      "Developed a custom predictive inventory model saving $150k annually.",
      "Implemented PowerBI company-wide replacing static Excel dashboards."
    ]
  },
  {
    title: "Automation Specialist",
    company: "FinCorp Solutions",
    period: "2018 - 2021",
    description: "Dedicated Excel and VBA developer for the financial planning division. Created custom ribbon add-ins and standardized reporting templates.",
    achievements: [
      "Built a suite of 15+ VBA tools used daily by a department of 40 users.",
      "Automated the monthly variance analysis process using Power Query.",
      "Trained staff on advanced Excel functions and basic automation principles."
    ]
  },
  {
    title: "Data Analyst",
    company: "Retail Metrics Inc",
    period: "2016 - 2018",
    description: "Analyzed consumer purchasing behavior. Cleaned large datasets and prepared data for the data science team.",
    achievements: [
      "Processed datasets exceeding 5 million rows using SQL.",
      "Designed daily KPI reports using early versions of PowerPivot."
    ]
  }
];

export default function ResumeSection() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <Button className="shrink-0" onClick={() => console.log("Download triggered")}>
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </Button>
      </motion.div>

      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mr-4">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          
          <div className="space-y-8 pl-6 border-l-2 border-border/50 ml-6">
            {experience.map((job, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute w-4 h-4 bg-background border-2 border-primary rounded-full -left-[41px] top-1.5 ring-4 ring-background" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h4 className="text-xl font-bold text-foreground">{job.title}</h4>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">{job.period}</span>
                </div>
                <h5 className="text-lg text-muted-foreground mb-4">{job.company}</h5>
                <p className="text-muted-foreground mb-4 leading-relaxed">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((ach, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mr-4">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          
          <div className="pl-6 border-l-2 border-border/50 ml-6">
            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-background border-2 border-accent rounded-full -left-[41px] top-1.5 ring-4 ring-background" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                <h4 className="text-xl font-bold text-foreground">B.S. in Information Systems</h4>
                <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">2012 - 2016</span>
              </div>
              <h5 className="text-lg text-muted-foreground">State University</h5>
              <p className="text-muted-foreground mt-2">Minor in Business Administration. Graduated Cum Laude.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
