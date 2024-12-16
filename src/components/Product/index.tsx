import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Descricao>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi est rerum
      dolorem amet totam, asperiores at expedita, vero reiciendis tempore cum
      nisi doloribus voluptatem iusto fugit iste quidem recusandae illum.
    </Descricao>
  </Card>
)

export default Product
