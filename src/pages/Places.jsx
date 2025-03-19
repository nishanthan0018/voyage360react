import React, { useState } from "react";
import "../style.css";
import {sendBookingEmail} from "../Email.js"

const destinations = [
  {
    id: 1,
    name: "Manali, India",
    price: "Rs 5,999 - Rs 8,999",
    img: "https://images.pexels.com/photos/771535/pexels-photo-771535.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.7,
    season: "Best time: Oct - Feb",
    category: "Mountains",
    description:
      "Experience snow-capped mountains, adventure sports, and breathtaking views in Manali.",
  },
  {
    id: 2,
    name: "Goa, India",
    price: "Rs 7,999 - Rs 12,999",
    img: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.5,
    season: "Best time: Nov - Feb",
    category: "Beach",
    description:
      "Relax on golden beaches, enjoy water sports, and explore Goa’s vibrant nightlife.",
  },
  {
    id: 3,
    name: "Paris, France",
    price: "Rs 15,999 - Rs 25,999",
    img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.9,
    season: "Best time: Apr - Jun, Sep - Nov",
    category: "City",
    description:
      "Explore the city of love, home to art, culture, and the iconic Eiffel Tower.",
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    price: "Rs 10,999 - Rs 18,999",
    img: "https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.6,
    season: "Best time: Apr - Oct",
    category: "Island",
    description:
      "A tropical paradise with pristine beaches, temples, and waterfalls.",
  },
  {
    id: 5,
    name: "Swiss Alps, Switzerland",
    price: "Rs 20,999 - Rs 35,999",
    img: "https://images.pexels.com/photos/326119/pexels-photo-326119.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.8,
    season: "Best time: Dec - Apr",
    category: "Mountains",
    description:
      "Enjoy skiing, breathtaking landscapes, and luxury resorts in the Swiss Alps.",
  },
  {
    id: 6,
    name: "Tokyo, Japan",
    price: "Rs 18,999 - Rs 30,999",
    img: "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.8,
    season: "Best time: Mar - May, Sep - Nov",
    category: "City",
    description:
      "A mix of ultra-modern and traditional culture with bustling streets and ancient temples.",
  },
  {
    id: 7,
    name: "Kanyakumari ,India",
    price: "Rs 18,999 - Rs 30,999",
    img: "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.8,
    season: "Best time: Mar - May, Sep - Nov",
    category: "City",
    description:
      "A mix of ultra-modern and traditional culture with bustling streets and ancient temples.",
  },
  {
    id: 8,
    name: "New York City, USA",
    price: "Rs 30,999 - Rs 50,999",
    img: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.7,
    season: "Best time: Apr - Jun, Sep - Nov",
    category: "City",
    description:
      "The city that never sleeps—iconic skyscrapers, Times Square, and Broadway shows.",
  },
  {
    id: 9,
    name: "Dubai, UAE",
    price: "Rs 22,999 - Rs 45,999",
    img: "https://images.pexels.com/photos/247441/pexels-photo-247441.jpeg?w=600&auto=compress&cs=tinysrgb",
    rating: 4.8,
    season: "Best time: Nov - Mar",
    category: "City",
    description:
      "A futuristic city with luxury shopping, desert adventures, and towering skyscrapers.",
  },
];
const Places = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    travelers: 1,
  });

  const openBookingForm = (destination) => {
    setSelectedDestination(destination);
  };

  const closeBookingForm = () => {
    setSelectedDestination(null);
    setFormData({ name: "", email: "", date: "", travelers: 1 });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.date) {
      alert("❌ Please fill in all fields!");
      return;
    }

    // Call sendBookingEmail function to send an email
    sendBookingEmail(formData, selectedDestination).then((result) => {
        if (result === "success") {
          alert(
            `🎉 Booking confirmed for ${formData.name} to ${selectedDestination.name} on ${formData.date}! Check your email.`
          );
          closeBookingForm();
        } else {
          alert("❌ Something went wrong with the email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error during email sending:", error);
        alert("❌ Something went wrong. Please try again later.");
      });
  };

  return (
    <section className="places-container">
      <h1>Explore the World's Most Beautiful Destinations</h1>
      <p>Find your dream vacation from our curated travel spots.</p>

      {/* Search & Filter Section */}
      <div className="filters">
        <input
          type="text"
          className="search-bar"
          placeholder="Search by destination..."
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <select
          className="filter-dropdown"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Mountains">Mountains</option>
          <option value="Beach">Beaches</option>
        </select>
      </div>

      {/* Destinations Grid */}
      <div className="places-grid">
        {destinations
          .filter(
            (place) =>
              (filter === "All" || place.category === filter) &&
              place.name.toLowerCase().includes(search)
          )
          .map((place) => (
            <div key={place.id} className="place-card">
              <img src={place.img} alt={place.name} />
              <div className="place-info">
                <h3>{place.name}</h3>
                <p className="place-description">{place.description}</p>
                <p className="place-season">{place.season}</p>
                <p className="place-rating">⭐ {place.rating}</p>
                <p className="place-price">{place.price}</p>
                <button
                  className="book-btn"
                  onClick={() => openBookingForm(place)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Booking Modal */}
      {selectedDestination && (
        <div className="booking-modal">
          <div className="booking-form">
            <h2>Book Your Trip to {selectedDestination.name}</h2>
            <form onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="date"
                required
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              <input
                type="number"
                min="1"
                placeholder="Travelers Count"
                required
                onChange={(e) =>
                  setFormData({ ...formData, travelers: e.target.value })
                }
              />
              <button type="submit" className="confirm-btn">
                Confirm Booking
              </button>
            </form>
            <button className="close-btn" onClick={closeBookingForm}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Places;
