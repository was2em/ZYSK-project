import React, { useState } from "react";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "" },
    { question: "What is your cancellation policy?", answer: "" },
    { question: "Can other info be added to an invoice?", answer: "" },
    { question: "How does billing work?", answer: "" },
    { question: "How do I change my account email?", answer: "" },
  ];

  return (
    <div style={styles.container}>
      {/* FAQ Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Frequently asked questions</h1>
        <p style={styles.subtitle}>
          Everything you need to know about the product and billing.
        </p>
      </div>

      {/* FAQ List */}
      <div style={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              ...styles.faqItem,
              borderBottom:
                index === faqs.length - 1 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <div
              style={styles.faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span style={styles.toggleIcon}>
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p style={styles.faqAnswer}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Still Have Questions */}
      <div style={styles.footer}>
        <div style={styles.footerImage}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/17/17438.png"
            alt="Team"
            style={styles.teamImage}
          />
        </div>
        <h3 style={styles.footerTitle}>Still have questions?</h3>
        <p style={styles.footerText}>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button style={styles.button}>Get in touch</button>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "auto",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
  },
  faqList: {
    borderRadius: "10px",
    overflow: "hidden",
  },
  faqItem: {
    padding: "20px",
    cursor: "pointer",
    background: "#fff",
  },
  faqQuestion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "16px",
    fontWeight: "bold",
  },
  faqAnswer: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  toggleIcon: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#555",
  },
  footer: {
    textAlign: "center",
    marginTop: "40px",
    padding: "20px",
    background: "#f9fafb",
    borderRadius: "10px",
  },
  footerImage: {
    marginBottom: "20px",
  },
  teamImage: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  footerTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  footerText: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    background: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FAQSection;
