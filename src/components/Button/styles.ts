import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'
import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border-radius: 8px;
  color: ${cores.branca};
  border: 2px solid
    ${(props) => (props.variant === 'primary' ? cores.verde : cores.branca)};
  font-weight: bold;
  font-size: 16px;
  background-color: ${(props) =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  padding: 8px 16px;
`
export const ButtonLink = styled(Link)`
  border-radius: 8px;
  color: ${cores.branca};
  border: 2px solid ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  background-color: transparent;
  padding: 8px 16px;
  text-decoration: none;
`
