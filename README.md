# D!XPERIENCE

Landing page institucional em inglês, feita com Next.js App Router e TypeScript.

## Desenvolvimento local

Use Node.js 24. Se tiver o nvm instalado, execute `nvm use` na raiz do projeto.

```sh
npm ci
npm run dev
```

A página abre em [localhost:3000](http://localhost:3000). Para validar os tipos e gerar a versão de produção, execute `npm run typecheck` e `npm run build`.

## Vercel

Importe o repositório com a raiz do projeto como **Root Directory** e mantenha o preset **Next.js**. O projeto declara Node.js 24 e funciona sem variáveis de ambiente. Depois de validar o URL do deploy, adicione um domínio no painel da Vercel se quiser usá-lo na publicação final.

Os serviços, produtos e links de contacto ficam em [app/content.ts](app/content.ts). A animação e os elementos da marca ficam em [public/brand](public/brand). O vídeo usa uma imagem de capa e respeita a preferência de movimento reduzido.
