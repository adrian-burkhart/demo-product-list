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
        <label htmlFor={label}>{label}</label>
      </Box>
      <Select
        aria-label={label}
        id={label}
        onChange={onChange}
        value={controlledValue}
      >
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
