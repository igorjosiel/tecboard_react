# 🚀 Tecboard

Projeto desenvolvido com **React** e **Vite**, com o objetivo de praticar conceitos fundamentais do desenvolvimento front-end moderno, incluindo componentes, JSX, props, estados, eventos, manipulação de arrays e organização de projetos React.

---

## 📚 Conceitos

### 🟢 Node.js

**Node.js** é um ambiente de execução que permite executar JavaScript fora do navegador.

Ferramentas de desenvolvimento como o **Vite** utilizam o Node.js para executar processos necessários durante o desenvolvimento e a construção da aplicação.

---

### ⚡ Vite

**Vite** é uma ferramenta de desenvolvimento e build para aplicações web modernas.

Em um projeto React, ele fornece:

* Servidor de desenvolvimento local;
* Atualização rápida durante o desenvolvimento;
* Processamento dos módulos da aplicação;
* Build otimizado para produção.

O Vite utiliza o Node.js para executar essas tarefas no ambiente de desenvolvimento.

---

### 🔥 Hot Module Replacement (HMR)

**Hot Module Replacement (HMR)** permite que alterações feitas no código sejam refletidas no navegador sem a necessidade de recarregar completamente a página.

Isso torna o desenvolvimento mais rápido, pois podemos visualizar as alterações praticamente em tempo real.

O Vite utiliza HMR para proporcionar esse fluxo de desenvolvimento rápido.

---

### 📁 Pasta `public`

A pasta `public` é utilizada para armazenar arquivos estáticos que devem ser disponibilizados diretamente pela aplicação.

Arquivos dentro dela não passam pelo processamento normal dos módulos do Vite.

Exemplo:

```text
public/
├── logo.png
├── favicon.ico
└── imagens/
    └── banner.png
```

Um arquivo localizado em:

```text
public/logo.png
```

pode ser acessado no código através de:

```jsx
<img src="/logo.png" alt="Logo" />
```

É comum utilizar essa pasta para arquivos que precisam manter um caminho público específico.

---

### 🎨 Arquivo `index.css`

O arquivo `index.css` normalmente é utilizado para definir estilos globais da aplicação.

Podemos utilizá-lo para:

* Definir variáveis CSS;
* Criar estilos globais;
* Configurar fontes;
* Aplicar um CSS reset;
* Definir estilos que serão utilizados por toda a aplicação.

Exemplo:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

# ⚛️ React

### React

**React** é uma biblioteca JavaScript criada pelo Facebook (atualmente Meta) para construção de interfaces de usuário.

Seu principal conceito é a criação de interfaces através de **componentes reutilizáveis**.

O React é utilizado principalmente no desenvolvimento de aplicações web. Para aplicações mobile, existe o **React Native**.

---

### 🧩 Componentes

**Componentes** são blocos reutilizáveis da interface.

Em React, normalmente são funções JavaScript que retornam JSX e possuem seu nome iniciado com letra maiúscula.

Exemplo:

```jsx
function Button() {
  return <button>Clique aqui</button>;
}
```

Os componentes permitem dividir uma aplicação em partes menores, facilitando:

* Reutilização;
* Organização;
* Manutenção;
* Separação de responsabilidades.

---

### 📝 JSX

**JSX** é uma extensão de sintaxe do JavaScript que permite escrever uma estrutura semelhante ao HTML dentro do código JavaScript.

Exemplo:

```jsx
function App() {
  return <h1>Hello, World!</h1>;
}
```

O JSX não é interpretado diretamente pelo navegador. Durante o processo de build, ele é transformado em JavaScript.

O JSX também permite utilizar expressões JavaScript dentro de `{}`:

```jsx
const nome = "João";

return <p>Olá, {nome}!</p>;
```

---

## 📐 Regras do JSX

### 1. Um único elemento raiz

Elementos adjacentes precisam estar dentro de um único elemento pai ou de um `Fragment`.

```jsx
return (
  <div>
    <h1>Título</h1>
    <p>Descrição</p>
  </div>
);
```

---

### 2. Todas as tags devem ser fechadas

Tags que não possuem conteúdo também precisam ser fechadas.

