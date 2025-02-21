"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import Image from "next/image"

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "urban", name: "Urban" },
    { id: "nature", name: "Nature" },
    { id: "portrait", name: "Portrait" },
  ]

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
  ]

  const filteredPhotos =
    selectedCategory === "all" ? photos : photos.filter((photo) => photo.category === selectedCategory)

  return (
    <Layout currentSection="gallery">
      <div className="min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto space-y-12 animate-slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              Photography
            </h1>

            <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id ? "bg-cyan-500 text-black" : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <h2 className="text-2xl font-bold">{photo.title}</h2>

                    <div className="space-y-2 text-sm font-mono">
                      <p className="text-cyan-500">{photo.metadata.camera}</p>
                      <p className="text-purple-500">{photo.metadata.lens}</p>
                      <p className="text-white/80">{photo.metadata.settings}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

