import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const SinglePortfolio = () => {
    const { id } = useParams();
    const {loading, error, data} = useFetch('http://localhost:1337/api/portfolios/' + id + '?populate=image')

    if (loading) return <div>Loading...</div>
    if (error) return <div>Errorxdf...</div>

    
    console.log("dsd",data)
    console.log(`http://localhost:1337${data.data.attributes.image.data.attributes.url}`)
    return (
        <>
        <h1>SinglePortfolio</h1>
        <h2>{data.data.attributes.title}</h2>
        <img src={`http://localhost:1337${data.data.attributes.image.data.attributes.url}`}/>
        <span>{data.data.attributes.date}</span>
        <p>{data.data.attributes.description}</p>
        </>
    )
}

export default SinglePortfolio
