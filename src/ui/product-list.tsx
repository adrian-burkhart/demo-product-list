import { Flex } from '@chakra-ui/react'
import React from 'react'

export interface ProductListUiProps {
  children: React.ReactNode
}

export const ProductListUi = ({ children }: ProductListUiProps) => {
  return (
    <Flex
      align='center'
      direction={'row'}
      gap='1rem'
      justify={'center'}
      wrap='wrap'
    >
      {children}
    </Flex>
  )
}
