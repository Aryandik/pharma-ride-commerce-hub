
import React from 'react';
import { Button } from './ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  isOutOfStock?: boolean;
}

const ProductCard: React.FC<ProductProps> = ({ 
  id, 
  name, 
  image, 
  price, 
  originalPrice, 
  discount,
  category,
  isOutOfStock = false
}) => {
  return (
    <div className="product-card group relative">
      {discount && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md z-10">
          {discount}% OFF
        </div>
      )}
      
      <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
      </button>
      
      <Link to={`/product/${id}`}>
        <div className="relative mb-3">
          <img 
            src={image || '/placeholder.svg'}
            alt={name}
            className="product-image"
          />
          {isOutOfStock && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <span className="text-red-500 font-medium text-sm py-1 px-3 border border-red-500 rounded">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>
      
      <div className="space-y-1">
        <span className="text-xs text-pharmacy-primary font-medium">{category}</span>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-sm leading-snug line-clamp-2 hover:text-pharmacy-primary transition-colors">
            {name}
          </h3>
        </Link>
        
        <div className="flex items-center">
          <span className="font-semibold text-base mr-2">₹{price}</span>
          {originalPrice && (
            <span className="text-gray-400 text-sm line-through">₹{originalPrice}</span>
          )}
        </div>
      </div>
      
      <div className="mt-3">
        <Button 
          variant="outline" 
          className="w-full border-pharmacy-primary text-pharmacy-primary hover:bg-pharmacy-primary hover:text-white"
          disabled={isOutOfStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          {isOutOfStock ? "Out of Stock" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
