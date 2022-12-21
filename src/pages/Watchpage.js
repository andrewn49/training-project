import React, { useEffect, useState } from 'react';
import Watchedmovies from './components/Watchedmovies';

const Watchlist = ({ }) => {

    var custid = sessionStorage.getItem("userid")
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch("http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/haswatched/" + custid)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMovie(data);
            })
    }, [])

    return (
        <div>
            {movie && <Watchedmovies films={movie} />}
        </div>
    )
}

export default Watchlist;