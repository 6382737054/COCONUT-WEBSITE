import React from 'react';
import CountUp from 'react-countup';
import aboutImage from '../Images/AboutImg.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-lg shadow-lg max-w-full lg:w-1/2"
          />
          <div className="lg:w-1/2">
            <p className="text-lg mb-4">
              Our company has been a leader in the coconut industry for over 20 years. We are committed to providing high-quality products while maintaining sustainability and ethical practices.
            </p>
            <p className="text-lg mb-8">
              From coconut water to coconut oil, our products are made from the freshest coconuts and crafted with care to ensure the best quality for our customers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="stat-item">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp end={2000} duration={2} />+
                </h3>
                <p className="text-lg">Customers</p>
              </div>
              <div className="stat-item">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp end={15} duration={2} />+
                </h3>
                <p className="text-lg">Countries</p>
              </div>
              <div className="stat-item">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp end={50} duration={2} />+
                </h3>
                <p className="text-lg">Products</p>
              </div>
              <div className="stat-item">
                <h3 className="text-3xl font-bold text-teal-500">
                  <CountUp end={20} duration={2} />+
                </h3>
                <p className="text-lg">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
