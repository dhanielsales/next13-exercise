### Geral

Client Components
- Posso usar tudo do React, Suspense, Lazy, Context, Hooks, onClick
- Não pode importar Server Components em Client Components

Server Components 
- Posso importar Client Components em Server Components
- Não posso usar nada do React, Suspense, Lazy, Context, Hooks, onClick
- cookies()
- headers()
- extended fetch()
- draftMode
  - https://nextjs.org/docs/app/building-your-application/configuring/draft-mode

### /app

- Server Fetching
- Client Fetching
- Server Actions
  - https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions
- Files
  - loading.tsx
  - error.tsx
  - actions.js
  - layout.tsx
    - useSelectedLayoutSegment or useSelectedLayoutSegments novos hooks para interação com o layout
  - page.tsx
  - route.ts
    - https://nextjs.org/docs/app/api-reference/file-conventions/route
    - Context
- Params
- Groups
- Middleware
- Intercepting Routes (Nao fiz exemplo)
  - Mudança de URL a partir de uma ação, para poder aplicar em server componentes
  - Exemplo: Um modal de expandir imagem, mudar a URL tbm para uma outra url, dessa forma essa URL pode ser compartilhada e já abrir o modal diretamente pré processando todo o layout e pagina e cacheando

### React 18
- Suspense
  - {/* @ts-expect-error Async Server Component */}
- experimental_useFormStatus experimental_useOptimistic
  - Server Actions só ficará legal depois desses caras estarem 100%

### Old Ways
Static Site Generation (SSG)
- Todos os Server Components já são assim se não tiverem nenhuma Props ou Action Dinamica, mas diferente de antes, não posso usar nada do React, Suspense, Lazy, Context, Hooks, onClick
- É possível fazer com Client Components, mas se não usar nada de Server, como Server Actions, só pode ter comunicação externa da maneira antiga, Cliente fetch e React Query

Server-Side Rendering (SSR)
- Todos os Server Components já são assim caso não sejam SSG, mas diferente de antes, não posso usar nada do React, Suspense, Lazy, Context, Hooks, onClick

Incremental Static Re-generation (ISR)
- Somente com Server Components, mas diferente de antes, não posso usar nada do React, Suspense, Lazy, Context, Hooks, onClick, só a partir de algum filho que seja Client Component, mas da mesma maneira antiga, Cliente fetch e React Query
- É baseado nas configurações do fetch (Não é possivel com Axios)
```ts
  const res = await fetch(url, {
    cache: "no-store",
  });

  const res = await fetch(url, {
    next: {
      revalidate: 60, // Seconds
    }
  });
```

- Outra maneira é usando configurações na pagina (`layout.tsx / page.tsx / route.ts`)
```ts
export const dynamic = 'auto'; // 'auto' (Default) | 'force-dynamic' | 'error' | 'force-static'

// 'auto' = Default way - Sempre ira fazer cache, mas nao no refresh completo

// 'force-dynamic' = Sem cache, equivalente a 'cache: "no-store"' ou 'next: { revalidate: 0 }' no fetch 

// 'error' = Sempre fará cache, mas ficará revalidando e caso de erro fará throw de erro

// 'force-static' = Sempre fará cache, mas não ficará revalidando mesmo que tenha erro
```

- Outra maneira é usando configurações na pagina (`layout.tsx / page.tsx / route.ts`)
```ts
export const revalidate = false; // false (Default) | 'force-cache' | 0 | number

// Equivalente ao 
// const res = await fetch(url, {
//   next: {
//     revalidate: 60, // Seconds
//   }
// });
```

### Duvidas e Receios
- Suspense com erro
  - Como é em server components?
  - Como é em client components?
- Como vai ficar o cache de tudo e a autenticação? vai ficar cacheada? 
