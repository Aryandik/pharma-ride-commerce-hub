
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Pill, 
  Baby, 
  UserRound, 
  Smile, 
  Stethoscope, 
  Heart, 
  Flower, 
  ActivitySquare 
} from 'lucide-react';

interface CategoryItem {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
}

const categories: CategoryItem[] = [
  { id: 'medicine', name: 'Medicine', icon: Pill, color: 'bg-pharmacy-medicine' },
  { id: 'baby', name: 'Baby Care', icon: Baby, color: 'bg-pharmacy-baby' },
  { id: 'women', name: 'Women Care', icon: UserRound, color: 'bg-pharmacy-women' },
  { id: 'personal', name: 'Personal Care', icon: Smile, color: 'bg-pharmacy-personal' },
  { id: 'devices', name: 'Health Devices', icon: Stethoscope, color: 'bg-pharmacy-devices' },
  { id: 'elderly', name: 'Elderly Care', icon: Heart, color: 'bg-pharmacy-elderly' },
  { id: 'pregnancy', name: 'Pregnancy Care', icon: Flower, color: 'bg-pharmacy-pregnancy' },
  { id: 'wellness', name: 'Wellness', icon: ActivitySquare, color: 'bg-pharmacy-wellness' },
];

const CategoriesNav: React.FC = () => {
  return (
    <div className="bg-white border-b py-4">
      <div className="container-custom">
        <h2 className="text-xl font-medium mb-4">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`} 
              className="btn-category"
            >
              <div className={`category-icon ${category.color}`}>
                <category.icon className="h-6 w-6" />
              </div>
              <span className="text-xs sm:text-sm text-center">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesNav;
