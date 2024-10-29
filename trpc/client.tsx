'use client'

import React, { useState } from 'react'
import { createTRPCReact } from '@trpc/react-query'
import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type AppRouter } from '@/trpc/router'
import { makeQueryClient } from '@/trpc/query-client'

/**
 * Client-Side (SPA) 向けの tRPC client.
 */
export const trpc = createTRPCReact<AppRouter>({})

// tRPC client のシングルトン共有.
let clientQueryClientSingleton: QueryClient | undefined = undefined
function getQueryClient() {
  if (typeof window === 'undefined') {  // (2024/10/28 川津) 'use client' なので、このコードいらなくない？
    // Server: always make a new query client
    return makeQueryClient()
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= makeQueryClient())
}

/**
 * TRPC Provider (wrapper component) for layout.tsx.
 */
export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
        }),
      ],
    })
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  )
}
