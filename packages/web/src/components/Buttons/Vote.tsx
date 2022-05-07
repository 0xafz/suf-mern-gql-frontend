import UpvoteIcon from '../../svg/upvote.svg?component'
import DownvoteIcon from '../../svg/downvote.svg?component'

import { SvgIcon } from '../my-mui/Misc'
import Checkbox from '../my-mui/Checkbox'
import { styled } from 'twin.macro' // eslint-disable-line no-unused-vars
import { VoteType } from '~~/generated/graphql'

export const StyledSvgIcon = styled(SvgIcon)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`

interface UpVoteButtonProps {
  checked: boolean
  handleUpvote: (...args: any) => void
}
export const UpvoteButton = ({ checked, handleUpvote }: UpVoteButtonProps) => {
  return (
    <Checkbox
      aria-label="upvote"
      checked={checked}
      icon={
        <StyledSvgIcon tw="text-gray-400 ">
          <UpvoteIcon />
        </StyledSvgIcon>
      }
      checkedIcon={
        <StyledSvgIcon tw="text-green-600 ">
          <UpvoteIcon />
        </StyledSvgIcon>
      }
      onClick={() => handleUpvote(VoteType.Upvote)}
    />
  )
}

interface DownVoteButtonProps {
  checked: boolean
  handleDownvote: (...args: any) => void
}

export const DownvoteButton = ({
  checked,
  handleDownvote,
}: DownVoteButtonProps) => {
  return (
    <Checkbox
      aria-label="downvote"
      checked={checked}
      icon={
        <StyledSvgIcon tw="text-gray-400 ">
          <DownvoteIcon />
        </StyledSvgIcon>
      }
      checkedIcon={
        <StyledSvgIcon tw="text-green-600 ">
          <DownvoteIcon />
        </StyledSvgIcon>
      }
      onClick={() => handleDownvote(VoteType.Downvote)}
    />
  )
}
