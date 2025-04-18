
import React from 'react';
import { ArrowRight, Package, Shield, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-pharmacy-light to-white">
      <div className="container-custom py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Health, Our Priority
            </h1>
            <p className="text-lg text-gray-700">
              Order medicines, healthcare products, and wellness items from a trusted pharmacy partner. Fast delivery right to your doorstep.
            </p>
            <div className="flex space-x-4">
              <Button asChild className="bg-pharmacy-primary hover:bg-pharmacy-dark">
                <Link to="/category/medicine">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-pharmacy-primary text-pharmacy-primary hover:bg-pharmacy-primary hover:text-white">
                <Link to="/upload-prescription">Upload Prescription</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="flex items-center">
                <Package className="h-5 w-5 text-pharmacy-primary mr-2" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-pharmacy-primary mr-2" />
                <span className="text-sm">100% Authentic</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-pharmacy-primary mr-2" />
                <span className="text-sm">Express Delivery</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-pharmacy-primary mr-2" />
                <span className="text-sm">Quality Assured</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-pharmacy-accent rounded-full opacity-20 animate-pulse-subtle" />
              <img 
                src="/placeholder.svg" 
                alt="Pharmaride Healthcare" 
                className="rounded-lg shadow-xl relative z-10 mx-auto"
              />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-pharmacy-secondary rounded-full opacity-20 animate-pulse-subtle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
