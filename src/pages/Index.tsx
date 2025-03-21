
import React, { useEffect } from 'react';
import Button from '@/components/Button';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';

const features = [
  {
    title: "Track Expenses",
    description: "Monitor your spending habits with intuitive tracking tools and visual reports.",
    icon: "📊" // In a real app, use an SVG or component
  },
  {
    title: "Budget Planning",
    description: "Create personalized budgets and get alerts when you're close to your limits.",
    icon: "🎯" // In a real app, use an SVG or component
  },
  {
    title: "Investment Insights",
    description: "Get personalized recommendations based on your financial goals.",
    icon: "📈" // In a real app, use an SVG or component
  }
];

const testimonials = [
  {
    quote: "Money Mentor helped me save for my dream vacation in just 6 months!",
    author: "Sarah Johnson",
    role: "Teacher"
  },
  {
    quote: "I finally have clarity about where my money goes each month.",
    author: "Michael Chen",
    role: "Software Engineer"
  },
  {
    quote: "The investment recommendations have increased my portfolio by 15%.",
    author: "Aisha Williams",
    role: "Marketing Manager"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 lg:pr-12">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 rounded-full bg-money/20 text-dark text-sm font-medium mb-6">
                  Smart Financial Management
                </span>
              </AnimatedSection>
              
              <AnimatedSection delay={100}>
                <h1 className="text-5xl md:text-6xl font-bold text-dark leading-tight mb-6">
                  Take Control of Your <span className="text-money">Financial Future</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                  Money Mentor helps you track expenses, plan budgets, and grow your wealth with personalized insights and easy-to-use tools.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={300} className="flex flex-wrap gap-4">
                <Button asLink to="/register" size="lg">
                  Get Started — It's Free
                </Button>
                <Button asLink to="/login" variant="outline" size="lg">
                  Log In
                </Button>
              </AnimatedSection>
            </div>
            
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
              <AnimatedSection delay={400} className="relative">
                <div className="relative z-10 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-2xl p-6 md:p-8 hover-scale">
                  <div className="w-full h-64 bg-gray-100 rounded-lg overflow-hidden mb-6">
                    {/* This would be a chart or dashboard preview in a real app */}
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-3xl">📊</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-6 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-gray-100 rounded-full"></div>
                    <div className="h-4 bg-gray-100 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="absolute top-1/3 -left-6 w-24 h-24 bg-money rounded-full filter blur-3xl opacity-60"></div>
                <div className="absolute bottom-1/3 -right-6 w-32 h-32 bg-dark rounded-full filter blur-3xl opacity-30"></div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Smart Features for <span className="text-money">Smarter Finances</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our tools make financial management simple, intuitive, and effective.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100} className="bg-white rounded-2xl p-8 shadow-lg hover-scale">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              What Our <span className="text-money">Users Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of people who have transformed their financial lives with Money Mentor.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection 
                key={index} 
                delay={index * 100} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover-scale"
              >
                <div className="mb-6 text-4xl">❝</div>
                <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-dark">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Master Your Finances?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join Money Mentor today and start your journey toward financial freedom.
              No credit card required.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={200} className="flex flex-wrap justify-center gap-4">
            <Button asLink to="/register" size="lg">
              Create Free Account
            </Button>
            <Button asLink to="/login" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Log In
            </Button>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-2xl font-bold text-dark">
                Money<span className="text-money">Mentor</span>
              </span>
              <p className="text-gray-500 mt-2">© 2023 Money Mentor. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 hover:text-dark transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-dark transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-dark transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
