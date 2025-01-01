import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  display: block;
  position: relative;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  padding-top: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 56%;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const Infos = styled.div`
  padding: 16px;
  background-color: ${cores.preta};
  max-width: 290px;
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin-top: 16px;
    margin-bottom: 16px;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
