import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import PropertyCard from "@/components/PropertyCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { properties, TAGS, type PropertyCategory } from "@/data/properties";

const categories: { value: PropertyCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "room", label: "Rooms" },
  { value: "flat", label: "Flats" },
  { value: "house", label: "Houses" },
];

const ListingsPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as PropertyCategory) || "all";
  const [category, setCategory] = useState<PropertyCategory | "all">(initialCat);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = properties.filter((p) => {
    if (category !== "all" && p.category !== category) return false;
    if (searchTerm && !p.title.toLowerCase().includes(searchTerm.toLowerCase()) && !p.location.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (selectedTags.length > 0 && !selectedTags.every((t) => p.tags.includes(t))) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Browse Properties</h1>
          <p className="mt-1 text-muted-foreground">Find your next home from our free listings</p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="h-4 w-4" />
              <span className="hidden sm:inline">Filters</span>
            </Button>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
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

          {/* Tags filter */}
          {showFilters && (
            <div className="rounded-xl border bg-card p-4">
              <p className="text-sm font-medium text-foreground mb-2">Filter by tags</p>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <p className="text-sm text-muted-foreground mb-4">{filtered.length} properties found</p>
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={() => { setCategory("all"); setSearchTerm(""); setSelectedTags([]); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ListingsPage;
