import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PeopleTransformation() {
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
              <h1 className="text-4xl font-bold mb-6 text-white">People Function Transformation</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
                <p>
                  We can help create the right people function organization and infrastructure for your business. 
                  The work goes beyond traditional moving organization boxes and changing the titles, to designing 
                  the infrastructure, capabilities and ways of working together with you, powered by AI.
                </p>

                <p>Our approach includes:</p>

                <ul className="text-white/90 list-none pl-0">
                  {[
                    "Redesigning HR operating models for the AI era",
                    "Building data architecture and technological infrastructure",
                    "Developing skills and capabilities within HR teams",
                    "Creating governance structures that enable strategic impact",
                    "Implementing new people processes that leverage AI capabilities"
                  ].map((item, index) => (
                    <li key={index} className="pl-6 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  Our transformation methodology ensures your people function becomes a true strategic 
                  partner to the business with measurable impact on organizational performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}