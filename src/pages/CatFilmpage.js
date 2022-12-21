import React, { useEffect, useState } from 'react';
import FilmList from './components/FilmList';

function CatFilmPage() {
    var catname = sessionStorage.getItem("catname")
    const [film, setFilm] = useState(null)

    useEffect(() => {
        fetch("http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/filmsofcat/" + catname)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFilm(data);
            })
    }, [])

    return (
        <div>
            {film && <FilmList films={film} />}
        </div>
    )
}

export default CatFilmPage;