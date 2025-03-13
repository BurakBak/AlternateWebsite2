import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] md:min-h-screen flex items-center pt-16 md:pt-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming <span className="text-primary">HR</span> Through <span className="text-primary">AI</span> and Evidence
            </h1>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              People Functions are uniquely positioned to make the AI transition of businesses a true success. At Alternate, we help People Functions transform themselves first, then lead their organizations into an AI-powered future.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-muted/10 border border-primary/20 rounded-lg p-6 mb-8 backdrop-blur-sm"
            >
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-sm md:text-base text-muted-foreground italic mb-4">
                "Alternate's service portfolio stands out in the consulting landscape, combining deep HR subject matter expertise with a refreshingly pragmatic approach. Their offerings demonstrate a rare understanding of both people dynamics and technological possibilities. What impresses me most is how their solutions prioritize user experience and measurable business impact while remaining grounded in the realities of organizational transformation. This is exactly the kind of partner modern HR functions need to navigate the AI revolution."
              </p>
              <p className="text-sm font-semibold">— XX, Chief Strategy Officer</p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative order-first lg:order-last"
          >
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 p-4 md:p-8">
              <img
                src="/images/Profile_Suit.jpg"
                alt="Burak Bakkaloglu - HR Consultant"
                className="rounded-lg object-cover shadow-xl w-full h-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 md:w-32 h-24 md:h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}