import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../assets/images/resident.png'
import fifa from '../../assets/images/fifa.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import streetFighter from '../../assets/images/streetf.png'
import zelda from '../../assets/images/zelda.png'

const rpg: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 2,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    system: 'PS5',
    title: 'FIFA 23'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    image: resident,
    infos: ['R$ 199,90', '-10%'],
    system: 'Windows',
    title: 'Resident Evil 4 - Remake'
  },
  {
    id: 4,
    category: 'Esporte',
    description:
      'EA SPORTS™ FIFA 23 traz o Jogo de Todo Mundo aos gramados com a tecnologia HyperMotion2...',
    image: fifa,
    infos: ['R$ 99,90', '-50%'],
    system: 'PS5',
    title: 'FIFA 23'
  }
]

const acao: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 6,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 7,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Street Fighter 6'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['R$ 99,90', '-50%'],
    system: 'Switch',
    title: 'FIFA 23'
  }
]

const aventura: Game[] = [
  {
    id: 9,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 10,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 11,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Street Fighter 6'
  },
  {
    id: 12,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['R$ 99,90', '-50%'],
    system: 'Switch',
    title: 'FIFA 23'
  }
]

const fps: Game[] = [
  {
    id: 13,
    category: 'RPG',
    description:
      'Diablo IV é um RPG de ação em desenvolvimento pela Blizzard Entertainment.',
    image: diablo,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Diablo 4'
  },
  {
    id: 14,
    category: 'Aventura',
    description:
      'Star Wars Jedi: Survivor é um próximo jogo de ação e aventura desenvolvido pela Respawn...',
    image: starWars,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Star Wars Jedi Survivor'
  },
  {
    id: 15,
    category: 'Luta',
    description:
      'Street Fighter 6 é um próximo jogo de luta desenvolvido e publicado pela Capcom.',
    image: streetFighter,
    infos: ['05/04'],
    system: 'Windows',
    title: 'Street Fighter 6'
  },
  {
    id: 16,
    category: 'RPG',
    description:
      'Uma aventura épica pela terra e pelos céus de Hyrule aguarda em The Legend of Zelda™...',
    image: zelda,
    infos: ['R$ 99,90', '-50%'],
    system: 'Switch',
    title: 'FIFA 23'
  }
]

const Categories = () => (
  <>
    <ProductsList games={rpg} title="RPG" background="gray" />
    <ProductsList games={acao} title="Ação" background="black" />
    <ProductsList games={aventura} title="Aventura" background="gray" />
    <ProductsList games={fps} title="FPS" background="black" />
  </>
)

export default Categories
