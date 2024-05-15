

export const ProductosCard = ({producto}) => {
const { id, image, title, family, price } = producto
  
  return (
    <div key={id} className="card">
      <img src={image} className="img-fluid" alt={id} />
      <div className="card-body">
        <h3 className="card-family">{family}</h3>
        <p className="card-title">{title}</p>
        <p className='card-price'><span>$</span>{price}</p>
      </div>
    </div>
  )
}