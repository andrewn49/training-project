import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import placeholder from "./placeholder3.png"

function FilmList(props) {
    return (
        <div className="cardlist">
                {props.films.map((film) => (
                    <Card key={film.filmid} className="card">
                        <Card.Img className="placeholder" src={placeholder} />
                        <Card.Title className="cardtitle">{film.title}</Card.Title>
                        <Card.Subtitle className="cardsub">{film.filmid}</Card.Subtitle>
                        <Card.Body className="cardbody">{film.desc}</Card.Body>
                        <div><Link onClick={() => setFilmId(film.filmid)} to="/filmactors" className="remove-button">Actors</Link> <Link onClick={() => setWatched(film.filmid)} className="remove-button">Watched</Link></div>
                    </Card>
                ))}
            </div>
    )
}

export default FilmList;

function setFilmId(filmid){
    sessionStorage.setItem("filmid", filmid);
}

function setWatched(filmid){
    var custid = sessionStorage.getItem("userid")
    fetch('http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/' + custid + '/' + filmid + '/watched', { method: 'POST' })
}