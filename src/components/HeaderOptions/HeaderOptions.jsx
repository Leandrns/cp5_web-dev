import './HeaderOptions.css'

export function HeaderOptions() {
    const options = ['Apresentação', 'Funcionalidades', 'Depoimentos', 'Contato']

    return (
        <ul className="header-options">
            {options.map(option => <li>{option}</li>)}
        </ul>
    )
}