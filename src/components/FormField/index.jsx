import './form-field.styles.css';

export function FormField({ children }) {
  return (
    <fieldset className='form-field'>
      {children}
    </fieldset>
  );
}
