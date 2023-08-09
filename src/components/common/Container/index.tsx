import styled from '@emotion/styled'
import MUIContainer from '@mui/material/Container'

const StyledContainer = styled(MUIContainer)`
  padding: 0;
  margin-top: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr));
  gap: 4rem 2rem;

  flex-direction: column;
`

type ContainerProps = {
  children: React.ReactNode
  display?: 'flex' | 'grid'
  style?: React.CSSProperties
}

export const Container = ({
  children,
  display = 'grid',
  style,
}: ContainerProps) => {
  return (
    <StyledContainer style={{ display: `${display}`, ...style }}>
      {children}
    </StyledContainer>
  )
}
