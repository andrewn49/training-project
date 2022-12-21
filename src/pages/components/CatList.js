import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import placeholder from "./placeholder2.png"

function CatList(props) {
    return (
        <div className="cardlist">
                {props.cats.map((cat) => (
                    <Card key={cat.categoryid} className="card">
                        <Card.Img className="placeholder" src={placeholder} />
                        <Card.Title className="cardtitle">{cat.catname}</Card.Title>
                        <Card.Subtitle className="cardsub">{cat.categoryid}</Card.Subtitle>
                        <Link onClick={() => setCatName(cat.catname)} to="/catfilms" className="remove-button">Films</Link>
                    </Card>
                ))}
            </div>
    )
}

export default CatList;

function setCatName(catname){
    sessionStorage.setItem("catname", catname)
}