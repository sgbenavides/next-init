'use client';

import type { JSX } from 'react';

import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-32 w-32',
} as const;

export function LoadingSpinner({ className, size = 'md' }: LoadingSpinnerProps): JSX.Element {
  return (
    <Loader2
      role="status"
      aria-label="Loading"
      className={cn('animate-spin', sizeClasses[size], className)}
    />
  );
}
