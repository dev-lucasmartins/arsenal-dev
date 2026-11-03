import { describe, expect, it } from 'vitest'
import { categoryAnchorId, cn } from './utils'

describe('cn', () => {
  it('joins truthy class names with a space', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out false, null and undefined', () => {
    expect(cn('a', false, null, undefined, 'b')).toBe('a b')
  })

  it('returns an empty string when nothing is truthy', () => {
    expect(cn(false, null, undefined)).toBe('')
  })
})

describe('categoryAnchorId', () => {
  it('slugifies accented, multi-word categories', () => {
    expect(categoryAnchorId('typescript', 'Tipagem básica')).toBe('cat-typescript-tipagem-basica')
  })

  it('collapses multiple words into single dashes', () => {
    expect(categoryAnchorId('typescript', 'Controle de fluxo de tipos')).toBe(
      'cat-typescript-controle-de-fluxo-de-tipos',
    )
  })

  it('trims leading and trailing dashes from punctuation', () => {
    expect(categoryAnchorId('tailwind', '@apply!')).toBe('cat-tailwind-apply')
  })

  it('namespaces the same category differently per language', () => {
    expect(categoryAnchorId('react', 'Fundamentos')).toBe('cat-react-fundamentos')
    expect(categoryAnchorId('javascript', 'Fundamentos')).toBe('cat-javascript-fundamentos')
  })
})
