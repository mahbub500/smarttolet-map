import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyMap from "@/components/PropertyMap";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties, type PropertyCategory, type Property } from "@/data/properties";

const categories: { value: PropertyCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "room", label: "Rooms" },
  { value: "flat", label: "Flats" },
  { value: "house", label: "Houses" },
];

const MapSearchPage = () => {
  const [category, setCategory] = useState<PropertyCategory | "all">("all");
  const [selected, setSelected] = useState<Property | null>(null);

  const filtered = category === "all" ? properties : properties.filter((p) => p.category === category);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="w-full lg:w-[400px] border-r bg-card overflow-auto">
          <div className="p-4 border-b">
            <h1 className="font-display text-xl font-bold text-foreground">Map Search</h1>
            <div className="flex gap-2 mt-3 flex-wrap">
              {categories.map((c) => (
                <Button
                  key={c.value}
                  variant={category === c.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(c.value)}
                >
                  {c.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="p-4 space-y-4 max-h-[calc(100vh-200px)] overflow-auto">
            <p className="text-sm text-muted-foreground">{filtered.length} properties</p>
            {filtered.map((p) => (
              <div
                key={p.id}
                className={`cursor-pointer transition-all ${selected?.id === p.id ? "ring-2 ring-primary rounded-xl" : ""}`}
                onClick={() => setSelected(p)}
              >
                <PropertyCard property={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 min-h-[400px] lg:min-h-0">
          <PropertyMap
            properties={filtered}
            selectedId={selected?.id}
            onMarkerClick={setSelected}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MapSearchPage;
