import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PeopleDevelopment() {
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
              <h1 className="text-4xl font-bold mb-6 text-white">People Function Development</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
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

                <ul className="text-white/90 list-none pl-0">
                  {[
                    "AI literacy and application training for HR professionals",
                    "Skills framework development and implementation guidance",
                    "Leadership development program design for the AI era",
                    "Change management capabilities for digital transformation",
                    "Data literacy and analytics for HR decision-making"
                  ].map((item, index) => (
                    <li key={index} className="pl-6 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                      {item}
                    </li>
                  ))}
                </ul>

                <p>
                  We prepare your HR teams to lead rather than react to the changing landscape of work.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}