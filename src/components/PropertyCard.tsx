import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const categoryColors: Record<string, string> = {
    room: "bg-secondary text-secondary-foreground",
    flat: "bg-primary text-primary-foreground",
    house: "bg-accent text-accent-foreground",
  };

  return (
    <Link
      to={`/property/${property.id}`}
      className="group block overflow-hidden rounded-xl border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${categoryColors[property.category]}`}>
            {property.category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 rounded-lg bg-card/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="font-display text-lg font-bold text-foreground">
            {property.currency}{property.price}
          </span>
          <span className="text-xs text-muted-foreground">/mo</span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-display font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {property.title}
        </h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {property.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal bg-muted text-muted-foreground">
              {tag}
            </Badge>
          ))}
          {property.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal bg-muted text-muted-foreground">
              +{property.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
