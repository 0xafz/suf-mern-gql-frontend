import 'twin.macro'
import React from 'react'
import { TabGroupItem, TabGroup } from '../my-mui/Misc'
import { QuestionSortBy } from '~~/generated/graphql'

interface SortQuesBarProps {
  sortBy: QuestionSortBy
}

const SortQuesBar = ({ sortBy }: SortQuesBarProps) => {
  return (
    <div tw="flex justify-end my-4 text-sm sm:text-base">
      <TabGroup>
        <TabGroupItem
          active={sortBy === QuestionSortBy.Hot}
          href={`/?tab=${QuestionSortBy.Hot}`}
        >
          Hot
        </TabGroupItem>
        <TabGroupItem
          active={sortBy === QuestionSortBy.Votes}
          href={`/?tab=${QuestionSortBy.Votes}`}
        >
          Votes
        </TabGroupItem>
        <TabGroupItem
          active={sortBy === QuestionSortBy.Views}
          href={`/?tab=${QuestionSortBy.Views}`}
        >
          Views
        </TabGroupItem>
        <TabGroupItem
          active={sortBy === QuestionSortBy.Newest}
          href={`/?tab=${QuestionSortBy.Newest}`}
        >
          Newest
        </TabGroupItem>
        <TabGroupItem
          active={sortBy === QuestionSortBy.Oldest}
          href={`/?tab=${QuestionSortBy.Oldest}`}
        >
          Oldest
        </TabGroupItem>
      </TabGroup>
    </div>
  )
}

export default SortQuesBar
