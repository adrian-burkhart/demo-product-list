import { SelectorUi, SelectorUiProps } from '../ui'

export type SortMethod = 'ascending' | 'descending' | 'default'

interface SortSelectorProps
  extends Omit<SelectorUiProps, 'controlledValue' | 'onChange'> {
  selectedSortMethod: SortMethod
  setSelectedSortMethod: (sortMethod: SortMethod) => void
}

export const SortSelector = ({
  selectedSortMethod,
  setSelectedSortMethod,
  ...sortSelectorProps
}: SortSelectorProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortMethod(e.target.value as SortMethod)
  }

  return (
    <SelectorUi
      {...sortSelectorProps}
      controlledValue={selectedSortMethod}
      onChange={onChange}
    />
  )
}
