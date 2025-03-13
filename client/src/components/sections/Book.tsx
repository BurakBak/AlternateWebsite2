import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function Book() {
  return (
    <section id="book" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 p-8">
              <img
                src="/images/Book_Cover.JPG"
                alt="Blueprint for Transforming HR Book Cover"
                className="rounded-lg shadow-xl w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Blueprint for Transforming HR Through AI and Evidence
            </h2>
            <p className="text-muted-foreground mb-6">
              A comprehensive guide to revolutionizing your HR department using
              artificial intelligence and evidence-based practices. Written by industry
              expert Burak Bakkaloglu, this book provides actionable insights and
              strategies for modern HR leaders.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold">Preview Chapter</h4>
                  <p className="text-sm text-muted-foreground">
                    Read the first chapter: "The Future of HR in the Age of AI"
                  </p>
                </div>
              </div>

              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                "A must-read for any HR professional looking to stay ahead in the
                rapidly evolving landscape of human resources management."
                <footer className="text-sm mt-2 font-semibold">
                  - HR Technology Magazine
                </footer>
              </blockquote>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Order Now
              </Button>
              <Button size="lg" variant="outline">
                Read Preview
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}