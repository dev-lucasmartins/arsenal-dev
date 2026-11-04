import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { allItems } from '../data'
import { useSearch } from './useSearch'

const tailwindItems = allItems.filter((item) => item.language === 'tailwind')

describe('useSearch', () => {
  it('starts with no filter active (matchedIds is null)', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))
    expect(result.current.query).toBe('')
    expect(result.current.matchedIds).toBeNull()
  })

  it('matches items by (translated) name', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))

    act(() => result.current.setQuery('grid'))

    expect(result.current.matchedIds).toContain('tw-grid')
  })

  it('matches items by translated category', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))

    act(() => result.current.setQuery('layout'))

    expect(result.current.matchedIds).toContain('tw-grid')
  })

  it('is case-insensitive', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))

    act(() => result.current.setQuery('GrId'))

    expect(result.current.matchedIds).toContain('tw-grid')
  })

  it('returns an empty set when nothing matches', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))

    act(() => result.current.setQuery('xyz-nao-existe'))

    expect(result.current.matchedIds?.size).toBe(0)
  })

  it('drops the filter again once the query is cleared', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'pt-BR'))

    act(() => result.current.setQuery('grid'))
    expect(result.current.matchedIds).not.toBeNull()

    act(() => result.current.setQuery(''))
    expect(result.current.matchedIds).toBeNull()
  })

  it('matches using the active locale', () => {
    const { result } = renderHook(() => useSearch(tailwindItems, 'en'))

    act(() => result.current.setQuery('layout'))

    expect(result.current.matchedIds).toContain('tw-grid')
  })

  it('is accent-insensitive', () => {
    const jsItems = allItems.filter((item) => item.language === 'javascript')
    const { result } = renderHook(() => useSearch(jsItems, 'pt-BR'))

    act(() => result.current.setQuery('funcoes'))

    expect(result.current.matchedIds).toContain('js-functions')
  })

  it('matches an accented query against accented content', () => {
    const jsItems = allItems.filter((item) => item.language === 'javascript')
    const { result } = renderHook(() => useSearch(jsItems, 'pt-BR'))

    act(() => result.current.setQuery('FUNÇÕES'))

    expect(result.current.matchedIds).toContain('js-functions')
  })
})
