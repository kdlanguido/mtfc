import React from "react";
function Trainers() {
  return (
    <div style={{ position: "relative", width: "100%", height: 600, top: 0 }}>
      <div>
        <img
          style={{ width: "100%", height: 600, margin: 0, padding: 0 }}
          src="/assets/trainerbackground1.png"
          alt="Trainers"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",

            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "48px", fontWeight: "bold" }}>
            Choose your Personal Trainer{" "}
          </p>
          <p style={{ fontSize: "48px", fontWeight: "bold" }}>in</p>
          <p
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#1AB8B8",
            }}
          >
            Manila Total Fitness
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
