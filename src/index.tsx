import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'

import { ErrorBoundary } from './core/component/ErrorBoundary/ErrorBoundary'
import { queryClient } from './config/reactQueryClient'
import { MainLayout } from './modules/'
import { BrowserRouter } from './packages'

const QueryClientDevTools = lazy(
  () => import('./packages/useQuery/QueryClientDevTools'),
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary>
          <MainLayout />
        </ErrorBoundary>
      </BrowserRouter>
      <Suspense fallback={null}>
        <QueryClientDevTools />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
)
