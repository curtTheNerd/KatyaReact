import React from 'react'
import Gallery from '../../../Gallery/Gallery'

import img1 from '../../../../Assets/old pics/d/01 chess_players.jpeg'
import thumb1 from '../../../../Assets/old pics/d/01.jpg'
import img2 from '../../../../Assets/old pics/d/02 Posing_for_the_photograph_oil_on_canvas_240_200cm_2019.jpeg'
import thumb2 from '../../../../Assets/old pics/d/02.jpg'


const BeforeMe = () => {

    const images = [
        {
            id: 1,
            thumbnail: thumb1,
            img: img1,
            title: 'Chess Players',
            method: 'Oil on Canvas',
            size: '155 x 200cm',
            year: 2019
        },
        {
            id: 2,
            thumbnail: thumb2,
            img: img2,
            title: 'Posing for a Photograph',
            method: 'Oil on Canvas',
            size: '200 x 240cm',
            year: 2019
        },
    ];

    return (
        <div>
            <div className="content_spacer"></div>

            <h2 className="title">Before Me</h2>
            
            <Gallery images={images} />
        </div>
    )
}

export default BeforeMe