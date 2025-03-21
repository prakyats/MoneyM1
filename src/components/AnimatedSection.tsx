
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-up' | 'fade-in' | 'slide-in' | 'none';
};

const AnimatedSection = ({
  children,
  className,
  delay = 0,
  threshold = 0.2,
  animation = 'fade-up'
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );
    
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay, threshold]);
  
  const animationClass = animation === 'none' ? '' : 'animate-on-scroll';
  
  return (
    <div
      ref={sectionRef}
      className={cn(animationClass, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
