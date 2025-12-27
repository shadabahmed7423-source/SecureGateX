import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          minHeight: "100vh",
          background:
            'linear-gradient(120deg, #1e215d 60%, #3a3b5a 100%)',
          color: "#fff",
          paddingTop: 90,
          paddingBottom: 40,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba(34, 36, 60, 0.97)",
            borderRadius: "22px",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
            maxWidth: 1100,
            width: "95%",
            padding: "48px 36px",
            margin: "40px 0 24px 0",
            textAlign: "left",
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexDirection: "row",
            gap: "48px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Left Side: Logo and About */}
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ marginBottom: 24, textAlign: "center" }}>
              <svg width="60" height="60" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="url(#paint0_linear)" />
                <ellipse cx="16" cy="16" rx="7" ry="11" fill="#fff" fillOpacity="0.13" />
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#6e8efb" />
                    <stop offset="1" stopColor="#a777e3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: 12, letterSpacing: 1, textAlign: "center" }}>
              About SecureGateX
            </h1>
            <p style={{ fontSize: "1.13rem", color: "#b3b3cc", marginBottom: 28, lineHeight: 1.7, textAlign: "center" }}>
              <b>SecureGateX</b> is a modern platform dedicated to exploring and protecting the wonders of our universe.<br />
              Our mission is to inspire curiosity, share knowledge, and connect space enthusiasts with breathtaking images and fascinating facts about galaxies, nebulae, and the cosmos.
            </p>
            <div style={{ marginTop: 24, color: "#b3b3cc", fontSize: "1.05rem", textAlign: "center" }}>
              <b>Contact us:</b> <a href="mailto:support@SecureGateX.com" style={{ color: "#a777e3", textDecoration: "none" }}>support@SecureGateX.com</a>
            </div>
          </div>
          {/* Right Side: Features */}
          <div
            style={{
              flex: 1.2,
              display: "flex",
              flexDirection: "row",
              gap: "28px",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
            }}
          >
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="#a777e3" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
              }
              title="Inspiring Curiosity"
              text="We bring the universe closer to you with stunning visuals and facts that spark wonder."
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="#6e8efb" viewBox="0 0 24 24"><path d="M12 4.354a8 8 0 1 0 0 15.292A8 8 0 0 0 12 4.354zm0 14.292A6.293 6.293 0 1 1 12 5.708a6.293 6.293 0 0 1 0 12.938zm0-10.938a4.646 4.646 0 1 0 0 9.292 4.646 4.646 0 0 0 0-9.292z"/></svg>
              }
              title="Sharing Knowledge"
              text="Learn about galaxies, nebulae, and cosmic phenomena through curated content."
            />
            <FeatureCard
              icon={
                <svg width="32" height="32" fill="#fff" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              }
              title="Connecting Enthusiasts"
              text="A community for those who look up and dream big. Share, discuss, and connect."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const FeatureCard = ({ icon, title, text }) => (
  <div
    style={{
      background: "rgba(30, 32, 60, 0.93)",
      borderRadius: "16px",
      padding: "28px 22px",
      minWidth: 200,
      maxWidth: 240,
      boxShadow: "0 2px 12px rgba(30,32,60,0.10)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      border: "1px solid #23243a",
      justifyContent: "center",
      flex: 1,
    }}
  >
    <div style={{ marginBottom: 16 }}>{icon}</div>
    <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "1.15rem", marginBottom: 8, textAlign: "center" }}>{title}</h3>
    <p style={{ color: "#b3b3cc", fontSize: "0.98rem", textAlign: "center" }}>{text}</p>
  </div>
);

export default AboutPage;