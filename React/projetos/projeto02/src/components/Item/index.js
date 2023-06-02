const Item = ({ children }) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-dark">
        {children}
      </a>
    )
}

export default Item;

// `props.texto` (Props contém um atributo chamado texto., porém neste formato está como String), para isso, adicionamos as {} = `{props.texto}`