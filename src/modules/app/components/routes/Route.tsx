import { Navigate, Route, Routes } from 'react-router-dom'

import { rootPath } from '../../../../logic/path'
import LandingPage from '../../../Landing/pages/LandingPage'
import Navbar from '../navbar/Navbar'
import PageNotFound from '../pageNotFound/PageNotFound'
import * as Styles from './style'

const notFoundRoute: RouteDefinition = {
  path: '*',
  element: PageNotFound,
  protected: false,
  title: '',
}

export const routes: RouteDefinition[] = [
  {
    path: rootPath,
    element: LandingPage,
    protected: true,
    title: 'Dashboard',
    redirect: rootPath,
    pathType: 0,
  },
].concat(notFoundRoute as any) // Ensure that notFound is the last route

interface RoutesProps {
  children?: React.ReactNode
  navCollapsed?: string
}

function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
  if (isLoggedIn === route.protected || !route.redirect) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element
    return { element: <RouteComponent /> }
  } else {
    return { element: <Navigate replace to={route.redirect} /> }
  }
}

export interface RouteDefinition {
  path: string
  protected?: boolean
  redirect?: string
  element?: React.FC
  routes?: RouteDefinition[]
  title?: string
  requires?: any
  pathType?: number
}

export const RoutesComponent: React.FC<RoutesProps> = (): any => {
  const isLoggedIn = true

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route)
    return <Route key={i} path={route.path} {...render} />
  }

  return isLoggedIn ? (
    <Styles.StyledRoutes>
      <Navbar />
      <Routes>{routes.map(mapRoutes)}</Routes>
    </Styles.StyledRoutes>
  ) : (
    <Routes>{routes.map(mapRoutes)}</Routes>
  )
}
