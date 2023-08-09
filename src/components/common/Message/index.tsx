import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
`

type MessageProps = {
  children: React.ReactNode
}

export const Message = ({ children }: MessageProps) => {
  return (
    <StyledBox>
      <Typography variant="h3">{children}</Typography>
    </StyledBox>
  )
}
