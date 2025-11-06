import * as React from 'react';
import { ButtonProps } from './types';

export const ActionButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button 
      className={`gap-2 self-stretch px-5 flex-col rounded-lg bg-slate-900 min-h-[60px] min-w-[200px] max-md:px-5 ${className}`}
    >
      {children}
    </button>
  );
}