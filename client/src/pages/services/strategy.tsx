import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PeopleStrategy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
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
          <Card className="border border-blue-200/10 bg-blue-500/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold mb-6 text-white">People Function Strategy Design & Execution</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
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

                <ul className="text-white/90 list-none pl-0">
                  {[
                    "Facilitating insight-driven strategy workshops with executive teams",
                    "Setting up program management and execution frameworks",
                    "Designing monitoring systems without unnecessary KPIs",
                    "Creating accountability mechanisms for strategy implementation",
                    "Supporting leaders through the change process",
                    "Adjusting strategies based on implementation feedback"
                  ].map((item, index) => (
                    <li key={index} className="pl-6 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  Our end-to-end approach ensures your people strategy moves beyond PowerPoint to create 
                  real business impact.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}