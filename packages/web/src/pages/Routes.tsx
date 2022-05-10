import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth'

import 'twin.macro'
import { lazy, Suspense } from 'react'
import MainLayout from '~~/components/Layout/MainLayout'
import LoadingSpinner from '~~/components/LoadingSpinner'
import useMediaQuery from '~~/hooks/useMediaQuery'

const QuesList = lazy(() => import('./QuesList'))
const AllTags = lazy(() => import('./AllTags'))
const AllUsers = lazy(() => import('./AllUsers'))
const User = lazy(() => import('./User'))
const Question = lazy(() => import('./Question'))
const AskQuestion = lazy(() => import('./AskQuestion'))
const RightSidePanel = lazy(() => import('../components/Layout/RightSidePanel'))
const NotFound = lazy(() => import('./NotFound'))

const AppRoutes = () => {
  const { user } = useAuthContext()
  const isMdScreen = useMediaQuery('(min-width: 768px)')

  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <QuesList />
                {isMdScreen && <RightSidePanel />}
              </>
            }
          />
          <Route
            path="/ask"
            element={
              user ? (
                <>
                  <AskQuestion />
                  {isMdScreen && <RightSidePanel />}
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/tags" element={<AllTags />} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/user/:username" element={<User />} />
          <Route
            path="/questions/:quesId"
            element={
              <>
                <Question />
                {isMdScreen && <RightSidePanel />}
              </>
            }
          ></Route>
          <Route
            path="/tags/:tagName"
            element={
              <>
                <QuesList tagFilterActive={true} />
                {isMdScreen && <RightSidePanel />}
              </>
            }
          ></Route>
          <Route
            path="/search/:query"
            element={
              <>
                <QuesList searchFilterActive={true} />
                {isMdScreen && <RightSidePanel />}
              </>
            }
          ></Route>
          <Route
            element={
              <>
                <NotFound />
                {isMdScreen && <RightSidePanel />}
              </>
            }
          ></Route>
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default AppRoutes
