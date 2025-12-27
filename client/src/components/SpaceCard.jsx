import React from "react";

const SpaceCard = ({ title, image, description }) => (
  <div
    style={{
      background: "rgba(66, 86, 177, 0.85)",
      borderRadius: "18px",
      boxShadow: "0 4px 24px rgba(19, 112, 155, 0.86)",
      width: "320px",
      overflow: "hidden",
      marginBottom: "24px",
      border: "1px solid #222244",
      transition: "transform 0.2s",
    }}
  >
    <img
      src={image}
      alt={title}
      style={{ width: "100%", height: "200px", objectFit: "cover" }}
    />
    <div style={{ padding: "20px" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          margin: "0 0 10px 0",
          color: "#e0e0ff",
        }}
      >
        {title}
      </h2>
      <p style={{ color: "#b3b3cc", fontSize: "1rem" }}>{description}</p>
    </div>
  </div>
);

export default SpaceCard;