import './card-event.styles.css';

export function CardEvent({ evento }) {
    return (
        <div className='card-event'>
            <img src={evento.cover} alt={evento.title}/>
            
            <div className="body">
                <p className="tag">
                    {evento.theme.nome}
                </p>
                <p className='date'>
                    {evento.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="title">
                    {evento.title}
                </h4>
            </div>
        </div>
    );
}
