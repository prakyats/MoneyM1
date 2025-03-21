
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-12",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-dark">
            Money<span className="text-money">Mentor</span>
          </span>
        </Link>
        
        <div className="flex items-center space-x-3">
          {!isHomePage && (
            <Button asLink to="/" variant="ghost" size="sm">
              Home
            </Button>
          )}
          
          <Button 
            asLink 
            to="/login" 
            variant="outline" 
            size="sm"
          >
            Log In
          </Button>
          
          <Button 
            asLink 
            to="/register" 
            variant="primary" 
            size="sm"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
