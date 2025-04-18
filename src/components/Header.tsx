
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  Heart, 
  Package, 
  LogIn 
} from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-pharmacy-primary">Pharma<span className="text-pharmacy-dark">ride</span></span>
          </Link>

          {/* Search Bar - Hide on mobile */}
          <div className="hidden md:flex relative flex-1 mx-6">
            <input
              type="text"
              placeholder="Search medicines, healthcare products..."
              className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-pharmacy-primary text-sm"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-pharmacy-primary">
              <ShoppingCart className="w-6 h-6" />
              <span className="ml-1">Cart</span>
            </Link>
            
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/wishlist" className="text-gray-700 hover:text-pharmacy-primary">
                  <Heart className="w-6 h-6" />
                </Link>
                <Link to="/orders" className="text-gray-700 hover:text-pharmacy-primary">
                  <Package className="w-6 h-6" />
                </Link>
                <Link to="/account" className="text-gray-700 hover:text-pharmacy-primary">
                  <User className="w-6 h-6" />
                </Link>
              </div>
            ) : (
              <Button asChild variant="outline" className="border-pharmacy-primary text-pharmacy-primary hover:bg-pharmacy-primary hover:text-white">
                <Link to="/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="mr-4 text-gray-700">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Only show on mobile */}
        <div className="mt-3 relative md:hidden">
          <input
            type="text"
            placeholder="Search medicines, healthcare products..."
            className="w-full border rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-pharmacy-primary text-sm"
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-4">
            {isLoggedIn ? (
              <>
                <Link to="/account" className="flex items-center py-2 text-gray-700">
                  <User className="mr-3 w-5 h-5" />
                  My Account
                </Link>
                <Link to="/orders" className="flex items-center py-2 text-gray-700">
                  <Package className="mr-3 w-5 h-5" />
                  My Orders
                </Link>
                <Link to="/wishlist" className="flex items-center py-2 text-gray-700">
                  <Heart className="mr-3 w-5 h-5" />
                  Wishlist
                </Link>
              </>
            ) : (
              <Button asChild variant="outline" className="border-pharmacy-primary text-pharmacy-primary hover:bg-pharmacy-primary hover:text-white w-full">
                <Link to="/login" className="flex items-center justify-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login / Register
                </Link>
              </Button>
            )}
            <Link to="/offers" className="py-2 text-gray-700">Offers</Link>
            <Link to="/upload-prescription" className="py-2 text-gray-700">Upload Prescription</Link>
            <Link to="/track-order" className="py-2 text-gray-700">Track Order</Link>
            <Link to="/contact" className="py-2 text-gray-700">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
