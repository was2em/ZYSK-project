import React from "react";

import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "📧", // Placeholder for an icon
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: "⚡",
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: "📊",
      title: "Manage your team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. Filter, export, and drill down on data in a couple of clicks.",
    },
    {
      icon: "💬",
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
    },
    {
      icon: "🔗",
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our developer tools.",
    },
    {
      icon: "🤝",
      title: "Our people make the difference",
      description:
        "We're an extension of your customer service team. Chat to our friendly team 24/7 when you need help.",
    },
  ];

  return (
    <section className="features">
      <header className="features-header">
        <h2>Analytics that feels like it’s from the future</h2>
        <p>
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </header>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
