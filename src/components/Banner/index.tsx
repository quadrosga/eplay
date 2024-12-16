import { Imagem, Titulo, Precos } from './styled'
import Button from '../Button/index'

import bannerImg from '../../assets/images/banner-homem-aranha.png'
import Tag from '../Tag'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
      <Precos>
        De <span>R$ 250,00</span> <br />
        por apenas R$ 99,90
      </Precos>
      <Button
        type="link"
        to="/produto"
        title="clique aqui para aproveitat essa oferta"
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
