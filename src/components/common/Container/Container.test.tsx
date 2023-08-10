import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Container } from '.'

describe('Container', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Container>Children</Container>)

    expect(getByText('Children')).toBeInTheDocument()
  })
  it('should be able to assign display style', () => {
    const { getByText } = render(<Container display="flex">Children</Container>)

    expect(getByText('Children')).toHaveStyle('display: flex')
  })
  it('should be able to assign custom style', () => {
    const { getByText } = render(
      <Container style={{ color: '#fff' }}>Children</Container>,
    )

    expect(getByText('Children')).toHaveStyle('color: #fff')
  })
})
