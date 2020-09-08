import React from 'react'

export const Images = () => {
    let myImages = ['./img/1.jpg','./img/2.jpg','./img/2.jpg']
    return (
        <><img src={myImages[0]} alt="test" /></>
    )
}

export default Images