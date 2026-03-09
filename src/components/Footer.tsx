import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Heart, ArrowUpRight } from "lucide-react";
import { motion, type Easing } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as Easing },
  }),
};

const Footer = () => (
  <footer className="border-t bg-card overflow-hidden">
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid gap-8 md:grid-cols-4"
      >
        {/* Brand */}
        <motion.div variants={fadeInUp} custom={0}>
          <Link to="/" className="group flex items-center gap-2 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 8 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero"
            >
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </motion.div>
            <span className="font-display text-lg font-bold text-foreground">
              Smart<span className="text-primary group-hover:text-secondary transition-colors">ToLet</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Find your perfect rental property with our interactive map-based search. All listings are completely free.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} custom={1}>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { to: "/listings", label: "Browse Listings" },
              { to: "/map", label: "Map Search" },
              { to: "/post", label: "Post Property" },
              { to: "/about", label: "About Us" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <span className="magnetic-link">{link.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div variants={fadeInUp} custom={2}>
          <h4 className="font-display font-semibold text-foreground mb-3">Categories</h4>
          <div className="flex flex-col gap-2 text-sm">
            {[
              { to: "/listings?category=room", label: "Rooms" },
              { to: "/listings?category=flat", label: "Flats" },
              { to: "/listings?category=house", label: "Houses" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
              >
                <span className="magnetic-link">{link.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div variants={fadeInUp} custom={3}>
          <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <motion.a
              href="mailto:hello@smarttolet.com"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>hello@smarttolet.com</span>
            </motion.a>
            <motion.a
              href="tel:+442079460958"
              className="flex items-center gap-2 hover:text-primary transition-colors group"
              whileHover={{ x: 4 }}
            >
              <div className="p-1.5 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>+44 20 7946 0958</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
      >
        <p className="flex items-center gap-1.5">
          © {new Date().getFullYear()} SmartToLet. Made with{" "}
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart className="h-3.5 w-3.5 text-destructive fill-destructive" />
          </motion.span>{" "}
          • All listings free
        </p>
        <div className="flex items-center gap-4">
          <Link to="/about" className="hover:text-primary transition-colors">Privacy</Link>
          <Link to="/about" className="hover:text-primary transition-colors">Terms</Link>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
