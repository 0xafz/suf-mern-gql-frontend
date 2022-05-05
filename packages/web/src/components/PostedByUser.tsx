import tw from 'twin.macro' //eslint-disable-line no-unused-vars
import { Scalars } from '../generated/graphql'
import { formatDateAgo, formatDayTime } from '../utils/helperFuncs'
import Avatar from './my-mui/Avatar'
import { Link } from './my-mui/Misc'

const AvatarDetails = tw.div`text-xs md:text-sm flex-grow-[0] break-all`

interface ByUserProps {
  username: string
  userId: string
  isAnswer?: boolean
  filledVariant?: boolean
  createdAt?: Scalars['DateTime']
  updatedAt?: Scalars['DateTime']
}
const ByUser = ({
  username,
  userId,
  createdAt,
  updatedAt,
  filledVariant,
  isAnswer,
}: ByUserProps) => {
  return (
    <div tw="float-right max-w-[175px] md:max-w-[200px] ">
      <div tw="break-words text-gray-600 text-xs ">
        {filledVariant
          ? `${isAnswer ? 'answered' : 'asked'} ${formatDayTime(createdAt)}`
          : `asked ${formatDateAgo(createdAt)} ago`}
      </div>
      {filledVariant && createdAt !== updatedAt && (
        <div tw="text-gray-600 text-xs ">
          {`updated ${formatDayTime(updatedAt)}`}
          <br />
        </div>
      )}
      <div tw="flex items-start mt-1">
        <Avatar
          src={`https://secure.gravatar.com/avatar/${userId}?s=164&d=identicon`}
          alt={username}
          to={`/user/${username}`}
          tw="w-10 "
        />
        <AvatarDetails>
          <Link to={`/user/${username}`}>
            <span>{username}</span>
          </Link>
        </AvatarDetails>
      </div>
    </div>
  )
}

export default ByUser
