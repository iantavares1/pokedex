import { PropsWithChildren } from 'react'
import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`

export const Message = ({ children }: PropsWithChildren) => {
  return (
    <StyledBox>
      <Typography variant="h3">{children}</Typography>
    </StyledBox>
  )
}
