import "./ApresentacaoCard.css"

export function ApresentacaoCard(props) {
    return(
        <div className="cartao">
            <div className="icon"><i class={props.icon}></i></div>
            <p className="description">{props.msg}</p>
        </div>
    )
}