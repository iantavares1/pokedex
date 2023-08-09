import styled from '@emotion/styled'
import { Container } from '@mui/material'
import { PropsWithChildren } from 'react'

const StyledContainer = styled(Container)`
  min-height: 100vh;
  padding: 1rem 1rem 3rem;
  display: flex;
  flex-direction: column;
`

export const Page = ({ children }: PropsWithChildren) => {
  return <StyledContainer>{children}</StyledContainer>
}
