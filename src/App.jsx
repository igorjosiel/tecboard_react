import './App.css'
import { Banner } from './components/Banner';
import { CardEvent } from './components/CardEvent';
import { FormEvent } from './components/FormEvent';
import { Theme } from './components/Theme';

function App() {
  const temas = [
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
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormEvent />

      {temas.map(function (item) {
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
