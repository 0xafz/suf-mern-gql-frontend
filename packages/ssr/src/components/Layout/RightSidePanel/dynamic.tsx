import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSpinner from '~~/components/LoadingSpinner'
import useMediaQuery from '~~/hooks/useMediaQuery'

const DynamicRightSidePanel = dynamic(() => import('.'), {
  suspense: true,
})

const RightSidePanel = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)')
  if (isMdScreen) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <DynamicRightSidePanel />
      </Suspense>
    )
  }
  return null
}
export default RightSidePanel
