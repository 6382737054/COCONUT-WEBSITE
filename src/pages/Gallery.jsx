import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const images = [
    'https://via.placeholder.com/800x600?text=Image+1',
    'https://via.placeholder.com/800x600?text=Image+2',
    'https://via.placeholder.com/800x600?text=Image+3'
  ];

  return (
    <section id="gallery" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-4">Gallery</h2>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery slide ${index + 1}`} className="mx-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Gallery;
