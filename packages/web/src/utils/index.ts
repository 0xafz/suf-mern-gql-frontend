import { VoteType } from '~~/generated/graphql'

export const calcPoints = (voteType: VoteType, points: number) => {
  return voteType === VoteType.Upvote ? points + 1 : points > 0 ? points - 1 : 0
}
