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

import { AddToFavoritesButton } from './add-to-favorites-button'

import { Product } from '../hooks/use-products'
import Placeholder from '../assets/placeholder150.png'

interface ListItemProps extends Product {
  isFavorite: boolean
  loading: boolean
}

export const ListItem = ({
  id,
  image,
  isFavorite = false,
  loading,
  price,
  title,
}: ListItemProps) => {
  // Replace the locale code with undefined to use the browser's locale
  const formattedPrice = React.useMemo(() => {
    const formattedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
    return formattedPrice
  }, [price])

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

      <CardFooter>
        <AddToFavoritesButton id={{ id }} isFavorite={isFavorite} />
      </CardFooter>
    </Card>
  )
}
