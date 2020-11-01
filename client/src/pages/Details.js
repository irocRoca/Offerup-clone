import React from 'react'
import ImageSlide from '../components/ImageSlide/ImageSlide'
import Container from '../components/Container/Container'
import ItemDetails from '../components/ItemDetails/ItemDetails'

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
