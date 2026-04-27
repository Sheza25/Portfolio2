import { useState, useEffect, useRef } from "react";
const photo="image(4).png;
const skills = [
  { name: "HTML5", icon: "🌐", level: 92 },
  { name: "CSS / Tailwind", icon: "🎨", level: 88 },
  { name: "JavaScript", icon: "⚡", level: 82 },
  { name: "ReactJS", icon: "⚛️", level: 78 },
  { name: "Python", icon: "🐍", level: 65 },
  { name: "Java", icon: "☕", level: 60 },
  { name: "Git / GitHub", icon: "🔗", level: 85 },
  { name: "C++", icon: "🔧", level: 55 },
];
 
const projects = [
  {
    title: "Weather App",
    emoji: "🌤️",
    desc: "Responsive web app built with HTML, CSS & JavaScript fetching real-time weather data from OpenWeatherMap API — displaying temperature, humidity, wind speed with dynamic visuals.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    color: "#00d4ff",
  },
  {
    title: "To-Do List App",
    emoji: "✅",
    desc: "Interactive task manager allowing users to add, edit, mark complete & delete tasks with real-time updates and a clean responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#a855f7",
  },
  {
    title: "Restaurant Landing Page",
    emoji: "🍽️",
    desc: "Fully responsive, visually appealing website showcasing a restaurant's brand, menu & services with smooth AOS scroll animations.",
    tech: ["HTML", "CSS", "AOS"],
    color: "#f97316",
  },
];
 
const education = [
  {
    year: "2025 (Expected)",
    title: "B.Tech",
    place: "KCC Institute of Technology & Management",
    grade: "8.0 CGPA",
    icon: "🎓",
  },
  {
    year: "2020 – 2022",
    title: "Class XII",
    place: "Maharani Kalyani College, Bihar",
    grade: "76%",
    icon: "📚",
  },
  {
    year: "2018 – 2019",
    title: "Class X",
    place: "Holy Mission School, Bihar",
    grade: "78%",
    icon: "🏫",
  },
];
 
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}
 
