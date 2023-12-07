import { products } from "../Data/Data";
import Card from "../components/Card";


export default function Home() {
    return (  
          <>
    
     <main>
      <div className="container">
        
        <h1 className=" font-bold text-slate-700 text-2xl my-4 mx-1">All Products</h1>
        <div className="grid grid-cols-4 gap-5">
          {products.map( (item, i) => (
          <div  key={item.id}>
            <Card item={item}/>
          </div>
          )
          )}
        </div>
      </div>
     </main>
     </>
    )
}