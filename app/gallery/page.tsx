"use client";

import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/ui/PageLayout";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  interface Photo {
    id: number;
    src: string;
    category: string;
    title: string;
    description?: string;
    metadata: {
      camera: string;
      lens: string;
      settings: string;
    };
  }

  const categories = [
    { id: "all", name: "All" },
    { id: "urban", name: "Urban" },
    { id: "nature", name: "Nature" },
    { id: "portrait", name: "Portrait" },
  ];

  const photos: Photo[] = [
    {
      id: 1,
      src: "/placeholder.svg?height=800&width=600",
      category: "urban",
      title: "City Lights",
      description:
        "Downtown Los Angeles at night, capturing the vibrant city lights and urban landscape.",
      metadata: {
        camera: "Sony A7III",
        lens: "24-70mm f/2.8",
        settings: "f/2.8 1/125s ISO 3200",
      },
    },
    {
      id: 2,
      src: "/placeholder.svg?height=800&width=600",
      category: "nature",
      title: "Mountain Vista",
      description:
        "Sunrise over the San Gabriel mountains, with fog rolling through the valley below.",
      metadata: {
        camera: "Canon R5",
        lens: "16-35mm f/2.8",
        settings: "f/8 1/250s ISO 100",
      },
    },
    {
      id: 3,
      src: "/placeholder.svg?height=800&width=600",
      category: "portrait",
      title: "Urban Portrait",
      description:
        "Environmental portrait session in the Arts District featuring natural light and urban textures.",
      metadata: {
        camera: "Nikon Z6",
        lens: "85mm f/1.4",
        settings: "f/1.8 1/200s ISO 400",
      },
    },
    {
      id: 4,
      src: "/placeholder.svg?height=800&width=600",
      category: "urban",
      title: "Architectural Study",
      description:
        "Geometric patterns and lines of modern architecture in downtown.",
      metadata: {
        camera: "Sony A7III",
        lens: "16-35mm f/2.8",
        settings: "f/5.6 1/500s ISO 200",
      },
    },
    {
      id: 5,
      src: "/placeholder.svg?height=800&width=600",
      category: "nature",
      title: "Coastal Sunset",
      description:
        "Golden hour at Malibu beach with dramatic cloud formations.",
      metadata: {
        camera: "Canon R5",
        lens: "24-70mm f/2.8",
        settings: "f/11 1/60s ISO 100",
      },
    },
    {
      id: 6,
      src: "/placeholder.svg?height=800&width=600",
      category: "portrait",
      title: "Studio Light",
      description: "Studio portrait with dramatic lighting and shadow play.",
      metadata: {
        camera: "Nikon Z6",
        lens: "50mm f/1.4",
        settings: "f/2.8 1/160s ISO 200",
      },
    },
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <PageLayout currentSection="gallery">
      <div className="min-h-screen p-8 pt-16 md:p-16 md:pt-24">
        <div className="animate-fade-in mx-auto max-w-6xl space-y-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Photography
              </h1>
              <div className="from-primary to-secondary mt-2 h-1 w-20 bg-gradient-to-r"></div>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={`rounded-full px-4 py-2 ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "border-muted-foreground/20 hover:border-primary/50"
                  }`}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <div className="border-border bg-card/5 relative aspect-[3/4] overflow-hidden rounded-xl border shadow-md transition-all duration-300 hover:shadow-xl">
                    <div className="from-primary/10 to-secondary/10 absolute inset-0 bg-gradient-to-br opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"></div>
                    <Image
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="from-background/80 via-background/50 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex items-center gap-2">
                        <div className="bg-background/80 rounded-full p-1 backdrop-blur-sm">
                          <Camera className="text-primary h-4 w-4" />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-foreground text-xl font-bold">
                          {photo.title}
                        </h2>

                        <div className="mt-2 space-y-1 font-mono text-xs">
                          <p className="text-primary">
                            {photo.metadata.camera}
                          </p>
                          <p className="text-secondary">
                            {photo.metadata.lens}
                          </p>
                          <p className="text-muted-foreground">
                            {photo.metadata.settings}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-card relative max-h-[90vh] max-w-4xl overflow-hidden rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-background/50 absolute top-4 right-4 z-10 rounded-full backdrop-blur-sm"
                onClick={() => setSelectedPhoto(null)}
              >
                <X className="h-5 w-5" />
              </Button>

              <div className="grid md:grid-cols-[1fr,300px]">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedPhoto.src || "/placeholder.svg"}
                    alt={selectedPhoto.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="bg-card p-6">
                  <h2 className="text-foreground text-2xl font-bold">
                    {selectedPhoto.title}
                  </h2>

                  {selectedPhoto.description && (
                    <p className="text-muted-foreground mt-2">
                      {selectedPhoto.description}
                    </p>
                  )}

                  <div className="mt-6 space-y-4">
                    <h3 className="text-foreground text-sm font-semibold">
                      Camera Settings
                    </h3>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Camera</span>
                        <span className="text-primary">
                          {selectedPhoto.metadata.camera}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lens</span>
                        <span className="text-secondary">
                          {selectedPhoto.metadata.lens}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Settings</span>
                        <span>{selectedPhoto.metadata.settings}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
