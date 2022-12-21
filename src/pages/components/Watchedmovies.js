import Card from 'react-bootstrap/Card'
import placeholder from "./placeholder3.png"

function Watchedmovies(props) {
    if (props.films.length > 0) {
        return (
            <div className="cardlist">
                {props.films.map((film) => (
                    <Card key={film.filmid} className="card">
                        <Card.Img className="placeholder" src={placeholder} />
                        <Card.Title className="cardtitle">{film.title}</Card.Title>
                        <Card.Subtitle className="cardsub">{film.filmid}</Card.Subtitle>
                        <Card.Body className="cardbody">{film.desc}</Card.Body>
                        <button onClick={() => removeEntry(film.filmid)} className="remove-button">Remove</button>
                    </Card>
                ))}
            </div>
        )
    }
    else {
        return (
            <div className="empty-list">
                <h2>You have no watched movies</h2>
            </div>
        )
    }

}

export default Watchedmovies;


function removeEntry(filmid) {
    var custid = sessionStorage.getItem("userid")
    fetch('http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/removewatched/' + custid + '/' + filmid, { method: 'DELETE' })
    window.location.reload();
}

