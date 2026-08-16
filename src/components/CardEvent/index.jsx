import './card-event.styles.css';

export function CardEvent({ evento }) {
    return (
        <div className='card-event'>
            <img src={evento.capa} alt={evento.titulo}/>
            
            <div className="body">
                <p className="tag">
                    {evento.tema.nome}
                </p>
                <p className='date'>
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="title">
                    {evento.titulo}
                </h4>
            </div>
        </div>
    );
}
