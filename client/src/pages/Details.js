import React from 'react'
import ImageSlide from '../components/ImageSlide'
import Container from '../components/Container'
import ItemDetails from '../components/ItemDetails'

const Details = () => {
    return (
        <div>
            <ImageSlide />
            <Container>
            <ItemDetails />
            </Container>
        </div>
    )
}

export default Details;
