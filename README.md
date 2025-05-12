# Volaré - Espanhol para Aviação

Landing page para o curso de espanhol técnico para aviação, desenvolvida com 11ty, Tailwind CSS e Alpine.js.

## 🚀 Tecnologias

- [11ty](https://www.11ty.dev/) - Static Site Generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework
- [Vite](https://vitejs.dev/) - Build tool and dev server

## 📋 Pré-requisitos

- Node.js ≥ 18
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/volare-web.git
   cd volare-web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

O site estará disponível em `http://localhost:5173`.

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Gera a versão otimizada para produção
- `npm run serve` - Serve a versão de produção localmente
- `npm run clean` - Remove arquivos gerados

## 🏗️ Estrutura do Projeto

```
├── src/
│   ├── _includes/      # Componentes reutilizáveis
│   │   ├── layouts/    # Templates base
│   │   └── partials/   # Partes da página
│   ├── assets/
│   │   ├── css/        # Estilos
│   │   ├── js/         # Scripts
│   │   └── images/     # Imagens
│   └── index.njk       # Página principal
├── .eleventy.js        # Configuração do 11ty
├── vite.config.js      # Configuração do Vite
└── tailwind.config.js  # Configuração do Tailwind
```

## 🎨 Customização

### Cores

As cores do projeto podem ser personalizadas no arquivo `tailwind.config.js`. 
O tema atual usa uma paleta de azuis (`primary`) e roxos (`secondary`).

### Fontes

O projeto utiliza as fontes:
- Inter (sans-serif)
- Montserrat (display)

Você pode alterar as fontes no arquivo `tailwind.config.js` e atualizar os links no template base.

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Mobile (≥ 320px)
- Tablet (≥ 768px)
- Desktop (≥ 1024px)

## 🚀 Deploy

O site pode ser facilmente implantado em serviços como:
- Vercel
- Netlify
- GitHub Pages

Basta configurar o comando de build como `npm run build` e o diretório de saída como `dist/`.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

1. Faça o fork do projeto
2. Crie sua branch de feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