```jsx
<img src="/imagem.png" alt="Imagem" />
```

---

### 3. Atributos seguem convenções do JavaScript

Grande parte dos atributos utiliza `camelCase`.

Por exemplo:

```jsx
<button className="button">
  Clique
</button>
```

Em vez de:

```jsx
<button class="button">
  Clique
</button>
```

---

### 4. Expressões JavaScript utilizam `{}`

```jsx
const nome = "João";

return <p>Olá, {nome}!</p>;
```

Podemos utilizar variáveis, chamadas de funções, operadores e outras expressões:

```jsx
<p>{nome}</p>

<p>{formatarData(data)}</p>

<p>{1 + 2}</p>

<p>{estaLogado ? "Sair" : "Entrar"}</p>

<p>{pessoa.nome}</p>
```

Estruturas de controle como `if`, `for` e `while` não podem ser colocadas diretamente dentro de `{}` no JSX.

---

### 🧱 React Fragment

O **React Fragment** permite agrupar múltiplos elementos sem adicionar um elemento extra ao DOM.

Podemos utilizar:

```jsx
<React.Fragment>
  <h1>Título</h1>
  <p>Descrição</p>
</React.Fragment>
```

Ou sua forma abreviada:

```jsx
<>
  <h1>Título</h1>
  <p>Descrição</p>
</>
```

---

# 📦 Props

### Props

**Props** são informações passadas de um componente pai para um componente filho.

Elas são recebidas pelo componente através de um objeto.

Exemplo:

```jsx
<MeuComponente texto="Olá" numero={123}>
  Conteúdo filho
</MeuComponente>
```

O componente recebe essas informações através das props:

```jsx
function MeuComponente(props) {
  console.log(props);
}
```

O objeto recebido será equivalente a:

```js
{
  texto: "Olá",
  numero: 123,
  children: "Conteúdo filho"
}
```

---

### Children

`children` é uma prop especial utilizada para representar o conteúdo colocado entre a abertura e o fechamento de um componente.

```jsx
<MeuComponente>
  Conteúdo filho
</MeuComponente>
```

Pode ser acessado através de:

```jsx
function MeuComponente({ children }) {
  return <div>{children}</div>;
}
```

---

### Destructuring

**Destructuring** é um recurso do JavaScript que permite extrair propriedades de objetos ou elementos de arrays.

Em componentes React, podemos utilizá-lo diretamente nos parâmetros:

```jsx
function MeuComponente({ children, texto }) {
  return (
    <div>
      <p>{texto}</p>
      {children}
    </div>
  );
}
```

Em vez de:

```jsx
function MeuComponente(props) {
  return (
    <div>
      <p>{props.texto}</p>
      {props.children}
    </div>
  );
}
```

---

### Spread Operator

O **Spread Operator (`...`)** permite espalhar as propriedades de um objeto ou os elementos de um array.

Em React, pode ser utilizado para repassar várias props para outro elemento:

```jsx
function Input(props) {
  return <input {...props} />;
}
```

Assim, propriedades como `type`, `placeholder`, `value` e `onChange` podem ser repassadas diretamente.

---

### Rest Operator

O **Rest Operator (`...`)** permite agrupar os elementos restantes em uma variável.

Exemplo:

```jsx
const { nome, ...outrasInformacoes } = usuario;
```

Nesse caso:

* `nome` recebe a propriedade `nome`;
* `outrasInformacoes` recebe todas as propriedades restantes.

Apesar de utilizarem a mesma sintaxe `...`, **Spread e Rest possuem funções diferentes dependendo do contexto**.

---

# 🖥️ Paradigmas de desenvolvimento

### Front-end imperativo

No desenvolvimento imperativo, descrevemos **como** uma tarefa deve ser executada.

Por exemplo, podemos instruir diretamente o navegador a:

* Criar elementos;
* Remover elementos;
* Alterar elementos;
* Esconder elementos;
* Modificar conteúdos.

Isso normalmente envolve manipulação direta do DOM.

---

### Front-end declarativo

No desenvolvimento declarativo, descrevemos **o que queremos que a interface represente**.

