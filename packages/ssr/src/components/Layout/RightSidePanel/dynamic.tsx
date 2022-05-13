import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import LoadingSpinner from '~~/components/LoadingSpinner'
import useMediaQuery from '~~/hooks/useMediaQuery'

const DynamicRightSidePanel = dynamic(() => import('.'), {
  suspense: true,
})

const RightSidePanel = () => {
  const isMdScreen = useMediaQuery('(min-width: 768px)')
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <DynamicRightSidePanel />
    </Suspense>
  )
}
export default RightSidePanel
