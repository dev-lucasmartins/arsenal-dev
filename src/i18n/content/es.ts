import type { StudyItemContent } from "../../types/study-item";

export const esContent: Record<string, StudyItemContent> = {
  // TypeScript
  "ts-basic-types": {
    name: "Tipado Básico",
    stats: [
      "Errores detectados en tiempo de compilación",
      "Autocompletado más preciso en el editor",
      "Documentación implícita del código",
    ],
    passive:
      "TypeScript infiere el tipo de una variable a partir de su valor inicial, pero también puedes declarar el tipo explícitamente. Los tipos primitivos (string, number, boolean, etc.) forman la base de todo el sistema de tipos.",
    whenToUse:
      "Siempre que declares variables, parámetros o retornos de función - es la base de todo en TypeScript.",
    avoidWhen:
      "Evita anotar tipos que TypeScript ya infiere por sí solo (ej.: `let x: number = 5`), eso solo añade ruido visual.",
  },
  "ts-enums": {
    name: "Enums",
    stats: [
      "Conjunto fijo de valores con nombre",
      "Más legible que strings o números mágicos",
      "Autocompletado de los valores posibles",
    ],
    passive:
      "Un enum define un conjunto con nombre de constantes relacionadas. Por defecto los valores son numéricos (0, 1, 2...), pero puedes usar string enums para valores más legibles al depurar.",
    whenToUse:
      "Cuando tienes un conjunto fijo y conocido de opciones (estado, categorías, direcciones).",
    avoidWhen:
      'Para casos simples, una unión de literales de string (`type Status = "pendiente" | "pagado"`) suele ser más liviana que un enum.',
  },
  "ts-arrays-tuples": {
    name: "Arrays y Tuplas Tipados",
    stats: [
      "Arrays homogéneos con `Tipo[]` o `Array<Tipo>`",
      "Las tuplas fijan la cantidad y el tipo de cada posición",
      "Las tuplas documentan el papel de cada elemento",
    ],
    passive:
      "Un array tipado (`number[]`) acepta cualquier cantidad de elementos del mismo tipo. Una tupla (`[string, number]`) es un array de tamaño fijo donde cada posición tiene su propio tipo - útil para retornos como `[valor, error]`.",
    whenToUse:
      "Arrays para colecciones de tamaño variable; tuplas cuando la posición de cada valor tiene un significado fijo (como el retorno de `useState`).",
    avoidWhen:
      "No uses tuplas largas (4+ posiciones) - llegado ese punto, un objeto con nombre es más legible que recordar el orden.",
  },
  "ts-literal-types": {
    name: "Literal Types",
    stats: [
      "Restringe un valor a un conjunto exacto de literales",
      'Combinado con union, crea "enums" ligeros de string',
      "El autocompletado muestra exactamente los valores aceptados",
    ],
    passive:
      'Un literal type usa un valor específico (un string, número o boolean exactos) como tipo, en vez del tipo genérico. Combinados en una union (`"a" | "b"`), describen un conjunto cerrado de opciones válidas.',
    whenToUse:
      "Para representar un conjunto fijo y pequeño de valores válidos, como alternativa ligera a los enums.",
    avoidWhen:
      "Si el conjunto de valores puede crecer dinámicamente en tiempo de ejecución, los literal types no ayudan - eso es un dato, no un tipo.",
  },
  "ts-interfaces-vs-types": {
    name: "Interfaces vs Types",
    stats: [
      "Modelan la forma de objetos",
      "Las interfaces pueden extenderse (extends) y fusionarse",
      "Los types aceptan uniones, intersecciones y tipos primitivos",
    ],
    passive:
      "`interface` y `type` describen la forma de un objeto y, en la mayoría de los casos, son intercambiables. Las interfaces favorecen la herencia (`extends`) y el declaration merging; `type` es más flexible para uniones, tuplas y utility types.",
    whenToUse:
      "Usa `interface` para formas de objetos que puedan extenderse; usa `type` cuando necesites uniones, intersecciones o alias de tipos primitivos.",
    avoidWhen:
      "No crees una interface solo para una unión de strings - eso es trabajo para `type`.",
  },
  "ts-readonly-optional": {
    name: "Readonly & Optional Properties",
    stats: [
      "`readonly` impide reasignar la propiedad después de creada",
      "`?` marca una propiedad como opcional",
      "Ayuda a modelar objetos parcialmente completos",
    ],
    passive:
      "Anteponer `readonly` a una propiedad impide que sea reasignada después de que el objeto es creado (solo en tiempo de compilación). El sufijo `?` marca una propiedad como opcional, permitiendo omitirla al crear el objeto.",
    whenToUse:
      "`readonly` para datos que no deben cambiar después de creados (ids, configuraciones); `?` para campos genuinamente opcionales.",
    avoidWhen:
      'No marques todo como opcional solo para evitar errores de tipo - eso traslada las validaciones de "¿existe este campo?" a todos los lugares donde se usa el objeto.',
  },
  "ts-type-assertions": {
    name: "Type Assertions (as)",
    stats: [
      'Le dice al compilador "confía en mí, yo sé el tipo real"',
      "No realiza ninguna conversión en tiempo de ejecución",
      "Útil al trabajar con APIs del DOM o datos externos",
    ],
    passive:
      "`as` obliga a TypeScript a tratar un valor como un tipo específico, sin ninguna verificación o conversión real - es solo una instrucción para el compilador. A diferencia del narrowing, no hay ninguna comprobación en tiempo de ejecución detrás.",
    whenToUse:
      "Cuando tienes certeza del tipo real (proveniente del DOM, de una librería sin tipos, de `JSON.parse`) y TypeScript no tiene forma de inferirlo por sí solo.",
    avoidWhen:
      'No uses `as` para "silenciar" un error de tipo legítimo - si el compilador tiene razón, el error es tuyo, no de él.',
  },
  "ts-index-signatures": {
    name: "Index Signatures",
    stats: [
      "Tipa objetos usados como diccionario (clave dinámica)",
      "Garantiza que todo valor accedido tenga el mismo tipo",
      "Alternativa más explícita a `Record<K, V>`",
    ],
    passive:
      "Una index signature (`[clave: string]: Tipo`) describe objetos cuyas claves no se conocen de antemano, pero cuyos valores siempre siguen el mismo tipo - como un diccionario o un mapa de configuración.",
    whenToUse:
      "Cuando la cantidad y el nombre de las claves del objeto no son fijos, pero todo valor tiene el mismo formato.",
    avoidWhen:
      "Si las claves son conocidas y fijas, prefiere una interface normal - las index signatures pierden el autocompletado de los nombres de campo.",
  },
  "ts-typed-functions": {
    name: "Funciones Tipadas",
    stats: [
      "Parámetros y retorno con un contrato claro",
      "Parámetros opcionales y valores por defecto",
      "Overloads para múltiples firmas",
    ],
    passive:
      "Tipar una función significa anotar el tipo de cada parámetro y, cuando sea necesario, el tipo de retorno. TypeScript normalmente infiere el retorno, pero anotarlo explícitamente documenta la intención y evita retornos incorrectos.",
    whenToUse:
      "En toda función pública/exportada - garantiza que quien la llame sepa exactamente qué pasar y qué recibe de vuelta.",
    avoidWhen:
      "En funciones internas muy simples, dejar que TypeScript infiera el retorno es aceptable.",
  },
  "ts-arrow-functions-typed": {
    name: "Arrow Functions Tipadas",
    stats: [
      "Sintaxis corta para funciones, con tipos en los parámetros",
      "El tipo puede inferirse del contexto (callbacks)",
      "No tienen `this` propio - lo heredan del ámbito externo",
    ],
    passive:
      "Las arrow functions pueden tiparse de la misma forma que las funciones normales, anotando parámetros y retorno. Cuando se usan como callback de una función ya tipada (como `.map`), TypeScript normalmente infiere los tipos por sí solo, sin anotación explícita.",
    whenToUse:
      "Para callbacks cortos y funciones que necesitan heredar el `this` del ámbito donde fueron creadas.",
    avoidWhen:
      "Evita anotar tipos que el contexto ya infiere (como `n: number` dentro de un `.map` de un array `number[]`) - es redundante.",
  },
  "ts-optional-rest-params": {
    name: "Parámetros Opcionales y Rest",
    stats: [
      "`?` marca un parámetro como opcional",
      "Los valores por defecto evitan comprobar `undefined` manualmente",
      "Los rest parameters (`...args`) aceptan una cantidad variable de argumentos",
    ],
    passive:
      "Un parámetro opcional (`nombre?: tipo`) puede omitirse en la llamada y llega como `undefined` si no se proporciona. Un valor por defecto (`nombre = valor`) sustituye eso automáticamente. Los rest parameters recogen todos los argumentos restantes en un array tipado.",
    whenToUse:
      "Parámetros opcionales/por defecto para argumentos configurables; rest parameters cuando la función acepta una cantidad variable de valores del mismo tipo.",
    avoidWhen:
      "Los parámetros opcionales deben ir después de los obligatorios - no se puede hacer opcional un parámetro del medio sin reorganizar la firma.",
  },
  "ts-function-overloads": {
    name: "Function Overloads",
    stats: [
      "Misma función con firmas diferentes según los argumentos",
      "Cada overload documenta una combinación válida de parámetros",
      "La implementación real queda oculta, solo las firmas son públicas",
    ],
    passive:
      "Los overloads declaran múltiples firmas para la misma función, cada una con tipos de entrada/salida diferentes. TypeScript elige la firma correcta según los argumentos pasados en la llamada; por debajo, existe una sola implementación compatible con todas ellas.",
    whenToUse:
      "Cuando el tipo de retorno de una función depende del valor (no solo del tipo) de uno de los argumentos.",
    avoidWhen:
      "Si las firmas pueden unificarse de forma más simple con generics o union types, prefiere eso - los overloads tienen una sintaxis más verbosa.",
  },
  "ts-generics": {
    name: "Generics",
    stats: [
      "Funciones y tipos reutilizables sin perder tipado",
      "Relaciona el tipo de entrada con el de salida",
      "Base de prácticamente toda librería tipada (Array, Promise, etc.)",
    ],
    passive:
      "Los generics permiten escribir código que funciona con cualquier tipo, manteniendo la relación entre los tipos de entrada y salida. Es como un parámetro, pero para tipos en lugar de valores.",
    whenToUse:
      "Cuando una función o tipo necesita funcionar con varios tipos diferentes, sin perder la información de qué tipo se está usando.",
    avoidWhen:
      "Si la función solo funciona con un tipo específico, los generics son complejidad innecesaria - tipa directamente.",
  },
  "ts-utility-types": {
    name: "Utility Types",
    stats: [
      "Transforman tipos existentes sin repetir código",
      "`Partial`, `Pick`, `Omit`, `Record` ya incluidos en el lenguaje",
      "Evitan duplicar interfaces parecidas",
    ],
    passive:
      "Los utility types son tipos genéricos integrados en TypeScript que transforman otros tipos: hacen propiedades opcionales, seleccionan o eliminan campos, crean diccionarios tipados, entre otros.",
    whenToUse:
      "Cuando necesitas una variación de un tipo ya existente (versión parcial, sin un campo, solo con algunos campos) en lugar de crear otra interface desde cero.",
    avoidWhen:
      "Si la variación cambia por completo la forma del dato, probablemente sea mejor un tipo nuevo y explícito.",
  },
  "ts-generic-constraints": {
    name: "Generic Constraints",
    stats: [
      "Limita qué tipos puede aceptar un generic",
      '`extends` en este contexto significa "debe tener esta forma"',
      "Permite acceder a propiedades con seguridad dentro de la función genérica",
    ],
    passive:
      "Por defecto, un generic (`T`) acepta cualquier tipo. Una constraint (`T extends Algo`) restringe eso, garantizando que `T` tenga al menos la forma de `Algo` - lo que permite acceder a las propiedades de `Algo` dentro de la función con seguridad de tipos.",
    whenToUse:
      "Cuando una función genérica necesita acceder a alguna propiedad o método específico del tipo recibido.",
    avoidWhen:
      "Si la constraint termina exigiendo casi todas las propiedades de un tipo concreto, tal vez los generics no sean necesarios ahí.",
  },
  "ts-mapped-types": {
    name: "Mapped Types",
    stats: [
      "Genera un nuevo tipo transformando las propiedades de otro",
      "Es la base de cómo funcionan por dentro `Partial`, `Readonly` y `Pick`",
      "Permite aplicar la misma transformación a todas las claves",
    ],
    passive:
      "Un mapped type itera sobre las claves de un tipo existente (`[K in keyof T]`) y aplica una transformación a cada una, generando un nuevo tipo. Es el mecanismo detrás de la mayoría de los utility types incluidos en el lenguaje.",
    whenToUse:
      "Al crear tus propios utility types que necesitan transformar de forma consistente todas las propiedades de otro tipo.",
    avoidWhen:
      "Para las transformaciones más comunes, prefiere los utility types ya existentes (`Partial`, `Readonly`) en vez de reescribir el mapped type desde cero.",
  },
  "ts-narrowing": {
    name: "Narrowing",
    stats: [
      "Reduce un tipo amplio (union) a uno más específico",
      "Se basa en comprobaciones en tiempo de ejecución",
      "Mantiene el código libre de casts manuales (`as`)",
    ],
    passive:
      "El narrowing es el proceso por el cual TypeScript 'estrecha' el tipo de una variable dentro de un bloque de código, a partir de comprobaciones como `typeof`, `instanceof`, `in` o comparaciones directas. Dentro del bloque, el compilador ya conoce el tipo más específico.",
    whenToUse:
      "Siempre que trabajes con union types y necesites acceder a algo específico de uno de los miembros de la unión.",
    avoidWhen:
      "No uses `as` para forzar un tipo cuando un narrowing correcto resolvería el problema de forma segura.",
  },
  "ts-discriminated-unions": {
    name: "Discriminated Unions",
    stats: [
      'Union de objetos con un campo literal en común (el "discriminante")',
      "Narrowing automático y seguro basado en ese campo",
      "Evita errores por acceder a una propiedad que no existe en el tipo actual",
    ],
    passive:
      "Una discriminated union es una union de interfaces que comparten un campo con valores literales diferentes (el 'discriminante'). Al comprobar ese campo, TypeScript estrecha automáticamente el tipo a la interface correcta dentro de ese bloque.",
    whenToUse:
      "Para modelar estados mutuamente excluyentes (cargando/éxito/error, formas geométricas diferentes) de modo que el compilador garantice que trataste todos los casos.",
    avoidWhen:
      "Si los estados comparten casi todos los campos y difieren solo en un detalle opcional, una única interface con campos opcionales puede ser más simple.",
  },
  "ts-type-predicates": {
    name: "Type Predicates (is)",
    stats: [
      "Una función que funciona como un type guard reutilizable",
      "Retorna `boolean`, pero le informa al compilador el tipo estrechado",
      "Reutiliza la misma comprobación en varios lugares del código",
    ],
    passive:
      "Un type predicate es una función cuyo tipo de retorno es `parametro is Tipo` en lugar de solo `boolean`. Cuando retorna `true`, TypeScript estrecha el tipo de la variable comprobada en todo el bloque donde se llamó a la función, exactamente como lo haría un `typeof`.",
    whenToUse:
      "Cuando la misma lógica de narrowing se usa en varios lugares, o cuando la comprobación es demasiado compleja para un `typeof`/`in` simple.",
    avoidWhen:
      'Para comprobaciones simples de una línea, un type guard en línea (`typeof x === "string"`) ya resuelve el problema sin necesitar una función con nombre.',
  },
  "ts-conditional-types": {
    name: "Conditional Types",
    stats: [
      "Tipos que cambian según una condición",
      "Base de muchos utility types internos (`Exclude`, `ReturnType`)",
      "Permite la inferencia con `infer`",
    ],
    passive:
      "Los conditional types aplican una lógica de `extends ? :` a nivel de tipos: dependiendo de si un tipo satisface una condición, el resultado es un tipo u otro. Combinados con `infer`, permiten extraer tipos de dentro de otros tipos.",
    whenToUse:
      "Al construir tus propios tipos utilitarios que necesitan comportarse de forma diferente según el tipo recibido.",
    avoidWhen:
      "Para el día a día de una aplicación, prefiere los utility types ya existentes - los conditional types manuales suelen aparecer en código de librerías.",
  },
  "ts-template-literal-types": {
    name: "Template Literal Types",
    stats: [
      "Construye tipos string combinando literales y uniones",
      "Genera automáticamente todas las combinaciones posibles",
      "Útil para tipar nombres de eventos, rutas o clases CSS",
    ],
    passive:
      "Los template literal types usan la misma sintaxis de los template strings a nivel de tipos, combinando literales fijos con uniones para generar automáticamente todas las strings posibles resultantes.",
    whenToUse:
      "Al tipar valores de string que siguen un patrón previsible (nombres de eventos, rutas de API, variantes de clases CSS).",
    avoidWhen:
      "Si las combinaciones generadas son demasiado numerosas, el autocompletado y los mensajes de error del editor pueden volverse lentos o saturados.",
  },
  "ts-decorators": {
    name: "Decorators",
    stats: [
      "Anotan y modifican clases, métodos o propiedades",
      "Sintaxis `@decorator` aplicada de forma declarativa",
      "Base de frameworks como Angular y NestJS",
    ],
    passive:
      "Un decorator es una función especial que intercepta la definición de una clase, método o propiedad, pudiendo observar o sustituir su comportamiento. Se aplican con la sintaxis `@nombre` directamente encima del elemento decorado.",
    whenToUse:
      "Al trabajar con frameworks que ya usan decorators (Angular, NestJS, TypeORM) o para aplicar el mismo comportamiento transversal (logging, validación) en varias clases.",
    avoidWhen:
      "En código de aplicación común, sin un framework que ya use decorators, la complejidad extra rara vez compensa frente a un simple helper de función.",
  },
  // JavaScript
  "js-variables-primitives": {
    name: "Variables y Tipos Primitivos",
    stats: [
      "`let`/`const` tienen alcance de bloque",
      "7 tipos primitivos: string, number, boolean, null, undefined, symbol, bigint",
      "Base para entender la comparación y la coerción de tipos",
    ],
    passive:
      "Las variables declaradas con `let` pueden reasignarse; `const` no puede reasignarse (pero los objetos/arrays dentro de ella sí pueden mutarse). Evita `var`, que tiene alcance de función y comportamientos confusos de hoisting.",
    whenToUse:
      "Usa `const` por defecto; cambia a `let` solo cuando la variable realmente necesite reasignarse.",
    avoidWhen:
      "Evita `var` en código nuevo - su alcance de función (en vez de bloque) provoca errores sutiles en loops y condicionales.",
  },
  "js-functions": {
    name: "Funciones",
    stats: [
      "Declaración, expresión y arrow functions",
      "Parámetros por defecto y rest parameters",
      "Las arrow functions no tienen `this` propio",
    ],
    passive:
      "Las funciones son valores de primera clase en JavaScript: pueden almacenarse en variables, pasarse como argumento y retornarse desde otras funciones. Las arrow functions tienen sintaxis corta y heredan el `this` del contexto donde fueron creadas.",
    whenToUse:
      "Declaraciones de función para funciones con nombre reutilizables; arrow functions para callbacks cortos y cuando necesites heredar `this`.",
    avoidWhen:
      "Evita las arrow functions como métodos de objeto si necesitas que `this` apunte al propio objeto.",
  },
  "js-operators-coercion": {
    name: "Operadores y Coerción de Tipos",
    stats: [
      "`===`/`!==` comparan sin convertir tipos",
      "`==`/`!=` convierten los tipos antes de comparar",
      "La coerción implícita es una fuente clásica de errores sutiles",
    ],
    passive:
      'JavaScript convierte tipos automáticamente en ciertas operaciones (coerción implícita) - por ejemplo, `"5" + 1` resulta en `"51"`, pero `"5" - 1` resulta en `4`. Usar `===` en vez de `==` evita que esas conversiones ocurran en la comparación.',
    whenToUse:
      "Usa `===`/`!==` siempre, por defecto - es más predecible y evita errores de coerción.",
    avoidWhen:
      'Evita depender de la coerción implícita en condiciones (`if (valor)`) cuando `0`, `""` o `NaN` puedan ser valores válidos - son "falsy" y entran en la misma rama que `null`/`undefined`.',
  },
  "js-conditionals-loops": {
    name: "Condicionales y Loops",
    stats: [
      "`if/else` y `switch` para decisiones",
      "`for`, `while` y `for...of` para repetición",
      "`for...of` itera valores; `for...in` itera claves",
    ],
    passive:
      "Las condicionales deciden qué bloque de código se ejecuta según una expresión booleana. Los loops repiten un bloque hasta que una condición deja de ser verdadera. `for...of` es el loop preferido para recorrer los valores de arrays y otros iterables.",
    whenToUse:
      "Condicionales para ramificar la lógica; `for...of` para recorrer listas; `while` cuando el número de repeticiones no se conoce de antemano.",
    avoidWhen:
      "Evita `for...in` en arrays - itera los índices como strings y puede incluir propiedades heredadas; usa `for...of` o métodos de array.",
  },
  "js-destructuring": {
    name: "Destructuring y Spread/Rest",
    stats: [
      "Extrae valores de arrays/objetos en una línea",
      "Spread (`...`) copia y combina estructuras",
      "Rest (`...`) agrupa lo que sobra en parámetros/arrays",
    ],
    passive:
      "El destructuring 'desempaqueta' valores de arrays o propiedades de objetos directamente en variables. Spread expande un iterable en elementos individuales; rest hace lo contrario, agrupando varios valores en un array u objeto.",
    whenToUse:
      "Al extraer props de un objeto, parámetros de función, o al crear copias inmutables de objetos/arrays.",
    avoidWhen:
      "Evita el destructuring demasiado profundo (varios niveles) - se vuelve difícil de leer; prefiere pasos intermedios.",
  },
  "js-array-methods": {
    name: "Array Methods",
    stats: [
      "`map`, `filter`, `reduce` evitan loops manuales",
      "No mutan el array original (retornan uno nuevo)",
      "Encadenables para pipelines de transformación de datos",
    ],
    passive:
      "`map` transforma cada elemento en otro valor, `filter` selecciona los elementos que pasan una prueba, y `reduce` acumula los elementos en un único resultado. Juntos, sustituyen la mayoría de los loops `for` manuales de forma más declarativa.",
    whenToUse:
      "Siempre que necesites transformar, filtrar o agregar datos de una lista de forma legible.",
    avoidWhen:
      "Si necesitas interrumpir la iteración a mitad de camino (`break`), un `for...of` tradicional es más directo que `forEach`/`reduce`.",
  },
  "js-template-literals": {
    name: "Template Literals",
    stats: [
      "Interpolación de variables directo en el string con `${}`",
      "Soporta strings multilínea sin concatenación",
      "Más legible que concatenar con `+`",
    ],
    passive:
      "Los template literals (delimitados por comillas invertidas) permiten incrustar expresiones dentro del string usando `${}`, y también permiten saltos de línea literales, sin necesitar `\\n` ni concatenación con `+`.",
    whenToUse:
      "Siempre que necesites mezclar texto fijo con variables, o escribir strings multilínea.",
    avoidWhen:
      "Para strings simples sin ninguna interpolación, las comillas simples/dobles siguen siendo igual de válidas y un poco más directas.",
  },
  "js-optional-chaining-nullish": {
    name: "Optional Chaining y Nullish Coalescing",
    stats: [
      "`?.` accede a propiedades sin romperse si algo en el camino es `null`/`undefined`",
      "`??` da un valor por defecto solo cuando el valor es `null`/`undefined`",
      "Evita cadenas de `&&` solo para comprobar existencia",
    ],
    passive:
      '`?.` interrumpe el acceso y retorna `undefined` si alguna parte anterior de la cadena es `null` o `undefined`, en lugar de lanzar un error. `??` retorna el valor de la derecha solo cuando el de la izquierda es `null`/`undefined` - a diferencia de `||`, que también actuaría con valores como `0` o `""`.',
    whenToUse:
      "Al acceder a propiedades que pueden no existir (datos de API, objetos opcionales) y al definir valores por defecto que solo deben entrar en juego para `null`/`undefined`.",
    avoidWhen:
      'No cambies `??` por `||` cuando `0`, `""` o `false` sean valores válidos - `||` los sustituiría incorrectamente por el valor por defecto.',
  },
  "js-closures": {
    name: "Closures",
    stats: [
      "Una función 'recuerda' las variables del ámbito donde fue creada",
      "Permite estado privado sin usar clases",
      "Base de patrones como factory functions y memoization",
    ],
    passive:
      "Una closure es la combinación de una función con las variables del ámbito léxico en el que fue declarada. Incluso después de que la función externa termina de ejecutarse, la función interna sigue teniendo acceso a esas variables.",
    whenToUse:
      "Para crear estado privado/encapsulado, factory functions, o guardar configuración que una función usará repetidamente (ej.: debounce, memoization).",
    avoidWhen:
      "Cuidado en los loops: capturar la variable equivocada por closure es una fuente clásica de errores (hoy evitado usando `let` en lugar de `var`).",
  },
  "js-higher-order-functions": {
    name: "Higher-Order Functions",
    stats: [
      "Una función que recibe y/o retorna otra función",
      "Base de `map`, `filter`, `reduce` y los callbacks",
      "Permite componer comportamiento sin duplicar código",
    ],
    passive:
      "Una higher-order function es cualquier función que recibe otra función como argumento, retorna una función, o ambas cosas. Como las funciones son valores de primera clase en JavaScript, este patrón aparece todo el tiempo - en `map`/`filter`, en debounce, en middlewares.",
    whenToUse:
      "Para añadir un comportamiento común (log, caché, validación) a varias funciones sin repetir código, o para parametrizar el comportamiento de una función con otra.",
    avoidWhen:
      "No encadenes tantas higher-order functions que el flujo real de la lógica se vuelva difícil de seguir - la simplicidad también cuenta.",
  },
  "js-callbacks": {
    name: "Callbacks",
    stats: [
      "Una función pasada como argumento para ser llamada después",
      "Base histórica de la asincronía en JavaScript, antes de las Promises",
      "Todavía se usa en APIs de eventos y timers",
    ],
    passive:
      "Un callback es una función pasada como argumento a otra, que la invoca en un momento apropiado - inmediatamente, después de un evento, o después de que termine una operación asíncrona. Antes de las Promises, era la única forma de manejar código asíncrono.",
    whenToUse:
      "En APIs de eventos (`addEventListener`) y timers, donde la propia plataforma espera un callback.",
    avoidWhen:
      'Para encadenar múltiples operaciones asíncronas, los callbacks anidados generan "callback hell" - prefiere Promises o async/await.',
  },
  "js-promises": {
    name: "Promises",
    stats: [
      "Código asíncrono más legible que los callbacks",
      "Manejo de errores centralizado con `.catch`",
      "Encadenable con `.then` para múltiples pasos",
    ],
    passive:
      "Una Promise representa un valor que puede estar disponible ahora, en el futuro, o nunca (error). Tiene tres estados - pendiente, resuelta (fulfilled) o rechazada (rejected) - y permite encadenar pasos asíncronos sin anidar callbacks.",
    whenToUse:
      "Para cualquier operación asíncrona: llamadas a APIs, lectura de archivos, timers encapsulados.",
    avoidWhen:
      "Para múltiples pasos secuenciales, `async/await` suele ser más legible que encadenar varios `.then`.",
  },
  "js-promise-combinators": {
    name: "Promise.all y Combinators",
    stats: [
      "`Promise.all` ejecuta varias Promises en paralelo",
      "`Promise.allSettled` espera a todas, aunque alguna falle",
      "`Promise.race` se resuelve con la primera que termine",
    ],
    passive:
      "Estos métodos estáticos combinan varias Promises en una sola. `Promise.all` se rechaza en cuanto una falla; `Promise.allSettled` siempre espera a todas y retorna el resultado (éxito o error) de cada una individualmente.",
    whenToUse:
      "`Promise.all` cuando todas las operaciones necesitan tener éxito; `allSettled` cuando quieres el resultado de cada una independientemente de los fallos.",
    avoidWhen:
      "No uses `Promise.all` si un fallo aislado no debería interrumpir las demás operaciones - ese es exactamente el caso de uso de `allSettled`.",
  },
  "js-fetch-api": {
    name: "Fetch API",
    stats: [
      "API nativa del navegador para peticiones HTTP",
      "Retorna una Promise que se resuelve con la Response",
      "`response.ok` debe comprobarse manualmente",
    ],
    passive:
      "`fetch` inicia una petición HTTP y retorna una Promise que se resuelve con un objeto `Response` tan pronto llegan las cabeceras. Hay que llamar a `.json()` o `.text()` (que también retornan Promises) para leer el cuerpo de la respuesta.",
    whenToUse:
      "Para cualquier llamada HTTP en el navegador sin necesitar una librería extra.",
    avoidWhen:
      "Fetch no rechaza la Promise ante respuestas de error HTTP (404, 500) - comprueba siempre `response.ok` manualmente, o usa una librería que lo haga por ti.",
  },
  "js-async-await": {
    name: "Async/Await",
    stats: [
      "Código asíncrono con apariencia de código síncrono",
      "`try/catch` para manejar errores en vez de `.catch`",
      "Fácil de combinar con `Promise.all` para paralelismo",
    ],
    passive:
      "`async/await` es azúcar sintáctico sobre las Promises: una función `async` siempre retorna una Promise, y `await` pausa la ejecución de esa función hasta que la Promise se resuelve, sin bloquear el resto de la aplicación.",
    whenToUse:
      "Cuando hay varios pasos asíncronos secuenciales - el código se vuelve mucho más fácil de leer que encadenando `.then`.",
    avoidWhen:
      "Si las operaciones son independientes entre sí, usar `await` una por una pierde paralelismo - usa `Promise.all` en ese caso.",
  },
  "js-event-loop": {
    name: "Event Loop",
    stats: [
      "Explica por qué el JS asíncrono no bloquea el hilo",
      "Diferencia las microtasks (Promises) de las macrotasks (setTimeout)",
      "Esencial para predecir el orden de ejecución del código",
    ],
    passive:
      "JavaScript es single-threaded, pero el event loop permite un comportamiento asíncrono: las operaciones terminan y colocan sus callbacks en colas. La cola de microtasks (Promises, `queueMicrotask`) siempre se vacía por completo antes que la cola de macrotasks (`setTimeout`, eventos de I/O).",
    whenToUse:
      'Para depurar órdenes de ejecución inesperados que involucran Promises y timers, o para entender por qué una UI no se "congela" durante operaciones asíncronas.',
    avoidWhen:
      'No es algo para "usar" directamente en el día a día - es un modelo mental para entender el comportamiento del runtime.',
  },
  "js-generators-iterators": {
    name: "Generators e Iterators",
    stats: [
      "Una función que puede pausar (`yield`) y reanudar su ejecución",
      "Produce valores uno a uno, bajo demanda, en vez de todos de una vez",
      "Base de librerías avanzadas de programación asíncrona",
    ],
    passive:
      "Una función generator (`function*`) puede pausar su ejecución en cada `yield` y reanudar desde donde quedó en la siguiente llamada a `.next()`. Esto permite producir secuencias de valores - potencialmente infinitas - sin calcularlas todas de antemano.",
    whenToUse:
      "Para generar secuencias bajo demanda (paginación, valores infinitos) sin guardar todo en memoria de una vez.",
    avoidWhen:
      "Para transformaciones simples de arrays ya existentes, los métodos de array (`map`/`filter`) son más directos que un generator.",
  },
  // React
  "react-components-jsx": {
    name: "Componentes y JSX",
    stats: [
      "UI declarada como funciones que retornan JSX",
      "JSX compila a `React.createElement`",
      "Los componentes son reutilizables y componibles",
    ],
    passive:
      "Un componente de React es una función que recibe props y retorna JSX describiendo lo que debe aparecer en pantalla. JSX se parece a HTML, pero es JavaScript - por eso puedes usar `{}` para incrustar expresiones.",
    whenToUse:
      "Para cualquier parte de la UI que quieras reutilizar o aislar - es la unidad básica de una app de React.",
    avoidWhen:
      "No dividas la UI en componentes separados tan pequeños y específicos que nunca se reutilizarán - eso solo agrega indirección.",
  },
  "react-props": {
    name: "Props",
    stats: [
      "Forma de pasar datos de un componente padre a un hijo",
      "Solo lectura - el hijo no debe modificarlas",
      "Tipadas con TypeScript para contratos claros",
    ],
    passive:
      "Las props (properties) son los 'parámetros' de un componente. Fluyen en una sola dirección, del componente padre al hijo, y cualquier cambio en ellas debe venir de afuera, no desde dentro del propio componente.",
    whenToUse:
      "Cada vez que un componente necesita datos o comportamiento definidos por quien lo usa.",
    avoidWhen:
      "Evita pasar muchas props sueltas cuando forman un objeto coherente - agrúpalas en una única prop de objeto.",
  },
  "react-conditional-rendering": {
    name: "Renderizado Condicional",
    stats: [
      "`&&` renderiza algo solo cuando una condición es verdadera",
      "El ternario (`? :`) elige entre dos elementos",
      "`return null` no renderiza nada",
    ],
    passive:
      "Como JSX es solo JavaScript, cualquier expresión condicional puede decidir qué renderizar: `&&` muestra el elemento de la derecha solo si la condición es verdadera, el ternario elige entre dos elementos, y retornar `null` hace que el componente no renderice nada.",
    whenToUse:
      "Ternario cuando hay dos alternativas visuales; `&&` cuando solo hay un caso de 'mostrar o nada'; early return al inicio del componente para guard clauses.",
    avoidWhen:
      "Evita `&&` con números que pueden ser `0` (ej.: `{contador && <Badge />}`) - el `0` se renderiza literalmente en la pantalla en vez de nada.",
  },
  "react-event-handling": {
    name: "Manejo de Eventos",
    stats: [
      "Manejadores en camelCase (`onClick`, `onChange`)",
      "Reciben un SyntheticEvent, con la misma API del evento nativo",
      "Pasa una función, no el resultado de llamarla",
    ],
    passive:
      "Los eventos en JSX son atributos en camelCase que reciben una función. React usa su propio sistema de eventos (SyntheticEvent) que funciona de forma consistente entre navegadores, pero con la misma API que ya conoces (`event.target`, `event.preventDefault()`).",
    whenToUse:
      "Para reaccionar a cualquier interacción del usuario: clics, escritura, envío de formularios, scroll.",
    avoidWhen:
      "No llames la función directamente en el JSX (`onClick={fazerAlgo()}`) - eso se ejecuta durante el renderizado, no al hacer clic. Pasa la referencia (`onClick={fazerAlgo}`) o una arrow function.",
  },
  "react-usestate": {
    name: "useState",
    stats: [
      "Agrega estado local a un componente funcional",
      "Vuelve a renderizar el componente cuando el estado cambia",
      "Cada llamada a `setState` es independiente de las demás",
    ],
    passive:
      "`useState` retorna un par: el valor actual del estado y una función para actualizarlo. Llamar a la función de actualización programa una nueva renderización del componente con el valor actualizado.",
    whenToUse:
      "Cuando un componente necesita 'recordar' un valor entre renderizaciones y reaccionar a sus cambios (inputs, toggles, contadores).",
    avoidWhen:
      "No dupliques en estado un valor que puede derivarse de props o de otro estado - calcúlalo en el momento del renderizado.",
  },
  "react-list-keys": {
    name: "Listas y Key",
    stats: [
      "Renderiza colecciones de datos con `.map`",
      "La prop `key` ayuda a React a identificar cada ítem entre renderizaciones",
      "Evita bugs de estado que 'se filtra' entre ítems reordenados",
    ],
    passive:
      "Para renderizar una lista, se mapea un array de datos a un array de elementos JSX. La prop `key` debe ser un identificador estable y único de cada ítem - sin ella, React puede confundir ítems al reordenar, insertar o eliminar.",
    whenToUse:
      "Cada vez que renderices una lista de ítems proveniente de un array - usa un id estable de los datos como `key`.",
    avoidWhen:
      "Evita usar el índice del array como `key` si la lista puede reordenarse, filtrarse o tener ítems insertados en el medio.",
  },
  "react-useref": {
    name: "useRef",
    stats: [
      "Guarda un valor mutable que no causa re-renderizado al cambiar",
      "Accede directamente a un elemento del DOM",
      "Mantiene el valor entre renderizaciones sin disparar un nuevo render",
    ],
    passive:
      "`useRef` retorna un objeto con una propiedad `.current` que puede leerse y modificarse libremente sin provocar una nueva renderización. Se usa tanto para guardar una referencia a un elemento del DOM como para almacenar cualquier valor mutable entre renderizaciones.",
    whenToUse:
      "Para acceder directamente a un elemento del DOM (foco, medir tamaño, scroll) o guardar un valor que cambia pero no debe causar un re-renderizado (como un id de timer).",
    avoidWhen:
      "No uses `useRef` para datos que la UI necesita reflejar visualmente - los cambios en `.current` no disparan una renderización; para eso, usa `useState`.",
  },
  "react-controlled-forms": {
    name: "Formularios Controlados",
    stats: [
      "El valor del input vive en el estado de React, no en el DOM",
      "`value` + `onChange` mantienen ambos sincronizados",
      "Permite validar o transformar el valor en cada pulsación",
    ],
    passive:
      "En un formulario controlado, el valor de cada campo se almacena en el estado del componente (`useState`) y se pasa de vuelta al input mediante la prop `value`. El `onChange` actualiza ese estado en cada pulsación, haciendo que React sea la única fuente de verdad sobre el valor actual.",
    whenToUse:
      "Cuando necesitas validar, formatear o reaccionar al valor del input en cada pulsación, o mantenerlo sincronizado con otras partes de la UI.",
    avoidWhen:
      "Para formularios simples y grandes sin necesidad de validación en tiempo real, los inputs no controlados (`useRef` + `defaultValue`) requieren menos re-renderizaciones.",
  },
  "react-useeffect": {
    name: "useEffect",
    stats: [
      "Sincroniza el componente con sistemas externos (API, DOM, timers)",
      "Se ejecuta después de la renderización, no durante",
      "Una función de limpieza evita memory leaks",
    ],
    passive:
      "`useEffect` ejecuta un efecto secundario después de que el componente se renderiza, y puede retornar una función de 'limpieza' que se ejecuta antes del próximo efecto o cuando el componente se desmonta. El array de dependencias controla cuándo se vuelve a ejecutar el efecto.",
    whenToUse:
      "Para sincronizar con algo fuera de React: peticiones a una API, subscripciones, timers, manipulación directa del DOM.",
    avoidWhen:
      "No uses `useEffect` para calcular valores derivados de props/estado - eso puede hacerse directamente en el cuerpo del componente o con `useMemo`.",
  },
  "react-uselayouteffect": {
    name: "useLayoutEffect",
    stats: [
      "Se ejecuta de forma síncrona, antes de que el navegador pinte la pantalla",
      'Evita el "flash" visual de un useEffect común',
      "Se usa casi siempre para medir o ajustar el DOM",
    ],
    passive:
      "`useLayoutEffect` tiene la misma firma que `useEffect`, pero se ejecuta de forma síncrona inmediatamente después de que React actualiza el DOM y antes de que el navegador pinte la pantalla - útil cuando el efecto necesita medir o ajustar algo visualmente antes de que el usuario vea algún flash.",
    whenToUse:
      "Cuando el efecto mide o altera el layout del DOM y necesita ocurrir antes de la siguiente pintura, para evitar un flash visual perceptible.",
    avoidWhen:
      "Para la mayoría de los efectos (peticiones, subscripciones, logs), `useEffect` es suficiente y no bloquea la pintura de la pantalla.",
  },
  "react-error-boundaries": {
    name: "Error Boundaries",
    stats: [
      "Captura errores de renderizado en el árbol de componentes hijos",
      "Muestra una UI alternativa en vez de romper toda la aplicación",
      "Solo existe como componente de clase - no hay un hook equivalente",
    ],
    passive:
      "Un Error Boundary es un componente que implementa `componentDidCatch`/`getDerivedStateFromError` para capturar errores lanzados durante el renderizado de sus componentes hijos, mostrando una UI de respaldo en vez de dejar que toda la aplicación se rompa.",
    whenToUse:
      "Alrededor de partes aisladas de la UI donde un error de renderizado no debería tumbar toda la aplicación (un widget, un gráfico, una sección de terceros).",
    avoidWhen:
      "Los error boundaries no capturan errores en manejadores de eventos, código asíncrono ni en el propio boundary - para esos casos, maneja el error con un `try/catch` normal.",
  },
  "react-usememo-usecallback": {
    name: "useMemo y useCallback",
    stats: [
      "`useMemo` memoriza el resultado de un cálculo",
      "`useCallback` memoriza la referencia de una función",
      "Evitan recálculos y re-renderizados innecesarios",
    ],
    passive:
      "Ambos reciben una función y un array de dependencias, recalculando el valor solo cuando las dependencias cambian. `useMemo` guarda el valor retornado; `useCallback` guarda la propia función, útil para no romper la memoización en componentes hijos (`React.memo`).",
    whenToUse:
      "Cuando un cálculo es comprobadamente costoso, o cuando pasar una función estable evita re-renderizados en componentes hijos memoizados.",
    avoidWhen:
      "No memoices todo por defecto - tiene un costo de memoria/comparación, y en la mayoría de los componentes simples no aporta una ganancia medible.",
  },
  "react-react-memo": {
    name: "React.memo",
    stats: [
      "Evita volver a renderizar un componente si sus props no cambiaron",
      "Hace una comparación superficial (shallow) de las props por defecto",
      "Solo ayuda si el componente padre se re-renderiza con frecuencia",
    ],
    passive:
      "`React.memo` envuelve un componente y hace que React omita su renderizado si las props recibidas son superficialmente iguales a las de la renderización anterior. Combinado con `useCallback`/`useMemo` en el componente padre, evita trabajo innecesario en listas grandes o componentes costosos.",
    whenToUse:
      "En componentes que se renderizan con frecuencia (listas, grillas) y reciben las mismas props la mayoría de las veces.",
    avoidWhen:
      "No envuelvas todos los componentes en `React.memo` por defecto - la comparación de props también tiene un costo, y sin un padre que se re-renderice mucho, no hay una ganancia real.",
  },
  "react-lazy-suspense": {
    name: "Code Splitting (lazy + Suspense)",
    stats: [
      "Carga un componente solo cuando realmente se necesita",
      "Reduce el tamaño del bundle inicial de la aplicación",
      "`Suspense` define qué mostrar mientras el componente carga",
    ],
    passive:
      "`React.lazy` convierte un `import()` dinámico en un componente que React solo carga cuando se renderiza por primera vez. Como esa carga es asíncrona, es necesario envolver el componente en `<Suspense>`, que muestra un fallback mientras el código todavía se está descargando.",
    whenToUse:
      "Para páginas o componentes grandes que no se necesitan en la carga inicial (rutas, modales, pestañas inactivas).",
    avoidWhen:
      "No vale la pena para componentes pequeños - la división extra del bundle puede costar más en peticiones de lo que ahorra en tamaño.",
  },
  "react-context": {
    name: "Context API",
    stats: [
      "Comparte datos entre componentes sin pasar props manualmente",
      "Evita el 'prop drilling' en árboles profundos",
      "Cualquier componente dentro del Provider puede consumir el valor",
    ],
    passive:
      "Context crea un canal de datos que cualquier componente descendiente puede leer con `useContext`, sin que cada nivel intermedio tenga que repasar la prop. Un `Provider` define el valor para todo su subárbol.",
    whenToUse:
      "Para datos realmente globales en el árbol de componentes (tema, usuario autenticado, idioma) consumidos en muchos niveles distintos.",
    avoidWhen:
      "No uses Context para estado que solo dos o tres componentes cercanos necesitan - las props simples lo resuelven con menos complejidad.",
  },
  "react-usereducer": {
    name: "useReducer",
    stats: [
      "Centraliza la lógica de actualización de estado en una función reducer",
      "Alternativa a `useState` para estados complejos con varias transiciones",
      "La misma idea que Redux, pero local a un componente",
    ],
    passive:
      "`useReducer` guarda el estado y delega toda la lógica de cómo cambia a una función reducer `(estado, acción) => nuevoEstado`. En vez de varias llamadas a `setState` dispersas, despachas acciones con nombre y toda transición queda centralizada en un solo lugar.",
    whenToUse:
      "Cuando un estado tiene varias transiciones relacionadas y complejas, o cuando la próxima actualización depende de qué 'acción' ocurrió, no solo del valor anterior.",
    avoidWhen:
      "Para un estado simple (un boolean, un string), `useState` es más directo - `useReducer` agrega ceremonia que solo vale la pena en casos más complejos.",
  },
  "react-compound-components": {
    name: "Compound Components",
    stats: [
      "Varios componentes que trabajan juntos compartiendo estado implícito",
      "API declarativa y flexible, como `<select><option>` de HTML",
      "Comparte estado vía Context sin exponerlo en las props",
    ],
    passive:
      "En el patrón compound components, un componente 'padre' guarda el estado y lo comparte implícitamente (generalmente vía Context) con componentes 'hijos' relacionados, que juntos forman una API declarativa - como `<Tabs><Tab /><Tab /></Tabs>` en vez de una única prop de configuración gigante.",
    whenToUse:
      "Al construir componentes de UI reutilizables con múltiples partes relacionadas (tabs, acordeones, menús) que necesitan compartir estado sin una API de props gigante.",
    avoidWhen:
      "Para un componente simple de una sola pieza, este patrón agrega Context e indirección sin necesidad.",
  },
  "react-custom-hooks": {
    name: "Custom Hooks",
    stats: [
      "Extrae lógica con estado a funciones reutilizables",
      "Compuesto a partir de hooks nativos (useState, useEffect...)",
      "Convención de nombre: siempre empieza con `use`",
    ],
    passive:
      "Un custom hook es simplemente una función que usa otros hooks por dentro, permitiendo reutilizar lógica con estado entre varios componentes sin repetir código ni crear componentes extra solo para eso.",
    whenToUse:
      "Cuando la misma lógica con estado/efectos se repite en más de un componente, o cuando quieres aislar una lógica compleja fuera del JSX.",
    avoidWhen:
      "No crees un custom hook para una única línea de lógica usada en un solo lugar - eso es indirección sin beneficio.",
  },
  "react-render-props": {
    name: "Render Props",
    stats: [
      "Comparte lógica pasando una función como prop/children",
      "El componente decide QUÉ renderizar con los datos provistos",
      "Precede a los custom hooks como forma de reutilizar lógica con estado",
    ],
    passive:
      "En el patrón render props, un componente recibe una función (generalmente vía `children` o una prop llamada `render`) y la llama pasando algún estado interno, dejando que quien usa el componente decida exactamente cómo renderizar ese estado.",
    whenToUse:
      "Para compartir lógica con estado entre componentes con UIs completamente distintas - hoy en día, en la mayoría de los casos, un custom hook resuelve el mismo problema de forma más simple.",
    avoidWhen:
      "Si la lógica no depende de renderizar algo distinto en cada uso, un custom hook es más directo y evita el anidamiento extra de JSX.",
  },
  "react-forwardref": {
    name: "forwardRef",
    stats: [
      "Permite que un componente reciba un `ref` y lo reenvíe a un elemento interno",
      "Por defecto, los componentes de función no aceptan `ref` directamente",
      "Esencial al construir componentes de UI reutilizables (inputs, botones)",
    ],
    passive:
      "Los componentes de función no reciben `ref` como una prop normal - `forwardRef` soluciona esto, permitiendo que un componente reenvíe el `ref` recibido desde afuera a un elemento del DOM específico dentro de él, como el `<input>` real detrás de un componente `Campo` personalizado.",
    whenToUse:
      "Al crear componentes de UI reutilizables (inputs, botones, cards) que quien los use pueda necesitar referenciar directamente, como lo haría con el elemento HTML nativo.",
    avoidWhen:
      "Si nadie fuera del componente necesita acceso directo al DOM interno, `forwardRef` es indirección sin necesidad.",
  },
  // Tailwind
  "tw-spacing": {
    name: "Espaciado (Margin & Padding)",
    stats: [
      "`p-` controla el padding, `m-` controla el margin",
      "Los sufijos t/r/b/l/x/y apuntan a un lado o eje específico",
      "Escala numérica consistente (4 = 1rem, 2 = 0.5rem...)",
    ],
    passive:
      "Tailwind usa una escala de espaciado basada en múltiplos de 0.25rem: `p-4` es un padding de 1rem en todos los lados. Sufijos como `px-`, `py-`, `mt-`, `mb-` aplican el espaciado solo en el eje o lado indicado, y los valores negativos (`-mt-2`) crean márgenes negativos.",
    whenToUse:
      "Para cualquier espaciado entre o dentro de elementos - es la clase más usada en el día a día de Tailwind.",
    avoidWhen:
      "Evita apilar margin en exceso para alinear layouts complejos - para eso, flexbox/grid con `gap-` suele ser más predecible.",
  },
  "tw-sizing": {
    name: "Dimensiones (Width & Height)",
    stats: [
      "`w-` y `h-` controlan el ancho y el alto",
      "Valores fraccionarios (`w-1/2`) y por viewport (`w-screen`)",
      "`max-w-`/`min-h-` limitan sin fijar el tamaño exacto",
    ],
    passive:
      "`w-` y `h-` aceptan valores de la escala de espaciado, fracciones (`w-1/3`), palabras clave (`w-full`, `h-screen`) o valores arbitrarios entre corchetes. `max-w-` y `min-w-` (y sus versiones de alto) definen límites sin fijar el tamaño en un valor exacto.",
    whenToUse:
      "Para controlar el tamaño de cualquier elemento, especialmente contenedores responsivos (`max-w-` + `mx-auto`).",
    avoidWhen:
      "Evita `w-screen` dentro de contenedores que ya tienen scroll horizontal controlado - ignora el padding del padre y puede desbordar el ancho.",
  },
  "tw-colors": {
    name: "Colores y Opacidad",
    stats: [
      "`bg-`, `text-`, `border-` aplican color al fondo, texto y borde",
      "Escala de 50 a 950 por tono (`blue-500`)",
      "Modificador `/opacidad` directo en la clase (`bg-black/50`)",
    ],
    passive:
      "Cada color de la paleta de Tailwind viene en una escala de intensidad (50 = casi blanco, 950 = casi negro). El modificador de opacidad con `/` (`bg-blue-500/30`) aplica transparencia sin necesitar un color RGBA separado.",
    whenToUse:
      "Para aplicar cualquier color de fondo, texto o borde de forma consistente con una paleta predefinida.",
    avoidWhen:
      "Evita fijar el mismo color exacto repetido en decenas de lugares sin un patrón - prefiere tokens de tema (`@theme`) para colores que representan un rol (ej.: peligro, éxito).",
  },
  "tw-typography": {
    name: "Tipografía",
    stats: [
      "`text-` controla el tamaño de la fuente",
      "`font-` controla el peso (bold, medium, semibold...)",
      "`tracking-`/`leading-` ajustan el espaciado entre letras/líneas",
    ],
    passive:
      "Las clases de tipografía cubren tamaño (`text-sm` a `text-9xl`), peso (`font-light` a `font-black`), alineación (`text-center`), espaciado entre letras (`tracking-wide`) y altura de línea (`leading-relaxed`).",
    whenToUse:
      "Para cualquier texto en la interfaz - es la base de una jerarquía visual consistente.",
    avoidWhen:
      "Evita mezclar demasiados tamaños de fuente distintos en la misma pantalla - define una escala corta y reutilízala.",
  },
  "tw-flexbox": {
    name: "Flexbox",
    stats: [
      "`flex` activa el contenedor flexible",
      "`items-`/`justify-` alinean en los ejes transversal y principal",
      "`gap-` espacia los hijos sin necesidad de margin manual",
    ],
    passive:
      "`flex` convierte el elemento en un contenedor flexbox. `flex-row`/`flex-col` define la dirección, `items-center`/`justify-between` alinean los hijos, y `gap-` agrega espacio uniforme entre ellos sin necesidad de margin en cada hijo.",
    whenToUse:
      "Para alinear elementos en fila o columna, distribuir espacio entre ellos, o centrar contenido - el layout más común del día a día.",
    avoidWhen:
      "Para grillas bidimensionales (filas Y columnas controladas juntas), `grid` suele ser más directo que flexbox con wrap.",
  },
  "tw-grid": {
    name: "Grid",
    stats: [
      "`grid` + `grid-cols-` define columnas",
      "`col-span-`/`row-span-` hacen que un ítem ocupe más espacio",
      "Controla el layout bidimensional (filas y columnas juntas)",
    ],
    passive:
      "`grid-cols-3` divide el contenedor en 3 columnas de igual ancho. Los ítems hijos pueden usar `col-span-2` para ocupar varias columnas, y `gap-` espacia tanto filas como columnas a la vez.",
    whenToUse:
      "Para grillas de cards, dashboards, o cualquier layout donde filas y columnas necesiten alinearse juntas.",
    avoidWhen:
      "Para un único eje de alineación (una barra de botones, por ejemplo), flexbox es más simple que grid.",
  },
  "tw-position": {
    name: "Posicionamiento",
    stats: [
      "`relative`/`absolute`/`fixed`/`sticky` controlan el modo de posicionamiento",
      "`top-`/`right-`/`bottom-`/`left-`/`inset-` posicionan el elemento",
      "`z-` controla el orden de apilamiento (stacking)",
    ],
    passive:
      "`absolute` posiciona el elemento en relación con el ancestro más cercano con `relative` (o `absolute`/`fixed`). `inset-0` es un atajo para `top-0 right-0 bottom-0 left-0`. `z-` resuelve qué elemento queda encima cuando se superponen.",
    whenToUse:
      "Para badges sobre elementos, modales, tooltips, headers fijos - cualquier cosa que necesite salir del flujo normal del layout.",
    avoidWhen:
      "No uses `absolute` para layouts generales de página - eso saca al elemento del flujo y suele generar bugs de superposición; prefiere flexbox/grid.",
  },
  "tw-display-overflow": {
    name: "Display y Overflow",
    stats: [
      "`hidden`/`block`/`inline-block` controlan el tipo de visualización",
      "`overflow-hidden`/`overflow-auto` controlan el contenido que se desborda",
      "`truncate` corta texto largo con puntos suspensivos",
    ],
    passive:
      "`display` controla cómo un elemento participa en el flujo del layout (`block`, `inline`, `hidden`, etc.). `overflow-` controla qué pasa cuando el contenido es más grande que el contenedor - ocultar, hacer scroll, o desbordar. `truncate` es un atajo que combina `overflow-hidden`, `text-ellipsis` y `whitespace-nowrap`.",
    whenToUse:
      "`overflow-auto`/`overflow-y-auto` para áreas de scroll controlado; `truncate` para texto de tamaño impredecible en espacios fijos (cards, tablas).",
    avoidWhen:
      'Evita `overflow-hidden` para "resolver" un bug de layout sin entender la causa - solo oculta el síntoma, el contenido sigue siendo más grande de lo que debería.',
  },
  "tw-states": {
    name: "Pseudoclases (hover, focus...)",
    stats: [
      "Prefijos como `hover:`, `focus:`, `active:`, `disabled:`",
      "`group-hover:` reacciona al hover de un ancestro marcado con `group`",
      "Cualquier utilidad puede condicionarse a un estado",
    ],
    passive:
      "Prefijar cualquier clase con un estado (`hover:bg-blue-700`) aplica ese estilo solo cuando la condición es verdadera. `group` en el elemento padre + `group-hover:` en el hijo permite que el hover en un elemento altere el estilo de otro dentro de él.",
    whenToUse:
      "Para dar feedback visual en interacciones: hover en botones/cards, foco en inputs, estados deshabilitados.",
    avoidWhen:
      "No dependas solo de `hover:` para información importante - en pantallas táctiles no existe el hover, asegúrate de que la información también esté accesible sin él.",
  },
  "tw-responsive": {
    name: "Breakpoints Responsivos",
    stats: [
      "Prefijos `sm:`, `md:`, `lg:`, `xl:`, `2xl:`",
      "Enfoque mobile-first: la clase sin prefijo aplica para todos los tamaños",
      "Cada prefijo se aplica 'a partir de ese breakpoint'",
    ],
    passive:
      "Tailwind es mobile-first: una clase sin prefijo (`flex-col`) aplica por defecto, y un prefijo como `md:flex-row` sobrescribe a partir de ese ancho de pantalla en adelante. No existe un prefijo para 'solo hasta' un tamaño - siempre piensas 'a partir de aquí'.",
    whenToUse:
      "Siempre que el layout necesite adaptarse a distintos tamaños de pantalla - empieza pensando en mobile y agrega prefijos para pantallas más grandes.",
    avoidWhen:
      "Evita apilar demasiados prefijos en la misma clase (`sm: md: lg: xl:` todos distintos) - si el patrón cambia mucho en cada breakpoint, considera repensar el layout.",
  },
  "tw-dark-mode": {
    name: "Modo Oscuro",
    stats: [
      "El prefijo `dark:` aplica estilos solo en el tema oscuro",
      "Puede seguir la preferencia del sistema o controlarse manualmente",
      "Funciona junto con cualquier otro prefijo (`dark:hover:bg-slate-700`)",
    ],
    passive:
      "El prefijo `dark:` aplica la clase solo cuando el modo oscuro está activo - ya sea por la preferencia del sistema operativo (`prefers-color-scheme`) o, configurando `darkMode: 'class'`, mediante una clase `dark` agregada manualmente en el `<html>` para alternancia controlada por el usuario.",
    whenToUse:
      "En cualquier proyecto que necesite soportar tema claro y oscuro sin duplicar hojas de estilo completas.",
    avoidWhen:
      "No olvides probar el contraste en ambos temas - un color que funciona bien en claro puede quedar ilegible en oscuro sin el par `dark:` correspondiente.",
  },
  "tw-borders-shadows": {
    name: "Bordes, Radio y Sombras",
    stats: [
      "`border`/`border-` definen el grosor y color del borde",
      "`rounded-` controla el radio de las esquinas",
      "`shadow-` aplica sombras predefinidas (sm a 2xl)",
    ],
    passive:
      "`border` agrega un borde de 1px por defecto; `border-2`, `border-dashed`, etc. ajustan el grosor y el estilo. `rounded-` va de esquinas sutiles (`rounded-sm`) a totalmente circulares (`rounded-full`). `shadow-` aplica elevación visual con sombras predefinidas.",
    whenToUse:
      "Para dar forma y profundidad a cards, botones, inputs y modales.",
    avoidWhen:
      "Evita apilar varias sombras fuertes en la misma pantalla - eso elimina la jerarquía visual que la sombra debería estar creando.",
  },
  "tw-transitions-animations": {
    name: "Transiciones y Animaciones",
    stats: [
      "`transition` activa la interpolación suave de propiedades",
      "`duration-`/`ease-` controlan la velocidad y la curva",
      "`animate-` aplica animaciones listas (spin, pulse, bounce)",
    ],
    passive:
      "`transition` (o `transition-colors`, `transition-transform`, etc.) hace que las propiedades CSS cambien de forma suave en vez de instantánea, generalmente combinado con un estado (`hover:`). `animate-` aplica keyframes ya listos de Tailwind, como `animate-spin` para loaders.",
    whenToUse:
      "Para suavizar cualquier cambio de estado visual (hover, abrir/cerrar) y dar feedback de carga (`animate-spin`/`animate-pulse`).",
    avoidWhen:
      "Evita animar `width`/`height`/`top` directamente - son costosas de recalcular para el navegador; prefiere `transform` y `opacity` cuando sea posible.",
  },
  "tw-arbitrary-values": {
    name: "Arbitrary Values",
    stats: [
      "Los corchetes `[]` aceptan cualquier valor CSS válido",
      "Escapa de la escala predeterminada sin salir de Tailwind",
      "Funciona en prácticamente cualquier utilidad (`w-`, `bg-`, `top-`...)",
    ],
    passive:
      "Cuando la escala predeterminada de Tailwind no tiene el valor exacto que necesitas, la notación `propiedad-[valor]` acepta cualquier valor CSS literal - un píxel específico, un color hexadecimal, hasta una expresión `calc()`.",
    whenToUse:
      "Para el caso puntual donde ningún valor de la escala predeterminada sirve - un píxel exacto proveniente de un diseño, un color de marca específico.",
    avoidWhen:
      "Si estás usando el mismo valor arbitrario repetidas veces, es señal de que debería convertirse en un token del tema (`@theme`) en vez de quedar disperso entre corchetes.",
  },
  "tw-theme-config": {
    name: "Personalizando el Tema (@theme)",
    stats: [
      "Define colores, fuentes y espaciados propios del proyecto",
      "Genera utilidades nuevas automáticamente (`bg-brand`, `font-display`)",
      "Centraliza las decisiones de diseño en un solo lugar",
    ],
    passive:
      "En Tailwind v4, el bloque `@theme` en el CSS declara tokens de diseño como variables (`--color-brand: #...`), y Tailwind genera automáticamente las clases utilitarias correspondientes (`bg-brand`, `text-brand`). Esto reemplaza la necesidad de editar `tailwind.config.js` en versiones anteriores.",
    whenToUse:
      "Cuando el diseño tiene colores, fuentes o espaciados propios que se repiten en todo el proyecto - centralízalos en vez de repetir valores sueltos.",
    avoidWhen:
      "No crees un token de tema para un valor usado una sola vez - eso se resuelve mejor con arbitrary values (`[valor]`).",
  },
  "tw-apply-components": {
    name: "@apply y Componentización",
    stats: [
      "`@apply` agrupa varias clases utilitarias en una sola clase CSS",
      "Útil para estilos repetidos en muchos lugares",
      "En React, extraer un componente suele ser preferible",
    ],
    passive:
      "`@apply` permite escribir una clase CSS tradicional que por debajo aplica un conjunto de utilidades de Tailwind, reduciendo la repetición en HTML puro. En frameworks de componentes (como React), suele ser más común extraer un componente reutilizable que usar `@apply`, ya que el componente también encapsula comportamiento, no solo estilo.",
    whenToUse:
      "`@apply` en proyectos sin componentización (HTML/CSS puro, o clases repetidas en muchos archivos que no son React); en React, prefiere extraer un componente.",
    avoidWhen:
      "No abuses de `@apply` en un proyecto React - eso recrea el problema que Tailwind resuelve (CSS separado del markup) sin el beneficio de un componente realmente reutilizable.",
  },

  // Testes Unitários
  "test-what-is-unit-test": {
    name: "Qué es una Prueba Unitaria",
    stats: [
      "Verifica una pequeña unidad de código de forma aislada",
      "Se ejecuta rápido - no depende de red, base de datos o UI real",
      "Da confianza para refactorizar sin miedo a romper algo",
    ],
    passive:
      "Una prueba unitaria verifica que una función, hook o componente se comporte como se espera, de forma aislada del resto del sistema. Es la base de la pirámide de pruebas: muchas pruebas pequeñas y rápidas, en vez de pocas pruebas grandes y lentas.",
    whenToUse:
      "Para cualquier lógica con un resultado predecible - funciones puras, hooks, componentes, utilidades.",
    avoidWhen:
      "No intentes probar todo de una vez en una sola prueba - si una prueba necesita mucho setup, probablemente está probando más de una cosa.",
  },
  "test-structure": {
    name: "Estructura de una Prueba (describe/it/expect)",
    stats: [
      "`describe` agrupa pruebas relacionadas",
      "`it`/`test` describe un comportamiento específico",
      "`expect` hace la verificación (assertion)",
    ],
    passive:
      'Una prueba sigue el patrón "arrange, act, assert": prepara los datos, ejecuta la acción, y verifica el resultado. `describe` organiza pruebas relacionadas en un grupo; cada `it` dentro de él prueba un comportamiento específico con un nombre descriptivo.',
    whenToUse: "Siempre - es la estructura básica de cualquier archivo de prueba.",
    avoidWhen:
      'Evita nombres de prueba vagos como "funciona" - escribe específicamente qué se está verificando.',
  },
  "test-assertions": {
    name: "Assertions Básicas",
    stats: [
      "`toBe` compara por igualdad estricta (===)",
      "`toEqual` compara objetos/arrays por valor",
      "`toContain`, `toThrow`, `toBeNull` cubren casos comunes",
    ],
    passive:
      "Las assertions son las verificaciones reales dentro de una prueba - deciden si la prueba pasa o falla. `expect(valor)` devuelve un objeto con decenas de matchers (`toBe`, `toEqual`, `toContain`...) para comparar el resultado con lo esperado.",
    whenToUse:
      "`toBe` para primitivos (números, strings, booleans); `toEqual` para objetos y arrays, ya que `toBe` compararía la referencia, no el contenido.",
    avoidWhen:
      "No uses `toBe` para comparar objetos/arrays - `{} !== {}` en JavaScript, la prueba fallaría aunque el contenido sea idéntico.",
  },
  "test-running": {
    name: "Ejecutando las Pruebas",
    stats: [
      "`vitest run` se ejecuta una vez y termina (bueno para CI)",
      "`vitest` (sin run) queda en modo watch, reejecuta al guardar",
      "Scripts en `package.json` estandarizan los comandos",
    ],
    passive:
      "El test runner descubre los archivos de prueba (normalmente `*.test.ts`), ejecuta cada uno, y reporta cuáles pasaron o fallaron. El modo watch es el más usado durante el desarrollo, ya que reejecuta las pruebas afectadas automáticamente en cada guardado.",
    whenToUse:
      "Modo watch (`npm run test:watch`) mientras codificas; `npm run test` (se ejecuta una vez) en scripts de CI/build.",
  },
  "test-setup-teardown": {
    name: "Setup & Teardown",
    stats: [
      "`beforeEach`/`afterEach` se ejecutan antes/después de cada prueba",
      "`beforeAll`/`afterAll` se ejecutan una vez para todo el archivo",
      "Evita duplicar la misma preparación en cada prueba",
    ],
    passive:
      "Setup y teardown preparan y limpian el estado alrededor de cada prueba, garantizando que una prueba no afecte a otra. `beforeEach` se ejecuta antes de cada `it`; `beforeAll` se ejecuta solo una vez, antes de todas las pruebas del archivo.",
    whenToUse:
      "Cuando varias pruebas del mismo archivo necesitan la misma preparación (resetear un mock, recrear un objeto) - evita repetir código.",
    avoidWhen:
      "No pongas lógica de prueba dentro de `beforeEach` - debe solo preparar el terreno, la verificación va en el `it`.",
  },
  "test-fixtures": {
    name: "Fixtures & Datos de Prueba",
    stats: [
      "Datos de ejemplo reutilizables entre pruebas",
      "Funciones fábrica permiten personalizar solo lo que importa",
      "Mantiene la prueba enfocada en el comportamiento, no en los datos",
    ],
    passive:
      'Una fixture es un dato de prueba preconstruido y reutilizable - en vez de crear un objeto "usuario" desde cero en cada prueba, una función fábrica genera un valor por defecto razonable que cada prueba puede sobrescribir solo donde lo necesite.',
    whenToUse:
      "Cuando varias pruebas necesitan datos parecidos (un usuario, un pedido, una lista de ítems) - centraliza la forma del dato en un solo lugar.",
    avoidWhen:
      "Evita fixtures demasiado genéricas intentando servir para todo caso - a veces un objeto literal directo en la prueba es más claro que una fixture complicada.",
  },
  "test-pure-functions": {
    name: "Probando Funciones Puras",
    stats: [
      "La misma entrada siempre produce la misma salida",
      "Más fáciles de probar - sin mocks, sin efectos secundarios",
      "Buen punto de partida para quien empieza con pruebas",
    ],
    passive:
      "Las funciones puras (sin efectos secundarios, sin dependencia de estado externo) son el caso más simple de probar: solo necesitas llamar la función con entradas conocidas y comparar la salida con el valor esperado.",
    whenToUse:
      "Para utilidades, helpers, formateadores, validadores - cualquier función que solo transforma entrada en salida.",
  },
  "test-coverage": {
    name: "Cobertura de Pruebas",
    stats: [
      "Mide qué % del código se ejecuta durante las pruebas",
      "Vitest usa el provider `v8` nativamente, sin instalar nada extra",
      "Genera un reporte en texto, HTML u otros formatos",
    ],
    passive:
      "La cobertura de pruebas mide cuántas líneas, branches y funciones del código realmente se ejecutan cuando corren las pruebas. Es un indicador útil, pero no garantiza que el comportamiento sea correcto - solo que el código fue ejecutado.",
    whenToUse:
      "Para identificar partes del código sin ninguna prueba, especialmente antes de una refactorización grande.",
    avoidWhen:
      'No persigas el 100% de cobertura como meta en sí misma - 100% de cobertura con assertions débiles no garantiza nada; prefiere pocas pruebas buenas a muchas que solo "tocan" el código.',
  },
  "test-testing-library": {
    name: "Testing Library (render, screen, queries)",
    stats: [
      "`render` monta el componente en un DOM virtual (jsdom)",
      "`screen` da acceso a todo lo que fue renderizado",
      "Las queries (`getByRole`, `getByText`...) buscan elementos como lo haría un usuario",
    ],
    passive:
      'Testing Library renderiza componentes React en un entorno de prueba y permite consultarlos de la forma en que un usuario "vería" la pantalla - por texto visible, rol semántico, o etiqueta - en vez de depender de detalles de implementación como nombres de clase.',
    whenToUse:
      "Para probar que un componente renderiza lo que debería, con el texto y la estructura semántica correctos.",
    avoidWhen:
      "Evita probar detalles de implementación (el nombre de una variable de estado interna, la estructura exacta del DOM) - prueba lo que el usuario ve y hace.",
  },
  "test-user-event": {
    name: "Simulando la Interacción del Usuario",
    stats: [
      "`userEvent.setup()` crea una sesión de interacción",
      "Simula eventos reales (escritura, clic, foco) de forma realista",
      "Funciones asíncronas - siempre usa `await`",
    ],
    passive:
      "`user-event` simula interacciones del usuario de forma más fiel que disparar eventos del DOM directamente - escribiendo un carácter a la vez, por ejemplo, en vez de establecer el valor completo de una sola vez.",
    whenToUse:
      "Para probar comportamiento que depende de interacción: escribir en un campo, hacer clic en un botón, navegar con el teclado.",
  },
  "test-hooks": {
    name: "Probando Hooks",
    stats: [
      "`renderHook` ejecuta un hook fuera de un componente",
      "`result.current` da acceso al valor devuelto por el hook",
      "`act` garantiza que las actualizaciones de estado se procesen correctamente",
    ],
    passive:
      "`renderHook` permite probar un custom hook de forma aislada, sin necesidad de montar un componente solo para eso. Cualquier actualización de estado disparada en la prueba (como llamar a una función devuelta por el hook) debe envolverse en `act` para que React la procese correctamente.",
    whenToUse:
      "Para probar la lógica de un custom hook (como `useSearch` o `useCategoryNavigation`) sin acoplar la prueba a un componente específico.",
  },
  "test-mocks-spies": {
    name: "Mocks & Spies",
    stats: [
      "`vi.fn()` crea una función falsa que registra las llamadas",
      "`vi.mock()` sustituye un módulo entero por una versión falsa",
      "Permite probar sin depender de red, base de datos o APIs externas",
    ],
    passive:
      "Un mock sustituye una dependencia real por una versión controlada por la prueba. `vi.fn()` crea una función que registra cuántas veces fue llamada y con qué argumentos, útil para verificar que un callback realmente se disparó.",
    whenToUse:
      "Cuando el código probado depende de algo externo (API, base de datos, timer) que no quieres (o no puedes) ejecutar de verdad durante la prueba.",
    avoidWhen:
      "No abuses de los mocks hasta el punto de que la prueba solo verifique que configuraste bien el mock - eso prueba el mock, no tu código.",
  },
  "test-async": {
    name: "Pruebas Asíncronas",
    stats: [
      "`await` dentro de la prueba espera a que una Promise se resuelva",
      "`waitFor` espera hasta que una condición sea verdadera",
      'Evita pruebas "flaky" que pasan o fallan al azar',
    ],
    passive:
      "Las pruebas que involucran código asíncrono (fetch, timers, efectos) necesitan esperar el resultado antes de hacer la assertion. `waitFor` repite la verificación en intervalos cortos hasta que pase o hasta un timeout, en vez de usar un `setTimeout` fijo y esperar que sea tiempo suficiente.",
    whenToUse:
      "Siempre que el componente o función probada dependa de una operación asíncrona (una solicitud, un efecto, un debounce).",
    avoidWhen:
      'Evita un `setTimeout` fijo dentro de una prueba para "esperar" a que algo pase - es lento y aun así puede fallar si la operación tarda más de lo esperado.',
  },
  "test-doubles": {
    name: "Test Doubles (mock vs stub vs spy)",
    stats: [
      "Stub: devuelve un valor fijo, sin lógica",
      "Spy: registra cómo fue llamada la función real, sin cambiar su comportamiento",
      "Mock: sustituye el comportamiento real por uno falso configurable",
    ],
    passive:
      '"Test double" es el término general para cualquier sustituto de una dependencia real en una prueba. Los términos varían según el matiz: un stub solo devuelve un valor fijo; un spy observa las llamadas a la función real sin alterarla; un mock sustituye todo el comportamiento por una versión controlada.',
    whenToUse:
      "Spy cuando quieres mantener el comportamiento real pero verificar cómo fue llamado; mock cuando quieres sustituir el comportamiento por completo; stub para respuestas simples y predecibles.",
  },
  "test-snapshot": {
    name: "Snapshot Testing",
    stats: [
      "`toMatchSnapshot` guarda la salida actual como referencia",
      "Las siguientes pruebas comparan contra ese snapshot guardado",
      "Buena para detectar cambios accidentales, no para validar comportamiento",
    ],
    passive:
      "Una prueba de snapshot guarda la salida de un componente (o valor) en un archivo en la primera ejecución, y en las siguientes compara la salida actual con la guardada, avisando si algo cambió. Se trata más de detectar cambios que de validar si el resultado es correcto.",
    whenToUse:
      "Para detectar cambios no intencionales en la estructura de un componente complejo que cambiaría raramente.",
    avoidWhen:
      'Evita depender solo de snapshots - es fácil "aceptar" un cambio roto sin darte cuenta, solo porque el snapshot actualizado parece razonable a simple vista.',
  },
  "test-ci": {
    name: "Integración Continua (CI)",
    stats: [
      "Ejecuta las pruebas automáticamente en cada push/PR",
      "Detecta regresiones antes de que lleguen a la rama principal",
      "Es común usar GitHub Actions, GitLab CI, etc.",
    ],
    passive:
      "La integración continua (CI) ejecuta la suite de pruebas automáticamente cada vez que hay un cambio en el repositorio, normalmente antes de permitir el merge de un pull request. Esto garantiza que nadie rompa las pruebas sin darse cuenta.",
    whenToUse:
      "En cualquier proyecto con más de una persona (o más de un día) trabajando en él - CI detecta errores antes de que se conviertan en un problema en producción.",
  },
};
