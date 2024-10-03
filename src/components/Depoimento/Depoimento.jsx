import "./Depoimento.css"

export function Depoimento(props) {
    return (
        <div className="depoimento">
            <img src={props.img} class="" alt="" />
            <div className="stars">
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
                <i class="fa-solid fa-star estrela"></i>
            </div>
            <p className="comentario">{props.msg}</p>
        </div>
    )
}