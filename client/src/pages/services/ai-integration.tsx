import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function AIIntegration() {
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
          <h1 className="text-4xl font-bold mb-6 text-foreground">AI Integration for People Functions</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none [&>p]:text-muted-foreground [&>ul]:text-muted-foreground">
            <p>
              Harness the power of AI to revolutionize your HR practices while maintaining 
              human-centered approaches. Our services include:
            </p>

            <ul>
              <li>Assessment of AI readiness across HR processes and systems</li>
              <li>Implementation of AI-powered talent applications (recruiting, development, skills assessment)</li>
              <li>Design of ethical guardrails for AI deployment in people decisions</li>
              <li>Creation of balanced AI implementation roadmaps that avoid common pitfalls</li>
              <li>Development of AI coaches and mentoring systems</li>
              <li>Building capabilities to manage AI-human collaboration effectively</li>
            </ul>

            <p>
              We help you navigate the AI landscape pragmatically, focusing on high-impact 
              applications while avoiding unnecessary complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}