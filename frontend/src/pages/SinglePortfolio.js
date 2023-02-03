import React from 'react'
import { useParams } from 'react-router-dom'

const SinglePortfolio = () => {
    const { id } = useParams();
    const { loading, error, data } = useFetch("http://localhost:3000/portfolio/" + id)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>

    console.log(data)
    return (
        <>
            <h1>Single Portfolio</h1>
            <h2>{data.data.attributes.title}</h2>
            <p>{data.data.attributes.descritpion}</p>
        </>
    )
    return (
        <div>
            SinglePortfolio
        </div>
    )
}

export default SinglePortfolio
