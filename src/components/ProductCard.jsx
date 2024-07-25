import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
}

export default ProductCard;
