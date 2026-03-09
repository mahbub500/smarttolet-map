import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import type { Property } from "@/data/properties";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface PropertyMapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  className?: string;
  selectedId?: string | null;
  onMarkerClick?: (property: Property) => void;
}

const FitBounds = ({ properties }: { properties: Property[] }) => {
  const map = useMap();
  useEffect(() => {
    if (properties.length > 0) {
      const bounds = L.latLngBounds(properties.map((p) => [p.lat, p.lng]));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [properties, map]);
  return null;
};

const PropertyMap = ({
  properties,
  center = [52.5, -1.5],
  zoom = 6,
  className = "",
  selectedId,
  onMarkerClick,
}: PropertyMapProps) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={`h-full w-full rounded-xl ${className}`}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds properties={properties} />
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.lat, property.lng]}
          eventHandlers={{
            click: () => onMarkerClick?.(property),
          }}
        >
          <Popup>
            <div className="min-w-[200px]">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-semibold text-sm">{property.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{property.location}</p>
              <p className="font-bold mt-1">{property.currency}{property.price}/mo</p>
              <Link
                to={`/property/${property.id}`}
                className="inline-block mt-2 text-xs font-medium text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default PropertyMap;
