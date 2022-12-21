import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import placeholder from "./placeholder1.png"

function ActorList(props) {
    return (
        <div className="cardlist">
            {props.actors.map((actor) => (
                <Card key={actor.actorid} className="card">
                    <Card.Img className="placeholder" src={placeholder} />
                    <Card.Title className="cardtitle">{actor.firstname} {actor.lastname}</Card.Title>
                    <Card.Subtitle className="cardsub">{actor.actorid}</Card.Subtitle>
                    <Link onClick={() => setActorId(actor.actorid)} to="/actorfilms" className="remove-button">View Films</Link>
                </Card>
            ))}
        </div>
    )
}

export default ActorList;

function setActorId(actorid){
    sessionStorage.setItem("actorid", actorid)
}