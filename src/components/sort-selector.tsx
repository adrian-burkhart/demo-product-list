import { SortSelectorUi, SortSelectorUiProps } from '../ui'

interface SortSelectorProps extends SortSelectorUiProps {}

export const SortSelector = ({
  selectedSortMethod,
  setSelectedSortMethod,
}: SortSelectorProps) => {
  return <SortSelectorUi {...{ selectedSortMethod, setSelectedSortMethod }} />
}
