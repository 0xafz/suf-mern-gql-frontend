import 'twin.macro'
import React from 'react'
import { ButtonGroupItem, ButtonGroup } from '../my-mui/Misc'

interface SortQuesBarProps {
  sortBy: 'HOT' | 'VOTES' | 'VIEWS' | 'NEWEST' | 'OLDEST'
  setSortBy: (...args: any) => void
}

const SortQuesBar = ({ sortBy, setSortBy }: SortQuesBarProps) => {
  const handleSortChange = (e: React.MouseEvent) => {
    setSortBy((e.target as HTMLButtonElement).innerText.toUpperCase())
  }

  return (
    <div tw="flex justify-end my-4 text-sm sm:text-base">
      <ButtonGroup>
        <ButtonGroupItem active={sortBy === 'HOT'} onClick={handleSortChange}>
          Hot
        </ButtonGroupItem>
        <ButtonGroupItem active={sortBy === 'VOTES'} onClick={handleSortChange}>
          Votes
        </ButtonGroupItem>
        <ButtonGroupItem active={sortBy === 'VIEWS'} onClick={handleSortChange}>
          Views
        </ButtonGroupItem>
        <ButtonGroupItem
          active={sortBy === 'NEWEST'}
          onClick={handleSortChange}
        >
          Newest
        </ButtonGroupItem>
        <ButtonGroupItem
          active={sortBy === 'OLDEST'}
          onClick={handleSortChange}
        >
          Oldest
        </ButtonGroupItem>
      </ButtonGroup>
    </div>
  )
}

export default SortQuesBar
