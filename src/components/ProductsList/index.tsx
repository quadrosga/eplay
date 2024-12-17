import Product from '../Product'
import { Container, List, Title } from './styles'
import fifa from '../../assets/images/fifa.png'
import re2 from '../../assets/images/resident.png'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ title, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Title>{title}</Title>
      <List>
        <Product
          infos={['R$ 199,90 ', '-10%']}
          image="//placehold.it/222x250"
          title="Resident Evil 4 - Remake"
          category="Ação"
          system="Windows"
          description="Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..."
        />
        <Product
          infos={['R$ 199,90 ', '-10%']}
          image="//placehold.it/222x250"
          title="Resident Evil 4 - Remake"
          category="Ação"
          system="Windows"
          description="Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror..."
        />
        <Product
          infos={['R$ 99,90', '-50%']}
          image="//placehold.it/222x250"
          title="FIFA 23"
          category="Esporte"
          system="PS5"
          description="EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2..."
        />
        <Product
          infos={['R$ 99,90', '-50%']}
          image="//placehold.it/222x250"
          title="FIFA 23"
          category="Esporte"
          system="PS5"
          description="EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2..."
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
