import React from 'react'
import '../css/Landing.css'; 
const Landing = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to GENPACT BANK</h1>
        <p>Your trusted partner in financial management</p>
        <p>Simple and safe bank </p>
      </header>
      <section className="landing-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>At Genpact Bank, we are committed to delivering top-notch banking services with a focus on customer satisfaction. With over two decades of experience in the banking industry, we provide a comprehensive range of services, including personal and business banking, loans, and customized investment solutions to meet your financial needs.</p>
        </div>
        <div className="content-section">
          <h2>Our Services</h2>
          <ul>
            <li><strong>Personal Banking:</strong> Enjoy a range of personal banking products including savings and checking accounts, credit cards, and personal loans.</li>
            <li><strong>Business Banking:</strong> Benefit from our business accounts, merchant services, and business loans designed to support your company’s growth.</li>
            <li><strong>Loans:</strong> We offer various loan options including home loans, auto loans, and personal loans with competitive rates.</li>
            <li><strong>Investment Solutions:</strong> Explore our investment products and services to help you plan for your future and achieve your financial goals.</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Why Choose Us?</h2>
          <p>We are dedicated to providing a seamless and efficient banking experience through innovative solutions and secure transactions. Our commitment to quality service has made us a trusted choice for both individuals and businesses.
          </p>
        </div>
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>Our friendly customer service team is available to assist you with any questions or concerns. Reach out to us by phone, email, or visit one of our convenient branch locations.</p>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Genpact Bank. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Landing
