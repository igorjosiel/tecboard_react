import './card-event.styles.css';

export function CardEvent({ event }) {
    return (
        <div className='card-event'>
            <img src={event.cover} alt={event.title}/>
            
            <div className="body">
                <p className="tag">
                    {event.theme.name}
                </p>
                <p className='date'>
                    {event.date.toLocaleDateString('pt-BR')}
                </p>
                <h4 className="title">
                    {event.title}
                </h4>
            </div>
        </div>
    );
}
