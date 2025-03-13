import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Brain, Users, LineChart, Lightbulb, Cog, ArrowRight } from "lucide-react";
import BlogFeed from "./BlogFeed";

const services = [
  {
    icon: Brain,
    title: "People Function Transformation",
    description:
      "Transform your People Function for AI era by redesigning your operating model and workflows. We build the right infrastructure, capabilities, and ways of working that deliver measurable business impact.",
    href: "/services/transformation"
  },
  {
    icon: LineChart,
    title: "People Function Strategy Design & Execution",
    description:
      "Develop and implement comprehensive people strategies that address root causes. We combine operational data analysis, employee insights, and market benchmarking to create strategies aligned with your business objectives.",
    href: "/services/strategy"
  },
  {
    icon: Users,
    title: "People Function Development",
    description:
      "Prepare your HR teams for the future through targeted upskilling in HR digitalization and AI applications. Our training programs equip your people professionals with the knowledge needed to lead in an AI-dominant landscape.",
    href: "/services/development"
  },
  {
    icon: Cog,
    title: "AI Integration for People Functions",
    description:
      "Navigate the AI revolution in HR with practical, high-impact applications that maintain human-centered approaches. We assess your AI readiness and implement AI-powered talent solutions with ethical frameworks.",
    href: "/services/ai-integration"
  },
  {
    icon: Lightbulb,
    title: "Capability & Skills Strategy",
    description:
      "Build organizational readiness through pragmatic skills frameworks that focus on critical capabilities. We identify gaps, design frameworks, and create targeted development systems aligned with strategic needs.",
    href: "/services/capability"
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
                  We partner with forward-thinking organizations to transform People Functions into strategic drivers of AI-powered business success through targeted consulting, capability building, and implementation support.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <motion.div key={index} variants={item}>
                      <Link href={service.href}>
                        <Card className="h-full transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group">
                          <CardHeader>
                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                              <service.icon className="w-8 h-8 text-primary" />
                            </div>
                            <CardTitle className="text-2xl flex items-center gap-2">
                              {service.title}
                              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base">
                              {service.description}
                            </CardDescription>
                          </CardContent>
                        </Card>
                      </Link>
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