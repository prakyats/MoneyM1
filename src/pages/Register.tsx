
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    
    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      valid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    // Validate password
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      valid = false;
    }
    
    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
        toast.success('Account created successfully!', {
          description: 'You can now log in with your credentials.',
          duration: 5000,
        });
        console.log('Form submitted:', formData);
        // In a real app, you would redirect to login or dashboard
      }, 1000);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center p-6 pt-24">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10 animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-dark mb-2">Create Your Account</h1>
            <p className="text-gray-600">Join Money Mentor and take control of your finances</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <FormInput
              id="name"
              type="text"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
            />
            
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
            
            <FormInput
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              required
            />
            
            <div className="pt-4">
              <Button type="submit" fullWidth size="lg">
                Create Account
              </Button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-money font-medium hover:underline">
                Log in
              </Link>
            </p>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-500 text-center">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-money hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-money hover:underline">Privacy Policy</a>.
            </p>
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

export default Register;
