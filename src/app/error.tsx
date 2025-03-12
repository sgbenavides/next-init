'use client';

import type { JSX } from 'react';

import { AlertCircle } from 'lucide-react';

import { Button } from '@/components/ui/button/button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps): JSX.Element {
  return (
    <div className="border-destructive/20 bg-destructive/5 flex min-h-screen flex-col items-center justify-center gap-6 rounded-lg border p-8 text-center">
      <div className="flex flex-col items-center gap-2">
        <AlertCircle className="text-destructive size-12" />
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
      </div>

      {process.env.NODE_ENV === 'development' && (
        <div className="bg-destructive/10 max-w-[600px] rounded-md p-4">
          <p className="font-mono text-sm">{error.message}</p>
        </div>
      )}

      {error.digest && (
        <p className="text-muted-foreground font-mono text-sm">Error ID: {error.digest}</p>
      )}

      <div className="flex gap-4">
        <Button onClick={reset} variant="outline">
          Try again
        </Button>
        <Button onClick={() => window.location.reload()} variant="destructive">
          Refresh page
        </Button>
      </div>
    </div>
  );
}
