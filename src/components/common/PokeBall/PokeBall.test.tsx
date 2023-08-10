import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { PokeBall } from '.'

describe('PokeBall', () => {
  it('should render correctly', () => {
    const { getByRole } = render(<PokeBall />)

    expect(getByRole('img')).toBeInTheDocument()
  })
  it('should be able to assign custom style', () => {
    const { getByRole } = render(<PokeBall style={{ background: '#123' }} />)

    expect(getByRole('img')).toHaveStyle('background: #123')
  })
})
