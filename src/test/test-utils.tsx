import { render, type RenderOptions } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LocaleProvider } from '../context/LocaleContext'

function AllProviders({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
      <LocaleProvider>{children}</LocaleProvider>
    </BrowserRouter>
  )
}

export function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllProviders, ...options })
}

export * from '@testing-library/react'
