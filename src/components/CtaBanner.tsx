
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const CtaBanner: React.FC = () => {
  return (
    <div className="bg-pharmacy-primary/10 py-12">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Need Your Medicines Delivered?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Upload your prescription and get your medicines delivered at your doorstep. 
            Fast, reliable, and convenient healthcare at your fingertips.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-pharmacy-primary hover:bg-pharmacy-dark">
              <Link to="/upload-prescription">
                Upload Prescription
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-pharmacy-primary text-pharmacy-primary hover:bg-pharmacy-primary hover:text-white">
              <Link to="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
