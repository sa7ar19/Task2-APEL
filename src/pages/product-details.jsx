import { Link, useParams } from "react-router-dom"
import { products } from '../Data/Data';

export default function ProductDetails() {
  const { id }  = useParams();
  
  return (
    <>
       <div className="my-3 flex justify-evenly flex-wrap mx-2 rounded border shadow py-8 text-center" >
          <div>
          <img className="rounded-sm h-80"  src={products.filter(function(item){ 
                    return item['id'] == id;
                  }
                  )[0].thumb} alt="product"/>
          </div>
         <div className="flex flex-col justify-between">
          <div className="flex justify-between gap-20 px-2 py-3">
            <p className="text-2xl">
              {products.filter(function(item){ 
                      return item['id'] == id;
                    }
                    )[0].title}
            </p>
            <p className="text-xl">
              {products.filter(function(item){ 
                      return item['id'] == id;
                    }
                    )[0].price}$
            </p>
         </div>
         <div className="flex justify-between">
            <button className=" bg-slate-900 text-slate-100 p-1 rounded border-slate-500 shadow hover:bg-slate-800 ">Add to Cart</button>
            <Link to='/' className=" bg-slate-900 text-slate-100 p-1 rounded border-slate-500 shadow hover:bg-slate-800 ">Back to Home</Link>
         </div>
          </div>
        </div> 
        
        </>
    )
}