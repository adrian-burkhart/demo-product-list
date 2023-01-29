import { Flex, Select } from '@chakra-ui/react'
import React from 'react'

export interface ProductListUiProps {
  children: React.ReactNode
}

export const ProductListUi = ({ children }: ProductListUiProps) => {
  return (
    <>
      <Select mx={'auto'} placeholder='test' maxW='xs' mb={4}>
        <option value='test'>test</option>
      </Select>

      <Flex
        align='center'
        direction={'row'}
        gap='1rem'
        justify={'center'}
        wrap='wrap'
      >
        {children}
      </Flex>
    </>
  )
}
