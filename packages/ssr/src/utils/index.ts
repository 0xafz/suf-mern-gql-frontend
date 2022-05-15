import { RegisterOptions } from 'react-hook-form'
import { VoteType } from '~~/generated/graphql'

export const calcPoints = (voteType: VoteType, points: number) => {
  return voteType === VoteType.Upvote ? points + 1 : points > 0 ? points - 1 : 0
}

interface GetValidation {
  name: string
  type?: 'string' | 'number'
  min?: number
  max?: number
  req?: boolean
}
export const getValidation = ({
  max,
  min,
  type = 'string',
  name,
  req = true,
}: GetValidation) => {
  const itemType = type === 'string' ? 'characters' : 'digits'
  return {
    required: req ? `${name} is required` : undefined,
    minLength: min
      ? {
          value: min,
          message: `${name} cannot be less than ${min} ${itemType}`,
        }
      : undefined,
    maxLength: max
      ? {
          value: max,
          message: `${name} cannot be more than ${max} ${itemType}`,
        }
      : undefined,
  } as RegisterOptions
}

export const usernameValidation = {
  ...getValidation({ name: 'username', min: 3, max: 20 }),
  pattern: {
    value: /^[a-zA-Z0-9-_]*$/,
    message: 'Only alphanum, dash & underscore characters are allowed',
  },
} as RegisterOptions

export const range = (start: number, end: number) => {
  return Array(end - start)
    .fill(null)
    .map((_, i) => start + i)
}
