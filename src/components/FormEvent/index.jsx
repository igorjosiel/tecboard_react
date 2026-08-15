import { FormInput } from "../FormInput";
import { FormField } from "../FormField";
import { Label } from "../Label";
import { FormTitle } from "../FormTitle";
import { Button } from '../Button';
import { SelectInput } from '../SelectInput';

import './form-event.styles.css';

export function FormEvent () {
    return (
      <form className="form-event">
        <FormTitle>
          Preencha para criar um evento:
        </FormTitle>

        <div className="campos">
          <FormField>
            <Label htmlFor="nomeEvento">
              Qual o nome do evento?
            </Label>
            <FormInput
              type="text"
              id='nomeEvento'
              placeholder='Summer dev hits'
              name='nomeEvento'
            />
          </FormField>

          <FormField>
            <Label htmlFor="dataEvento">
              Data do evento
            </Label>
            <FormInput
              type="date"
              id='dataEvento'
              name='dataEvento'
            />
          </FormField>

          <FormField>
            <Label htmlFor="dataEvento">
              Data do evento
            </Label>

            <SelectInput />
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
