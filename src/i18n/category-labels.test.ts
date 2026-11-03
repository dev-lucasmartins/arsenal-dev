import { describe, expect, it } from 'vitest'
import { translateCategory } from './category-labels'

describe('translateCategory', () => {
  it('translates a known category into English', () => {
    expect(translateCategory('Tipagem básica', 'en')).toBe('Basic Typing')
  })

  it('translates a known category into Spanish', () => {
    expect(translateCategory('Tipagem básica', 'es')).toBe('Tipado Básico')
  })

  it('returns the original text for pt-BR (identity)', () => {
    expect(translateCategory('Tipagem básica', 'pt-BR')).toBe('Tipagem básica')
  })

  it('falls back to the original pt-BR text for an unknown category', () => {
    expect(translateCategory('Categoria Inexistente', 'en')).toBe('Categoria Inexistente')
  })
})
