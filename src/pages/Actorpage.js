import React, { useEffect, useState } from 'react';
import ActorList from './components/ActorList';

function ActorPage() {
    const [actor, setActor] = useState(null)

    useEffect(() => {
        fetch("http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/allactors")
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

export default ActorPage;