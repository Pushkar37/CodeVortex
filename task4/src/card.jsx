import Image from "./Image";
import "./card.css"
function Card({titile,desc,url}){
    return(
        <div className="card">
             <Image url={url}/>
             <h2>{titile}</h2>
             <h4>{desc}</h4>
        </div>
    );
}
export default Card;