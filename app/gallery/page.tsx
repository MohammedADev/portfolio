"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "urban", name: "Urban" },
    { id: "nature", name: "Nature" },
    { id: "portrait", name: "Portrait" },
  ];

  const photos = [
    {
      id: 1,
      src: "/placeholder.svg",
      category: "urban",
      title: "City Lights",
      metadata: {
        camera: "Sony A7III",
        lens: "24-70mm f/2.8",
        settings: "f/2.8 1/125s ISO 3200",
      },
    },
    {
      id: 2,
      src: "/placeholder.svg",
      category: "nature",
      title: "Mountain Vista",
      metadata: {
        camera: "Canon R5",
        lens: "16-35mm f/2.8",
        settings: "f/8 1/250s ISO 100",
      },
    },
    {
      id: 3,
      src: "/placeholder.svg",
      category: "portrait",
      title: "Urban Portrait",
      metadata: {
        camera: "Nikon Z6",
        lens: "85mm f/1.4",
        settings: "f/1.8 1/200s ISO 400",
      },
    },
    // Add more photos as needed
  ];

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <Layout currentSection="gallery">
      <div className="min-h-screen p-8 md:p-16">
        <div className="mx-auto max-w-6xl animate-slide-up space-y-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <h1 className="bg-linear-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
              Photography
            </h1>

            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 py-2 transition-all hover:shadow-lg ${
                    selectedCategory === category.id
                      ? "bg-primary text-background shadow-primary/25"
                      : "bg-muted/10 text-muted-foreground backdrop-blur-xs hover:bg-muted/20 hover:text-foreground"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-border bg-card/5">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/30 to-transparent opacity-0 backdrop-blur-xs transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <h2 className="text-2xl font-bold text-foreground">
                      {photo.title}
                    </h2>

                    <div className="space-y-2 font-mono text-sm">
                      <p className="text-primary">{photo.metadata.camera}</p>
                      <p className="text-secondary">{photo.metadata.lens}</p>
                      <p className="text-muted-foreground">
                        {photo.metadata.settings}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
