export default function Home() {
  // Simple animation class injection
  if (typeof document !== "undefined") {
    const style = document.createElement("style");
    style.innerHTML = `
      .pricing-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 22px rgba(0,0,0,0.15) !important;
      }

      .fade-up {
        opacity: 0;
        transform: translateY(30px);
        animation: fadeUp 0.9s ease forwards;
      }

      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          padding: "18px 30px",
          background: "#1b3a2f",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0, fontSize: "20px", letterSpacing: "1px" }}>
          CABRO CITY
        </h2>

        <a
          href="tel:+254700000000"
          style={{
            padding: "10px 20px",
            background: "#e0c068",
            color: "#1b3a2f",
            borderRadius: "5px",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          Call Now
        </a>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          background: "url('https://res.cloudinary.com/dfyhjolmi/image/upload/v1733637451/Screenshot_2024-12-07-06-39-04-85_1c337646f29875672b5a61192b9010f9_fqr9gm.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "120px 20px",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.55)",
            padding: "60px 20px",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ fontSize: "40px", margin: "0 0 15px" }}>
            Precision Cabro Installation
          </h1>
          <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "18px" }}>
            Professional paving, leveling, drainage and landscaping — built for
            durability and clean finish.
          </p>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <a
              href="https://wa.me/254700000000"
              style={{
                padding: "12px 25px",
                background: "#25D366",
                borderRadius: "5px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              WhatsApp Us
            </a>

            <a
              href="tel:+254700000000"
              style={{
                padding: "12px 25px",
                background: "#e0c068",
                borderRadius: "5px",
                color: "#1b3a2f",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>Our Services</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "Cabro Installation",
              desc: "Driveways, walkways, compounds & commercial paving.",
            },
            {
              title: "Landscaping & Leveling",
              desc: "Ground shaping, leveling, beautification & site prep.",
            },
            {
              title: "Drainage & Civil Works",
              desc: "Trenching, water flow design and foundation protection.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "10px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{service.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section
        style={{
          padding: "60px 20px",
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Recent Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            "https://res.cloudinary.com/dfyhjolmi/image/upload/v1733637680/Screenshot_2024-12-07-06-24-42-56_1c337646f29875672b5a61192b9010f9_qgjyxr.jpg",
            "https://res.cloudinary.com/dfyhjolmi/image/upload/v1733637581/Screenshot_2024-12-07-06-31-55-33_1c337646f29875672b5a61192b9010f9_mmxe6g.jpg",
            "https://res.cloudinary.com/dfyhjolmi/image/upload/v1733637451/Screenshot_2024-12-07-06-39-04-85_1c337646f29875672b5a61192b9010f9_fqr9gm.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="fade-up"
              style={{
                background: "white",
                padding: "10px",
                borderRadius: "10px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={src}
                alt="Project"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* PRICING / PACKAGES */}
      <section
        style={{
          padding: "60px 20px",
          textAlign: "center",
          background: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "25px" }}>Packages</h2>

        <p style={{ maxWidth: "700px", margin: "0 auto 40px", fontSize: "16px" }}>
          Transparent rates depending on surface area, ground condition, cabro type,
          design complexity, drainage needs and site preparation required.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {/* BASIC */}
          <div
            className="pricing-card fade-up"
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3>Basic Package</h3>
            <p style={{ minHeight: "60px" }}>
              Clean standard cabro installation for driveways & walkways.
            </p>
            <h4 style={{ margin: "10px 0", color: "#1b3a2f" }}>From KES 1,200/m²</h4>
            <ul style={{ padding: 0, listStyle: "none", marginTop: "15px" }}>
              <li>✔ Site assessment</li>
              <li>✔ Base preparation</li>
              <li>✔ Standard cabro blocks</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div
            className="pricing-card fade-up"
            style={{
              background: "#1b3a2f",
              color: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 3px 12px rgba(0,0,0,0.2)",
              transform: "scale(1.03)",
            }}
          >
            <h3>Premium Package</h3>
            <p style={{ minHeight: "60px" }}>
              Heavy-duty paving with elegant finish and improved leveling.
            </p>
            <h4 style={{ margin: "10px 0", color: "#e0c068" }}>From KES 1,650/m²</h4>
            <ul style={{ padding: 0, listStyle: "none", marginTop: "15px" }}>
              <li>✔ Superior block designs</li>
              <li>✔ Enhanced leveling</li>
              <li>✔ Edge trimming</li>
            </ul>
          </div>

          {/* ELITE */}
          <div
            className="pricing-card fade-up"
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <h3>Elite Package</h3>
            <p style={{ minHeight: "60px" }}>
              High-end patterns, landscaping integration & drainage engineering.
            </p>
            <h4 style={{ margin: "10px 0", color: "#1b3a2f" }}>From KES 2,200/m²</h4>
            <ul style={{ padding: 0, listStyle: "none", marginTop: "15px" }}>
              <li>✔ Custom patterns</li>
              <li>✔ Water drainage setup</li>
              <li>✔ Premium materials</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1b3a2f",
          padding: "30px 20px",
          color: "white",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Cabro City Construction. All Rights
          Reserved.
        </p>
      </footer>
    </main>
  );
}
