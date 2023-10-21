'use client';

import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60,
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
        {children}
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default Providers;
