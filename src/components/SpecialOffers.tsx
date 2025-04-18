
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 'offer-1',
    title: 'Medicine Discount',
    description: 'Get 25% off on all prescription medicines',
    image: '/placeholder.svg',
    link: '/offers/medicine-discount',
    bgColor: 'bg-pharmacy-light'
  },
  {
    id: 'offer-2',
    title: 'Health Device Sale',
    description: 'Up to 30% off on health monitoring devices',
    image: '/placeholder.svg',
    link: '/offers/health-devices',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'offer-3',
    title: 'Baby Products',
    description: 'Buy 2 Get 1 Free on baby care essentials',
    image: '/placeholder.svg',
    link: '/offers/baby-products',
    bgColor: 'bg-pink-50'
  }
];

const SpecialOffers: React.FC = () => {
  return (
    <div className="py-10 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Special Offers</h2>
          <Button asChild variant="ghost" className="text-pharmacy-primary hover:text-pharmacy-dark">
            <Link to="/offers">
              All Offers <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Link key={offer.id} to={offer.link}>
              <div className={`rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${offer.bgColor}`}>
                <img src={offer.image} alt={offer.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">{offer.title}</h3>
                  <p className="text-gray-600 mb-3">{offer.description}</p>
                  <div className="flex items-center text-pharmacy-primary font-medium text-sm">
                    Shop Now <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
