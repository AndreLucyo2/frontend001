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

## Build de Produção

Para realizar o build de produção e iniciar o projeto, siga os passos abaixo:

### 1. Build Manual

```bash
# Limpa o diretório dist
npm run build:clean

# Realiza o build de produção
npm run build:prod

# Copia os arquivos para o diretório dist
npm run build:copy
```

### 2. Build Automático

Para facilitar o processo, foi criado um arquivo batch que executa todos os passos automaticamente:

1. Execute o arquivo [build-and-start.bat](cci:7://file:///f:/ID02SSDExt/AlsDev/WS-IA/projeto-IA-001/frontend001/build-and-start.bat:0:0-0:0) (duplo clique)
2. O script irá:
   - Limpar o diretório dist
   - Realizar o build de produção
   - Copiar os arquivos para o diretório dist
   - Iniciar o servidor de desenvolvimento

### Estrutura do Build

Após o build, a estrutura será:

```bash
frontend001/
├── dist/              # Diretório de produção
│   ├── index.html
│   ├── static/
│   └── ...           # Outros arquivos de produção
├── build/            # Diretório temporário do build
└── src/             # Código fonte
```

### Observações

- O arquivo [build-and-start.bat](cci:7://file:///f:/ID02SSDExt/AlsDev/WS-IA/projeto-IA-001/frontend001/build-and-start.bat:0:0-0:0) deve ser executado como administrador para garantir permissões adequadas
- O build de produção está otimizado para produção com minificação e remoção de código não utilizado
- O diretório `dist` contém a versão final para produção do projeto

### Iniciando o Servidor de Produção

Depois de fazer o build, você pode iniciar o servidor de produção de duas maneiras:

1. Usando o arquivo batch:
   - Execute o arquivo [start-dist.bat](cci:7://file:///f:/ID02SSDExt/AlsDev/WS-IA/projeto-IA-001/frontend001/start-dist.bat:0:0-0:0) (duplo clique)
   - O servidor será iniciado em <http://localhost:8080>
2. Manualmente:

   ```bash
   # Navegue para a pasta dist
   cd dist
   
   # Inicie o servidor HTTP
   python -m http.server 8080
   ```

### Observações Importantes

- Certifique-se de ter Python instalado no sistema
- O servidor pode ser parado pressionando Ctrl+C
- O arquivo [start-dist.bat](cci:7://file:///f:/ID02SSDExt/AlsDev/WS-IA/projeto-IA-001/frontend001/start-dist.bat:0:0-0:0) verifica se o diretório dist existe antes de iniciar
- O servidor roda na porta 8080 por padrão