O React utiliza esse paradigma para determinar como a interface deve ser atualizada a partir dos dados e estados atuais.

Em vez de manipular o DOM diretamente, descrevemos a interface:

```jsx
return <h1>{nome}</h1>;
```

O React se encarrega de atualizar o DOM de acordo com essa descrição.

---

# 🌳 DOM e Renderização

### React.createElement

Antes da transformação do JSX, podemos representar um elemento React utilizando `React.createElement()`.

Por exemplo:

```jsx
<h2>Hello, World!</h2>
```

pode ser representado conceitualmente como:

```js
React.createElement("h2", null, "Hello, World!");
```

Atualmente, os projetos React modernos utilizam transformações de JSX que podem gerar chamadas diferentes internamente, portanto essa comparação deve ser entendida principalmente como uma forma de compreender a relação entre JSX e elementos React.

---

### Virtual DOM

O **Virtual DOM** é uma representação em memória da estrutura da interface.

Quando o estado ou as props de um componente mudam, o React pode gerar uma nova representação da interface e compará-la com a anterior.

Esse processo faz parte da **reconciliação**.

A partir dessa comparação, o React determina quais alterações precisam ser aplicadas ao DOM real.

> O Virtual DOM não significa que o React simplesmente "renderiza a página inteira novamente". O React utiliza seu processo de reconciliação para determinar quais partes da interface precisam ser atualizadas.

---

# 🔄 Arrays e Renderização

### Método `map()`

O método `map()` cria um novo array a partir dos elementos de outro array.

Ele é muito utilizado no React para transformar dados em elementos JSX.

```jsx
const eventos = [
  { id: 1, nome: "Evento A" },
  { id: 2, nome: "Evento B" }
];

return (
  <div>
    {eventos.map(evento => (
      <p key={evento.id}>
        {evento.nome}
      </p>
    ))}
  </div>
);
```

---

### Método `forEach()`

O método `forEach()` executa uma função para cada elemento do array, mas **não retorna um novo array**.

Por isso, normalmente utilizamos `map()` quando queremos transformar elementos de um array em JSX.

---

### Propriedade `key`

A propriedade `key` ajuda o React a identificar cada elemento de uma lista durante o processo de reconciliação.

Exemplo:

```jsx
{eventos.map(evento => (
  <div key={evento.id}>
    {evento.nome}
  </div>
))}
```

A `key` deve ser:

* Única entre os elementos daquela lista;
* Estável;
* Preferencialmente baseada em um identificador real do item.

Evite utilizar o índice do array como `key` quando os elementos podem ser adicionados, removidos ou reordenados.

---

### Método `filter()`

O método `filter()` cria um novo array contendo apenas os elementos que passam em determinada condição.

Ele não modifica o array original.

```jsx
const eventosFiltrados = eventos.filter(evento => {
  return evento.tema.id === tema.id;
});
```

Se a condição for verdadeira, o elemento entra no novo array.

Se for falsa, o elemento é descartado.

---

### Método `some()`

O método `some()` verifica se **pelo menos um elemento** do array atende a determinada condição.

Ele retorna:

* `true` se encontrar um elemento que satisfaça a condição;
* `false` caso nenhum elemento satisfaça a condição.

```jsx
const possuiEvento = eventos.some(evento => {
  return evento.tema.id === tema.id;
});
```

O método interrompe a iteração assim que encontra um elemento que satisfaz a condição.

---

### Método `find()`

O método `find()` procura o **primeiro elemento** de um array que satisfaça determinada condição.

```jsx
const evento = eventos.find(evento => {
  return evento.id === id;
});
```

Se encontrar um elemento, ele será retornado.

Caso nenhum elemento satisfaça a condição, o resultado será:

```js
undefined
```

---

# 📝 Formulários e Eventos

### `event.preventDefault()`

`event.preventDefault()` impede a execução do comportamento padrão de um evento.

Em formulários, é comum utilizá-lo para impedir que o navegador recarregue a página após o envio:

```jsx
function handleSubmit(event) {
  event.preventDefault();

  // Processamento do formulário
}
```

---

### `FormData`

