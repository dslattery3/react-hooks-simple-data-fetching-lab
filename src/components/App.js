import React, { useState, useEffect } from "react";

function App(){
    const [imgSource, setImgSource] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r=>r.json())
            .then(data => setImgSource(data.message))
    }, [])

    if (imgSource === ''){
        return <p>Loading...</p>
    }

    return <img src = {imgSource} alt ={imgSource} />
}

export default App