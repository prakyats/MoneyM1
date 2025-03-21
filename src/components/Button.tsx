
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  to?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  asLink = false,
  to = '/',
  fullWidth = false,
  className,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-money/50 active:scale-[0.98]';
  
  const variantStyles = {
    primary: 'bg-money text-dark hover:bg-money-dark',
    secondary: 'bg-dark text-white hover:bg-dark-light',
    outline: 'border-2 border-money text-dark hover:bg-money/10',
    ghost: 'bg-transparent text-dark hover:bg-gray-100',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-8 py-3.5 text-lg',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : '';
  
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyles,
    disabledStyles,
    className
  );
  
  if (asLink) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
