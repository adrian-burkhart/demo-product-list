import { SelectorUi, SelectorUiProps } from '../ui'

type SortMethod = 'ascending' | 'descending' | 'default'

const options: SelectorUiProps['options'] = [
  { label: 'Standard', value: 'default' },
  { label: 'Preis: Aufsteigend', value: 'ascending' },
  { label: 'Preis: Absteigend', value: 'descending' },
]

const label = 'Sortieren nach:'
interface SortSelectorProps extends SelectorUiProps {
  selectedSortMethod: SortMethod
  setSelectedSortMethod: (sortMethod: SortMethod) => void
}

export const SortSelector = ({
  selectedSortMethod,
  setSelectedSortMethod,
}: SortSelectorProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSortMethod(e.target.value as SortMethod)
  }

  return (
    <SelectorUi
      controlledValue={selectedSortMethod}
      onChange={onChange}
      label={label}
      options={options}
    />
  )
}
