
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">
              <span className="text-pharmacy-primary">Pharma</span>
              <span className="text-pharmacy-dark">ride</span>
            </h3>
            <p className="text-gray-600 mb-4">
              Pharmaride Intellihealth Pvt Ltd is your trusted online pharmacy for high-quality healthcare products and personalized services.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-pharmacy-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pharmacy-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pharmacy-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pharmacy-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-pharmacy-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/category/medicine" className="text-gray-600 hover:text-pharmacy-primary">
                  Medicines
                </Link>
              </li>
              <li>
                <Link to="/upload-prescription" className="text-gray-600 hover:text-pharmacy-primary">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-600 hover:text-pharmacy-primary">
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-pharmacy-primary">
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-medium mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping-policy" className="text-gray-600 hover:text-pharmacy-primary">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-policy" className="text-gray-600 hover:text-pharmacy-primary">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-600 hover:text-pharmacy-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-600 hover:text-pharmacy-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-600 hover:text-pharmacy-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pharmacy-primary mr-2 mt-0.5" />
                <span className="text-gray-600">
                  123 Healthcare Avenue, Wellness District, Mumbai, Maharashtra - 400001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pharmacy-primary mr-2" />
                <a href="tel:+919876543210" className="text-gray-600 hover:text-pharmacy-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pharmacy-primary mr-2" />
                <a href="mailto:support@pharmaride.com" className="text-gray-600 hover:text-pharmacy-primary">
                  support@pharmaride.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-3 md:mb-0">
              © {new Date().getFullYear()} Pharmaride Intellihealth Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center">
              <img src="/placeholder.svg" alt="Payment Methods" className="h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
