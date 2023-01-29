import { Box, Flex, Select } from '@chakra-ui/react'
import React from 'react'

type SortMethod = 'ascending' | 'descending' | 'default'

interface SortSelectorProps {
  selectedSortMethod: SortMethod
  setSelectedSortMethod: (sortMethod: SortMethod) => void
}

export const SortSelector = ({
  selectedSortMethod,
  setSelectedSortMethod,
}: SortSelectorProps) => {
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
        <label htmlFor='sort'>Sortieren nach:</label>
      </Box>
      <Select
        value={selectedSortMethod}
        onChange={e => setSelectedSortMethod(e.target.value as SortMethod)}
      >
        <option value='default'>Standard</option>
        <option value='ascending'>Preis: Aufsteigend</option>
        <option value='descending'>Preis: Absteigend</option>
      </Select>
    </Flex>
  )
}
