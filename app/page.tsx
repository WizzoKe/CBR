import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Hero slides
const heroSlides = [
  {
    id: "h1",
    title: "Garden Courtyard - Lang'ata",
    subtitle: "Hexa-Modern cabros in warm terracotta for a private courtyard.",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165680/img_4_1752770742488_bl1byf.jpg",
  },
  {
    id: "h2",
    title: "Commercial Plaza - CBD",
    subtitle: "Interlock Pro pavers for high-traffic pedestrian plazas.",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165677/img_32_1752771188965_j2tonp.jpg",
  },
  {
    id: "h3",
    title: "Driveway Revamp - Karen",
    subtitle: "Classic Cobble cabros in cool grey for a timeless finish.",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165277/1754480073832_h2mgxw.jpg",
  },
];

// Products
const products = [
  {
    id: "p1",
    name: "Classic Cobble",
    desc: "Durable concrete cabro — perfect for driveways and walkways.",
    price: "KSh 120 / piece",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765166295/1754480068637_a3ab75.jpg",
  },
  {
    id: "p2",
    name: "Hexa-Modern",
    desc: "Hexagonal paver with smooth finish for modern designs.",
    price: "KSh 140 / piece",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765166288/img_1_1759148077972_yea0ci.jpg",
  },
  {
    id: "p3",
    name: "Interlock Pro",
    desc: "High-strength interlocking paver for heavy traffic areas.",
    price: "KSh 170 / piece",
    img: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165265/img_26_1752771073056_lvwpup.jpg",
  },
];

// Hero slider component
function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 4000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length);
  const next = () => setIndex((i) => (i + 1) % heroSlides.length);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      <div className="w-full h-96 relative">
        {heroSlides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-hidden={i !== index}
          >
            <img src={s.img} alt={s.title} className="w-full h-96 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute left-6 bottom-6 text-white max-w-md">
              <h3 className="text-2xl font-bold drop-shadow">{s.title}</h3>
              <p className="mt-1 text-sm drop-shadow">{s.subtitle}</p>
            </div>
          </div>
        ))}

        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button onClick={prev} className="bg-white/80 rounded-full p-2 shadow">‹</button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <button onClick={next} className="bg-white/80 rounded-full p-2 shadow">›</button>
        </div>

        <div className="absolute right-6 top-6 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165741/img_1_1752770598134_huc99d.jpg" alt="CabroCity Logo" className="w-12 h-12 rounded-md object-cover" />
          <div>
            <h1 className="text-lg font-semibold">CabroCity</h1>
            <p className="text-xs text-slate-500">Modern paving, delivered with precision</p>
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <a href="#products" className="text-sm hover:underline">Products</a>
          <a href="#services" className="text-sm hover:underline">Services</a>
          <a href="#portfolio" className="text-sm hover:underline">Projects</a>
          <Button>Contact</Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-emerald-700">Precision, Durability & Modern Design</h2>
            <p className="mt-6 text-lg text-slate-600">CabroCity provides top-quality cabros, paving blocks, and outdoor finishing solutions — reliable materials and expert guidance for every project.</p>

            <div className="mt-8 flex gap-4">
              <Button>Request a Quote</Button>
              <a href="#products" className="inline-flex items-center px-4 py-2 border rounded-md text-sm">See Products</a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div>
                <div className="text-2xl font-bold">120+</div>
                <div className="mt-1">Projects delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold">80+</div>
                <div className="mt-1">Product types</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="mt-1">Years experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <HeroSlider />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.id}>
              <img src={p.img} alt={p.name} className="w-full h-48 object-cover rounded-md mb-2" />
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium">{p.price}</span>
                  <Button>Get Quote</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-emerald-50 py-16">
        <h3 className="text-2xl font-semibold mb-8 text-emerald-700">Our Services</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Material Supply</CardTitle>
              <CardDescription>Reliable cabro & paving blocks delivered on time.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Consultation</CardTitle>
              <CardDescription>Expert guidance on layout, design & installation.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Custom Design</CardTitle>
              <CardDescription>Tailored paving solutions to fit unique spaces.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-16">
        <h3 className="text-2xl font-semibold mb-6 text-emerald-700">Recent Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165277/1754480073832_h2mgxw.jpg" alt="Garden Courtyard" className="w-full h-56 object-cover rounded-md" />
          <img src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165677/img_32_1752771188965_j2tonp.jpg" alt="Commercial Plaza" className="w-full h-56 object-cover rounded-md" />
          <img src="https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165680/img_4_1752770742488_bl1byf.jpg" alt="Driveway Revamp" className="w-full h-56 object-cover rounded-md" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-100 to-white py-16 text-center">
        <h3 className="text-3xl font-semibold text-emerald-700 mb-4">Ready to transform your outdoor space?</h3>
        <p className="text-slate-600 mb-6">Request a consultation and get a visual quote from our team.</p>
        <Button>Request Consultation</Button>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold">CabroCity</h4>
            <p className="text-sm text-slate-600">Quality cabros and paving solutions, delivered with precision.</p>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
