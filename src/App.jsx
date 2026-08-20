import './App.css';
import { useState } from 'react';
import { Banner } from './components/Banner';
import { CardEvent } from './components/CardEvent';
import { FormEvent } from './components/FormEvent';
import { Theme } from './components/Theme';

function App() {
  const themes = [
    {
      id: 1,
      name: 'front-end'
    },
    {
      id: 2,
      name: 'back-end'
    },
    {
      id: 3,
      name: 'devops'
    },
    {
      id: 4,
      name: 'inteligência artificial'
    },
    {
      id: 5,
      name: 'data science'
    },
    {
      id: 6,
      name: 'cloud'
    },
  ];

  const [events, setEvents] = useState([
    {
      cover: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      theme: themes[0],
      date: new Date(),
      title: 'Mulheres no Front',
      description: "Esse evento vai ser dahora",
    }
  ]);

  function addNewEvent(event) {
    setEvents([...events, event]);
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      
      <Banner />
      <FormEvent themes={themes} onSubmit={addNewEvent} />

      <section className='container'>
        {themes.map(function (theme) {
          if (!events.some((event) => {
            return event.theme.id === theme.id;
          })) {
            return null;
          };

          return (
            <section key={theme.id}>
              <Theme theme={theme} />

              <div className="events">
                {events
                  .filter((event) => {
                    return event.theme.id === theme.id
                  })
                  .map((event, index) => {
                    return (
                      <CardEvent event={event} key={index} />
                    );
                  })
                }
              </div>
            </section>
          );
        })}
      </section>
    </main>
  );
}

export default App;
