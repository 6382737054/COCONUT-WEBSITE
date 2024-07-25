import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const cardRefs = useRef([]);


  const handleMouseMove = (e, card) => {
    if (card) {
      const { clientX, clientY } = e;
      const { left, top, width, height } = card.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const offsetX = clientX - centerX;
      const offsetY = clientY - centerY;

      const maxOffset = 10; 
      const transformX = (offsetX / width) * maxOffset;
      const transformY = (offsetY / height) * maxOffset;

      card.style.transform = `rotateX(${transformY}deg) rotateY(${transformX}deg)`;
    }
  };


  const handleMouseLeave = (card) => {
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  useEffect(() => {
    const cards = cardRefs.current;

   
    cards.forEach(card => {
      if (card) {
        card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
        card.addEventListener('mouseleave', () => handleMouseLeave(card));
      }
    });


    return () => {
      cards.forEach(card => {
        if (card) {
          card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
          card.removeEventListener('mouseleave', () => handleMouseLeave(card));
        }
      });
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-gray-100 pt-16">
      {}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3647602/pexels-photo-3647602.jpeg")' }} />
      
      {}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight animate-fade-in">
          Discover the Freshness of Nature's Finest Coconuts
        </h1>
        <p className="text-lg md:text-xl text-black mb-8 animate-fade-in">
          From fresh coconuts to premium coconut-based products, explore our wide range of offerings designed to meet your every need. Quality and freshness, directly from the source.
        </p>
        <Link to="/contact">
          <button className="bg-teal-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 animate-fade-in">
            Contact Us
          </button>
        </Link>
        
        {}
        <div className="mt-12 flex flex-col items-center">
          <h2 className="text-3xl text-black mb-4 animate-fade-in">Our Offerings</h2>
          <p className="text-lg text-black mb-8 animate-fade-in">Explore a variety of coconut products crafted to perfection for your enjoyment.</p>
          <div className="flex gap-6 flex-wrap justify-center">
            <div ref={(el) => (cardRefs.current[0] = el)} className="bg-white p-6 rounded-lg shadow-lg w-60 text-center transform transition-transform duration-300 hover:scale-105 animate-fade-in">
              <img src="https://images.pexels.com/photos/3185488/pexels-photo-3185488.jpeg" alt="Fresh Coconuts" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Fresh Coconuts</h3>
              <p className="text-gray-600">Directly sourced and freshly picked for the best quality.</p>
            </div>
            <div ref={(el) => (cardRefs.current[1] = el)} className="bg-white p-6 rounded-lg shadow-lg w-60 text-center transform transition-transform duration-300 hover:scale-105 animate-fade-in">
              <img src="https://images.pexels.com/photos/4748380/pexels-photo-4748380.jpeg" alt="Coconut Oil" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Coconut Oil</h3>
              <p className="text-gray-600">Pure and natural oil for all your cooking and skincare needs.</p>
            </div>
            <div ref={(el) => (cardRefs.current[2] = el)} className="bg-white p-6 rounded-lg shadow-lg w-60 text-center transform transition-transform duration-300 hover:scale-105 animate-fade-in">
              <img src="https://images.pexels.com/photos/3617788/pexels-photo-3617788.jpeg" alt="Coconut Water" className="w-full h-32 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">Coconut Water</h3>
              <p className="text-gray-600">Refreshing and hydrating, packed with nutrients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
