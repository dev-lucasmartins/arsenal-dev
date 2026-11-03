import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { renderWithProviders, screen } from '../test/test-utils'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('shows the current value and the pt-BR placeholder by default', () => {
    renderWithProviders(<SearchBar value="" onChange={() => {}} />)
    expect(screen.getByPlaceholderText('Buscar conceito ou tag...')).toBeInTheDocument()
  })

  it('reflects the value prop in the input', () => {
    renderWithProviders(<SearchBar value="promise" onChange={() => {}} />)
    expect(screen.getByRole('textbox')).toHaveValue('promise')
  })

  it('calls onChange with the new text as the user types', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    renderWithProviders(<SearchBar value="" onChange={onChange} />)

    await user.type(screen.getByRole('textbox'), 'grid')

    expect(onChange).toHaveBeenCalledTimes(4)
    expect(onChange).toHaveBeenLastCalledWith('d')
  })
})
