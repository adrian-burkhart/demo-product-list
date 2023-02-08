import { SelectorUi, SelectorUiProps } from '../ui'

export type FilterMethod = 'favorites' | 'default'

interface FilterSelectorProps
  extends Omit<SelectorUiProps, 'controlledValue' | 'onChange'> {
  selectedFilterMethod: FilterMethod
  setSelectedFilterMethod: (filterMethod: FilterMethod) => void
}

interface FilterSelectorProps
  extends Omit<SelectorUiProps, 'controlledValue' | 'onChange'> {
  setSelectedFilterMethod: (filterMethod: FilterMethod) => void
}

export const FilterSelector = ({
  selectedFilterMethod,
  setSelectedFilterMethod,
  ...filterSelectorProps
}: FilterSelectorProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilterMethod(e.target.value as FilterMethod)
  }

  return (
    <SelectorUi
      {...filterSelectorProps}
      controlledValue={selectedFilterMethod}
      onChange={onChange}
    />
  )
}
