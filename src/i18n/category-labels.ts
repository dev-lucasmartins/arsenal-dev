import type { Locale } from "../types/locale";

export const categoryLabels: Record<string, Record<Locale, string>> = {
  "Tipagem básica": {
    "pt-BR": "Tipagem básica",
    en: "Basic Typing",
    es: "Tipado Básico",
  },
  "Tipagem de objetos": {
    "pt-BR": "Tipagem de objetos",
    en: "Object Typing",
    es: "Tipado de Objetos",
  },
  Funções: { "pt-BR": "Funções", en: "Functions", es: "Funciones" },
  "Reuso de tipos": {
    "pt-BR": "Reuso de tipos",
    en: "Type Reuse",
    es: "Reutilización de Tipos",
  },
  "Controle de fluxo de tipos": {
    "pt-BR": "Controle de fluxo de tipos",
    en: "Type Flow Control",
    es: "Control de Flujo de Tipos",
  },
  "Tipos avançados": {
    "pt-BR": "Tipos avançados",
    en: "Advanced Types",
    es: "Tipos Avanzados",
  },
  Fundamentos: {
    "pt-BR": "Fundamentos",
    en: "Fundamentals",
    es: "Fundamentos",
  },
  "Sintaxe moderna": {
    "pt-BR": "Sintaxe moderna",
    en: "Modern Syntax",
    es: "Sintaxis Moderna",
  },
  "Funções avançadas": {
    "pt-BR": "Funções avançadas",
    en: "Advanced Functions",
    es: "Funciones Avanzadas",
  },
  Assincronismo: {
    "pt-BR": "Assincronismo",
    en: "Asynchrony",
    es: "Asincronía",
  },
  "Hooks básicos": {
    "pt-BR": "Hooks básicos",
    en: "Basic Hooks",
    es: "Hooks Básicos",
  },
  "Hooks de ciclo de vida": {
    "pt-BR": "Hooks de ciclo de vida",
    en: "Lifecycle Hooks",
    es: "Hooks de Ciclo de Vida",
  },
  "Hooks de performance": {
    "pt-BR": "Hooks de performance",
    en: "Performance Hooks",
    es: "Hooks de Rendimiento",
  },
  "Compartilhamento de estado": {
    "pt-BR": "Compartilhamento de estado",
    en: "State Sharing",
    es: "Compartición de Estado",
  },
  "Composição avançada": {
    "pt-BR": "Composição avançada",
    en: "Advanced Composition",
    es: "Composición Avanzada",
  },
  Layout: { "pt-BR": "Layout", en: "Layout", es: "Diseño" },
  Interatividade: {
    "pt-BR": "Interatividade",
    en: "Interactivity",
    es: "Interactividad",
  },
  Avançado: { "pt-BR": "Avançado", en: "Advanced", es: "Avanzado" },
  Organização: {
    "pt-BR": "Organização",
    en: "Organization",
    es: "Organización",
  },
  "Testando Componentes": {
    "pt-BR": "Testando Componentes",
    en: "Testing Components",
    es: "Probando Componentes",
  },
  "Teclado e Foco": {
    "pt-BR": "Teclado e Foco",
    en: "Keyboard & Focus",
    es: "Teclado y Foco",
  },
  ARIA: {
    "pt-BR": "ARIA",
    en: "ARIA",
    es: "ARIA",
  },
  Carregamento: {
    "pt-BR": "Carregamento",
    en: "Loading",
    es: "Carga",
  },
};

export function translateCategory(category: string, locale: Locale): string {
  return categoryLabels[category]?.[locale] ?? category;
}
