import { FormInput } from "../FormInput";
import { FormField } from "../FormField";
import { Label } from "../Label";
import { FormTitle } from "../FormTitle";
import { Button } from '../Button';
import { SelectInput } from '../SelectInput';

import './form-event.styles.css';

export function FormEvent ({ themes }) {
  function handleSubmittedForm(formData) {
    const event = {
      cover: formData.get('eventCover'),
      theme: themes.find(function (item) {
        return item.id == formData.get('eventTheme')
      }),
      date: new Date(formData.get('eventDate')),
      title: formData.get('eventName')
    }

    console.log('Esse é o novo evento: ', event);
    // aoSubmeter(evento);
  }

    return (
      <form className="form-event" action={handleSubmittedForm}>
        <FormTitle>
          Preencha para criar um evento:
        </FormTitle>

        <div className="campos">
          <FormField>
            <Label htmlFor="eventName">
              Qual o nome do evento?
            </Label>
            <FormInput
              type="text"
              id='eventName'
              placeholder='Summer dev hits'
              name='eventName'
            />
          </FormField>

          <FormField>
            <Label htmlFor="eventCover">
              Qual o endereço da imagem de capa?
            </Label>
            <FormInput
              type="text"
              id='eventCover'
              placeholder='http://...'
              name='eventCover'
            />
          </FormField>

          <FormField>
            <Label htmlFor="eventDate">
              Data do evento
            </Label>
            <FormInput
              type="date"
              id='eventDate'
              name='eventDate'
            />
          </FormField>

          <FormField>
            <Label htmlFor="eventTheme">
              Tema do evento
            </Label>

            <SelectInput id="eventTheme" name="eventTheme" itens={themes} />
          </FormField>
        </div>

        <div className='actions'>
          <Button>
            Criar evento
          </Button>
        </div>
      </form>
    );
}
