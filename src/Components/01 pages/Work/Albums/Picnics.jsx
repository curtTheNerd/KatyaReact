import React from 'react'
import Gallery from '../../../Gallery/Gallery'
import { picnics as images } from '../../../02 constants/Data'

const Picnics = () => {
    return (
        <div>
            <h2 className="albumTitle">{images[0].title}</h2>
            <Gallery images={images} />
        </div>
    )
}

export default Picnics