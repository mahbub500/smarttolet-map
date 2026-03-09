import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Search, Home, Building, DoorOpen, ArrowRight, CheckCircle, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  const featured = properties.filter((p) => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-[0.07]" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-primary">
                <MapPin className="h-3.5 w-3.5" /> All listings are 100% free
              </span>
            </motion.div>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="mt-6 font-display text-4xl font-bold leading-tight text-foreground md:text-6xl"
            >
              Find Your Perfect{" "}
              <span className="text-primary">Rental</span> on the Map
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="mt-4 text-lg text-muted-foreground md:text-xl"
            >
              Browse rooms, flats, and houses with our interactive map. Click any marker to see details instantly.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className="gap-2">
                <Link to="/map">
                  <Search className="h-4 w-4" /> Search on Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/listings">
                  Browse Listings <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Preview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl font-bold text-foreground">Explore on the Map</h2>
          <p className="mt-2 text-muted-foreground">Click any marker to view property details</p>
        </div>
        <div className="h-[400px] md:h-[500px] rounded-xl overflow-hidden border shadow-card">
          <PropertyMap properties={properties} />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-2 text-muted-foreground">Three simple steps to find your new home</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Search, title: "Search", desc: "Use our interactive map or filters to browse available properties in your area." },
              { icon: MapPin, title: "Explore", desc: "Click on map markers to instantly view property details, photos, and amenities." },
              { icon: CheckCircle, title: "Connect", desc: "Contact the property owner directly. No middlemen, no fees." },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="flex flex-col items-center text-center rounded-xl border bg-card p-8 shadow-card"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl gradient-hero">
                  <step.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-foreground">Why SmartToLet?</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Free Forever", desc: "No charges for listings or browsing" },
            { icon: MapPin, title: "Map Search", desc: "Visual property discovery on interactive maps" },
            { icon: Clock, title: "Instant Details", desc: "View property info with a single click" },
            { icon: Users, title: "Direct Contact", desc: "Connect with owners directly" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              className="rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-card-hover"
            >
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-display font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground">Property Categories</h2>
            <p className="mt-2 text-muted-foreground">Find exactly what you're looking for</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: DoorOpen, label: "Rooms", count: properties.filter((p) => p.category === "room").length, cat: "room", desc: "Affordable rooms in shared houses" },
              { icon: Building, label: "Flats", count: properties.filter((p) => p.category === "flat").length, cat: "flat", desc: "Modern flats and apartments" },
              { icon: Home, label: "Houses", count: properties.filter((p) => p.category === "house").length, cat: "house", desc: "Family houses and cottages" },
            ].map((c, i) => (
              <motion.div
                key={c.cat}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <Link
                  to={`/listings?category=${c.cat}`}
                  className="group flex flex-col items-center rounded-xl border bg-card p-8 text-center shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:gradient-hero transition-all">
                    <c.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{c.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                  <span className="mt-3 text-sm font-medium text-primary">{c.count} listings available</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Listings */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">Recent Listings</h2>
            <p className="mt-1 text-muted-foreground">Fresh properties added recently</p>
          </div>
          <Button asChild variant="outline" className="hidden sm:flex gap-2">
            <Link to="/listings">View All <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 3).map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Button asChild variant="outline">
            <Link to="/listings">View All Listings</Link>
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
            List Your Property for Free
          </h2>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Reach thousands of potential tenants. No hidden fees, no commissions. Just post and connect.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8">
            <Link to="/post">Post Your Property</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
