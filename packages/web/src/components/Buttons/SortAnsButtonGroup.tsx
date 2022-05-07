import { AnsSortBy } from '../../types'
import { ButtonGroupItem, ButtonGroup } from '../my-mui/Misc'

interface SortAnsBarProps {
  sortBy: AnsSortBy
  setSortBy: (...args: any) => void
}

const SortAnsBar = ({ sortBy, setSortBy }: SortAnsBarProps) => {
  const handleSortChange = (e: React.MouseEvent) => {
    setSortBy((e.target as HTMLButtonElement).innerText.toUpperCase())
  }

  return (
    <ButtonGroup>
      <ButtonGroupItem active={sortBy === 'VOTES'} onClick={handleSortChange}>
        Votes
      </ButtonGroupItem>
      <ButtonGroupItem active={sortBy === 'NEWEST'} onClick={handleSortChange}>
        Newest
      </ButtonGroupItem>
      <ButtonGroupItem active={sortBy === 'OLDEST'} onClick={handleSortChange}>
        Oldest
      </ButtonGroupItem>
    </ButtonGroup>
  )
}

export default SortAnsBar
