import { Flex } from '@chakra-ui/react'
import { ListItem } from '../ui/list-item'
import { useProducts } from '../util/fetch-from-api'

export const ProductList = () => {
  const { errored, loading, products } = useProducts()

  return (
    (errored && <p>Something went wrong</p>) || (
      <Flex
        align='center'
        direction={'row'}
        gap='1rem'
        justify={'center'}
        wrap='wrap'
      >
        {products.map(product => (
          <ListItem key={product.id} loading={loading} {...product} />
        ))}
      </Flex>
    )
  )
}
