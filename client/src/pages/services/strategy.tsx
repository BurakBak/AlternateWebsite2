import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PeopleStrategy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link href="/#services">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6 text-foreground">People Function Strategy Design & Execution</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none [&>p]:text-muted-foreground [&>ul]:text-muted-foreground">
            <p>
              We help you look past the symptoms and understand the underlying talent-related reasons 
              for business challenges and successes. Through a combination of operational data analysis, 
              employee insights, and market benchmarking, we create comprehensive people strategies 
              aligned with your business objectives.
            </p>

            <p>
              No strategy is good without diligent execution. We establish necessary governance 
              structures and work with your units throughout implementation. Our approach includes:
            </p>

            <ul>
              <li>Facilitating insight-driven strategy workshops with executive teams</li>
              <li>Setting up program management and execution frameworks</li>
              <li>Designing monitoring systems without unnecessary KPIs</li>
              <li>Creating accountability mechanisms for strategy implementation</li>
              <li>Supporting leaders through the change process</li>
              <li>Adjusting strategies based on implementation feedback</li>
            </ul>

            <p>
              Our end-to-end approach ensures your people strategy moves beyond PowerPoint to create 
              real business impact.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}