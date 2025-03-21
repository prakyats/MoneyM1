
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FormInputProps = {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
  className?: string;
};

const FormInput = ({
  id,
  type,
  label,
  value,
  onChange,
  required = false,
  error,
  placeholder = " ",
  className
}: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="form-input-wrapper">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={placeholder}
        required={required}
        className={cn(
          "form-input",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
      />
      <label 
        htmlFor={id} 
        className={cn(
          "form-label",
          error && "text-red-500",
          (focused || value) && "!-top-3 !left-3 !text-xs !bg-white !px-1",
          focused && !error && "!text-money",
          value && error && "!text-red-500"
        )}
      >
        {label}{required && '*'}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1 absolute">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;
