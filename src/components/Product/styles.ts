import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.cinza};
  padding: 8px;
  border-radius: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Titulo = styled.h3`
  color: ${cores.branca};
  font-size: 16px;
  font-weight: bold;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
`
export const Descricao = styled.p`
  color: ${cores.branca};
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
