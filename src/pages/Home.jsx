import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
import travelVideo from "../assets/videos/3002384-hd_1920_1080_25fps.mp4";
const Home = () => {
  return (
    <main className="home-container">
      {/* 🌍 Hero Section */}
      <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src={travelVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-overlay">
        <h1 className="hero-title">Fly Beyond Borders With Your Voyage 360 ✈️</h1>
        <p className="hero-subtitle">Discover breathtaking destinations with ease.</p>
        <Link to="/places">
          <button className="explore-btn">Start Your Journey</button>
        </Link>
      </div>
    </section>
      {/* 📌 About Section */}
     

      <section className="why-choose-us">
        <h2>Why Choose Voyage 360?</h2>
        <div className="features">
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Unique Destinations"
            />
            <h3>🌎 Unique Destinations</h3>
            <p>
              Discover hidden gems, iconic landmarks, and breathtaking locations
              worldwide.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/2102435/pexels-photo-2102435.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hassle-Free Travel"
            />
            <h3>✈️ Hassle-Free Travel</h3>
            <p>
              We handle flights, hotels, and itineraries so you can enjoy
              stress-free trips.
            </p>
          </div>
          <div className="feature-card">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Trusted Travelers"
            />
            <h3>⭐ Trusted By Travelers</h3>
            <p>Rated 5-star by thousands of satisfied adventurers worldwide.</p>
          </div>
        </div>
      </section>

      {/* 🌍 Featured Destinations */}
      <section className="featured-destinations">
        <h2>Explore Our Most Popular Destinations</h2>
        <div className="destinations-grid">
          <div className="destination-card">
            <img
              src="https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Paris"
            />
            <h3>🗼 Paris, France</h3>
            <p>
              Experience the charm of the Eiffel Tower, exquisite cuisine, and
              artistic culture.
            </p>
          </div>
          <div className="destination-card">
            <img
              src="https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Bali"
            />
            <h3>🌊 Bali, Indonesia</h3>
            <p>Enjoy the beaches, lush greenery, and serene temples of Bali.</p>
          </div>
          <div className="destination-card">
            <img
              src="https://images.pexels.com/photos/3787831/pexels-photo-3787831.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dubai"
            />
            <h3>🏙️ Dubai, UAE</h3>
            <p>
              Explore a city of luxury, sky-high buildings, and desert
              adventures.
            </p>
          </div>
        </div>
      </section>

      {/* 🏆 Testimonials */}
      <section className="testimonials">
        <h2>What Our Travelers Say ✨</h2>
        <div className="testimonial-box">
          <div className="testimonial">
            <p className="quote">
              “🚀 Voyage 360 planned the best vacation ever! Everything was
              seamless.”
            </p>
            <h4>👩‍💼 - Emily Johnson</h4>
          </div>
          <div className="testimonial">
            <p className="quote">
              “🌍 The destinations, guides, and accommodations exceeded my
              expectations.”
            </p>
            <h4>🧳 - Michael Smith</h4>
          </div>
          <div className="testimonial">
            <p className="quote">
              “💯 Highly recommend Voyage 360 for stress-free and luxurious
              travel.”
            </p>
            <h4>🏝️ - Sarah Williams</h4>
          </div>
          <div className="testimonial">
            <p className="quote">
              “✈️ The best trip of my life! Hassle-free booking & amazing
              service.”
            </p>
            <h4>🌟 - David Thompson</h4>
          </div>
        </div>
      </section>

      {/* ✉️ Newsletter */}
      <section className="newsletter">
        <h2>Subscribe for Exclusive Travel Deals</h2>
        <p>Stay updated with the latest travel offers and tips.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      {/* 🎯 Call-to-Action */}
      <section className="cta">
        <h2>Where Will Your Next Adventure Take You?</h2>
        <p>Start planning your dream vacation with Voyage 360 today.</p>
        <Link to="/places">
          <button className="explore-btn">Plan Your Trip</button>
        </Link>
      </section>
    </main>
  );
};

export default Home;
