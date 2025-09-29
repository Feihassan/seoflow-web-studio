import { motion } from "framer-motion";
import { Zap, Smartphone, TrendingUp, HeadphonesIcon } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "We work efficiently to launch your website in weeks, not months, without compromising quality."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website we build looks stunning and works flawlessly on all devices and screen sizes."
  },
  {
    icon: TrendingUp,
    title: "SEO Best Practices",
    description: "Built-in search engine optimization from day one to help you rank higher and get more traffic."
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "24/7 technical support and maintenance to keep your website running smoothly and securely."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional results with a client-first approach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-2 border-primary/30">
                <benefit.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
