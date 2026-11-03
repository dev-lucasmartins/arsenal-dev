import { describe, expect, it } from 'vitest'
import { renderWithProviders, screen } from '../test/test-utils'
import { TierBadge } from './TierBadge'

describe('TierBadge', () => {
  it.each(['starter', 'basic', 'epic', 'legendary'] as const)('renders the "%s" tier label', (tier) => {
    renderWithProviders(<TierBadge tier={tier} />)
    expect(screen.getByText(tier[0].toUpperCase() + tier.slice(1))).toBeInTheDocument()
  })

  it('merges an extra className onto the badge', () => {
    renderWithProviders(<TierBadge tier="epic" className="mt-4" />)
    expect(screen.getByText('Epic')).toHaveClass('mt-4')
  })
})