function Navbar({ active, setActive }) {
  const links = ["Home", "Skills", "Projects", "Education", "Contact"];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(5,5,20,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(0,212,255,0.15)" : "none",
      transition: "all 0.4s ease",
      padding: "0 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, background: "linear-gradient(90deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          SK.
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l)}
              style={{
                padding: "6px 16px", borderRadius: 20, fontSize: 14, fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
                color: active === l ? "#050514" : "#aaa",
                background: active === l ? "linear-gradient(90deg,#00d4ff,#a855f7)" : "transparent",
                textDecoration: "none", transition: "all 0.25s",
                border: active === l ? "none" : "1px solid transparent",
              }}
              onMouseEnter={e => { if (active !== l) { e.target.style.color = "#fff"; e.target.style.borderColor = "rgba(0,212,255,0.4)"; } }}
              onMouseLeave={e => { if (active !== l) { e.target.style.color = "#aaa"; e.target.style.borderColor = "transparent"; } }}
            >{l}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
 
function HeroSection() {
  const [typed, setTyped] = useState("");
  const full = "Frontend Developer";
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i >= full.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);
 
  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse 80% 70% at 50% -10%, rgba(0,212,255,0.12) 0%, transparent 60%), #050514",
    }}>
      {/* Floating particles */}
      {[...Array(18)].map((_, i) => (
        <div key={i} style={{
          position: "absolute",
          width: Math.random() * 3 + 1 + "px",
          height: Math.random() * 3 + 1 + "px",
          borderRadius: "50%",
          background: i % 2 === 0 ? "#00d4ff" : "#a855f7",
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          opacity: Math.random() * 0.5 + 0.2,
          animation: `float-${i % 3} ${4 + i % 4}s ease-in-out infinite alternate`,
        }} />
      ))}
 
      <div style={{ textAlign: "center", zIndex: 2, padding: "0 1rem" }}>
        {/* Photo */}
        <div style={{
          width: 160, height: 160, borderRadius: "50%", margin: "0 auto 2rem",
          border: "3px solid transparent",
          background: "linear-gradient(#050514,#050514) padding-box, linear-gradient(135deg,#00d4ff,#a855f7,#f97316) border-box",
          boxShadow: "0 0 40px rgba(0,212,255,0.3), 0 0 80px rgba(168,85,247,0.2)",
          overflow: "hidden",
          animation: "popIn 0.8s cubic-bezier(0.34,1.56,0.64,1) both",
        }}>
          <img
            src={`data:image/jpeg;base64,${PHOTO_B64}`}
            alt="Sheza Kareem"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
 
        <p style={{ color: "#00d4ff", fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, letterSpacing: 4, fontWeight: 600, marginBottom: 12, animation: "fadeUp 0.6s 0.3s both" }}>
          HELLO, I'M
        </p>
        <h1 style={{
          fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 800,
          background: "linear-gradient(135deg,#ffffff 0%,#a0d4ff 50%,#d4a0ff 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          margin: "0 0 0.5rem", lineHeight: 1.1,
          animation: "fadeUp 0.6s 0.5s both",
        }}>
          Sheza Kareem
        </h1>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(1.2rem,3vw,1.8rem)",
          color: "#888", fontWeight: 400, margin: "0 0 2rem",
          animation: "fadeUp 0.6s 0.7s both",
          minHeight: "2.5rem",
        }}>
          <span style={{ color: "#00d4ff" }}>{typed}</span>
          <span style={{ animation: "blink 1s step-end infinite", color: "#00d4ff" }}>|</span>
        </h2>
 
        <p style={{
          color: "#bbb", maxWidth: 520, margin: "0 auto 2.5rem", lineHeight: 1.7,
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
          animation: "fadeUp 0.6s 0.9s both",
        }}>
          Passionate about building clean, user-friendly web interfaces. Eager to contribute,
          learn new technologies, and grow as a professional software developer.
        </p>
 
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", animation: "fadeUp 0.6s 1.1s both" }}>
          <a href="#projects" style={{
            padding: "12px 32px", borderRadius: 30, fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600, fontSize: 15, textDecoration: "none", color: "#050514",
            background: "linear-gradient(135deg,#00d4ff,#a855f7)",
            boxShadow: "0 4px 24px rgba(0,212,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 32px rgba(0,212,255,0.45)"; }}
            onMouseLeave={e => { e.target.style.transform = ""; e.target.style.boxShadow = "0 4px 24px rgba(0,212,255,0.3)"; }}
          >
            View Projects
          </a>
          <a href="#contact" style={{
            padding: "12px 32px", borderRadius: 30, fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600, fontSize: 15, textDecoration: "none", color: "#00d4ff",
            border: "1.5px solid rgba(0,212,255,0.5)",
            background: "transparent",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.target.style.background = "rgba(0,212,255,0.1)"; e.target.style.borderColor = "#00d4ff"; }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.borderColor = "rgba(0,212,255,0.5)"; }}
          >
            Contact Me
          </a>
        </div>
 
        {/* Social links */}
        <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 32, animation: "fadeUp 0.6s 1.3s both" }}>
          {[
            { label: "GitHub", url: "https://github.com/Sheza25" },
            { label: "LinkedIn", url: "https://linkedin.com/in/sheza-kareem-174922353" },
            { label: "Email", url: "mailto:shezakareem025@gmail.com" },
          ].map(s => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
              style={{ color: "#666", fontSize: 13, textDecoration: "none", fontFamily: "'Space Grotesk', sans-serif", letterSpacing: 1, transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#00d4ff"}
              onMouseLeave={e => e.target.style.color = "#666"}
            >{s.label}</a>
          ))}
        </div>
      </div>
 
      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 120, background: "linear-gradient(transparent,#050514)" }} />
    </section>
  );
}
 
