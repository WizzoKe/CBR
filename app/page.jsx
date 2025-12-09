"use client";

import { FaTools, FaPhoneAlt, FaProjectDiagram } from "react-icons/fa";

// Cloudinary URLs (updated)
const IMAGES = {
  logo: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165741/img_1_1752770598134_huc99d.jpg",
  hero: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165274/img_40_1752771295994_rsdtqp.jpg",
  project1: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165277/1754480073832_h2mgxw.jpg",
  project2: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165677/img_32_1752771188965_j2tonp.jpg",
  service1: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765166297/1754480061566_z7mgcy.jpg",
  service2: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165271/img_28_1752771095807_x7fxjb.jpg",
  gallery1: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765165275/img_47_1752771502671_fzis1v.jpg",
  gallery2: "https://res.cloudinary.com/dkmexkv5r/image/upload/v1765166306/img_30_1752771134255_qovgsw.jpg"
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      
      {/* NAV */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <img src={IMAGES.logo} alt="Logo" className="h-12 w-auto rounded-md shadow-md" />
          <div className="text-xl font-extrabold tracking-wide">
            CABRO <span className="text-orange-500">CITY</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 transition rounded-lg font-semibold">
          Contact Us
        </button>
      </nav>


      {/* HERO */}
      <header className="relative w-full h-[80vh] flex items-center justify-center">
        <img
          src={IMAGES.hero}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Paving the Future with  
            <span className="block text-orange-500">Precision & Innovation</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
            Premium cabro paving, landscaping, and ground engineering built for long-lasting performance.
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <button className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 font-semibold">
              Explore Projects
            </button>
            <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 font-semibold">
              Contact Team
            </button>
          </div>
        </div>
      </header>


      {/* SERVICES */}
      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[ 
            { img: IMAGES.service1, title: "Cabro Installation", icon: <FaTools /> },
            { img: IMAGES.service2, title: "Landscape Design", icon: <FaTools /> }
          ].map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-orange-500 transition shadow-xl"
            >
              <img src={s.img} className="h-60 w-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="p-6">
                <div className="text-orange-500 text-3xl mb-3">{s.icon}</div>
                <h3 className="text-2xl font-semibold">{s.title}</h3>
                <p className="text-gray-300 mt-2">
                  Built with precision, engineered for durability and designed for modern aesthetics.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* PROJECTS */}
      <section className="px-6 py-20 bg-black/40 border-t border-white/10">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[IMAGES.project1, IMAGES.project2].map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-xl">
              <img src={img} className="h-72 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Premium Cabro Project</h3>
                <p className="text-gray-300 mt-2">
                  A showcase of high-quality workmanship and precision paving installation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* GALLERY */}
      <section className="px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <img src={IMAGES.gallery1} className="rounded-2xl shadow-lg border border-white/10" />
          <img src={IMAGES.gallery2} className="rounded-2xl shadow-lg border border-white/10" />
        </div>
      </section>


      {/* CONTACT */}
      <footer className="px-6 py-20 bg-black/60 border-t border-white/10">
        <div className="text-center">
          <FaPhoneAlt className="text-orange-500 text-4xl mx-auto" />
          <h3 className="text-3xl font-bold mt-4">Get in Touch</h3>
          <p className="text-gray-300 mt-2 mb-6">
            For bookings, consultations, or site evaluations — we're ready.
          </p>

          <button className="px-8 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 font-semibold text-lg">
            Call Us Now
          </button>

          <p className="text-gray-500 text-sm mt-10">
            © {new Date().getFullYear()} Cabro City. All Rights Reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
