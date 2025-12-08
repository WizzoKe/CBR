"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero slider images (gallery)
  const heroImages = [
    "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165680/img_4_1752770742488_bl1byf.jpg",
    "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165677/img_32_1752771188965_j2tonp.jpg",
    "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165277/img_20_1752770946722_vgb7mx.jpg",
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);

  const prevSlide = () =>
    setCurrentSlide((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );

  return (
    <main className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src={heroImages[currentSlide]}
          alt="Cabro construction showcase"
          fill
          className="object-cover transition-all duration-700"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            Cabro City Construction
          </h1>
          <p className="text-white text-lg mt-4 max-w-2xl drop-shadow">
            Paving. Cabros. Drainage. Site leveling. Foundation prep.
            We build surfaces built to last.
          </p>

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold shadow-lg transition">
            Request a Quote
          </button>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full"
        >
          ›
        </button>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Cabro Installation</h3>
            <p>
              Professional laying of cabro blocks for driveways, compounds,
              parking lots, estates, and commercial spaces.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Drainage Systems</h3>
            <p>
              Complete water drainage solutions including slab drains,
              channels, slope design, and water redirection.
            </p>
          </div>

          <div className="bg-white p-6 shadow rounded-lg">
            <h3 className="font-semibold text-xl mb-2">Site Preparation</h3>
            <p>
              Excavation, leveling, compacting, and foundation groundworks
              for residential and industrial projects.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section className="py-16 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">Recent Projects</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Image
            src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165277/1754480073832_h2mgxw.jpg"
            width={500}
            height={400}
            alt="Cabro driveway construction"
            className="rounded-lg shadow object-cover h-64 w-full"
          />

          <Image
            src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165677/img_32_1752771188965_j2tonp.jpg"
            width={500}
            height={400}
            alt="Paving installation project"
            className="rounded-lg shadow object-cover h-64 w-full"
          />

          <Image
            src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165680/img_4_1752770742488_bl1byf.jpg"
            width={500}
            height={400}
            alt="Finished cabro parking area"
            className="rounded-lg shadow object-cover h-64 w-full"
          />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-yellow-500 text-black py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="mb-6">
          Talk to our team for quotations, site visits, or consultations.
        </p>

        <a
          href="tel:+2547XXXXXXXX"
          className="bg-black text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition"
        >
          Call Now
        </a>
      </section>
    </main>
  );
}
