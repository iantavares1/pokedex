import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Header } from '.'

describe('Header', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Header>Children</Header>)

    expect(getByText('Children')).toBeInTheDocument()
  })
})
