'use client';

// import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import type { JSX } from 'react';

import NextError from 'next/error';

export default function GlobalError(props: { error: Error & { digest?: string } }): JSX.Element {
  useEffect(() => {
    // We should log with Sentry.captureException(props.error);
  }, [props.error]);

  return (
    <html lang="en">
      <body>
        {/* `NextError` is the default Next.js error page component. Its type
        definition requires a `statusCode` prop. However, since the App Router
        does not expose status codes for errors, we simply pass 0 to render a
        generic error message. */}
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
