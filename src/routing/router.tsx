import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router'
import { Loader } from '../core/component'

type RouteType = {
  path: string
  name: string
  page: React.ReactNode
}

const UserPage = lazy(() => import('../pages/User/[id]'))
const UsersPage = lazy(() => import('../pages/User/index'))
const MainPage = lazy(() => import('../pages/index'))

export const ROUTES: RouteType[] = [
  {
    path: '/',
    name: 'Main page',
    page: <MainPage />,
  },
  {
    path: '/user',
    name: 'User page',
    page: <UsersPage />,
  },
  {
    path: 'user/:id',
    name: 'User page',
    page: <UserPage />,
  },
]

export const Router = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      {ROUTES.map(({ page, path }) => (
        <Route key={path} path={path} element={page} />
      ))}
    </Routes>
  </Suspense>
)
