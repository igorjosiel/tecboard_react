import './button.styles.css';

export function Button({ children }) {
    return (
        <button className='button'>
            {children}
        </button>
    );
}
