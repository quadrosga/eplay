import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const Imagem = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  ${ButtonContainer} {
    position: absolute;
    bottom: 64px;
  }
`
export const Titulo = styled.h2`
  font-size: 36px;
  width: 450px;
`
export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
