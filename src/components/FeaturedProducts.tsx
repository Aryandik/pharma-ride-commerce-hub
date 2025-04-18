
import React from 'react';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

// Mock data for featured products
const featuredProducts = [
  {
    id: 'prod-1',
    name: 'Paracetamol 500mg Tablets',
    image: '/placeholder.svg',
    price: 45,
    originalPrice: 60,
    discount: 25,
    category: 'Medicine'
  },
  {
    id: 'prod-2',
    name: 'Digital Blood Pressure Monitor',
    image: '/placeholder.svg',
    price: 1499,
    originalPrice: 1999,
    discount: 25,
    category: 'Health Devices'
  },
  {
    id: 'prod-3',
    name: 'Baby Care Essentials Kit',
    image: '/placeholder.svg',
    price: 699,
    originalPrice: 999,
    discount: 30,
    category: 'Baby Care'
  },
  {
    id: 'prod-4',
    name: 'Multivitamin Tablets',
    image: '/placeholder.svg',
    price: 299,
    originalPrice: 399,
    discount: 25,
    category: 'Wellness',
    isOutOfStock: true
  },
];

interface FeaturedProductsProps {
  title: string;
  viewAllLink: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, viewAllLink }) => {
  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button asChild variant="ghost" className="text-pharmacy-primary hover:text-pharmacy-dark">
            <Link to={viewAllLink}>
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              category={product.category}
              isOutOfStock={product.isOutOfStock}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
