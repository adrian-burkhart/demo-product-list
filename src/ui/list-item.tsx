import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Heading,
  Image,
  Skeleton,
} from '@chakra-ui/react'
import { HeartIcon } from '../svg/heart'
import { Product } from '../util/fetch-from-api'

interface ListItemProps extends Omit<Product, 'id'> {
  loading: boolean
}

export const ListItem = ({ image, loading, price, title }: ListItemProps) => {
  // Replace the locale code with undefined to use the browser's locale
  const formattedPrice = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)

  return (
    <Card w='sm' h='xs' size='sm'>
      <CardHeader>
        {loading ? (
          <Skeleton isLoaded={!loading} height='1rem' />
        ) : (
          <Heading size='sm' noOfLines={1}>
            {title}
          </Heading>
        )}
      </CardHeader>

      <CardBody>
        <Center>
          <Image
            objectFit='contain'
            src={image}
            alt={title}
            boxSize='150px'
            fallbackSrc='https://via.placeholder.com/150'
          />
        </Center>
        <Center>
          {loading ? (
            <Skeleton isLoaded={!loading} height='1rem' width={'4rem'} />
          ) : (
            <Box pt='4' fontWeight={'semibold'}>
              {formattedPrice}
            </Box>
          )}
        </Center>
      </CardBody>

      <CardFooter>
        <Button flex='1' variant='ghost' leftIcon={<HeartIcon color='black' />}>
          Like
        </Button>
      </CardFooter>
    </Card>
  )
}
