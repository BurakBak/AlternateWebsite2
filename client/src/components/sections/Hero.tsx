import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming <span className="text-primary">HR</span> Through AI and Evidence
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Unlock the full potential of your HR department with cutting-edge AI solutions
              and evidence-based strategies. Our expert consultancy brings innovation to
              your human resources operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <img
                src="/images/Profile_Suit.jpg"
                alt="Burak Bakkaloglu - HR Consultant"
                className="rounded-lg object-cover shadow-xl w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}