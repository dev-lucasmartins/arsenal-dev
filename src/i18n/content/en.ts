import type { StudyItemContent } from "../../types/study-item";

export const enContent: Record<string, StudyItemContent> = {
  // TypeScript
  "ts-basic-types": {
    name: "Basic Typing",
    stats: [
      "Errors caught at compile time",
      "More precise autocomplete in the editor",
      "Implicit documentation of the code",
    ],
    passive:
      "TypeScript infers a variable's type from its initial value, but you can also declare the type explicitly. Primitive types (string, number, boolean etc.) form the foundation of the entire type system.",
    whenToUse:
      "Whenever you declare variables, function parameters, or return types - it's the foundation of everything in TypeScript.",
    avoidWhen:
      "Avoid annotating types that TypeScript already infers on its own (e.g. `let x: number = 5`), it just adds visual noise.",
  },
  "ts-enums": {
    name: "Enums",
    stats: [
      "Fixed set of named values",
      "More readable than strings or magic numbers",
      "Autocomplete for the possible values",
    ],
    passive:
      "An enum defines a named set of related constants. By default the values are numeric (0, 1, 2...), but you can use string enums for more readable values when debugging.",
    whenToUse:
      "When you have a fixed, known set of options (status, categories, directions).",
    avoidWhen:
      'For simple cases, a union of string literals (`type Status = "pending" | "paid"`) is usually lighter than an enum.',
  },
  "ts-arrays-tuples": {
    name: "Typed Arrays & Tuples",
    stats: [
      "Homogeneous arrays with `Type[]` or `Array<Type>`",
      "Tuples fix the count and type of each position",
      "Tuples document the role of each element",
    ],
    passive:
      "A typed array (`number[]`) accepts any number of elements of the same type. A tuple (`[string, number]`) is a fixed-length array where each position has its own type - useful for returns like `[value, error]`.",
    whenToUse:
      "Arrays for collections of variable size; tuples when the position of each value has a fixed meaning (like the return of `useState`).",
    avoidWhen:
      "Don't use long tuples (4+ positions) - at that point a named object is more readable than remembering the order.",
  },
  "ts-literal-types": {
    name: "Literal Types",
    stats: [
      "Restricts a value to an exact set of literals",
      'Combined with union, creates lightweight string "enums"',
      "Autocomplete shows exactly the accepted values",
    ],
    passive:
      'A literal type uses a specific value (an exact string, number, or boolean) as the type, instead of the generic type. Combined in a union (`"a" | "b"`), they describe a closed set of valid options.',
    whenToUse:
      "To represent a fixed, small set of valid values, as a lightweight alternative to enums.",
    avoidWhen:
      "If the set of values can grow dynamically at runtime, literal types don't help - that's data, not type.",
  },
  "ts-interfaces-vs-types": {
    name: "Interfaces vs Types",
    stats: [
      "Model the shape of objects",
      "Interfaces can be extended (extends) and merged",
      "Types accept unions, intersections, and primitive types",
    ],
    passive:
      "`interface` and `type` describe the shape of an object and, in most cases, are interchangeable. Interfaces favor inheritance (`extends`) and declaration merging; `type` is more flexible for unions, tuples, and utility types.",
    whenToUse:
      "Use `interface` for object shapes that may be extended; use `type` when you need unions, intersections, or aliases for primitive types.",
    avoidWhen:
      "Don't create an interface just for a union of strings - that's a job for `type`.",
  },
  "ts-readonly-optional": {
    name: "Readonly & Optional Properties",
    stats: [
      "`readonly` prevents reassigning the property after creation",
      "`?` marks a property as optional",
      "Helps model partially filled objects",
    ],
    passive:
      "Prefixing a property with `readonly` prevents it from being reassigned after the object is created (at compile time only). The `?` suffix marks a property as optional, allowing it to be omitted when creating the object.",
    whenToUse:
      "`readonly` for data that shouldn't change after creation (ids, configs); `?` for genuinely optional fields.",
    avoidWhen:
      'Don\'t mark everything as optional just to avoid type errors - that pushes "does this field exist?" checks to everywhere the object is used.',
  },
  "ts-type-assertions": {
    name: "Type Assertions (as)",
    stats: [
      'Tells the compiler "trust me, I know the real type"',
      "Performs no conversion at runtime",
      "Useful when dealing with DOM APIs or external data",
    ],
    passive:
      "`as` forces TypeScript to treat a value as a specific type, with no real checking or conversion - it's just an instruction to the compiler. Unlike narrowing, there's no runtime check behind it.",
    whenToUse:
      "When you're certain of the real type (coming from the DOM, an untyped lib, `JSON.parse`) and TypeScript has no way to infer it on its own.",
    avoidWhen:
      "Don't use `as` to silence a legitimate type error - if the compiler is right, the bug is yours, not its.",
  },
  "ts-index-signatures": {
    name: "Index Signatures",
    stats: [
      "Types objects used as a dictionary (dynamic key)",
      "Ensures every accessed value has the same type",
      "A more explicit alternative to `Record<K, V>`",
    ],
    passive:
      "An index signature (`[key: string]: Type`) describes objects whose keys aren't known in advance, but whose values always follow the same type - like a dictionary or a config map.",
    whenToUse:
      "When the number and names of the object's keys aren't fixed, but every value has the same shape.",
    avoidWhen:
      "If the keys are known and fixed, prefer a regular interface - index signatures lose autocomplete for field names.",
  },
  "ts-typed-functions": {
    name: "Typed Functions",
    stats: [
      "Parameters and return with a clear contract",
      "Optional parameters and default values",
      "Overloads for multiple signatures",
    ],
    passive:
      "Typing a function means annotating the type of each parameter and, when needed, the return type. TypeScript usually infers the return type, but annotating it explicitly documents intent and prevents incorrect returns.",
    whenToUse:
      "In every public/exported function - it guarantees callers know exactly what to pass and what they get back.",
    avoidWhen:
      "In very simple internal functions, letting TypeScript infer the return type is acceptable.",
  },
  "ts-arrow-functions-typed": {
    name: "Typed Arrow Functions",
    stats: [
      "Short syntax for functions, with typed parameters",
      "Type can be inferred from context (callbacks)",
      "Have no `this` of their own - they inherit it from the outer scope",
    ],
    passive:
      "Arrow functions can be typed the same way as regular functions, annotating parameters and return type. When used as a callback of an already-typed function (like `.map`), TypeScript usually infers the types on its own, with no explicit annotation.",
    whenToUse:
      "For short callbacks and functions that need to inherit `this` from the scope where they were created.",
    avoidWhen:
      "Avoid annotating types the context already infers (like `n: number` inside `.map` on a `number[]` array) - it's redundant.",
  },
  "ts-optional-rest-params": {
    name: "Optional & Rest Parameters",
    stats: [
      "`?` marks a parameter as optional",
      "Default values avoid manual `undefined` checks",
      "Rest parameters (`...args`) accept a variable number of arguments",
    ],
    passive:
      "An optional parameter (`name?: type`) can be omitted on the call and comes through as `undefined` if not provided. A default value (`name = value`) replaces that automatically. Rest parameters collect all remaining arguments into a typed array.",
    whenToUse:
      "Optional/default parameters for configurable arguments; rest parameters when the function accepts a variable number of values of the same type.",
    avoidWhen:
      "Optional parameters must come after the required ones - you can't make a parameter in the middle optional without reorganizing the signature.",
  },
  "ts-function-overloads": {
    name: "Function Overloads",
    stats: [
      "Same function with different signatures depending on the arguments",
      "Each overload documents a valid combination of parameters",
      "The real implementation stays hidden, only the signatures are public",
    ],
    passive:
      "Overloads declare multiple signatures for the same function, each with different input/output types. TypeScript picks the right signature based on the arguments passed in the call; underneath, there's just one implementation compatible with all of them.",
    whenToUse:
      "When a function's return type depends on the value (not just the type) of one of the arguments.",
    avoidWhen:
      "If the signatures can be unified more simply with generics or union types, prefer that - overloads have more verbose syntax.",
  },
  "ts-generics": {
    name: "Generics",
    stats: [
      "Reusable functions and types without losing type safety",
      "Relates the input type to the output type",
      "The basis of nearly every typed library (Array, Promise etc.)",
    ],
    passive:
      "Generics let you write code that works with any type while preserving the relationship between input and output types. It's like a parameter, but for types instead of values.",
    whenToUse:
      "When a function or type needs to work with several different types, without losing track of which type is being used.",
    avoidWhen:
      "If the function only works with one specific type, generics are unnecessary complexity - type it directly.",
  },
  "ts-utility-types": {
    name: "Utility Types",
    stats: [
      "Transform existing types without repeating code",
      "`Partial`, `Pick`, `Omit`, `Record` built into the language",
      "Avoid duplicating similar interfaces",
    ],
    passive:
      "Utility types are generic types built into TypeScript that transform other types: making properties optional, selecting or removing fields, creating typed dictionaries, and more.",
    whenToUse:
      "When you need a variation of an existing type (a partial version, missing a field, with only some fields) instead of creating another interface from scratch.",
    avoidWhen:
      "If the variation completely changes the shape of the data, a new, explicit type is probably better.",
  },
  "ts-generic-constraints": {
    name: "Generic Constraints",
    stats: [
      "Limits which types a generic can accept",
      '`extends` in this context means "must have this shape"',
      "Lets you safely access properties inside the generic function",
    ],
    passive:
      "By default, a generic (`T`) accepts any type. A constraint (`T extends Something`) restricts that, guaranteeing that `T` has at least the shape of `Something` - which lets you safely access `Something`'s properties inside the function.",
    whenToUse:
      "When a generic function needs to access a specific property or method of the received type.",
    avoidWhen:
      "If the constraint ends up requiring almost every property of a concrete type, generics might not be necessary there.",
  },
  "ts-mapped-types": {
    name: "Mapped Types",
    stats: [
      "Generates a new type by transforming another type's properties",
      "The basis of how `Partial`, `Readonly`, and `Pick` work internally",
      "Lets you apply the same transformation to every key",
    ],
    passive:
      "A mapped type iterates over the keys of an existing type (`[K in keyof T]`) and applies a transformation to each one, generating a new type. It's the mechanism behind most built-in utility types.",
    whenToUse:
      "When building your own utility types that need to consistently transform every property of another type.",
    avoidWhen:
      "For the most common transformations, prefer the already-built utility types (`Partial`, `Readonly`) instead of rewriting the mapped type from scratch.",
  },
  "ts-narrowing": {
    name: "Narrowing",
    stats: [
      "Reduces a broad type (union) to a more specific one",
      "Based on runtime checks",
      "Keeps the code free of manual casts (`as`)",
    ],
    passive:
      "Narrowing is the process by which TypeScript 'narrows' the type of a variable within a block of code, based on checks like `typeof`, `instanceof`, `in`, or direct comparisons. Inside the block, the compiler already knows the more specific type.",
    whenToUse:
      "Whenever you work with union types and need to access something specific to one of the union's members.",
    avoidWhen:
      "Don't use `as` to force a type when correct narrowing would solve the problem safely.",
  },
  "ts-discriminated-unions": {
    name: "Discriminated Unions",
    stats: [
      'Union of objects sharing a common literal field (the "discriminant")',
      "Automatic, safe narrowing based on that field",
      "Avoids bugs from accessing a property that doesn't exist on the current type",
    ],
    passive:
      "A discriminated union is a union of interfaces that share a field with different literal values (the 'discriminant'). By checking that field, TypeScript automatically narrows the type to the correct interface within that block.",
    whenToUse:
      "To model mutually exclusive states (loading/success/error, different geometric shapes) so the compiler guarantees you've handled every case.",
    avoidWhen:
      "If the states share almost all their fields and differ only in one optional detail, a single interface with optional fields may be simpler.",
  },
  "ts-type-predicates": {
    name: "Type Predicates (is)",
    stats: [
      "A function that works as a reusable type guard",
      "Returns `boolean`, but tells the compiler the narrowed type",
      "Reuses the same check in multiple places in the code",
    ],
    passive:
      "A type predicate is a function whose return type is `parameter is Type` instead of just `boolean`. When it returns `true`, TypeScript narrows the tested variable's type throughout the block where the function was called, exactly like a `typeof` check would.",
    whenToUse:
      "When the same narrowing logic is used in multiple places, or when the check is too complex for a simple `typeof`/`in`.",
    avoidWhen:
      'For simple, one-line checks, an inline type guard (`typeof x === "string"`) already solves it without needing a named function.',
  },
  "ts-conditional-types": {
    name: "Conditional Types",
    stats: [
      "Types that change based on a condition",
      "The basis of many built-in utility types (`Exclude`, `ReturnType`)",
      "Allows inference with `infer`",
    ],
    passive:
      "Conditional types apply an `extends ? :` logic at the type level: depending on whether a type satisfies a condition, the result is one type or another. Combined with `infer`, they let you extract types from within other types.",
    whenToUse:
      "When building your own utility types that need to behave differently depending on the type received.",
    avoidWhen:
      "For everyday application code, prefer the already-built utility types - hand-written conditional types usually show up in library code.",
  },
  "ts-template-literal-types": {
    name: "Template Literal Types",
    stats: [
      "Builds string types by combining literals and unions",
      "Automatically generates every possible combination",
      "Useful for typing event names, routes, or CSS classes",
    ],
    passive:
      "Template literal types use the same syntax as template strings at the type level, combining fixed literals with unions to automatically generate every possible resulting string.",
    whenToUse:
      "When typing string values that follow a predictable pattern (event names, API routes, CSS class variants).",
    avoidWhen:
      "If the generated combinations are too numerous, the editor's autocomplete and error messages can become slow or cluttered.",
  },
  "ts-decorators": {
    name: "Decorators",
    stats: [
      "Annotate and modify classes, methods, or properties",
      "`@decorator` syntax applied declaratively",
      "The basis of frameworks like Angular and NestJS",
    ],
    passive:
      "A decorator is a special function that intercepts the definition of a class, method, or property, and can observe or replace its behavior. They're applied with the `@name` syntax directly above the decorated element.",
    whenToUse:
      "When working with frameworks that already use decorators (Angular, NestJS, TypeORM), or to apply the same cross-cutting behavior (logging, validation) across multiple classes.",
    avoidWhen:
      "In regular application code, without a framework that already uses decorators, the extra complexity rarely pays off compared to a simple helper function.",
  },
  // JavaScript
  "js-variables-primitives": {
    name: "Variables & Primitive Types",
    stats: [
      "`let`/`const` have block scope",
      "7 primitive types: string, number, boolean, null, undefined, symbol, bigint",
      "The foundation for understanding comparison and type coercion",
    ],
    passive:
      "Variables declared with `let` can be reassigned; `const` cannot be reassigned (but objects/arrays inside it can still be mutated). Avoid `var`, which has function scope and confusing hoisting behavior.",
    whenToUse:
      "Use `const` by default; switch to `let` only when the variable genuinely needs to be reassigned.",
    avoidWhen:
      "Avoid `var` in new code - its function scope (instead of block scope) causes subtle bugs in loops and conditionals.",
  },
  "js-functions": {
    name: "Functions",
    stats: [
      "Declaration, expression, and arrow functions",
      "Default parameters and rest parameters",
      "Arrow functions have no `this` of their own",
    ],
    passive:
      "Functions are first-class values in JavaScript: they can be stored in variables, passed as arguments, and returned from other functions. Arrow functions have short syntax and inherit `this` from the context where they were created.",
    whenToUse:
      "Function declarations for reusable named functions; arrow functions for short callbacks and when you need to inherit `this`.",
    avoidWhen:
      "Avoid arrow functions as object methods if you need `this` to point to the object itself.",
  },
  "js-operators-coercion": {
    name: "Operators & Type Coercion",
    stats: [
      "`===`/`!==` compare without converting types",
      "`==`/`!=` convert types before comparing",
      "Implicit coercion is a classic source of subtle bugs",
    ],
    passive:
      'JavaScript automatically converts types in certain operations (implicit coercion) - for example, `"5" + 1` results in `"51"`, but `"5" - 1` results in `4`. Using `===` instead of `==` prevents these conversions from happening in the comparison.',
    whenToUse:
      "Use `===`/`!==` always, by default - it's more predictable and avoids coercion bugs.",
    avoidWhen:
      'Avoid relying on implicit coercion in conditions (`if (value)`) when `0`, `""`, or `NaN` could be valid values - they\'re "falsy" and fall into the same branch as `null`/`undefined`.',
  },
  "js-conditionals-loops": {
    name: "Conditionals & Loops",
    stats: [
      "`if/else` and `switch` for decisions",
      "`for`, `while`, and `for...of` for repetition",
      "`for...of` iterates values; `for...in` iterates keys",
    ],
    passive:
      "Conditionals decide which block of code executes based on a boolean expression. Loops repeat a block until a condition stops being true. `for...of` is the preferred loop for iterating over the values of arrays and other iterables.",
    whenToUse:
      "Conditionals to branch logic; `for...of` to iterate lists; `while` when the number of repetitions isn't known in advance.",
    avoidWhen:
      "Avoid `for...in` on arrays - it iterates indexes as strings and can include inherited properties; use `for...of` or array methods.",
  },
  "js-destructuring": {
    name: "Destructuring & Spread/Rest",
    stats: [
      "Extracts values from arrays/objects in one line",
      "Spread (`...`) copies and combines structures",
      "Rest (`...`) groups what's left over in parameters/arrays",
    ],
    passive:
      "Destructuring 'unpacks' values from arrays or object properties directly into variables. Spread expands an iterable into individual elements; rest does the opposite, grouping multiple values into an array or object.",
    whenToUse:
      "When extracting props from an object, function parameters, or creating immutable copies of objects/arrays.",
    avoidWhen:
      "Avoid destructuring that's too deep (several levels) - it becomes hard to read; prefer intermediate steps.",
  },
  "js-array-methods": {
    name: "Array Methods",
    stats: [
      "`map`, `filter`, `reduce` avoid manual loops",
      "They don't mutate the original array (return a new one)",
      "Chainable for data transformation pipelines",
    ],
    passive:
      "`map` transforms each item into another value, `filter` selects items that pass a test, and `reduce` accumulates the items into a single result. Together, they replace most manual `for` loops in a more declarative way.",
    whenToUse:
      "Whenever you need to transform, filter, or aggregate list data in a readable way.",
    avoidWhen:
      "If you need to break out of the iteration partway through (`break`), a traditional `for...of` is more direct than `forEach`/`reduce`.",
  },
  "js-template-literals": {
    name: "Template Literals",
    stats: [
      "Variable interpolation directly in the string with `${}`",
      "Supports multi-line strings without concatenation",
      "More readable than concatenating with `+`",
    ],
    passive:
      "Template literals (delimited by backticks) let you embed expressions inside the string using `${}`, and also allow literal line breaks, without needing `\\n` or `+` concatenation.",
    whenToUse:
      "Whenever you need to mix fixed text with variables, or write multi-line strings.",
    avoidWhen:
      "For simple strings with no interpolation at all, single/double quotes remain just as valid and a bit more direct.",
  },
  "js-optional-chaining-nullish": {
    name: "Optional Chaining & Nullish Coalescing",
    stats: [
      "`?.` accesses properties without breaking if something along the way is `null`/`undefined`",
      "`??` gives a default value only when the value is `null`/`undefined`",
      "Avoids `&&` chains just to check existence",
    ],
    passive:
      '`?.` stops the access and returns `undefined` if any earlier part of the chain is `null` or `undefined`, instead of throwing an error. `??` returns the right-hand value only when the left-hand one is `null`/`undefined` - unlike `||`, which would also trigger on values like `0` or `""`.',
    whenToUse:
      "When accessing properties that might not exist (API data, optional objects) and when setting default values that should only kick in for `null`/`undefined`.",
    avoidWhen:
      'Don\'t swap `??` for `||` when `0`, `""`, or `false` are valid values - `||` would incorrectly replace them with the default.',
  },
  "js-closures": {
    name: "Closures",
    stats: [
      "A function 'remembers' variables from the scope where it was created",
      "Enables private state without classes",
      "The basis of patterns like factory functions and memoization",
    ],
    passive:
      "A closure is the combination of a function with the variables from the lexical scope in which it was declared. Even after the outer function finishes executing, the inner function still has access to those variables.",
    whenToUse:
      "To create private/encapsulated state, factory functions, or hold configuration that a function will use repeatedly (e.g. debounce, memoization).",
    avoidWhen:
      "Be careful in loops: capturing the wrong variable via closure is a classic source of bugs (nowadays avoided by using `let` instead of `var`).",
  },
  "js-higher-order-functions": {
    name: "Higher-Order Functions",
    stats: [
      "A function that receives and/or returns another function",
      "The basis of `map`, `filter`, `reduce`, and callbacks",
      "Lets you compose behavior without duplicating code",
    ],
    passive:
      "A higher-order function is any function that takes another function as an argument, returns a function, or both. Since functions are first-class values in JavaScript, this pattern shows up everywhere - in `map`/`filter`, in debounce, in middleware.",
    whenToUse:
      "To add common behavior (logging, caching, validation) to several functions without repeating code, or to parameterize a function's behavior with another function.",
    avoidWhen:
      "Don't chain so many higher-order functions that the real flow of the logic becomes hard to follow - simplicity counts too.",
  },
  "js-callbacks": {
    name: "Callbacks",
    stats: [
      "A function passed as an argument to be called later",
      "The historical basis of asynchrony in JavaScript, before Promises",
      "Still used in event APIs and timers",
    ],
    passive:
      "A callback is a function passed as an argument to another, which invokes it at an appropriate moment - immediately, after an event, or after an asynchronous operation finishes. Before Promises, it was the only way to handle asynchronous code.",
    whenToUse:
      "In event APIs (`addEventListener`) and timers, where the platform itself expects a callback.",
    avoidWhen:
      'To chain multiple asynchronous operations, nested callbacks create "callback hell" - prefer Promises or async/await.',
  },
  "js-promises": {
    name: "Promises",
    stats: [
      "More readable asynchronous code than callbacks",
      "Centralized error handling with `.catch`",
      "Chainable with `.then` for multiple steps",
    ],
    passive:
      "A Promise represents a value that may be available now, in the future, or never (error). It has three states - pending, fulfilled, or rejected - and lets you chain asynchronous steps without nesting callbacks.",
    whenToUse:
      "For any asynchronous operation: API calls, file reads, wrapped timers.",
    avoidWhen:
      "For multiple sequential steps, `async/await` is usually more readable than chaining several `.then`.",
  },
  "js-promise-combinators": {
    name: "Promise.all & Combinators",
    stats: [
      "`Promise.all` runs several Promises in parallel",
      "`Promise.allSettled` waits for all, even if some fail",
      "`Promise.race` resolves with whichever finishes first",
    ],
    passive:
      "These static methods combine multiple Promises into one. `Promise.all` rejects as soon as any of them fails; `Promise.allSettled` always waits for all of them and returns each one's result (success or error) individually.",
    whenToUse:
      "`Promise.all` when every operation needs to succeed; `allSettled` when you want each one's result regardless of failures.",
    avoidWhen:
      "Don't use `Promise.all` if one isolated failure shouldn't interrupt the other operations - that's exactly the use case for `allSettled`.",
  },
  "js-fetch-api": {
    name: "Fetch API",
    stats: [
      "Native browser API for HTTP requests",
      "Returns a Promise that resolves with the Response",
      "`response.ok` needs to be checked manually",
    ],
    passive:
      "`fetch` starts an HTTP request and returns a Promise that resolves with a `Response` object as soon as the headers arrive. You need to call `.json()` or `.text()` (which also return Promises) to read the response body.",
    whenToUse:
      "For any HTTP call in the browser without needing an extra library.",
    avoidWhen:
      "Fetch doesn't reject the Promise on HTTP error responses (404, 500) - always check `response.ok` manually, or use a library that does it for you.",
  },
  "js-async-await": {
    name: "Async/Await",
    stats: [
      "Asynchronous code that looks like synchronous code",
      "`try/catch` to handle errors instead of `.catch`",
      "Easy to combine with `Promise.all` for parallelism",
    ],
    passive:
      "`async/await` is syntactic sugar over Promises: an `async` function always returns a Promise, and `await` pauses that function's execution until the Promise is resolved, without blocking the rest of the application.",
    whenToUse:
      "When there are several sequential asynchronous steps - the code becomes much easier to read than chaining `.then`.",
    avoidWhen:
      "If the operations are independent of each other, `await`-ing them one by one loses parallelism - use `Promise.all` in that case.",
  },
  "js-event-loop": {
    name: "Event Loop",
    stats: [
      "Explains why asynchronous JS doesn't block the thread",
      "Distinguishes microtasks (Promises) from macrotasks (setTimeout)",
      "Essential for predicting code execution order",
    ],
    passive:
      "JavaScript is single-threaded, but the event loop enables asynchronous behavior: operations finish and place their callbacks in queues. The microtask queue (Promises, `queueMicrotask`) is always fully drained before the macrotask queue (`setTimeout`, I/O events).",
    whenToUse:
      'To debug unexpected execution orders involving Promises and timers, or to understand why a UI doesn\'t "freeze" during asynchronous operations.',
    avoidWhen:
      "It's not something to \"use\" directly day to day - it's a mental model for understanding the runtime's behavior.",
  },
  "js-generators-iterators": {
    name: "Generators & Iterators",
    stats: [
      "A function that can pause (`yield`) and resume its execution",
      "Produces values one at a time, on demand, instead of all at once",
      "The basis of advanced asynchronous programming libraries",
    ],
    passive:
      "A generator function (`function*`) can pause its execution at each `yield` and resume where it left off on the next call to `.next()`. This lets you produce sequences of values - potentially infinite ones - without computing them all upfront.",
    whenToUse:
      "To generate sequences on demand (pagination, infinite values) without keeping everything in memory at once.",
    avoidWhen:
      "For simple transformations of arrays that already exist, array methods (`map`/`filter`) are more direct than a generator.",
  },
  // React
  "react-components-jsx": {
    name: "Components & JSX",
    stats: [
      "UI declared as functions that return JSX",
      "JSX compiles to `React.createElement`",
      "Components are reusable and composable",
    ],
    passive:
      "A React component is a function that receives props and returns JSX describing what should appear on screen. JSX looks like HTML, but it's JavaScript - that's why you can use `{}` to embed expressions.",
    whenToUse:
      "For any piece of UI you want to reuse or isolate - it's the basic unit of a React app.",
    avoidWhen:
      "Don't split UI into separate components so small and specific that they'll never be reused - that just adds indirection.",
  },
  "react-props": {
    name: "Props",
    stats: [
      "Way to pass data from a parent component to a child",
      "Read-only - the child must not modify them",
      "Typed with TypeScript for clear contracts",
    ],
    passive:
      "Props (properties) are a component's 'parameters'. They flow in a single direction, from parent to child, and any change to them must come from outside, not from within the component itself.",
    whenToUse:
      "Any time a component needs data or behavior defined by whoever uses it.",
    avoidWhen:
      "Avoid passing many loose props when they form a cohesive object - group them into a single object prop.",
  },
  "react-conditional-rendering": {
    name: "Conditional Rendering",
    stats: [
      "`&&` renders something only when a condition is true",
      "Ternary (`? :`) picks between two elements",
      "`return null` renders nothing",
    ],
    passive:
      "Since JSX is just JavaScript, any conditional expression can decide what to render: `&&` shows the right-hand element only if the condition is true, the ternary picks between two elements, and returning `null` makes the component render nothing.",
    whenToUse:
      "Ternary when there are two visual alternatives; `&&` when there's only a 'show it or nothing' case; early return at the top of the component for guard clauses.",
    avoidWhen:
      "Avoid `&&` with numbers that can be `0` (e.g. `{contador && <Badge />}`) - `0` gets rendered literally on screen instead of nothing.",
  },
  "react-event-handling": {
    name: "Event Handling",
    stats: [
      "Handlers in camelCase (`onClick`, `onChange`)",
      "Receive a SyntheticEvent, with the same API as the native event",
      "Pass a function, not the result of calling it",
    ],
    passive:
      "Events in JSX are camelCase attributes that take a function. React uses its own event system (SyntheticEvent) that behaves consistently across browsers, but with the same API you already know (`event.target`, `event.preventDefault()`).",
    whenToUse:
      "To react to any user interaction: clicks, typing, form submission, scrolling.",
    avoidWhen:
      "Don't call the function directly in JSX (`onClick={fazerAlgo()}`) - that runs it during render, not on click. Pass the reference (`onClick={fazerAlgo}`) or an arrow function.",
  },
  "react-usestate": {
    name: "useState",
    stats: [
      "Adds local state to a function component",
      "Re-renders the component when the state changes",
      "Each `setState` call is independent from the others",
    ],
    passive:
      "`useState` returns a pair: the current state value and a function to update it. Calling the update function schedules a new render of the component with the updated value.",
    whenToUse:
      "When a component needs to 'remember' a value across renders and react to changes in it (inputs, toggles, counters).",
    avoidWhen:
      "Don't duplicate in state a value that can be derived from props or other state - compute it at render time instead.",
  },
  "react-list-keys": {
    name: "Lists & Key",
    stats: [
      "Renders data collections with `.map`",
      "The `key` prop helps React identify each item across renders",
      "Avoids state 'leaking' between reordered items",
    ],
    passive:
      "To render a list, you map an array of data to an array of JSX elements. The `key` prop must be a stable, unique identifier for each item - without it, React can confuse items when reordering, inserting, or removing them.",
    whenToUse:
      "Any time you render a list of items coming from an array - use a stable id from the data as the `key`.",
    avoidWhen:
      "Avoid using the array index as `key` if the list can be reordered, filtered, or have items inserted in the middle.",
  },
  "react-useref": {
    name: "useRef",
    stats: [
      "Holds a mutable value that doesn't cause a re-render when it changes",
      "Accesses a DOM element directly",
      "Keeps a value across renders without triggering a new render",
    ],
    passive:
      "`useRef` returns an object with a `.current` property that can be freely read and changed without causing a new render. It's used both to hold a reference to a DOM element and to store any mutable value across renders.",
    whenToUse:
      "To access a DOM element directly (focus, measure size, scroll) or hold a value that changes but shouldn't cause a re-render (like a timer id).",
    avoidWhen:
      "Don't use `useRef` for data the UI needs to visually reflect - changes to `.current` don't trigger a render; use `useState` for that.",
  },
  "react-controlled-forms": {
    name: "Controlled Forms",
    stats: [
      "The input's value lives in React state, not in the DOM",
      "`value` + `onChange` keep both in sync",
      "Lets you validate or transform the value on every keystroke",
    ],
    passive:
      "In a controlled form, each field's value is stored in the component's state (`useState`) and passed back to the input via the `value` prop. `onChange` updates that state on every keystroke, making React the single source of truth for the current value.",
    whenToUse:
      "When you need to validate, format, or react to the input's value on every keystroke, or keep it in sync with other parts of the UI.",
    avoidWhen:
      "For simple, large forms with no need for real-time validation, uncontrolled inputs (`useRef` + `defaultValue`) require fewer re-renders.",
  },
  "react-useeffect": {
    name: "useEffect",
    stats: [
      "Syncs the component with external systems (API, DOM, timers)",
      "Runs after rendering, not during",
      "A cleanup function avoids memory leaks",
    ],
    passive:
      "`useEffect` runs a side effect after the component renders, and can return a 'cleanup' function that runs before the next effect or when the component unmounts. The dependency array controls when the effect runs again.",
    whenToUse:
      "To sync with something outside React: API requests, subscriptions, timers, direct DOM manipulation.",
    avoidWhen:
      "Don't use `useEffect` to compute values derived from props/state - that can be done directly in the component body or with `useMemo`.",
  },
  "react-uselayouteffect": {
    name: "useLayoutEffect",
    stats: [
      "Runs synchronously, before the browser paints the screen",
      'Avoids the visual "flash" of a regular useEffect',
      "Used almost always to measure or adjust the DOM",
    ],
    passive:
      "`useLayoutEffect` has the same signature as `useEffect`, but runs synchronously right after React updates the DOM and before the browser paints the screen - useful when the effect needs to measure or adjust something visually before the user sees any flash.",
    whenToUse:
      "When the effect measures or changes the DOM layout and needs to happen before the next paint, to avoid a noticeable visual flash.",
    avoidWhen:
      "For most effects (requests, subscriptions, logs), `useEffect` is enough and doesn't block screen painting.",
  },
  "react-error-boundaries": {
    name: "Error Boundaries",
    stats: [
      "Catches rendering errors in the child component tree",
      "Shows a fallback UI instead of crashing the whole app",
      "Only exists as a class component - there's no hook equivalent",
    ],
    passive:
      "An Error Boundary is a component that implements `componentDidCatch`/`getDerivedStateFromError` to catch errors thrown while rendering its child components, showing a fallback UI instead of letting the whole app crash.",
    whenToUse:
      "Around isolated parts of the UI where a rendering error shouldn't take down the whole application (a widget, a chart, a third-party section).",
    avoidWhen:
      "Error boundaries don't catch errors in event handlers, asynchronous code, or in the boundary itself - for those cases, handle the error with a regular `try/catch`.",
  },
  "react-usememo-usecallback": {
    name: "useMemo & useCallback",
    stats: [
      "`useMemo` memoizes the result of a calculation",
      "`useCallback` memoizes a function's reference",
      "Avoid unnecessary recomputations and re-renders",
    ],
    passive:
      "Both take a function and a dependency array, recalculating the value only when the dependencies change. `useMemo` stores the returned value; `useCallback` stores the function itself, useful to avoid breaking memoization in child components (`React.memo`).",
    whenToUse:
      "When a calculation is provably expensive, or when passing a stable function avoids re-renders in memoized child components.",
    avoidWhen:
      "Don't memoize everything by default - it has a memory/comparison cost, and in most simple components it brings no measurable gain.",
  },
  "react-react-memo": {
    name: "React.memo",
    stats: [
      "Avoids re-rendering a component if its props haven't changed",
      "Does a shallow comparison of props by default",
      "Only helps if the parent component re-renders frequently",
    ],
    passive:
      "`React.memo` wraps a component and makes React skip its render if the received props are shallowly equal to the previous render's. Combined with `useCallback`/`useMemo` in the parent, it avoids unnecessary work in large lists or expensive components.",
    whenToUse:
      "In components that render frequently (lists, grids) and receive the same props most of the time.",
    avoidWhen:
      "Don't wrap every component in `React.memo` by default - the props comparison also has a cost, and without a parent re-rendering a lot, there's no real gain.",
  },
  "react-lazy-suspense": {
    name: "Code Splitting (lazy + Suspense)",
    stats: [
      "Loads a component only when it's actually needed",
      "Reduces the application's initial bundle size",
      "`Suspense` defines what to show while the component loads",
    ],
    passive:
      "`React.lazy` turns a dynamic `import()` into a component that React only loads the first time it's rendered. Since that loading is asynchronous, you need to wrap the component in `<Suspense>`, which shows a fallback while the code is still being downloaded.",
    whenToUse:
      "For pages or large components that aren't needed on initial load (routes, modals, inactive tabs).",
    avoidWhen:
      "Not worth it for small components - the extra bundle split can cost more in requests than it saves in size.",
  },
  "react-context": {
    name: "Context API",
    stats: [
      "Shares data between components without manually passing props",
      "Avoids 'prop drilling' in deep trees",
      "Any component inside the Provider can consume the value",
    ],
    passive:
      "Context creates a data channel that any descendant component can read with `useContext`, without every intermediate level needing to pass the prop along. A `Provider` sets the value for its entire subtree.",
    whenToUse:
      "For data that is truly global to the component tree (theme, authenticated user, language) consumed at many different levels.",
    avoidWhen:
      "Don't use Context for state that only two or three nearby components need - plain props solve it with less complexity.",
  },
  "react-usereducer": {
    name: "useReducer",
    stats: [
      "Centralizes state update logic in a reducer function",
      "Alternative to `useState` for complex states with multiple transitions",
      "Same idea as Redux, just local to a component",
    ],
    passive:
      "`useReducer` holds the state and delegates all the logic for how it changes to a reducer function `(state, action) => newState`. Instead of several scattered `setState` calls, you dispatch named actions and every transition stays centralized in one place.",
    whenToUse:
      "When a state has several related, complex transitions, or when the next update depends on which 'action' occurred, not just the previous value.",
    avoidWhen:
      "For simple state (a boolean, a string), `useState` is more direct - `useReducer` adds ceremony that only pays off in more complex cases.",
  },
  "react-compound-components": {
    name: "Compound Components",
    stats: [
      "Several components that work together sharing implicit state",
      "Declarative, flexible API, like HTML's `<select><option>`",
      "Shares state via Context without exposing it in props",
    ],
    passive:
      "In the compound components pattern, a 'parent' component holds the state and shares it implicitly (usually via Context) with related 'child' components, which together form a declarative API - like `<Tabs><Tab /><Tab /></Tabs>` instead of a single giant config prop.",
    whenToUse:
      "When building reusable UI components with multiple related parts (tabs, accordions, menus) that need to share state without a giant props API.",
    avoidWhen:
      "For a simple, single-piece component, this pattern adds Context and indirection without need.",
  },
  "react-custom-hooks": {
    name: "Custom Hooks",
    stats: [
      "Extracts stateful logic into reusable functions",
      "Composed from native hooks (useState, useEffect...)",
      "Naming convention: always starts with `use`",
    ],
    passive:
      "A custom hook is simply a function that uses other hooks internally, allowing you to reuse stateful logic across several components without repeating code or creating extra components just for that.",
    whenToUse:
      "When the same stateful/effect logic repeats across more than one component, or when you want to isolate complex logic away from the JSX.",
    avoidWhen:
      "Don't create a custom hook for a single line of logic used in only one place - that's indirection without benefit.",
  },
  "react-render-props": {
    name: "Render Props",
    stats: [
      "Shares logic by passing a function as a prop/children",
      "The component decides WHAT to render with the provided data",
      "Predates custom hooks as a way to reuse stateful logic",
    ],
    passive:
      "In the render props pattern, a component receives a function (usually via `children` or a prop called `render`) and calls it passing some internal state, letting whoever uses the component decide exactly how to render that state.",
    whenToUse:
      "To share stateful logic between components with completely different UIs - nowadays, in most cases, a custom hook solves the same problem more simply.",
    avoidWhen:
      "If the logic doesn't depend on rendering something different each time, a custom hook is more direct and avoids the extra JSX nesting.",
  },
  "react-forwardref": {
    name: "forwardRef",
    stats: [
      "Lets a component receive a `ref` and forward it to an inner element",
      "By default, function components don't accept `ref` directly",
      "Essential when building reusable UI components (inputs, buttons)",
    ],
    passive:
      "Function components don't receive `ref` as a regular prop - `forwardRef` fixes that, letting a component forward the `ref` it receives from outside to a specific DOM element inside it, like the real `<input>` behind a custom `Campo` component.",
    whenToUse:
      "When creating reusable UI components (inputs, buttons, cards) that whoever uses them might need to reference directly, as they would with the native HTML element.",
    avoidWhen:
      "If nobody outside the component needs direct access to its internal DOM, `forwardRef` is indirection without need.",
  },
  // Tailwind
  "tw-spacing": {
    name: "Spacing (Margin & Padding)",
    stats: [
      "`p-` controls padding, `m-` controls margin",
      "t/r/b/l/x/y suffixes target a specific side or axis",
      "Consistent numeric scale (4 = 1rem, 2 = 0.5rem...)",
    ],
    passive:
      "Tailwind uses a spacing scale based on multiples of 0.25rem: `p-4` is 1rem of padding on every side. Suffixes like `px-`, `py-`, `mt-`, `mb-` apply spacing only on the indicated axis or side, and negative values (`-mt-2`) create negative margins.",
    whenToUse:
      "For any spacing between or inside elements - it's the most used class in everyday Tailwind.",
    avoidWhen:
      "Avoid stacking margin excessively to align complex layouts - for that, flexbox/grid with `gap-` tends to be more predictable.",
  },
  "tw-sizing": {
    name: "Sizing (Width & Height)",
    stats: [
      "`w-` and `h-` control width and height",
      "Fractional (`w-1/2`) and viewport (`w-screen`) values",
      "`max-w-`/`min-h-` constrain without fixing the exact size",
    ],
    passive:
      "`w-` and `h-` accept values from the spacing scale, fractions (`w-1/3`), keywords (`w-full`, `h-screen`), or arbitrary values in brackets. `max-w-` and `min-w-` (and their height counterparts) set limits without locking the size to a fixed value.",
    whenToUse:
      "To control the size of any element, especially responsive containers (`max-w-` + `mx-auto`).",
    avoidWhen:
      "Avoid `w-screen` inside containers that already have controlled horizontal scroll - it ignores the parent's padding and can overflow the width.",
  },
  "tw-colors": {
    name: "Colors & Opacity",
    stats: [
      "`bg-`, `text-`, `border-` apply color to background, text, and border",
      "Scale from 50 to 950 per hue (`blue-500`)",
      "`/opacity` modifier directly on the class (`bg-black/50`)",
    ],
    passive:
      "Every color in Tailwind's palette comes in an intensity scale (50 = almost white, 950 = almost black). The opacity modifier with `/` (`bg-blue-500/30`) applies transparency without needing a separate RGBA color.",
    whenToUse:
      "To apply any background, text, or border color consistently with a predefined palette.",
    avoidWhen:
      "Avoid hardcoding the exact same color repeated in dozens of places with no pattern - prefer theme tokens (`@theme`) for colors that represent a role (e.g., danger, success).",
  },
  "tw-typography": {
    name: "Typography",
    stats: [
      "`text-` controls font size",
      "`font-` controls weight (bold, medium, semibold...)",
      "`tracking-`/`leading-` adjust letter/line spacing",
    ],
    passive:
      "Typography classes cover size (`text-sm` to `text-9xl`), weight (`font-light` to `font-black`), alignment (`text-center`), letter spacing (`tracking-wide`), and line height (`leading-relaxed`).",
    whenToUse:
      "For any text in the interface - it's the foundation of a consistent visual hierarchy.",
    avoidWhen:
      "Avoid mixing too many different font sizes on the same screen - define a short scale and reuse it.",
  },
  "tw-flexbox": {
    name: "Flexbox",
    stats: [
      "`flex` activates the flexible container",
      "`items-`/`justify-` align on the cross and main axes",
      "`gap-` spaces children without manual margin",
    ],
    passive:
      "`flex` turns the element into a flexbox container. `flex-row`/`flex-col` sets the direction, `items-center`/`justify-between` align the children, and `gap-` adds uniform spacing between them without needing margin on each child.",
    whenToUse:
      "To align elements in a row or column, distribute space between them, or center content - the most common everyday layout.",
    avoidWhen:
      "For two-dimensional grids (rows AND columns controlled together), `grid` tends to be more direct than flexbox with wrap.",
  },
  "tw-grid": {
    name: "Grid",
    stats: [
      "`grid` + `grid-cols-` defines columns",
      "`col-span-`/`row-span-` make an item span more space",
      "Controls two-dimensional layout (rows and columns together)",
    ],
    passive:
      "`grid-cols-3` splits the container into 3 equal-width columns. Child items can use `col-span-2` to span multiple columns, and `gap-` spaces both rows and columns at once.",
    whenToUse:
      "For card grids, dashboards, or any layout where rows and columns need to align together.",
    avoidWhen:
      "For a single axis of alignment (a toolbar of buttons, for example), flexbox is simpler than grid.",
  },
  "tw-position": {
    name: "Positioning",
    stats: [
      "`relative`/`absolute`/`fixed`/`sticky` control the positioning mode",
      "`top-`/`right-`/`bottom-`/`left-`/`inset-` position the element",
      "`z-` controls the stacking order",
    ],
    passive:
      "`absolute` positions the element relative to the nearest ancestor with `relative` (or `absolute`/`fixed`). `inset-0` is a shortcut for `top-0 right-0 bottom-0 left-0`. `z-` resolves which element sits on top when they overlap.",
    whenToUse:
      "For badges over elements, modals, tooltips, fixed headers - anything that needs to leave the normal layout flow.",
    avoidWhen:
      "Don't use `absolute` for general page layouts - it removes the element from the flow and tends to cause overlap bugs; prefer flexbox/grid.",
  },
  "tw-display-overflow": {
    name: "Display & Overflow",
    stats: [
      "`hidden`/`block`/`inline-block` control the display type",
      "`overflow-hidden`/`overflow-auto` control content that overflows",
      "`truncate` cuts long text with an ellipsis",
    ],
    passive:
      "`display` controls how an element participates in the layout flow (`block`, `inline`, `hidden`, etc.). `overflow-` controls what happens when content is bigger than the container - hide, scroll, or spill out. `truncate` is a shortcut that combines `overflow-hidden`, `text-ellipsis`, and `whitespace-nowrap`.",
    whenToUse:
      "`overflow-auto`/`overflow-y-auto` for controlled scroll areas; `truncate` for unpredictable-length text in fixed spaces (cards, tables).",
    avoidWhen:
      'Avoid `overflow-hidden` to "fix" a layout bug without understanding the cause - it only hides the symptom, the content is still bigger than it should be.',
  },
  "tw-states": {
    name: "Pseudo-classes (hover, focus...)",
    stats: [
      "Prefixes like `hover:`, `focus:`, `active:`, `disabled:`",
      "`group-hover:` reacts to hover on an ancestor marked with `group`",
      "Any utility can be conditioned on a state",
    ],
    passive:
      "Prefixing any class with a state (`hover:bg-blue-700`) applies that style only when the condition is true. `group` on the parent element + `group-hover:` on the child lets hovering over one element change the style of another inside it.",
    whenToUse:
      "For visual feedback on interactions: hover on buttons/cards, focus on inputs, disabled states.",
    avoidWhen:
      "Don't rely solely on `hover:` for important information - touchscreens have no hover, make sure the information is also accessible without it.",
  },
  "tw-responsive": {
    name: "Responsive Breakpoints",
    stats: [
      "Prefixes `sm:`, `md:`, `lg:`, `xl:`, `2xl:`",
      "Mobile-first approach: the unprefixed class applies to all sizes",
      "Each prefix applies 'from that breakpoint upward'",
    ],
    passive:
      "Tailwind is mobile-first: an unprefixed class (`flex-col`) applies by default, and a prefix like `md:flex-row` overrides it from that screen width upward. There's no prefix for 'only up to' a size - you always think 'from here onward'.",
    whenToUse:
      "Any time the layout needs to adapt to different screen sizes - start by thinking mobile and add prefixes for larger screens.",
    avoidWhen:
      "Avoid stacking too many prefixes on the same class (`sm: md: lg: xl:` all different) - if the pattern changes a lot at every breakpoint, consider rethinking the layout.",
  },
  "tw-dark-mode": {
    name: "Dark Mode",
    stats: [
      "The `dark:` prefix applies styles only in dark theme",
      "Can follow the system preference or be controlled manually",
      "Works together with any other prefix (`dark:hover:bg-slate-700`)",
    ],
    passive:
      "The `dark:` prefix applies the class only when dark mode is active - either via the operating system's preference (`prefers-color-scheme`) or, by configuring `darkMode: 'class'`, via a `dark` class manually added to `<html>` for user-controlled toggling.",
    whenToUse:
      "In any project that needs to support light and dark themes without duplicating entire stylesheets.",
    avoidWhen:
      "Don't forget to test contrast in both themes - a color that works well in light mode can become illegible in dark mode without the matching `dark:` pair.",
  },
  "tw-borders-shadows": {
    name: "Borders, Radius & Shadows",
    stats: [
      "`border`/`border-` set border thickness and color",
      "`rounded-` controls the corner radius",
      "`shadow-` applies predefined shadows (sm to 2xl)",
    ],
    passive:
      "`border` adds a 1px border by default; `border-2`, `border-dashed`, etc. adjust thickness and style. `rounded-` ranges from subtle corners (`rounded-sm`) to fully circular (`rounded-full`). `shadow-` applies visual elevation with predefined shadows.",
    whenToUse: "To give shape and depth to cards, buttons, inputs, and modals.",
    avoidWhen:
      "Avoid stacking several strong shadows on the same screen - that removes the visual hierarchy the shadow is supposed to create.",
  },
  "tw-transitions-animations": {
    name: "Transitions & Animations",
    stats: [
      "`transition` enables smooth interpolation of properties",
      "`duration-`/`ease-` control speed and curve",
      "`animate-` applies ready-made animations (spin, pulse, bounce)",
    ],
    passive:
      "`transition` (or `transition-colors`, `transition-transform`, etc.) makes CSS properties change smoothly instead of instantly, usually combined with a state (`hover:`). `animate-` applies Tailwind's built-in keyframes, like `animate-spin` for loaders.",
    whenToUse:
      "To smooth out any visual state change (hover, open/close) and give loading feedback (`animate-spin`/`animate-pulse`).",
    avoidWhen:
      "Avoid animating `width`/`height`/`top` directly - they're expensive for the browser to recalculate; prefer `transform` and `opacity` when possible.",
  },
  "tw-arbitrary-values": {
    name: "Arbitrary Values",
    stats: [
      "Brackets `[]` accept any valid CSS value",
      "Escapes the default scale without leaving Tailwind",
      "Works on practically any utility (`w-`, `bg-`, `top-`...)",
    ],
    passive:
      "When Tailwind's default scale doesn't have the exact value you need, the `property-[value]` notation accepts any literal CSS value - a specific pixel, a hex color, even a `calc()` expression.",
    whenToUse:
      "For the one-off case where no default scale value fits - an exact pixel coming from a design, a specific brand color.",
    avoidWhen:
      "If you're using the same arbitrary value repeatedly, that's a sign it should become a theme token (`@theme`) instead of staying scattered in brackets.",
  },
  "tw-theme-config": {
    name: "Customizing the Theme (@theme)",
    stats: [
      "Defines the project's own colors, fonts, and spacing",
      "Automatically generates new utilities (`bg-brand`, `font-display`)",
      "Centralizes design decisions in one place",
    ],
    passive:
      "In Tailwind v4, the `@theme` block in CSS declares design tokens as variables (`--color-brand: #...`), and Tailwind automatically generates the corresponding utility classes (`bg-brand`, `text-brand`). This replaces the need to edit `tailwind.config.js` in earlier versions.",
    whenToUse:
      "When the design has its own colors, fonts, or spacing that repeat throughout the project - centralize them instead of repeating loose values.",
    avoidWhen:
      "Don't create a theme token for a value used only once - that's better solved with arbitrary values (`[value]`).",
  },
  "tw-apply-components": {
    name: "@apply & Componentization",
    stats: [
      "`@apply` groups several utility classes into a single CSS class",
      "Useful for styles repeated in many places",
      "In React, extracting a component is usually preferable",
    ],
    passive:
      "`@apply` lets you write a traditional CSS class that applies a set of Tailwind utilities underneath, reducing repetition in plain HTML. In component frameworks (like React), it's usually more common to extract a reusable component than to use `@apply`, since the component also encapsulates behavior, not just style.",
    whenToUse:
      "`@apply` in projects without componentization (plain HTML/CSS, or classes repeated across many non-React files); in React, prefer extracting a component.",
    avoidWhen:
      "Don't overuse `@apply` in a React project - that recreates the problem Tailwind solves (CSS separated from markup) without the benefit of a truly reusable component.",
  },
};
