import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Join 4,000+ companies already growing</p>
      <div className="logos">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s" alt="Company 1" />
        <img src="https://nordiclightbox.com/wp-content/uploads/2024/08/Lightbox-logo.svg" alt="Company 2" />
        <img src="https://featherdev.com/wp-content/uploads/2021/01/cropped-logo-feather-dev.png" alt="Company 3" />
        <img src="https://www.aireuropa.com/dam/jcr:3491d1f2-8887-4151-803f-cdf5916df4ee/Logo_GlobalBank_Azul.png" alt="Company 4" />
      </div>
    </footer>
  );
};

export default Footer;
