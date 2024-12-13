import React from "react";

function TestimonialCard() {
  return (
    <div style={styles.container}>
      {/* Logo */}
      <div style={styles.logo}>
        <img
          src="https://cdn.vectorstock.com/i/1000x1000/45/30/electricity-green-circle-icon-design-vector-21964530.webp" // Replace with your actual logo
          alt="Sisyphus Logo"
          style={styles.logoImage}
        />
        <h1 style={styles.companyName}>Sisyphus</h1>
      </div>

      {/* Testimonial */}
      <p style={styles.testimonial}>
        We’ve been using <strong>Untitled</strong> to kick start every new
        project and can’t imagine working without it.
      </p>

      {/* User Information */}
      <div style={styles.userContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" // Replace with user profile picture
          alt="User Avatar"
          style={styles.userAvatar}
        />
        <div>
          <h3 style={styles.userName}>Candice Wu</h3>
          <p style={styles.userTitle}>Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  logoImage: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  companyName: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: 0,
  },
  testimonial: {
    fontSize: "18px",
    fontStyle: "italic",
    marginBottom: "30px",
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "15px",
  },
  userAvatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  userName: {
    fontSize: "16px",
    fontWeight: "bold",
    margin: 0,
  },
  userTitle: {
    fontSize: "14px",
    color: "#777",
    margin: 0,
  },
};

export default TestimonialCard;
