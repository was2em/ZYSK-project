import React from "react";

function DashboardUI() {
  return (
    <div style={styles.container}>
      {/* Mockup Section */}
      <div style={styles.mockupContainer}>
        <div style={styles.mobileMockup}>
          <img
            src="https://images.prismic.io/app-radius/580c5ac6-a646-4bab-b751-ccb235af65ab_credit-debit-mobile-app-all-transactions-screen2.png?auto=compress,format"
            alt="Mobile View"
            style={styles.image}
          />
        </div>
        <div style={styles.desktopMockup}>
          <img
            src="https://hdfcsky.com/_next/static/media/advance-chart-desktop-view.cc4a27ca.jpg"
            alt="Desktop View"
            style={styles.image}
          />
        </div>
      </div>

      {/* Features Section */}
      <div style={styles.features}>
        <FeatureCard
          icon="📤"
          title="Share team inboxes"
          description="Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        />
        <FeatureCard
          icon="⚡"
          title="Deliver instant answers"
          description="An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        />
        <FeatureCard
          icon="📊"
          title="Manage your team with reports"
          description="Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple clicks."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div style={styles.featureCard}>
      <div style={styles.icon}>{icon}</div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
      <a href="#" style={styles.link}>
        Learn more →
      </a>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "center",
  },
  mockupContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "40px",
    flexWrap: "wrap",
  },
  mobileMockup: {
    width: "300px",
    height: "600px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    overflow: "hidden",
  },
  desktopMockup: {
    width: "800px",
    height: "450px",
    border: "1px solid #ddd",
    borderRadius: "20px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
  },
  featureCard: {
    width: "300px",
    border: "1px solid #eee",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  description: {
    fontSize: "14px",
    color: "#555",
  },
  link: {
    marginTop: "10px",
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default DashboardUI;
