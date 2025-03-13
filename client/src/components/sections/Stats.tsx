import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const stats = [
  { value: 500, label: "Clients Served" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 15, label: "Years Experience" },
  { value: 50, label: "Team Members" },
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, value]);

  return (
    <motion.span>
      {useTransform(rounded, (latest) => `${latest}${suffix}`)}
    </motion.span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <h3 className="text-4xl font-bold text-primary mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}