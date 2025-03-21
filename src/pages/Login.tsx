
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear errors when typing
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };
    
    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        toast.success('Logged in successfully!', {
          description: 'Welcome back to Money Mentor.',
          duration: 5000,
        });
        console.log('Login form submitted:', formData);
        // In a real app, this would redirect to the dashboard
      }, 1000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-6 pt-24">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-dark mb-2">Welcome Back</h1>
            <p className="text-gray-600">Log in to your Money Mentor account</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              id="email"
              type="email"
              label="Email Address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              required
            />
            
            <FormInput
              id="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
            />
            
            <div className="flex items-center justify-between mt-2 mb-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-money focus:ring-money border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              
              <div className="text-sm">
                <a href="#" className="text-money hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
            
            <div className="pt-2">
              <Button type="submit" fullWidth size="lg">
                Log In
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-money font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
          
          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Google</span>
              </button>
              <button
                type="button"
                className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="py-6 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-500">
              © 2023 Money Mentor. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
