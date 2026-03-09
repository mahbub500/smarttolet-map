import { useParams, Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, Phone, Mail, ArrowLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyMap from "@/components/PropertyMap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties } from "@/data/properties";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-2xl font-bold text-foreground">Property not found</h1>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/listings">Back to Listings</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link to="/listings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Listings
        </Link>

        {/* Images */}
        <div className="grid gap-2 md:grid-cols-2 mb-8">
          {property.images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-xl ${i === 0 ? "md:row-span-2" : ""}`}>
              <img src={img} alt={`${property.title} ${i + 1}`} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Badge className="capitalize mb-2">{property.category}</Badge>
              <h1 className="font-display text-3xl font-bold text-foreground">{property.title}</h1>
              <div className="flex items-center gap-1 mt-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
              <p className="mt-2 font-display text-3xl font-bold text-primary">
                {property.currency}{property.price}<span className="text-lg text-muted-foreground font-normal">/month</span>
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-6 rounded-xl border bg-card p-4">
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Bedrooms</p>
                  <p className="font-semibold text-foreground">{property.bedrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Bathrooms</p>
                  <p className="font-semibold text-foreground">{property.bathrooms}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Area</p>
                  <p className="font-semibold text-foreground">{property.area}m²</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{property.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">Features & Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {property.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    <Tag className="h-3 w-3" /> {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">Location</h2>
              <div className="h-[300px] rounded-xl overflow-hidden border">
                <PropertyMap properties={[property]} zoom={14} center={[property.lat, property.lng]} />
              </div>
            </div>
          </div>

          {/* Sidebar - Owner Contact */}
          <div>
            <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contact Owner</h3>
              <div className="flex items-center gap-3 mb-4">
                <img src={property.owner.avatar} alt={property.owner.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-foreground">{property.owner.name}</p>
                  <p className="text-sm text-muted-foreground">Property Owner</p>
                </div>
              </div>
              <div className="space-y-3">
                <Button className="w-full gap-2" asChild>
                  <a href={`tel:${property.owner.phone}`}>
                    <Phone className="h-4 w-4" /> Call Owner
                  </a>
                </Button>
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href={`mailto:${property.owner.email}`}>
                    <Mail className="h-4 w-4" /> Send Email
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground text-center">This listing is 100% free. No fees or commissions.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetailPage;
