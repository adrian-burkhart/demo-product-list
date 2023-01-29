import { Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { SortSelector } from '../components/sort-selector'

export interface ProductListUiProps {
  children: React.ReactNode
}

export const ProductListUi = ({ children }: ProductListUiProps) => {
  return (
    <>
      <SortSelector />
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