function SkillsSection() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} style={{ padding: "100px 2rem", background: "#050514" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <SectionTitle title="Skills" subtitle="Technologies I work with" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", gap: 20, marginTop: 60 }}>
          {skills.map((s, i) => (
            <div key={s.name} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "24px 28px",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.5s ${i * 0.08}s, transform 0.5s ${i * 0.08}s`,
              backdropFilter: "blur(4px)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, color: "#e0e0e0", fontSize: 15 }}>{s.name}</span>
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#00d4ff", fontSize: 13, fontWeight: 700 }}>{s.level}%</span>
              </div>
              <div style={{ height: 5, borderRadius: 5, background: "rgba(255,255,255,0.07)", overflow: "hidden" }}>
                <div style={{
                  height: "100%", borderRadius: 5,
                  background: "linear-gradient(90deg,#00d4ff,#a855f7)",
                  width: inView ? s.level + "%" : "0%",
                  transition: `width 1s ${i * 0.1 + 0.4}s cubic-bezier(0.4,0,0.2,1)`,
                  boxShadow: "0 0 10px rgba(0,212,255,0.4)",
                }} />
              </div>
            </div>
          ))}
        </div>
 
        {/* Soft skills + Certifications */}
        <div style={{ marginTop: 50, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {[
            {
              title: "🤝 Soft Skills",
              items: ["Collaboration", "Problem-solving", "Communication", "Time Management"]
            },
            {
              title: "🏅 Certifications",
              items: ["GenAI Powered Data Analytics – Tata Forage", "Data Fundamentals – IBM"]
            }
          ].map((card, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16, padding: "24px 28px",
              opacity: inView ? 1 : 0, transition: `opacity 0.5s ${0.8 + i * 0.15}s`,
            }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#fff", fontSize: 16, marginBottom: 16 }}>{card.title}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {card.items.map(item => (
                  <span key={item} style={{
                    padding: "5px 12px", borderRadius: 20, fontSize: 12,
                    background: "rgba(0,212,255,0.08)", color: "#00d4ff",
                    border: "1px solid rgba(0,212,255,0.2)",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function ProjectsSection() {
  const [ref, inView] = useInView();
  return (
    <section id="projects" ref={ref} style={{ padding: "100px 2rem", background: "linear-gradient(180deg,#050514 0%,#080820 100%)" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <SectionTitle title="Projects" subtitle="Things I've built" inView={inView} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(290px,1fr))", gap: 24, marginTop: 60 }}>
          {projects.map((p, i) => (
            <div key={p.title} style={{
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${p.color}22`,
              borderRadius: 20, padding: 28, position: "relative", overflow: "hidden",
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
              transition: `all 0.6s ${i * 0.15}s cubic-bezier(0.34,1.1,0.64,1)`,
              cursor: "default",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = `0 20px 50px ${p.color}22`;
                e.currentTarget.style.borderColor = `${p.color}55`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = `${p.color}22`;
              }}
            >
              {/* Glow orb */}
              <div style={{ position: "absolute", top: -30, right: -30, width: 100, height: 100, borderRadius: "50%", background: p.color, opacity: 0.06, filter: "blur(30px)" }} />
 
              <div style={{ fontSize: 40, marginBottom: 16 }}>{p.emoji}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 20, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ color: "#999", fontSize: 14, lineHeight: 1.7, fontFamily: "'Space Grotesk', sans-serif", marginBottom: 20 }}>{p.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 600,
                    color: p.color, background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function EducationSection() {
  const [ref, inView] = useInView();
  return (
    <section id="education" ref={ref} style={{ padding: "100px 2rem", background: "#050514" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <SectionTitle title="Education" subtitle="My academic journey" inView={inView} />
        <div style={{ marginTop: 60, position: "relative" }}>
          {/* Timeline line */}
          <div style={{
            position: "absolute", left: 24, top: 0, bottom: 0, width: 2,
            background: "linear-gradient(180deg,#00d4ff,#a855f7,transparent)",
            opacity: inView ? 1 : 0, transition: "opacity 0.8s 0.3s",
          }} />
 
          {education.map((e, i) => (
            <div key={e.title} style={{
              display: "flex", gap: 24, marginBottom: 40,
              opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-30px)",
              transition: `all 0.6s ${i * 0.15 + 0.2}s`,
            }}>
              {/* Timeline dot */}
              <div style={{
                width: 48, height: 48, borderRadius: "50%", flexShrink: 0,
                background: "linear-gradient(135deg,#00d4ff22,#a855f722)",
                border: "2px solid #00d4ff55",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, zIndex: 1,
              }}>{e.icon}</div>
 
              <div style={{
                flex: 1, background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16,
                padding: "20px 24px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#fff", fontSize: 18, margin: "0 0 4px" }}>{e.title}</h3>
                    <p style={{ color: "#bbb", fontSize: 14, fontFamily: "'Space Grotesk', sans-serif", margin: 0 }}>{e.place}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{ color: "#00d4ff", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>{e.year}</span>
                    <div style={{
                      marginTop: 4, padding: "3px 12px", borderRadius: 12,
                      background: "linear-gradient(90deg,#00d4ff22,#a855f722)",
                      color: "#a855f7", fontSize: 12, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                    }}>{e.grade}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 
function ContactSection() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
 
  const handle = () => {
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };
 
  const inputStyle = {
    width: "100%", padding: "14px 18px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)", color: "#e0e0e0",
    fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, outline: "none",
    boxSizing: "border-box", transition: "border 0.2s",
  };
 
  return (
    <section id="contact" ref={ref} style={{ padding: "100px 2rem 60px", background: "linear-gradient(180deg,#050514,#060618)" }}>
      <div style={{ maxWidth: 650, margin: "0 auto" }}>
        <SectionTitle title="Contact" subtitle="Let's work together" inView={inView} />
 
        <div style={{
          marginTop: 60, background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "40px 36px",
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.7s 0.2s",
        }}>
          <div style={{ display: "grid", gap: 16 }}>
            {[
              { key: "name", label: "Full Name", placeholder: "Your name" },
              { key: "email", label: "Email", placeholder: "your@email.com" },
            ].map(f => (
              <div key={f.key}>
                <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", color: "#aaa", fontSize: 12, fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>{f.label}</label>
                <input
                  type="text" placeholder={f.placeholder} value={form[f.key]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#00d4ff55"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", color: "#aaa", fontSize: 12, fontWeight: 600, letterSpacing: 1, marginBottom: 6 }}>Message</label>
              <textarea
                rows={5} placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={e => e.target.style.borderColor = "#00d4ff55"}
                onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
              />
            </div>
            <button onClick={handle} style={{
              padding: "14px", borderRadius: 12, border: "none", cursor: "pointer",
              background: sent ? "linear-gradient(135deg,#10b981,#059669)" : "linear-gradient(135deg,#00d4ff,#a855f7)",
              color: "#fff", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15,
              transition: "all 0.3s", boxShadow: "0 4px 20px rgba(0,212,255,0.25)",
            }}
              onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.target.style.transform = ""}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>
        </div>
 
        {/* Contact info */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 40, flexWrap: "wrap" }}>
          {[
            { icon: "📧", label: "shezakareem025@gmail.com" },
            { icon: "📍", label: "Greater Noida, India" },
            { icon: "📞", label: "+91 8789135144" },
          ].map(c => (
            <div key={c.label} style={{
              display: "flex", alignItems: "center", gap: 8,
              color: "#888", fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
              opacity: inView ? 1 : 0, transition: "opacity 0.6s 0.6s",
            }}>
              <span>{c.icon}</span>{c.label}
            </div>
          ))}
        </div>
      </div>
 
      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 80, color: "#444", fontSize: 13, fontFamily: "'Space Grotesk', sans-serif" }}>
        <span>Made with </span><span style={{ color: "#a855f7" }}>♥</span><span> by Sheza Kareem • 2025</span>
      </div>
    </section>
  );
}
 
function SectionTitle({ title, subtitle, inView }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p style={{
        color: "#00d4ff", fontFamily: "'Space Grotesk', sans-serif", fontSize: 12,
        letterSpacing: 4, fontWeight: 700, marginBottom: 12, textTransform: "uppercase",
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(-10px)",
        transition: "all 0.5s",
      }}>{subtitle}</p>
      <h2 style={{
        fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem,5vw,3rem)",
        color: "#fff", fontWeight: 800, margin: 0,
        opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.5s 0.1s",
      }}>{title}</h2>
      <div style={{
        width: inView ? 60 : 0, height: 3, background: "linear-gradient(90deg,#00d4ff,#a855f7)",
        margin: "16px auto 0", borderRadius: 2,
        transition: "width 0.6s 0.2s",
      }} />
    </div>
  );
}
 
export default function App() {
  const [active, setActive] = useState("Home");
 
  useEffect(() => {
    const sections = ["home", "skills", "projects", "education", "contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1));
      });
    }, { threshold: 0.4 });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #050514; }
        html { scroll-behavior: smooth; }
        @keyframes float-0 { from { transform: translateY(0); } to { transform: translateY(-20px); } }
        @keyframes float-1 { from { transform: translateY(0) translateX(0); } to { transform: translateY(-15px) translateX(10px); } }
        @keyframes float-2 { from { transform: translateY(0); } to { transform: translateY(-25px) translateX(-8px); } }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes popIn { from{opacity:0;transform:scale(0.5)} to{opacity:1;transform:scale(1)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #050514; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(#00d4ff,#a855f7); border-radius: 3px; }
      `}</style>
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  );
}
