import './select-input.styles.css';

export function SelectInput ({ itens, ...rest }) {
    return (
        <select {...rest} className='select-input-form' defaultValue="">
            <option value="" disabled>
                Selecione uma opção
            </option>

            {itens.map(function (item) {
                return <option key={item.id} value={item.id}>
                    {item.nome}
                </option>
            })}
        </select>
    );
}
