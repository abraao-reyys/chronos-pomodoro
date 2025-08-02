![Favicon do projeto](/public/images/favicon/web-app-manifest-192x192.png)

# Chronos Pomodoro

**Chronos Pomodoro** é uma **SPA (Single Page Application)** desenvolvida com **React + TypeScript + Vite**, que implementa um timer baseado na técnica **Pomodoro**. A aplicação permite ao usuário gerenciar seus ciclos de produtividade, visualizar históricos, configurar os tempos e entender melhor sobre a metodologia.

## Justificativa

> Após desenvolver alguns projetos com Vue.js e Nuxt.js, como o meu [Portfólio 2.0](https://portfolio-profissional-2.netlify.app/) e o [Projeto de Residência I](https://github.com/Gabriellin1227/dubyapp-squad1), notei que no React eu teria maior versatilidade na construção de minhas aplicações, bem como na organização da sua estrutura. Sendo assim, iniciei este projeto para fazer essa transição de tecnologia.

> Confesso que foi um tanto desafiador, mas pude fazer boas comparações com a forma que o Vue trabalha — conhecimento prévio que me ajudou deveras. Acredito que fiz a escolha certa. Por isso, continuarei elevando o nível de dificuldade desses desafios, onde começarei a lidar com Next, Nest, entre outras tecnologias.

## Tecnologias

### Base

* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* HTML5
* CSS3
* JavaScript (ES6+)

### Dependências e ferramentas

* [React Router](https://reactrouter.com/)
* [date-fns](https://date-fns.org/)
* [Lucide React](https://lucide.dev/)
* [React Toastify](https://fkhadra.github.io/react-toastify/)
* [ESLint](https://eslint.org/)

## Links de Produção

| Serviço | URL                                                             |
| ------- | --------------------------------------------------------------- |
| Deploy  | [chronos-timer.netlify.app](https://chronos-timer.netlify.app/) |

## Rotas da Aplicação

| Caminho            | Descrição                                                     |
| ------------------ | ------------------------------------------------------------- |
| `/`                | Página principal com o timer Pomodoro                         |
| `/history/`        | Histórico de ciclos realizados                                |
| `/settings/`       | Configurações dos tempos (Pomodoro, Pausa curta, Pausa longa) |
| `/about-pomodoro/` | Informações sobre a técnica Pomodoro                          |
| `*`                | Rota não encontrada (Not Found)                               |

## Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173/`.

## Funcionalidades

* Timer com contagem para ciclos Pomodoro, pausas curtas e longas
* Histórico dos ciclos realizados
* Configurações de tempo personalizadas
* Feedback visual e sonoro com notificações
* Interface simples e responsiva
* Informações sobre a técnica Pomodoro
* Estado salvo no Local Storage
* Tema escuro/claro

## Possíveis Melhorias Futuras

* Estatísticas de produtividade
* Suporte a múltiplos idiomas

## Autor

[@abraao-reyys](https://github.com/abraao-reyys)

## Licença

Este projeto está licenciado sob a MIT License.
