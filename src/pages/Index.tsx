import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Search, Home, Building, DoorOpen, ArrowRight, CheckCircle, Shield, Clock, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/PropertyCard";
import PropertyMap from "@/components/PropertyMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    variants={fadeUp}
    className="flex flex-col items-center"
  >
    <span className="font-display text-3xl font-bold text-primary">{value}</span>
    <span className="mt-0.5 text-sm text-muted-foreground">{label}</span>
  </motion.div>
);

const Index = () => {
  const featured = properties.filter((p) => p.featured);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ─── Hero ─── */}
      <section ref={heroRef} className="relative overflow-hidden min-h-[88vh] flex items-center">
        {/* Soft orbs */}
        <div className="orb w-[600px] h-[600px] -top-32 -left-32 opacity-[0.12]" style={{ background: "hsl(213 85% 50%)" }} />
        <div className="orb w-[500px] h-[500px] -bottom-24 -right-24 opacity-[0.1]" style={{ background: "hsl(248 70% 60%)" }} />
        <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]" style={{ background: "hsl(158 55% 45%)" }} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(hsl(213 85% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(213 85% 50%) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container mx-auto px-4 py-20 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-secondary" />
                All listings are 100% free
                <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              </span>
            </motion.div>

            <motion.h1
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="mt-6 font-display text-5xl font-bold leading-[1.1] text-foreground md:text-7xl"
            >
              Find Your{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
                  Perfect Rental
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full"
                  style={{ background: "var(--gradient-hero)" }}
                />
              </span>
              {" "}on the Map
            </motion.h1>

            <motion.p
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="mt-5 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Browse rooms, flats, and houses with our interactive map. Click any marker to see details instantly — no fees, no middlemen.
            </motion.p>

            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Button asChild size="lg" className="gap-2 px-6 shadow-hero rounded-xl text-base h-12 shimmer">
                <Link to="/map">
                  <Search className="h-4 w-4" /> Search on Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2 px-6 rounded-xl text-base h-12 border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-all">
                <Link to="/listings">
                  Browse Listings <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="mt-14 flex justify-center gap-12 border-t border-border/50 pt-8"
            >
              <StatCard value={`${properties.length}+`} label="Active Listings" />
              <StatCard value="3" label="Property Types" />
              <StatCard value="Free" label="Always & Forever" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Map Preview ─── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="text-center mb-10"
        >
          <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary uppercase tracking-widest">
            <TrendingUp className="h-4 w-4" /> Live Map
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Explore Properties on the Map
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="mt-2 text-muted-foreground">
            Click any pin to view property details instantly
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="h-[420px] md:h-[520px] rounded-2xl overflow-hidden border shadow-hero relative"
        >
          <PropertyMap properties={properties} />
        </motion.div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-20" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary uppercase tracking-widest">
              Simple Process
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-2 text-muted-foreground">
              Three simple steps to find your new home
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-14 left-1/4 right-1/4 h-0.5 opacity-20" style={{ background: "var(--gradient-hero)" }} />

            {[
              { icon: Search, title: "Search", desc: "Use our interactive map or filters to browse available properties in your area.", step: "01", color: "hsl(213 85% 50%)" },
              { icon: MapPin, title: "Explore", desc: "Click on map markers to instantly view property details, photos, and amenities.", step: "02", color: "hsl(248 70% 60%)" },
              { icon: CheckCircle, title: "Connect", desc: "Contact the property owner directly. No middlemen, no fees.", step: "03", color: "hsl(158 55% 45%)" },
            ].map((step, i) => (
              <motion.div
                key={step.title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative flex flex-col items-center text-center rounded-2xl border bg-card/80 backdrop-blur-sm p-8 shadow-card"
              >
                <span className="absolute top-4 right-5 font-display text-4xl font-bold opacity-[0.06] text-foreground select-none">
                  {step.step}
                </span>
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{ background: `${step.color}18`, border: `1.5px solid ${step.color}30` }}
                >
                  <step.icon className="h-6 w-6" style={{ color: step.color }} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Why SmartToLet?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="mt-2 text-muted-foreground">
            Everything you need to find the perfect home
          </motion.p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Free Forever", desc: "No charges for listings or browsing, ever", color: "hsl(158 55% 45%)" },
            { icon: MapPin, title: "Map Search", desc: "Visual property discovery on interactive maps", color: "hsl(213 85% 50%)" },
            { icon: Clock, title: "Instant Details", desc: "View property info with a single click", color: "hsl(248 70% 60%)" },
            { icon: Users, title: "Direct Contact", desc: "Connect with owners directly, no middlemen", color: "hsl(35 90% 55%)" },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={i}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 400 } }}
              className="group relative rounded-2xl border bg-card p-6 shadow-card overflow-hidden cursor-default"
            >
              {/* Soft glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${f.color}0D, transparent 70%)` }}
              />
              <div
                className="relative flex h-11 w-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${f.color}15`, border: `1.5px solid ${f.color}25` }}
              >
                <f.icon className="h-5 w-5" style={{ color: f.color }} />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section className="py-20" style={{ background: "var(--gradient-soft)" }}>
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} custom={0} className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Property Categories
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-2 text-muted-foreground">
              Find exactly what you're looking for
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: DoorOpen, label: "Rooms", count: properties.filter((p) => p.category === "room").length, cat: "room", desc: "Affordable rooms in shared houses", color: "hsl(158 55% 45%)", grad: "linear-gradient(135deg, hsl(158 55% 45%), hsl(168 55% 38%))" },
              { icon: Building, label: "Flats", count: properties.filter((p) => p.category === "flat").length, cat: "flat", desc: "Modern flats and apartments", color: "hsl(213 85% 50%)", grad: "linear-gradient(135deg, hsl(213 85% 50%), hsl(233 75% 55%))" },
              { icon: Home, label: "Houses", count: properties.filter((p) => p.category === "house").length, cat: "house", desc: "Family houses and cottages", color: "hsl(248 70% 60%)", grad: "linear-gradient(135deg, hsl(248 70% 60%), hsl(268 65% 58%))" },
            ].map((c, i) => (
              <motion.div
                key={c.cat}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <Link
                  to={`/listings?category=${c.cat}`}
                  className="group relative flex flex-col items-center rounded-2xl border bg-card p-8 text-center shadow-card transition-all duration-400 hover:shadow-card-hover hover:-translate-y-2 overflow-hidden"
                >
                  {/* Background gradient reveal */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${c.color}10, transparent 70%)` }}
                  />

                  <div
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                    style={{ background: `${c.color}14`, border: `1.5px solid ${c.color}28` }}
                  >
                    <c.icon className="h-8 w-8 transition-colors duration-300" style={{ color: c.color }} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{c.label}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>

                  <div
                    className="mt-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: `${c.color}14`, color: c.color }}
                  >
                    {c.count} listings available
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    Browse all <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Recent Listings ─── */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-primary uppercase tracking-widest">Latest</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="mt-1 font-display text-3xl font-bold text-foreground md:text-4xl">
              Recent Listings
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-1 text-muted-foreground">
              Fresh properties added recently
            </motion.p>
          </motion.div>
          <Button asChild variant="outline" className="hidden sm:flex gap-2 rounded-xl border-border/70 hover:border-primary/40 hover:bg-primary/5">
            <Link to="/listings">View All <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.slice(0, 3).map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button asChild variant="outline" className="rounded-xl">
            <Link to="/listings">View All Listings</Link>
          </Button>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="mx-4 mb-16 rounded-3xl overflow-hidden relative" style={{ background: "var(--gradient-hero)" }}>
        {/* Orb decorations */}
        <div className="orb w-72 h-72 -top-16 -right-16 opacity-20" style={{ background: "hsl(0 0% 100%)" }} />
        <div className="orb w-48 h-48 -bottom-10 -left-10 opacity-15" style={{ background: "hsl(158 55% 45%)" }} />

        <div className="relative container mx-auto px-4 py-20 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
              <Sparkles className="h-3.5 w-3.5" /> Zero fees, always
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl font-bold text-white md:text-5xl leading-tight">
              List Your Property<br />for Free Today
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="mt-4 text-white/75 max-w-xl mx-auto text-lg">
              Reach thousands of potential tenants. No hidden fees, no commissions. Just post and connect.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-xl px-8 h-12 text-base font-semibold shadow-hero shimmer">
                <Link to="/post">Post Your Property</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl px-8 h-12 text-base bg-transparent">
                <Link to="/listings">Browse Listings</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
