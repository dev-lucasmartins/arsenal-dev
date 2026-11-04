import { describe, expect, it } from 'vitest'
import { renderWithProviders, screen } from '../../test/test-utils'
import { ConceptGrid } from './ConceptGrid'

describe('ConceptGrid', () => {
  it('renders items from every matched language, not just the active sidebar one', () => {
    renderWithProviders(
      <ConceptGrid
        language="react"
        matchedIds={new Set(['ts-basic-types', 'js-functions'])}
        highlightedCategory={null}
        highlightNonce={null}
      />,
    )

    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
  })

  it('falls back to the single active language view when there is no search', () => {
    renderWithProviders(
      <ConceptGrid
        language="typescript"
        matchedIds={null}
        highlightedCategory={null}
        highlightNonce={null}
      />,
    )

    expect(screen.queryByText('Resultados da busca')).not.toBeInTheDocument()
  })
})
