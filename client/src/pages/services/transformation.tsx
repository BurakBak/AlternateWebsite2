import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PeopleTransformation() {
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
          <h1 className="text-4xl font-bold mb-6">People Function Transformation</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              We can help create the right people function organization and infrastructure for your business. 
              The work goes beyond traditional moving organization boxes and changing the titles, to designing 
              the infrastructure, capabilities and ways of working together with you, powered by AI. Our approach includes:
            </p>

            <ul>
              <li>Redesigning HR operating models for the AI era</li>
              <li>Building data architecture and technological infrastructure</li>
              <li>Developing skills and capabilities within HR teams</li>
              <li>Creating governance structures that enable strategic impact</li>
              <li>Implementing new people processes that leverage AI capabilities</li>
            </ul>

            <p>
              Our transformation methodology ensures your people function becomes a true strategic 
              partner to the business with measurable impact on organizational performance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
