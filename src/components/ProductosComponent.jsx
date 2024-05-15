import { useEffect, useState } from 'react'
import ProductoBanner from '../assets/img/product-bg.jpg'
import Productos from '../json/productos.json'

export const ProductosComponent = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        fetch(Productos)
            .then(response => response.json())
            .then((producto) => setProductos(producto))
    }, [])
    return (
        <body>
            <div className='container-fluid'>
                <img className='img-fluid d-block mx-auto' width={1200} height={300} src={ProductoBanner} alt="Producto banner" />
            </div>
            <div className="container mt-5 producto">
                <h1 className='text-center'>Productos:</h1>
                <hr />
                <div>
                    {
                        productos.map(({ id, image, title, family, price }) => (
                            <div key={id} className="card">
                                <img src={image} className="img-fluid" alt={id} />
                                <div className="card-body">
                                    <h3 className="card-title">{family}</h3>
                                    <p className="card-title">{title}</p>
                                    <p className='card-description'><span>$</span>{price}</p>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>
        </body>
    )
}
