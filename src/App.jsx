import './App.css'
import { Banner } from './components/Banner';
import { CardEvent } from './components/CardEvent';
import { FormEvent } from './components/FormEvent';
import { Theme } from './components/Theme';

function App() {
  const themes = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial`'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ];

  const eventos = [
    {
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Mulheres no Front'
    }
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormEvent themes={themes} />

      {themes.map(function (item) {
        return (
          <section key={item.id}>
            <Theme tema={item} />
            <CardEvent evento={eventos[0]}/>
          </section>
        )
      })}
    </main>
  );
}

export default App;
