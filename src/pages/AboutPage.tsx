import { motion } from "framer-motion";
import { MapPin, Users, Heart, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="font-display text-4xl font-bold text-foreground"
        >
          About SmartToLet
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="mt-4 text-lg text-muted-foreground leading-relaxed"
        >
          SmartToLet is a modern rental platform that connects tenants and property owners through interactive map-based search. We believe finding a home should be simple, visual, and completely free.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {[
          { icon: MapPin, title: "Map-First Approach", desc: "We put location at the heart of your search. Browse visually and discover properties in your desired area." },
          { icon: Users, title: "Direct Connection", desc: "No middlemen or agents. Connect directly with property owners and save on fees." },
          { icon: Heart, title: "Always Free", desc: "Our platform is free for everyone — tenants and landlords. No hidden charges ever." },
          { icon: Shield, title: "Trusted Platform", desc: "We're building a community of trusted renters and property owners." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}
            className="rounded-xl border bg-card p-6 shadow-card text-center"
          >
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl gradient-hero mb-4">
              <item.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-2xl rounded-xl border bg-card p-8 shadow-card text-center">
        <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          We're on a mission to make renting accessible and transparent for everyone. Whether you're a student looking for a room, a family searching for a house, or a landlord wanting to reach tenants — SmartToLet is here to help, always for free.
        </p>
      </div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
