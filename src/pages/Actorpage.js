import React, { useEffect, useState } from 'react';
import ActorList from './ActorList';

function ActorPage() {
    const [actor, setActor] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/home/allactors")
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setActor(data);
            })
    }, [])

    return (
        <div>
            {actor && <ActorList actors={actor} />}
        </div>
    )
}

export default ActorPage;