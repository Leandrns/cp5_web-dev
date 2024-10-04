import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUtensils, faStar, faInfoCircle, faSlidersH } from '@fortawesome/free-solid-svg-icons';
function Diferenciais() {
    const funcionalidades = [
        { icon: faUtensils, text: 'Explore uma variedade de categorias de comida, como vegetarianos, pratos de carne, sobremesas e muito mais.' },
        { icon: faStar, text: 'O aplicativo utiliza algoritmos de aprendizado de máquina para analisar o histórico de pedidos e preferências dos usuários' },
        { icon: faSlidersH, text: 'Ao selecionar um prato, os usuários podem visualizar detalhes como ingredientes, informações nutricionais.' },
        { icon: faInfoCircle, text: 'O aplicativo oferece filtros avançados para que os usuários possam refinar suas buscas por tipo de comida' },
    ];
    return(
        <div className="lista-funcionalidades">
            <h3>Faça seu pedido de forma rápida e fácil!</h3>
            <ul>
                {funcionalidades.map((item, index) => (
                    <li key={index} className="funcionalidade-item">
                        <FontAwesomeIcon icon={item.icon} />
                        <span>{item.text}</span> 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Diferenciais;