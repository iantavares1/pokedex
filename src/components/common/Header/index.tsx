import styled from '@emotion/styled'
import { Container } from '@mui/material'

const StyledContainer = styled(Container)`
  padding: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

type HeaderProps = {
  children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => {
  return <StyledContainer>{children}</StyledContainer>
}
