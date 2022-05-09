import UpvoteIcon from '../../svg/upvote.svg?component'
import DownvoteIcon from '../../svg/downvote.svg?component'

import { SvgIcon } from '../my-mui/Misc'
import Checkbox from '../my-mui/Checkbox'
import { styled } from 'twin.macro' // eslint-disable-line no-unused-vars

export const StyledSvgIcon = styled(SvgIcon)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
`

interface UpVoteButtonProps {
  checked: boolean
  onUpvote: (...args: any) => void
}
export const UpvoteButton = ({ checked, onUpvote }: UpVoteButtonProps) => {
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
      onClick={onUpvote}
    />
  )
}

interface DownVoteButtonProps {
  checked: boolean
  onDownvote: (...args: any) => void
}

export const DownvoteButton = ({
  checked,
  onDownvote,
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
      onClick={onDownvote}
    />
  )
}
