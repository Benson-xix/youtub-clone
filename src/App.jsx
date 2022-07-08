
import ProductCard from "./ProductCard"
import JokesCard from "./JokesCard"
import { productionItems } from "./data/index"
import {jokes} from "./data/index"
import "./css/App.css"


const App = () => {

// const items = [
//   { name: "React js", price:1000, id:"item-0"},

//   { name: "Node js", price:5000, id:"item-1"},

//   {name: "React native", price: 1000, id:"item-2"},
// ]



  return (
    
  <div className="product-wrapper">
      <h1 className="page-title">Products</h1>

      <div className="product-container"> 
      {
       productionItems.map(item => (
        <ProductCard {...item} key={item.id} />
      ))
      }

      </div> 
       
    
      {/* <Text {...obj}  /> */}

      <div className="joke-title">
<h1 className="joke-title">Jokes</h1>
       


<div className="joke-container">
  {
    jokes.map(jokes => (
      <JokesCard {...jokes} key={jokes.id}/>
    )
    )
  }
</div>
      </div>

  </div>
  )





  
}

export default App
