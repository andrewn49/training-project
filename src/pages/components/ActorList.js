import Card from 'react-bootstrap/Card'
import placeholder from "./placeholder.png"

function ActorList(props) {
    return (
        <div className="cardlist">
            {props.actors.map((actor) => (
                <Card key={actor.actorid} className="card">
                    <Card.Img className="placeholder" src={placeholder} />
                    <Card.Title className="cardtitle">{actor.firstname} {actor.lastname}</Card.Title>
                    <Card.Subtitle className="cardsub">{actor.actorid}</Card.Subtitle>
                    <button className="remove-button">View Films</button>
                </Card>
            ))}
        </div>
    )
}

export default ActorList;