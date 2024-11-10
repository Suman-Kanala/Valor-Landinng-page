import React from "react";
import "./LandingPage.css"; // Import your CSS file for styling

const LandingPage: React.FC = () => {
  const handleGetStartedClick = (): void => {
    alert("Redirecting to sign-up...");
  };

  return (
    <div className="landing-page">
      <header className="header">
        <div className="logo" data-testid="logo">
          Valor
        </div>
        <nav>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Your Future, Our Expertise</h1>
        <p>Helping you manage your finances for a better tomorrow.</p>
        <button onClick={handleGetStartedClick}>Get Started</button>
      </section>
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-item">
          <h3>Investment Management</h3>
          <p>Expert management of your investment portfolio.</p>
        </div>
        <div className="service-item">
          <h3>Financial Planning</h3>
          <p>Comprehensive planning for your financial future.</p>
        </div>
        <div className="service-item">
          <h3>Retirement Solutions</h3>
          <p>Strategies to secure your retirement.</p>
        </div>
      </section>
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          Valor is dedicated to providing top-notch money management services.
          Our team of experts is here to guide you every step of the way.
        </p>
      </section>
      <section className="testimonials" id="testimonials">
        <h2>What Our Clients Say</h2>
        <blockquote>
          <p>
            "Valor helped me turn my finances around. Their team is
            knowledgeable and trustworthy!"
          </p>
          <cite>- Happy Client</cite>
        </blockquote>
      </section>
      <footer className="footer" id="contact">
        <h3>Contact Us</h3>
        <p>Email: info@valor.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>© 2023 Valor Money Management</p>
      </footer>
    </div>
  );
};

export default LandingPage;
