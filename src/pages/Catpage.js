import React, { useEffect, useState } from 'react';
import CatList from './components/CatList';

function CatPage() {
    const [cat, setCat] = useState(null)

    useEffect(() => {
        fetch("http://ec2-34-192-43-106.compute-1.amazonaws.com:8080/home/allcategories")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCat(data);
            })
    }, [])

    return (
        <div>
            {cat && <CatList cats={cat} />}
        </div>
    )
}

export default CatPage;