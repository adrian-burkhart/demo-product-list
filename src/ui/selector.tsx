import { Box, Flex, Select } from '@chakra-ui/react'

export interface SelectorUiProps {
  controlledValue: string
  label?: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: { label: string; value: string }[]
}

export const SelectorUi = ({
  controlledValue,
  label,
  onChange,
  options,
}: SelectorUiProps) => {
  return (
    <Flex
      maxW='sm'
      mb={4}
      mx='auto'
      direction={'row'}
      justify='space-around'
      align='center'
    >
      <Box w='100%'>
        <label htmlFor='sort'>{label}</label>
      </Box>
      <Select value={controlledValue} onChange={onChange} aria-label={label}>
        {options.map(option => (
          <option
            key={option.value}
            value={option.value}
            aria-label={option.label}
          >
            {option.label}
          </option>
        ))}
      </Select>
    </Flex>
  )
}
