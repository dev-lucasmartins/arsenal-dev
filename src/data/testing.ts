import type { StudyItem } from '../types/study-item'

export const testingItems: StudyItem[] = [
  // Starter - Fundamentos
  {
    id: 'test-what-is-unit-test',
    language: 'testing',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'CircleCheck',
    declaration: `test('soma dois números', () => {
  expect(1 + 1).toBe(2)
})`,
    example: `import { describe, expect, it } from 'vitest'

function somar(a: number, b: number) {
  return a + b
}

describe('somar', () => {
  it('soma dois números positivos', () => {
    expect(somar(2, 3)).toBe(5)
  })
})`,
    buildsInto: ['test-structure'],
    tags: ['unit test', 'teste unitário', 'vitest'],
  },
  {
    id: 'test-structure',
    language: 'testing',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'ListTree',
    declaration: `describe('nome do grupo', () => {
  it('descreve o comportamento esperado', () => {
    // arrange, act, assert
  })
})`,
    example: `describe('cn', () => {
  it('junta classes verdadeiras com espaço', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('ignora valores falsy', () => {
    expect(cn('a', false, null, 'b')).toBe('a b')
  })
})`,
    buildsInto: ['test-assertions'],
    tags: ['describe', 'it', 'arrange-act-assert'],
  },
  {
    id: 'test-assertions',
    language: 'testing',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'CircleCheckBig',
    declaration: `expect(valor).toBe(esperado)
expect(objeto).toEqual({ a: 1 })
expect(array).toContain('item')
expect(fn).toThrow()`,
    example: `test('assertions comuns', () => {
  expect(2 + 2).toBe(4)
  expect({ nome: 'Ana' }).toEqual({ nome: 'Ana' })
  expect([1, 2, 3]).toContain(2)
  expect(() => {
    throw new Error('falhou')
  }).toThrow('falhou')
})`,
    buildsInto: ['test-running'],
    tags: ['expect', 'tobe', 'toequal', 'matchers'],
  },
  {
    id: 'test-running',
    language: 'testing',
    category: 'Fundamentos',
    tier: 'starter',
    icon: 'Play',
    declaration: `npm run test         # roda uma vez e sai
npm run test:watch   # modo watch, reroda ao salvar`,
    example: `// package.json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}`,
    tags: ['vitest run', 'watch mode', 'cli'],
  },

  // Basic - Organização
  {
    id: 'test-setup-teardown',
    language: 'testing',
    category: 'Organização',
    tier: 'basic',
    icon: 'RotateCcw',
    declaration: `beforeEach(() => {
  // roda antes de cada teste
})

afterEach(() => {
  // roda depois de cada teste
})`,
    example: `let contador: number

beforeEach(() => {
  contador = 0
})

test('incrementa a partir de zero', () => {
  contador++
  expect(contador).toBe(1)
})`,
    buildsInto: ['test-fixtures'],
    tags: ['beforeeach', 'aftereach', 'beforeall', 'afterall'],
  },
  {
    id: 'test-fixtures',
    language: 'testing',
    category: 'Organização',
    tier: 'basic',
    icon: 'Database',
    declaration: `const usuarioFixture = { id: '1', nome: 'Ana', email: 'ana@exemplo.com' }`,
    example: `function criarUsuarioFixture(overrides = {}) {
  return { id: '1', nome: 'Ana', email: 'ana@exemplo.com', ...overrides }
}

test('usuário admin tem permissões extras', () => {
  const admin = criarUsuarioFixture({ role: 'admin' })
  expect(admin.role).toBe('admin')
})`,
    tags: ['fixture', 'test data', 'factory'],
  },
  {
    id: 'test-pure-functions',
    language: 'testing',
    category: 'Organização',
    tier: 'basic',
    icon: 'FunctionSquare',
    declaration: `expect(categoryAnchorId('react', 'Fundamentos')).toBe('cat-react-fundamentos')`,
    example: `describe('categoryAnchorId', () => {
  it('remove acentos e espaços', () => {
    expect(categoryAnchorId('typescript', 'Tipagem básica')).toBe(
      'cat-typescript-tipagem-basica',
    )
  })
})`,
    tags: ['função pura', 'unit test', 'determinístico'],
  },
  {
    id: 'test-coverage',
    language: 'testing',
    category: 'Organização',
    tier: 'basic',
    icon: 'ChartPie',
    declaration: `npx vitest run --coverage`,
    example: `// vite.config.ts
test: {
  coverage: {
    provider: 'v8',
    reporter: ['text', 'html'],
  },
}`,
    tags: ['coverage', 'v8', 'istanbul'],
  },

  // Epic - Testando Componentes
  {
    id: 'test-testing-library',
    language: 'testing',
    category: 'Testando Componentes',
    tier: 'epic',
    icon: 'MonitorSmartphone',
    declaration: `import { render, screen } from '@testing-library/react'`,
    example: `test('mostra o placeholder correto', () => {
  render(<SearchBar value="" onChange={() => {}} />)
  expect(screen.getByPlaceholderText('Buscar conceito ou tag...')).toBeInTheDocument()
})`,
    buildsInto: ['test-user-event'],
    tags: ['testing library', 'render', 'screen', 'getbyrole'],
  },
  {
    id: 'test-user-event',
    language: 'testing',
    category: 'Testando Componentes',
    tier: 'epic',
    icon: 'MousePointerClick',
    declaration: `const user = userEvent.setup()
await user.type(input, 'texto')
await user.click(botao)`,
    example: `test('chama onChange ao digitar', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()
  render(<SearchBar value="" onChange={onChange} />)

  await user.type(screen.getByRole('textbox'), 'grid')

  expect(onChange).toHaveBeenCalled()
})`,
    tags: ['user-event', 'interação', 'click', 'type'],
  },
  {
    id: 'test-hooks',
    language: 'testing',
    category: 'Testando Componentes',
    tier: 'epic',
    icon: 'Puzzle',
    declaration: `const { result } = renderHook(() => useSearch(items, 'pt-BR'))`,
    example: `test('filtra itens pelo nome', () => {
  const { result } = renderHook(() => useSearch(items, 'pt-BR'))

  act(() => result.current.setQuery('grid'))

  expect(result.current.matchedIds).toContain('tw-grid')
})`,
    tags: ['renderhook', 'custom hook', 'act'],
  },
  {
    id: 'test-mocks-spies',
    language: 'testing',
    category: 'Testando Componentes',
    tier: 'epic',
    icon: 'Copy',
    declaration: `const spy = vi.fn()
vi.mock('./modulo', () => ({ funcao: vi.fn() }))`,
    example: `test('chama o callback uma vez', () => {
  const onSelect = vi.fn()
  selecionarItem('ts-basic-types', onSelect)

  expect(onSelect).toHaveBeenCalledTimes(1)
  expect(onSelect).toHaveBeenCalledWith('ts-basic-types')
})`,
    buildsInto: ['test-doubles'],
    tags: ['mock', 'spy', 'vi.fn', 'vi.mock'],
  },

  // Legendary - Avançado
  {
    id: 'test-async',
    language: 'testing',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Hourglass',
    declaration: `await waitFor(() => {
  expect(screen.getByText('Carregado!')).toBeInTheDocument()
})`,
    example: `test('mostra o resultado após o fetch', async () => {
  render(<PerfilUsuario userId="1" />)

  await waitFor(() => {
    expect(screen.getByText('Ana')).toBeInTheDocument()
  })
})`,
    tags: ['async', 'waitfor', 'findby'],
  },
  {
    id: 'test-doubles',
    language: 'testing',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'GitCompare',
    declaration: `// stub: retorna um valor fixo
// spy: grava como foi chamado, sem alterar o comportamento
// mock: substitui o comportamento real por um falso`,
    example: `const salvarSpy = vi.spyOn(api, 'salvar')
await enviarFormulario(dados)

expect(salvarSpy).toHaveBeenCalledWith(dados)`,
    tags: ['stub', 'spy', 'mock', 'fake'],
  },
  {
    id: 'test-snapshot',
    language: 'testing',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Camera',
    declaration: `expect(valor).toMatchSnapshot()`,
    example: `test('estrutura do card não muda sem querer', () => {
  const { container } = render(<TierBadge tier="epic" />)
  expect(container).toMatchSnapshot()
})`,
    tags: ['snapshot', 'tomatchsnapshot', 'regressão visual'],
  },
  {
    id: 'test-ci',
    language: 'testing',
    category: 'Avançado',
    tier: 'legendary',
    icon: 'Workflow',
    declaration: `# .github/workflows/test.yml
- run: npm run test`,
    example: `name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run test`,
    tags: ['ci', 'github actions', 'pipeline'],
  },
]
