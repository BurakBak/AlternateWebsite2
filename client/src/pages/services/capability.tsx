import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CapabilityStrategy() {
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
          <h1 className="text-4xl font-bold mb-6">Capability & Skills Strategy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Design pragmatic skills frameworks that drive organizational readiness without 
              unnecessary complexity. Our services include:
            </p>

            <ul>
              <li>Assessment of organizational capability gaps against strategic objectives</li>
              <li>Design of focused skills frameworks that prioritize critical roles and capabilities</li>
              <li>Implementation of skills assessment methodologies that balance accuracy and simplicity</li>
              <li>Development of internal talent marketplaces and mobility systems</li>
              <li>Creation of targeted upskilling programs aligned with capability needs</li>
              <li>Integration of skills frameworks with hiring and development planning</li>
            </ul>

            <p>
              We take a practical approach that avoids common pitfalls of overly complex skills 
              initiatives while delivering genuine impact on organizational capability.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
