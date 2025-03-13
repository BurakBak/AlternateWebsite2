import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Users, LineChart, Lightbulb } from "lucide-react";
import BlogFeed from "./BlogFeed";

const services = [
  {
    icon: Brain,
    title: "AI-Powered HR Transformation",
    description:
      "Leverage cutting-edge AI technology to automate HR processes, enhance decision-making, and create data-driven HR strategies.",
  },
  {
    icon: LineChart,
    title: "Performance Management",
    description:
      "Implement advanced performance tracking systems and develop metrics that align with your organization's strategic goals.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Build strong leaders through our comprehensive programs focusing on emotional intelligence, strategic thinking, and team management.",
  },
  {
    icon: Lightbulb,
    title: "Strategic HR Consulting",
    description:
      "Get expert guidance on HR strategy, organizational design, and change management to drive business success.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="h-full border-2">
              <CardHeader className="border-b bg-muted/50">
                <CardTitle className="text-4xl font-bold">Our Services</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive HR solutions powered by artificial intelligence and backed by
                  evidence-based practices.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <motion.div key={index} variants={item}>
                      <Card className="h-full transition-transform hover:-translate-y-2">
                        <CardHeader>
                          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                            <service.icon className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base">
                            {service.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <BlogFeed />
          </motion.div>
        </div>
      </div>
    </section>
  );
}