import { useEffect, useState } from 'react'
import { Imagem, Titulo, Precos } from './styles'
import Button from '../Button/index'
import Tag from '../Tag'
import { Game } from '../../pages/Home'
import { formataPreco } from '../ProductsList'

const Banner = () => {
  const [game, setGame] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
      .then((res) => res.json())
      .then((res) => setGame(res))
  }, [])

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            por apenas {formataPreco(game?.prices.current)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="clique aqui para aproveitar essa oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
