import { useEffect, useState } from 'react';
import servicioBanner from '../assets/img/servicios-bg.jpg';




export const ServiciosComponent = ()=> {
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        fetch('../json/servicios.json')
            .then((response) => response.json())
            .then((servicio) => setServicios(servicio))
    }, [])
    return (
        <body>
            <div className='container-fluid text-center'>
                <img className='img-fluid' width={1200} height={300} src={servicioBanner} alt="Servicio banner" />
            </div>
            <div className="container mt-5 servicio">
                <h1 className='text-center'>Servicios:</h1>
                <hr />
                <div>
                    {
                        servicios.map(({ id, image, title, description, price }) => (
                            <div key={id} className="card">
                                <img src={image} className="img-fluid" alt={id} />
                                <div className="card-body">
                                    <h3 className="card-title">{title}</h3>
                                    <p className="card-text">{description}</p>
                                    <p className='card-text'><span>$</span>{price}</p>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>
        </body>
    )
}
