import { useEffect, useState } from 'react'
import ProductoBanner from '../assets/img/product-bg.jpg'
import Productos from '../json/productos.json'
import './ProductosComponent.css'

export const ProductosComponent = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(Productos)
    }, [])
    return (
        <body>
            <div className='container-fluid text-center'>
                <img className='img-fluid' width={1200} height={300} src={ProductoBanner} alt="Producto banner" />
            </div>
            <div className="container mt-5 producto">
                <h1 className='text-center'>Productos:</h1>
                <hr />
                <div className='product'>
                    {
                        productos.map((producto) => (
                            <div key={producto.id} className="product__content">
                                <div className="product__section">
                                    <img src={producto.image} className="product__img" alt={producto.id} />
                                    <div className="product__body">
                                        <h3 className="product__family">{producto.family}</h3>
                                        <p className="product__title">{producto.title}</p>
                                        <p className='product__price'><span>$</span>{producto.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </body>
    )

}

