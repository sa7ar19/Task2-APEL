import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

export default function Card(props){
    return(
        <Link to={`/${props.item['id']}`}>
            <div className="border shadow rounded-lg overflow-hidden bg-muted">
                <img  src={props.item['thumb']} alt=""  className="w-full h-full object-center object-cover  aspect-square"/>
                <div className="flex justify-between p-3 align-middle">
                <p>
                    {props.item['title']}
                </p>
                <FaCartPlus />
                </div>
           </div>
        </Link>
    )
}