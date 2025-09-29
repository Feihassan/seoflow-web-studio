import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Search, ShoppingCart, Code2, Wrench } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design & Development",
    description: "Custom, modern websites tailored to your brand with pixel-perfect design and clean code."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Boost your online visibility with technical SEO, on-page optimization, and performance tuning."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Websites",
    description: "Powerful online stores with secure payments, inventory management, and seamless checkout."
  },
  {
    icon: Code2,
    title: "Custom SaaS Solutions",
    description: "Build scalable web applications with modern frameworks, APIs, and cloud infrastructure."
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing support, updates, security patches, and performance monitoring for peace of mind."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions to help your business thrive online
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
