import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/map", label: "Map Search" },
  { to: "/post", label: "Post Property" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo with hover animation */}
        <Link to="/" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex h-9 w-9 items-center justify-center rounded-lg gradient-hero"
          >
            <MapPin className="h-5 w-5 text-primary-foreground" />
          </motion.div>
          <span className="font-display text-xl font-bold text-foreground">
            Smart<span className="text-primary group-hover:text-secondary transition-colors duration-300">ToLet</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors magnetic-link"
              >
                <span className={isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div 
          className="hidden md:flex"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button asChild size="sm" className="ripple-btn pulse-ring">
            <Link to="/post">List Free</Link>
          </Button>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu with slide animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="border-t bg-card md:hidden overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.05 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
              className="flex flex-col p-4 gap-1"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -16 },
                  }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-all hover:pl-5 ${
                      location.pathname === link.to
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, x: 0 },
                  closed: { opacity: 0, x: -16 },
                }}
              >
                <Button asChild size="sm" className="mt-2 w-full">
                  <Link to="/post" onClick={() => setOpen(false)}>List Free</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
