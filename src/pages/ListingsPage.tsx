import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

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

  const clearFilters = () => {
    setCategory("all");
    setSearchTerm("");
    setSelectedTags([]);
  };

  const hasFilters = category !== "all" || searchTerm || selectedTags.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mb-8"
        >
          <motion.h1 variants={fadeUp} className="font-display text-3xl font-bold text-foreground">
            Browse Properties
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-1 text-muted-foreground">
            Find your next home from our free listings
          </motion.p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col gap-4 mb-6"
        >
          <div className="flex gap-2">
            <div className="relative flex-1 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Search by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glow-focus transition-all focus:scale-[1.01]"
              />
              {searchTerm && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-3.5 w-3.5 text-muted-foreground" />
                </motion.button>
              )}
            </div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant={showFilters ? "default" : "outline"}
                className="gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span className="hidden sm:inline">Filters</span>
                {selectedTags.length > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground text-primary text-xs font-bold">
                    {selectedTags.length}
                  </span>
                )}
              </Button>
            </motion.div>
          </div>

          {/* Category tabs */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <motion.div key={c.value} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={category === c.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCategory(c.value)}
                  className="transition-all"
                >
                  {c.label}
                </Button>
              </motion.div>
            ))}
            {hasFilters && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-muted-foreground">
                  Clear all
                </Button>
              </motion.div>
            )}
          </div>

          {/* Tags filter */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="rounded-xl border bg-card p-4">
                  <p className="text-sm font-medium text-foreground mb-3">Filter by tags</p>
                  <div className="flex flex-wrap gap-2">
                    {TAGS.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.02 }}
                      >
                        <Badge
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className="cursor-pointer transition-all hover:scale-105 active:scale-95"
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                          {selectedTags.includes(tag) && (
                            <X className="ml-1 h-3 w-3" />
                          )}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results count */}
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-muted-foreground mb-4"
        >
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
        </motion.p>

        {/* Results grid */}
        {filtered.length > 0 ? (
          <motion.div
            key={`${category}-${selectedTags.join("-")}`}
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((p, i) => (
              <motion.div key={p.id} variants={fadeUp}>
                <PropertyCard property={p} index={i} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-6xl mb-4"
            >
              🏠
            </motion.div>
            <p className="text-lg text-muted-foreground">No properties found matching your criteria.</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ListingsPage;
