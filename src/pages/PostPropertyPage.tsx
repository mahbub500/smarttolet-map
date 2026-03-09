import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TAGS } from "@/data/properties";

const PostPropertyPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Property posted successfully! (Demo only)");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl font-bold text-foreground">Post Your Property</h1>
          <p className="mt-1 text-muted-foreground">List your property for free. No hidden charges.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="rounded-xl border bg-card p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Property Details</h2>

            <div>
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g. Modern 2-bed flat in London" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                >
                  <option value="room">Room</option>
                  <option value="flat">Flat</option>
                  <option value="house">House</option>
                </select>
              </div>
              <div>
                <Label htmlFor="price">Monthly Rent (£)</Label>
                <Input id="price" type="number" placeholder="e.g. 800" required />
              </div>
            </div>

            <div>
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="e.g. Manchester, M1 2JB" required />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input id="bedrooms" type="number" placeholder="0" required />
              </div>
              <div>
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input id="bathrooms" type="number" placeholder="0" required />
              </div>
              <div>
                <Label htmlFor="area">Area (m²)</Label>
                <Input id="area" type="number" placeholder="0" required />
              </div>
            </div>

            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Describe your property..." rows={4} required />
            </div>

            <div>
              <Label>Tags</Label>
              <div className="flex flex-wrap gap-2 mt-2">
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
          </div>

          <div className="rounded-xl border bg-card p-6 space-y-4">
            <h2 className="font-display text-lg font-semibold text-foreground">Contact Information</h2>
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Full name" required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="+44..." required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full">
            Post Property — It's Free!
          </Button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default PostPropertyPage;
