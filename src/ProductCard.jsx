import "./css/ProductCard.css"




const ProductCard = ({title, description, price})  => {
   


    return (
      <div className="product-card">
          <img src="" alt="" className="product-card"/>
          <h4 className="product-card-title"> {title}</h4>
         <p className="product-card-description">{description}</p>
<h5 className="product-card-price">${ (price * 1).toLocaleString()}</h5>

<button className="product-card-btn"> Add to cart</button>
      </div>
    )
}


// const Text = (prop) => {


//     return (
//         <h1>{prop.name}</h1>
//     )
// }


export default ProductCard