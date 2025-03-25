# 🚀 Frontend001 - Aplicação de Autenticação

## 📋 Sobre o Projeto

Este é um projeto frontend desenvolvido em React que implementa um sistema de autenticação completo. A aplicação segue as melhores práticas de desenvolvimento e utiliza tecnologias modernas para criar uma experiência de usuário agradável e segura.

## 🛠️ Tecnologias Utilizadas

- React 18
- TypeScript
- React Router v6
- Styled Components
- Axios
- Local Storage

## 📦 Estrutura do Projeto

```bash
src/
├── components/       # Componentes reutilizáveis
├── contexts/         # Contextos React
├── pages/           # Páginas da aplicação
├── services/        # Serviços e APIs
├── types/           # Tipos TypeScript
├── styles/          # Estilos globais
└── App.tsx          # Componente principal
```

## 📋 Padrões de Desenvolvimento

- TypeScript para tipagem estática
- Styled Components para estilização
- React Router v6 para navegação
- Componentes funcionais com hooks
- Separação clara de responsabilidades
- Código limpo e organizado

## 🚀 Iniciando o Projeto

1. Clone o repositório:

```bash
git clone [URL_DO_REPOSITORIO]
```

2.Entre na pasta do projeto:

```bash
cd frontend001
```

3.Instale as dependências:

```bash
npm install
```

1. Inicie o servidor de desenvolvimento:

```bash
npm start
```

1. Acesse a aplicação em `http://localhost:3000`

## 🏗️ Build da Aplicação

Para criar uma versão de produção da aplicação:

```bash
npm run build
```

Isso criará uma pasta `build/` com todos os arquivos otimizados para produção.

## 📦 Deploy

Para deploy em um servidor web, você pode:

1. Copiar os arquivos da pasta `build/` para seu servidor web
2. Certifique-se que seu servidor está configurado para servir arquivos estáticos

## 🛠️ Configuração do Backend

O projeto espera que o backend esteja rodando em `http://localhost:3000`. Certifique-se de que:

1. O backend esteja configurado corretamente
2. As rotas de autenticação estejam disponíveis em `/api/auth`
3. O CORS esteja configurado para permitir requisições do frontend

## 📝 Observações

- O projeto utiliza Local Storage para persistência de dados de autenticação
- As rotas são protegidas usando o contexto de autenticação
- A aplicação segue o padrão de componentização do React
- Os componentes são reutilizáveis e independentes

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📝 Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