`FormData` é uma API do JavaScript utilizada para trabalhar com dados de formulários.

Podemos criar uma instância passando o formulário:

```jsx
const formData = new FormData(event.target);
```

Depois podemos acessar os valores utilizando o atributo `name` dos campos:

```jsx
const nome = formData.get("nome");
```

Exemplo:

```jsx
<input name="nome" />
```

Nesse caso:

```js
formData.get("nome");
```

retorna o valor preenchido nesse campo.

---

### Input controlado

Um **input controlado** é um campo cujo valor é controlado pelo estado do React.

Exemplo:

```jsx
const [nome, setNome] = useState("");

return (
  <input
    value={nome}
    onChange={event => setNome(event.target.value)}
  />
);
```

Nesse modelo:

* `value` recebe o valor atual do estado;
* `onChange` atualiza o estado;
* O estado passa a ser a fonte de verdade do input.

---

### `onChange`

`onChange` é utilizado para responder às alterações realizadas em um campo de formulário.

Em um input controlado, normalmente utilizamos esse evento para atualizar o estado:

```jsx
onChange={event => setNome(event.target.value)}
```

---

### `onSubmit`

`onSubmit` é acionado quando um formulário é enviado.

Exemplo:

```jsx
<form onSubmit={handleSubmit}>
  <input name="nome" />
  <button type="submit">Enviar</button>
</form>
```

Podemos utilizar `event.preventDefault()` dentro da função para impedir o comportamento padrão do navegador.

---

# 🔄 Estado e Imutabilidade

### Estados

**Estado** representa informações que podem mudar durante a execução de um componente.

No React, podemos criar um estado utilizando `useState`:

```jsx
const [eventos, setEventos] = useState([]);
```

O `useState` retorna um array com duas posições:

1. O valor atual do estado;
2. Uma função utilizada para atualizar esse estado.

Por exemplo:

```jsx
const [nome, setNome] = useState("");
```

* `nome` → valor atual;
* `setNome` → função responsável por atualizar o estado.

Quando o estado é atualizado, o React pode renderizar novamente o componente para refletir o novo valor na interface.

---

### Imutabilidade

No React, devemos evitar modificar diretamente os valores armazenados no estado.

Por exemplo, não devemos fazer:

```jsx
eventos.push(novoEvento);
```

Em vez disso, devemos criar um novo array:

```jsx
setEventos([
  ...eventos,
  novoEvento
]);
```

O **Spread Operator** copia os elementos existentes para um novo array, permitindo adicionar o novo elemento sem modificar diretamente o estado anterior.

---

# 📂 Organização do projeto

Uma boa organização facilita a manutenção e a evolução da aplicação.

Uma estrutura possível para componentes React é:

```text
src/
├── components/
│   ├── Button/
│   │   ├── index.jsx
│   │   └── styles.css
│   │
│   └── Input/
│       ├── index.jsx
│       └── styles.css
│
├── App.jsx
├── index.css
└── main.jsx
```

Separar componentes em seus próprios arquivos permite:

* Melhor organização;
* Reutilização;
* Manutenção mais simples;
* Separação de responsabilidades;
* Maior legibilidade.

---

# 🛠️ Scripts do projeto

### `npm run dev`

Inicia o servidor de desenvolvimento do Vite.

```bash
npm run dev
```

É utilizado durante o desenvolvimento local da aplicação.

---

### `npm run build`

Cria uma versão otimizada da aplicação para produção.

```bash
npm run build
```

O Vite processa e otimiza os arquivos necessários e normalmente gera o resultado final dentro da pasta:

```text
dist/
```

Essa versão é destinada a ser disponibilizada em um ambiente de produção.

---

## 📌 Observações

Este README também funciona como um **material de estudo**, reunindo conceitos aprendidos durante o desenvolvimento do projeto.

A documentação poderá ser posteriormente dividida em arquivos específicos conforme a quantidade de conteúdo crescer.

---

## 🚀 Tecnologias

* ⚛️ React
* ⚡ Vite
* 🟨 JavaScript
* 🎨 CSS
* 📦 Node.js
* 📦 npm
