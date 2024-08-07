import React from 'react';
import './button.css';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  primaryOutline = 'primary-outline',
  primaryGradient = 'primary-gradient',
}

export default function Button({
  variant = ButtonVariant.primary,
  children,
}: {
  children?: any;
  variant?: ButtonVariant | string;
}) {
  return (
    <button
      className={`
    button 
    ${variant}`}
    >
      {children}
    </button>
  );
}
