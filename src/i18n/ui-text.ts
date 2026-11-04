import type { Locale } from "../types/locale";
import type { Tier } from "../types/study-item";

interface UiText {
  appSubtitle: string;
  searchPlaceholder: string;
  noResults: string;
  sectionAttributes: string;
  sectionPassive: string;
  sectionDeclaration: string;
  sectionExample: string;
  sectionWhenToUse: string;
  sectionAvoidWhen: string;
  sectionBuildsInto: string;
  copyCode: string;
  copiedCode: string;
  expandLanguage: string;
  collapseLanguage: string;
  toggleToLight: string;
  toggleToDark: string;
  lightModeLabel: string;
  backToGrid: string;
  itemNotFound: string;
  aboutNavLabel: string;
  openMenu: string;
  closeMenu: string;
  closeTooltip: string;
  searchResultsHeading: string;
  tierLabels: Record<Tier, string>;
}

export const uiText: Record<Locale, UiText> = {
  "pt-BR": {
    appSubtitle:
      "Biblioteca visual de estudos - TypeScript, JavaScript, React, Tailwind & Testes",
    searchPlaceholder: "Buscar conceito ou tag...",
    noResults: "Nenhum conceito encontrado para essa busca.",
    sectionAttributes: "Atributos",
    sectionPassive: "O que é",
    sectionDeclaration: "Como declarar",
    sectionExample: "Exemplo de uso",
    sectionWhenToUse: "Por que / quando usar",
    sectionAvoidWhen: "Evite quando",
    sectionBuildsInto: "Combina com",
    copyCode: "Copiar código",
    copiedCode: "Copiado!",
    expandLanguage: "Expandir",
    collapseLanguage: "Recolher",
    toggleToLight: "Mudar para tema claro",
    toggleToDark: "Mudar para tema escuro",
    lightModeLabel: "Modo Claro",
    backToGrid: "Voltar",
    itemNotFound: "Conceito não encontrado.",
    aboutNavLabel: "Sobre o Projeto",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    closeTooltip: "Fechar",
    searchResultsHeading: "Resultados da busca",
    tierLabels: {
      starter: "Starter",
      basic: "Basic",
      epic: "Epic",
      legendary: "Legendary",
    },
  },
  en: {
    appSubtitle:
      "A visual study library - TypeScript, JavaScript, React, Tailwind & Testing",
    searchPlaceholder: "Search a concept or tag...",
    noResults: "No concepts found for this search.",
    sectionAttributes: "Attributes",
    sectionPassive: "What it is",
    sectionDeclaration: "Declaration",
    sectionExample: "Usage example",
    sectionWhenToUse: "Why / when to use",
    sectionAvoidWhen: "Avoid when",
    sectionBuildsInto: "Builds into",
    copyCode: "Copy code",
    copiedCode: "Copied!",
    expandLanguage: "Expand",
    collapseLanguage: "Collapse",
    toggleToLight: "Switch to light theme",
    toggleToDark: "Switch to dark theme",
    lightModeLabel: "Light Mode",
    backToGrid: "Back",
    itemNotFound: "Concept not found.",
    aboutNavLabel: "About the Project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closeTooltip: "Close",
    searchResultsHeading: "Search results",
    tierLabels: {
      starter: "Starter",
      basic: "Basic",
      epic: "Epic",
      legendary: "Legendary",
    },
  },
  es: {
    appSubtitle:
      "Una biblioteca visual de estudio - TypeScript, JavaScript, React, Tailwind y Testing",
    searchPlaceholder: "Buscar un concepto o etiqueta...",
    noResults: "No se encontraron conceptos para esta búsqueda.",
    sectionAttributes: "Atributos",
    sectionPassive: "Qué es",
    sectionDeclaration: "Cómo declarar",
    sectionExample: "Ejemplo de uso",
    sectionWhenToUse: "Por qué / cuándo usar",
    sectionAvoidWhen: "Evitar cuando",
    sectionBuildsInto: "Combina con",
    copyCode: "Copiar código",
    copiedCode: "¡Copiado!",
    expandLanguage: "Expandir",
    collapseLanguage: "Contraer",
    toggleToLight: "Cambiar a tema claro",
    toggleToDark: "Cambiar a tema oscuro",
    lightModeLabel: "Modo Claro",
    backToGrid: "Volver",
    itemNotFound: "Concepto no encontrado.",
    aboutNavLabel: "Acerca del Proyecto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    closeTooltip: "Cerrar",
    searchResultsHeading: "Resultados de la búsqueda",
    tierLabels: {
      starter: "Starter",
      basic: "Basic",
      epic: "Epic",
      legendary: "Legendary",
    },
  },
};
