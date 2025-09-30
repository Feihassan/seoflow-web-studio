import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const Index = () => {
  return (
    <main className="min-h-screen">
      <StructuredData />
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
