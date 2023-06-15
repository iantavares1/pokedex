import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 8px;
  overflow: scroll;
`

export const TypeButton = styled.button`
  all: unset;
  padding: 2px 15px;
  border-radius: 13px;
  cursor: pointer;

  > span {
    color: white;
  }
`
