import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const categoryStyle: Record<string, string> = {
  room: "bg-secondary/15 text-secondary border border-secondary/25",
  flat: "bg-primary/15 text-primary border border-primary/25",
  house: "bg-accent/15 text-accent border border-accent/25",
};

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
    >
      <Link
        to={`/property/${property.id}`}
        className="group block overflow-hidden rounded-2xl border bg-card shadow-card transition-all duration-400 hover:shadow-card-hover hover:-translate-y-1.5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize backdrop-blur-sm ${categoryStyle[property.category]}`}>
              {property.category}
            </span>
          </div>

          {/* Wishlist button */}
          <button
            onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
            className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm shadow transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Save property"
          >
            <Heart
              className={`h-4 w-4 transition-colors duration-200 ${liked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
            />
          </button>

          {/* Price pill */}
          <div className="absolute bottom-3 right-3 rounded-xl bg-card/90 px-3 py-1.5 backdrop-blur-sm shadow-sm">
            <span className="font-display text-base font-bold text-foreground">
              {property.currency}{property.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground">/mo</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <h3 className="font-display font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
            {property.title}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          {/* Stats row */}
          <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/8">
                <Bed className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>{property.bedrooms} bed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/8">
                <Bath className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/8">
                <Maximize className="h-3.5 w-3.5 text-primary" />
              </div>
              <span>{property.area}m²</span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {property.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-normal bg-muted/70 text-muted-foreground rounded-full px-2.5 border-0"
              >
                {tag}
              </Badge>
            ))}
            {property.tags.length > 3 && (
              <Badge
                variant="secondary"
                className="text-xs font-normal bg-primary/10 text-primary rounded-full px-2.5 border-0"
              >
                +{property.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PropertyCard;
