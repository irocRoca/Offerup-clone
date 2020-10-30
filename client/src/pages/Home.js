import React, { useEffect, useState } from 'react'
import classes from './Home.module.css'
import Card from '../components/Card';
import axios from '../config/axios'
import Container from '../components/Container';

const Home = () => {
    const [page, setPage] = useState(1);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [limit, setLimit] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('/items/', { params: { page }});
            console.log(res)
            if(res.data.length === 0) {
                setLimit(true);
            } else {
                setItems(prev => [...prev, ...res.data])
                setLoading(false);
            }
        }
        if(!limit) {fetchData();}
    }, [page])

    const handleScroll = e => {
        if(!limit){
            const scrolly = window.scrollY - 100 ;
            const scrollTotal = (document.documentElement.scrollHeight - window.innerHeight) - 100
            if(scrollTotal === scrolly){
                setPage(prev => prev + 1);
            }
        }
    };

    return (
        <Container >
        <div className={classes.main}>
            {loading ? <div>Loading...</div> : (
                <>
                {items.map((item, inx) => (<Card key={inx} imgUrl={item.imgUrl} title={item.title} price={item.price} location={item.location}/>))}
                </>)}

      </div>
      </Container>

    )
}

export default Home;


// {data.map((item, inx) => (<Card key={inx} imgUrl={item.imgUrl} title={item.title} price={item.price} location={item.location}/>))}