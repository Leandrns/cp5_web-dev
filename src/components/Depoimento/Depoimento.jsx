import "./Depoimento.css"

export function Depoimento(props) {
    return (
        <div className="depoimento">
            <img src={props.img} class="img" alt="" />
            <div className="stars">
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
            </div>
            <div className="texto">
                <p className="comentario">{props.msg}</p>
                <p className="comentario">{props.autor}</p>
            </div>
        </div>
    )
}