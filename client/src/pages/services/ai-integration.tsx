import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AIIntegration() {
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
              <h1 className="text-4xl font-bold mb-6 text-white">AI Integration for People Functions</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
                <p>
                  Harness the power of AI to revolutionize your HR practices while maintaining 
                  human-centered approaches. Our services include:
                </p>

                <ul className="text-white/90">
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
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}