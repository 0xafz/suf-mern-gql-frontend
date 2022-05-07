import tw from 'twin.macro'
import { useAppContext } from '~~/context/state'
import { useFetchAllTagsQuery } from '~~/generated/graphql'
import { getErrorMsg } from '~~/utils/helperFuncs'
import LoadingSpinner from '../LoadingSpinner'
import Tag, { Tags } from '../Tag'

const Grid = tw.div`m-0 w-1/3 mt-4 rounded-sm hidden md:block`

const Heading = tw.h3`font-size[1.1rem] text-center mb-4`

const RightSidePanel = () => {
  const { notify } = useAppContext()

  const { data, loading } = useFetchAllTagsQuery({
    onError: (err) => {
      notify(getErrorMsg(err), 'error')
    },
  })

  return (
    <Grid>
      <div tw="hidden md:block min-height[45vh] p-4  rounded-md ">
        <Heading>Top Tags</Heading>
        {loading && <LoadingSpinner size="medium" />}
        {!loading && data && (
          <Tags col>
            {data.getAllTags.slice(0, 10).map((t) => (
              <Tag
                label={
                  t.tagName.length > 13
                    ? t.tagName.slice(0, 13) + '...'
                    : t.tagName
                }
                key={t.tagName}
                to={`/tags/${t.tagName}`}
                count={t.count}
              />
            ))}
          </Tags>
        )}
        {!loading && !data?.getAllTags && 'No Tags created yet!'}
      </div>
    </Grid>
  )
}

export default RightSidePanel
