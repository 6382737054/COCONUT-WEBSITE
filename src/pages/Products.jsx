import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    { id: 1, name: 'Coconut Oil', image: 'https://images.pexels.com/photos/3185488/pexels-photo-3185488.jpeg', description: 'Pure and natural coconut oil. Perfect for cooking and skincare.' },
    { id: 2, name: 'Coconut Water', image: 'https://images.pexels.com/photos/3617788/pexels-photo-3617788.jpeg', description: 'Refreshing coconut water. Hydrate yourself naturally.' },
    { id: 3, name: 'Coconut Milk', image: 'https://images.pexels.com/photos/276293/pexels-photo-276293.jpeg', description: 'Rich and creamy coconut milk. Ideal for cooking and baking.' },
    { id: 4, name: 'Coconut Flour', image: 'https://images.pexels.com/photos/5455224/pexels-photo-5455224.jpeg', description: 'Healthy and gluten-free coconut flour. Great for baking.' },
    { id: 5, name: 'Coconut Sugar', image: 'https://images.pexels.com/photos/4586304/pexels-photo-4586304.jpeg', description: 'Natural and unrefined coconut sugar. A healthy sweetener alternative.' },
    { id: 6, name: 'Desiccated Coconut', image: 'https://images.pexels.com/photos/2104884/pexels-photo-2104884.jpeg', description: 'Finely shredded desiccated coconut. Perfect for baking and cooking.' }
  ];

  return (
    <section id="products" className="py-20 text-center bg-green-100">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
