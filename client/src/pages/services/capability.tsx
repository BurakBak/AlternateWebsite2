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
          <Card className="border-2 border-primary/20 bg-blue-500/5 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold mb-6 text-white">Capability & Skills Strategy</h1>
              <div className="prose prose-lg prose-invert max-w-none text-white/90">
                <p>
                  An organization is "skills-based" when the majority of talent practices are based on skills. It is a journey starting with a skills framework and continuing with basing that framework on other talent applications like internal and external hiring, promotions, workforce planning, and employee development. 
                  Every organization cannot fully embark on that journey; a skills framework and skills-based organization require careful design and good deployment. A skills initiative will be overkill for any company with fewer than a few thousand employees.  
                </p>

                <ul className="text-white/90 list-none pl-0">
                  {[
                    "Understanding the business needs for Skills Framework and provide alternative scopes of Skills work that will fit the needs of the organization.",
                    "Scoping the roles and understanding the necessary investments for the work ahead. Leveraging already existing frameworks in the market where possible to avoid unnecessary effort.",
                    "Design of focused skills frameworks that prioritize critical roles and capabilities",
                    "Implementation of skills assessment methodologies that balance accuracy and simplicity",
                    "Understanding organizational skill gaps and future readiness.",
                    "Development of Skills Practices as: internal talent marketplaces and mobility systems, targeted upskilling programs aligned with capability needs, create insights for build buy borrow decisions to for future readiness"
                  ].map((item, index) => (
                    <li key={index} className="pl-6 relative before:content-['-'] before:absolute before:left-0 before:text-primary">
                      {item}
                    </li>
                  ))}
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