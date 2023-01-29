import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  Skeleton,
} from '@chakra-ui/react'
import React from 'react'

import { Product } from '../hooks/use-products'
import Placeholder from '../assets/placeholder150.png'

export interface ProductListItemUiProps extends Omit<Product, 'price' | 'id'> {
  children: React.ReactNode
  formattedPrice: string
  loading: boolean
}

export const ProductListItemUi = ({
  children,
  formattedPrice,
  image,
  loading,
  title,
}: ProductListItemUiProps) => {
  return (
    <Card h='xs' size='sm' w='sm'>
      <CardHeader>
        {loading ? (
          <Skeleton height='1rem' isLoaded={!loading} />
        ) : (
          <Heading noOfLines={1} size='sm'>
            {title}
          </Heading>
        )}
      </CardHeader>

      <CardBody>
        <Center>
          <Image
            alt={title}
            boxSize='150px'
            fallbackSrc={Placeholder}
            objectFit='contain'
            src={image}
          />
        </Center>
        <Center pt='4'>
          {loading ? (
            <Skeleton height='1rem' isLoaded={!loading} width={'4rem'} />
          ) : (
            <Box fontWeight={'semibold'}>{formattedPrice}</Box>
          )}
        </Center>
      </CardBody>

      <CardFooter>{children}</CardFooter>
    </Card>
  )
}
