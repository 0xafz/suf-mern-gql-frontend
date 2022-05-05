import 'twin.macro'
import { AnsSortBy } from '../../types'
import { VButton as Button, ButtonGroup } from '../my-mui/Misc'

interface SortAnsBarProps {
  sortBy: AnsSortBy
  setSortBy: (...args: any) => void
}

const SortAnsBar = ({ sortBy, setSortBy }: SortAnsBarProps) => {
  const handleSortChange = (e: React.MouseEvent) => {
    setSortBy((e.target as HTMLButtonElement).innerText.toUpperCase())
  }

  return (
    <ButtonGroup tw="mr-10">
      <Button
        variant={sortBy === 'VOTES' ? 'contained' : 'outlined'}
        onClick={handleSortChange}
      >
        Votes
      </Button>
      <Button
        variant={sortBy === 'NEWEST' ? 'contained' : 'outlined'}
        onClick={handleSortChange}
      >
        Newest
      </Button>
      <Button
        variant={sortBy === 'OLDEST' ? 'contained' : 'outlined'}
        onClick={handleSortChange}
      >
        Oldest
      </Button>
    </ButtonGroup>
  )
}

export default SortAnsBar
