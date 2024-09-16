import Card from "./card";
import "./cards.css"
function Cards({titile,desc,url}){
    return(
        <div className="cards"> 
            <Card titile={titile[0]} desc={desc[0]} url={url[0]["apj"]}></Card>
            <Card titile={titile[1]} desc={desc[1]} url={url[1]["apj3"]}></Card>
            <Card titile={titile[2]} desc={desc[2]} url={url[2]["apj2"]}></Card>
        </div>

    );
}
export default Cards;