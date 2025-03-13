import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CapabilityStrategy() {
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
              <h1 className="text-4xl font-bold mb-6 text-white">Capability & Skills Strategy</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
                <p>
                  Design pragmatic skills frameworks that drive organizational readiness without 
                  unnecessary complexity. Our services include:
                </p>

                <ul className="text-white/90">
                  <li>Assessment of organizational capability gaps against strategic objectives</li>
                  <li>Design of focused skills frameworks that prioritize critical roles and capabilities</li>
                  <li>Implementation of skills assessment methodologies that balance accuracy and simplicity</li>
                  <li>Development of internal talent marketplaces and mobility systems</li>
                  <li>Creation of targeted upskilling programs aligned with capability needs</li>
                  <li>Integration of skills frameworks with hiring and development planning</li>
                </ul>

                <div className="my-12">
                  <img 
                    src="/images/Skills_Visual.png"
                    alt="Skills and Capability Framework"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>

                <p>
                  We take a practical approach that avoids common pitfalls of overly complex skills 
                  initiatives while delivering genuine impact on organizational capability.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}