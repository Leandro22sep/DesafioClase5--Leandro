const Item = ({producto}) => {
    return(
        <>
            <div>{producto.nombre}</div>
            <div>${producto.precio}</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, velit nisi? Voluptatem quae iste asperiores, voluptate doloribus temporibus placeat deserunt, rem necessitatibus aliquam ex neque maxime eius praesentium quaerat accusamus!</div>
            <div>Stock disponible: {producto.stock}</div>
            <button>Ver detalle</button>
        </>
    )
}
export default Item