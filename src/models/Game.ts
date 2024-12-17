class Game {
  id: number
  infos: string[]
  image: string
  title: string
  category: string
  system: string
  description: string

  constructor(
    id: number,
    infos: string[],
    image: string,
    title: string,
    category: string,
    system: string,
    description: string
  ) {
    this.id = id
    this.infos = infos
    this.image = image
    this.title = title
    this.category = category
    this.system = system
    this.description = description
  }
}

export default Game
