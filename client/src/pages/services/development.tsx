import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PeopleDevelopment() {
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
          <h1 className="text-4xl font-bold mb-6 text-foreground">People Function Development</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none [&>p]:text-muted-foreground [&>ul]:text-muted-foreground">
            <p>
              Develop and upskill your HR organization in digitalization of HR and use cases of AI. 
              In the form of online and in-class trainings, your HR teams can understand the landscape 
              of the future better and prepare themselves accordingly.
            </p>

            <p>
              This is a significant enabler for People Functions to proactively position themselves 
              for the AI-dominant future, helping business to navigate AI strategy and understand 
              the real future of work. Our development offerings include:
            </p>

            <ul>
              <li>AI literacy and application training for HR professionals</li>
              <li>Skills framework development and implementation guidance</li>
              <li>Leadership development program design for the AI era</li>
              <li>Change management capabilities for digital transformation</li>
              <li>Data literacy and analytics for HR decision-making</li>
            </ul>

            <p>
              We prepare your HR teams to lead rather than react to the changing landscape of work.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}