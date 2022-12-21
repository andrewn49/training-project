import React, { useEffect, useState } from 'react';
import ActorList from './components/ActorList';

function FilmActorPage() {

    var selfilm = sessionStorage.getItem("filmid")
    const [actor, setActor] = useState(null)

    useEffect(() => {
        fetch("http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/actorsinfilm/" + selfilm)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setActor(data);
            })
    }, [])

    return (
        <div>
            {actor && <ActorList actors={actor} />}
        </div>
    )
}

export default FilmActorPage;