# Site Teknobrax — Sistema Digital

React + Vite + Tailwind CSS v4, pronto pra Hostinger.

## Rodar no PC

```bash
npm install
npm run dev
```

## Publicar na Hostinger

```bash
npm run build
```

Suba **todo o conteúdo da pasta `dist/`** para o `public_html` (inclui o `contato.php` do formulário).
O site usa caminhos relativos (`base: './'`), então funciona direto na raiz ou numa subpasta.

## Onde editar

| O quê | Arquivo |
|---|---|
| Textos, telefones, WhatsApp, endereço, redes | `src/data/site.js` |
| Cores e fontes da marca | `src/index.css` (bloco `@theme`) |
| E-mail que recebe o formulário | `public/contato.php` |
| Seções | `src/components/*.jsx` |

**Cores:** laranja `#FF5903` (logo/posts), laranja do app `#E44F19`, marrom `#5B2714`, dourado `#B8862B`, fundos creme/pêssego.

## Imagens (placeholders)

Salve cada arquivo em `public/images/` com **exatamente** este nome. Enquanto o arquivo não existir, o site mostra um placeholder listrado com o nome esperado.

| Arquivo | Onde aparece | Formato sugerido |
|---|---|---|
| `logo-teknobrax.png` | Logo com asas (rodapé) | PNG transparente, oficial |
| `logo-teknobrax-horizontal.png` | Logo "Sistema de Câmeras" (menu) | PNG transparente, oficial |
| `hero.jpg` | Foto principal do topo | 1600×1200, equipe ou instalação |
| `app-destaque.png` | Celular do bloco "Novidade · App" | Print da tela inicial (9:19.5) |
| `app-01-acesso.png` … `app-06-explore.png` | Celular do tutorial em 6 passos | Prints do app (9:19.5) |
| `solucao-cameras.jpg`, `solucao-alarme.jpg`, `solucao-facial.jpg`, `solucao-interfone.jpg`, `solucao-cerca.jpg`, `solucao-acesso.jpg` | Cards de soluções | 1200×750 |
| `equip-central-alarme.png`, `equip-camera.png`, `equip-leitor-facial.png`, `equip-sensor.png`, `equip-dvr.png` | Vitrine laranja de equipamentos | PNG **sem fundo** |
| `sobre-equipe.jpg`, `sobre-detalhe.jpg` | Seção Sobre | 1000×1250 e 600×600 |
| `segmento-01.jpg` … `segmento-04.jpg` | Condomínios, Residências, Comércio, Indústrias | 1200×900 |
| `clientes/cliente-01.png` … `cliente-06.png` | Logos de clientes | PNG transparente |

> `logo-teknobrax-TEMP.png` é um recorte tirado do vídeo, só pro protótipo. Apague quando colocar o oficial.

## Pendências (TODO no código)

- Confirmar qual número é o WhatsApp oficial (`src/data/site.js`)
- E-mail de contato e remetente do formulário (`site.js` e `contato.php`)
- Links do Instagram/Facebook
- Link do vídeo tutorial no botão "Assistir tutorial"
