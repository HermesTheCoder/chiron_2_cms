import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300";
  
  const variantClasses = {
    primary: "text-white hover:opacity-90 hover:translate-y-[-1px] shadow-sm",
    outline: "border-2 border-primary text-primary hover:bg-red-50 dark:hover:bg-red-900/10",
    secondary: "bg-secondary text-white hover:opacity-90",
    text: "text-primary hover:underline"
  };
  
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  
  const disabledClasses = disabled ? "opacity-70 cursor-not-allowed" : "";
  
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  const buttonStyle = variant === 'primary' ? { backgroundColor: 'var(--primary)' } : {};
  
  if (href && !disabled) {
    return (
      <Link href={href} className={allClasses} style={buttonStyle}>
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={allClasses} 
      onClick={onClick}
      type={type}
      disabled={disabled}
      style={buttonStyle}
    >
      {children}
    </button>
  );
} 