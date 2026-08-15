### Tecboard

### Conceitos

**Node:** É o **ambiente** que permite que ferramentas JavaScript (como o Vite) rodem no computador, fora do navegador.

**Vite:** É a **ferramenta** que usa o Node.js para criar, configurar e otimizar seu projeto React. Ele transforma o código React (com JSX) em algo que o navegador entende e fornece um servidor de desenvolvimento rápido para codificar.

**Hot Module Replacement:** é uma funcionalidade provida pelo Vite que permite que as alterações feitas no código sejam refletidas imediatamente no navegador, sem a necessidade de recarregar a página. Isso agiliza o processo de desenvolvimento, pois com isso é possível ver as modificações em tempo real.

**pasta public:** funciona como um local para armazenar arquivos estáticos que precisam ser acessados diretamente pelo navegador. É uma pasta onde colocamos coisas que o servidor web (neste caso, o Vite) vai disponibilizar "como estão", sem nenhum processamento adicional. O Vite se encarrega de servir esses arquivos como se estivessem na raiz do servidor web. É conveniente para guardar: imagens, ícones, fontes personalizadas e arquivos que não precisam ser processados pelo React ou pelo Vite, mas que sua aplicação precisa carregar. Ao usar a pasta public, podemos referenciar esses arquivos no código HTML ou JSX usando um caminho que começa com /, como /logo.png ou /banner.png, e o Vite se encarrega de servi-los corretamente.

**arquivo index.css:** é um arquivo onde podemos definir os estilos que afetam a aplicação como um todo, como resetar margens e paddings padrão do navegador, ou definir variáveis CSS globais. Ele é importado e aplicado antes dos estilos específicos de componentes, garantindo que esses estilos globais sejam carregados primeiro.

**jsx:** é uma extensão de sintaxe para JavaScript que permite escrever código com uma aparência muito semelhante ao HTML dentro dos arquivos JavaScript. Isso torna a criação de interfaces de usuário mais intuitiva, pois podemos descrever a estrutura da UI de forma declarativa. O JSX é transformado em chamadas de função JavaScript pelo processo de build (feito pelo Vite, neste caso). Essas funções criam os elementos da interface no navegador. Quando escrevemos <img src="/logo.png" /> é convertido em algo que o navegador entende como um elemento de imagem. Dentro do JSX, podemos usar todo o poder do JavaScript. Por exemplo, podemos incorporar variáveis, expressões e lógica JavaScript diretamente entre chaves {}. Isso permite criar interfaces dinâmicas e reativas.

**Regras do JSX:** Para que o JSX funcione corretamente, precisamos seguir algumas regras essenciais:
1 - Elementos adjacentes no JSX devem estar dentro de uma única tag pai.
2 - Todas as tags precisam ser fechadas, incluindo as tags "órfãs" (como img), ex.: <img src="imagem.png" alt="imagem" />.
3 - Devemos usar camelCase para a maioria dos atributos, como className.
4 - Quando quiser exibir uma variável ou resultado de alguma função dentro do JSX, use chaves:
const nome = 'João'

return <p>Olá, {nome}!</p>
Isso vale pra qualquer expressão JavaScript: chamadas de função, operadores ternários, etc.

**React.Fragment:** (ou sua forma abreviada, <>...</>) é uma solução criada pelo React pra quando você quer retornar múltiplos elementos sem adicionar uma tag extra no HTML gerado. Ele serve pra agrupar elementos no JSX sem interferir no layout final da página."

**componentes:** são blocos de código reutilizáveis. É uma função JavaScript que começa com letra maiúscula (diferente das funções JavaScript comuns que começam com letra minúscula). Neles usamos a sintaxe de JSX. As propriedes utilizadas nas tags HTML são informadas seguindo o padrão camelCase (primeira palavra em minúsculo e as próximas com a primeira letra em maiúsculo) como htmlFor, className, etc,  para evitar conflitos com palavras reservadas do JavaScript.

**React:** é uma biblioteca criada pelo Facebook (agora Meta) em 2013 para construir interfaces de usuário, tanto para web quanto para mobile (com React Native).

**Front-end imperativo:** instruímos o navegador linha por linha sobre o que fazer com cada elemento do DOM, criar, remover, alterar, esconder elementos, etc.

**Front-end declarativo:** declaramos como queremos que um componente seja, e o React se encarrega de transformar essa declaração em algo que o navegador entenda e renderiza, sem que precisemos manipular o DOM diretamente.

**props:** objeto de parâmetros que o React injeta automaticamente nos nossos componentes, que geralmente chamamos de props. Ao passar informações para o componente (seja um texto entre as tags ou atributos como type="text"), o React agrupa todas essas informações em um único objeto e o entrega como o primeiro argumento para a sua função de componente.

<MeuComponente texto="Olá" numero={123}>Conteúdo filho</MeuComponente>

{
  texto: "Olá",
  numero: 123,
  children: "Conteúdo filho"
}

**children:** é utilizado para renderizar conteúdo aninhado dentro de um componente.

**Destructuring:** desestrutura objetos JavaScript para extrair propriedades diretamente dos parâmetros de uma função, como ({ children }) em vez de props.children, tornando o código mais conciso.

**Operator Spread:** usado para passar todas as propriedades recebidas por um componente diretamente para um elemento HTML interno, como return <input {...props} />;, o que simplifica a passagem de muitos atributos. Ele espalha o conteúdo de um array ou as propriedades de um objeto em outro lugar.

**Operador Rest:** (...): Ele junta os elementos restantes em uma variável.

**Boas práticas e organização do projeto:** organizar um projeto React, movendo cada componente para sua própria pasta e arquivo (index.JSX) para a pasta **components** dentro de **src**, exportando-os e ajustando as importações. Isso inclui também a organização dos estilos em arquivos CSS específicos para cada componente, tudo para deixar o código mais limpo e fácil de manter.