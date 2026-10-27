# Base para novo site

Base mínima com Next.js (App Router), React, TypeScript e Tailwind CSS 4. Sem identidade visual, imagens, analytics ou credenciais. A página inicial contém apenas um texto provisório.

## Começar

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. Edite `src/app/page.tsx` para montar a página inicial.

## Estrutura

```text
public/
  fonts/                 Fontes locais
  images/                Imagens do novo site
src/
  app/
    globals.css          Estilos globais e tema
    layout.tsx           Layout, idioma e metadados
    not-found.tsx        Página 404
    page.tsx             Página inicial
  components/
    sections/            Seções do site
    ui/                  Componentes reutilizáveis
  content/               Textos e dados
  lib/                   Funções utilitárias
  types/                 Tipos TypeScript
eslint.config.mjs
next.config.ts
postcss.config.mjs
tsconfig.json
package.json
package-lock.json
```

## Verificação e produção

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Personalize título e descrição em `src/app/layout.tsx` e cores/fontes em `src/app/globals.css`. Crie `.env.local` somente se o novo site precisar de variáveis de ambiente.

As pastas vazias têm `.gitkeep` para serem preservadas pelo Git.
