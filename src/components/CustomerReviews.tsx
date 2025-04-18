
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 'review-1',
    name: 'Ramesh Kumar',
    avatar: '/placeholder.svg',
    rating: 5,
    review: 'Very satisfied with the quick delivery and genuine products. Will definitely order again.',
    date: '15 Mar 2023'
  },
  {
    id: 'review-2',
    name: 'Priya Sharma',
    avatar: '/placeholder.svg',
    rating: 4,
    review: 'The products were well packaged and delivery was on time. Good customer service too.',
    date: '22 Apr 2023'
  },
  {
    id: 'review-3',
    name: 'Ajay Singh',
    avatar: '/placeholder.svg',
    rating: 5,
    review: 'I\'ve been ordering my monthly medications from Pharmaride for the past 6 months. Their service is reliable and prices are reasonable.',
    date: '10 May 2023'
  },
];

const CustomerReviews: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ));
  };

  return (
    <div className="py-10">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-6 text-center">What Our Customers Say</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h3 className="font-medium">{review.name}</h3>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{review.review}</p>
              <span className="text-xs text-gray-500">{review.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
