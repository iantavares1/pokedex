import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Container } from '@mui/material'

const StyledContainer = styled(Container)`
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Header = ({ children }: PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>
}
