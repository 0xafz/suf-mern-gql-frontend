import { formatDateAgo } from '../../utils/helperFuncs'

import tw, { styled } from 'twin.macro' // eslint-disable-line no-unused-vars
import { StyledLink } from '../my-mui/Misc'
import { RecentActivity } from '../../generated/graphql'

const PointsBox = styled.div(() => [
  tw`inline-flex px-2 py-1 border-width[1px] border-solid border-blue-900 rounded-md line-height[1.2em]`,
])

const RecentQuestions = ({ creedo }: { creedo: RecentActivity }) => {
  return (
    <div tw="flex justify-between  px-1 py-3 items-center">
      <div tw="flex items-center flex-basis[80%] flex-grow-0 flex-shrink-0">
        <PointsBox>{creedo.points}</PointsBox>
        <StyledLink href={`/questions/${creedo._id}`} tw="font-normal ml-2">
          {creedo.title}
        </StyledLink>
      </div>
      <span tw="text-xs md:text-sm">{formatDateAgo(creedo.createdAt)} ago</span>
    </div>
  )
}

export default RecentQuestions
