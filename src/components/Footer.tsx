import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-hero">
              <MapPin className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-foreground">
              Smart<span className="text-primary">ToLet</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Find your perfect rental property with our interactive map-based search. All listings are completely free.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/listings" className="text-muted-foreground hover:text-primary transition-colors">Browse Listings</Link>
            <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors">Map Search</Link>
            <Link to="/post" className="text-muted-foreground hover:text-primary transition-colors">Post Property</Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Categories</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/listings?category=room" className="text-muted-foreground hover:text-primary transition-colors">Rooms</Link>
            <Link to="/listings?category=flat" className="text-muted-foreground hover:text-primary transition-colors">Flats</Link>
            <Link to="/listings?category=house" className="text-muted-foreground hover:text-primary transition-colors">Houses</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>hello@smarttolet.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+44 20 7946 0958</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SmartToLet. All rights reserved. All listings are free.
      </div>
    </div>
  </footer>
);

export default Footer;
